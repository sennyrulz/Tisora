import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Card } from 'react-bootstrap';
import cardImg from '../assets/model.jpg';
import { productsData } from "../components/productsData"; 

// Card Component
const ProductCard = ({ id, name, price }) => {
  return (
    <div className="singleCard p-3 px-3 border border-1 mx-3 shadow-sm w-100">
      <div className="bg-secondary" style={{ height: '400px' }}>
        <img src={cardImg} alt={name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
      </div>

      <div className="text-start">
        <h5 className="mt-3">{name}</h5>
        <p className="fw-bold text-success">₦{price}</p>
        <button className="Btn-Option bg-black text-white p-2 px-5 border w-100 hover:bg-white hover:text-black transition-all duration-300">
          Choose Options
        </button>
      </div>
    </div>
  );
};

const Shop = () => {
  const [sort, setSort] = useState('low-to-high');

  // ✅ Reset sorting when component mounts
  useEffect(() => {
    setSort('low-to-high');
  }, []);

  // ✅ FIX: Sort dynamically in render, without modifying state
  const sortedProducts = [...productsData].sort((a, b) => 
    sort === 'low-to-high' ? a.price - b.price : b.price - a.price
  );

  return (
    <Container className='mt-5 py-4'>
      <Row className="g-4 justify-content-center">
        <Col md={6} className='d-flex flex-column'>
          <h3 className='fw-medium mt-5' style={{ marginRight: '26rem' }}>Product</h3>
          <div className='d-flex align-items-center gap-2' style={{ marginTop: '-30px' }}>
            <p className='text-muted mb-0'>Sort by:</p>
            <Form.Select
              className='mx-2 my-5'
              onChange={(e) => setSort(e.target.value)}
              value={sort}
              style={{ maxWidth: '200px' }}>
              <option value='low-to-high'>Price, (Min price)</option>
              <option value='high-to-low'>Price, (Max price)</option>
            </Form.Select>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        {sortedProducts.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} xs={12}>
            <ProductCard id={product.id} name={product.name} price={product.price} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
