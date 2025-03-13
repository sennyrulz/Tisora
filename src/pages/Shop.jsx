import React, { useState } from 'react';
import { Col, Container, Row, Form, Card } from 'react-bootstrap';
import cardImg from '../assets/model.jpg';

// Sample product data
const productsData = [
  { id: 1, name: 'Product A', price: 25000 },
  { id: 2, name: 'Product B', price: 45000 },
  { id: 3, name: 'Product C', price: 15000 },
  { id: 4, name: 'Product D', price: 60000 }
];

// Card Component
const ProductCard = ({ name, price }) => {
  return (
    <Card className="shadow-sm border-0 w-100">
      {/* Image Container */}
      <div className="bg-secondary" style={{ height: '400px' }}>
        <img src={cardImg} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
      </div>

      {/* Product Details */}
      <Card.Body className="text-center">
        <h5 className="mt-3">{name}</h5>
        <p className="fw-bold text-success">₦{price}</p>
        <button className="btn btn-dark w-100">Choose Options</button>
      </Card.Body>
    </Card>
  );
};

const Shop = () => {
  const [sort, setSort] = useState('low-to-high');
  const [products, setProducts] = useState(productsData);

  // Sorting Function
  const handleSort = (order) => {
    setSort(order);
    const sortedProducts = [...products].sort((a, b) => 
      order === 'low-to-high' ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  return (
    <Container className='mt-5 py-4'>
      {/* Header & Sorting */}
      <Row>
        <Col md={6} className='d-flex flex-column'>
          <h3 className='fw-medium mt-5' style={{ marginRight: '26rem' }}>PRODUCTS</h3>
          <div className='d-flex align-items-center gap-2' style={{ marginTop: '-30px' }}>
            <p className='text-muted mb-0'>Sort by:</p>
            <Form.Select
              className='mx-2 my-5'
              onChange={(e) => handleSort(e.target.value)}
              value={sort}
              style={{ maxWidth: '200px' }}
            >
              <option value='low-to-high'>Price, (Min price)</option>
              <option value='high-to-low'>Price, (Max price)</option>
            </Form.Select>
          </div>
        </Col>
      </Row>

      {/* Product Grid */}
      <Row className="g-4"> {/* Adds spacing between columns */}
        {products.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} xs={12}>
            <ProductCard {...product} />
          </Col>
          
        ))}
      </Row>

      <Row className="g-4 mt-5"> {/* Adds spacing between columns and margin-top */}
        {products.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} xs={12}>
            <ProductCard {...product} />
          </Col>
          
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
