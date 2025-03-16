import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { productsData } from '../components/productsData';
import ProductCard from '../components/ProductCard';


const Shop = () => {
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState('low-to-high');

  useEffect(() => {
    setSort('low-to-high');
  }, []);

  const addToCart = (product) => {
    if (!product) return;
    setCart((prevCart) => [...prevCart, product]);
    console.log("✅ Added to Cart:", product);
  };

  const sortedProducts = [...productsData].sort((a, b) => 
    sort === 'low-to-high' ? a.price - b.price : b.price - a.price
  );

  return (
    <Container className='mt-5 py-4'>
      <Row className="g-4 justify-content-center">
        <Col md={6} className='d-flex flex-column'>
          <h3 className='fw-medium mt-5'>Products</h3>
          <div className='d-flex align-items-center gap-2'>
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
            <ProductCard 
              id={product.id} 
              img={product.img} 
              name={product.name} 
              price={product.price} 
              addToCart={addToCart} // ✅ Pass addToCart here
            />
          </Col>
        ))}
      </Row>

      {/* ✅ Ensure ScrollCards receives addToCart */}
      {/* <ScrollCards products={productsData} addToCart={addToCart} /> */}
    </Container>
  );
};

export default Shop;
