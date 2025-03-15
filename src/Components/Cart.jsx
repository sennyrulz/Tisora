import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

// Sample cart items (set to [] for empty cart)
const cartItems = []; // Change this to [] to test empty cart state

// Function to calculate total price
const calculateTotal = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

const Cart = () => {
  return (
    <main className="my-4 pt-5 w-90 mx-auto">
      <Container className="mt-5">
        {cartItems.length === 0 && (
          // Empty Cart Message (Only shows when cart is empty)
          <div id="empty-block" className="mx-auto text-center" style={{ maxWidth: '600px' }}>
            <h1 className="fw-normal">Your cart is empty</h1>
            <div className="mt-4 mb-5 d-flex justify-content-center">
              <Button href="/shop" variant="dark" className="px-4 py-3 w-100 discover_button" style={{ maxWidth: '200px' }}>
                Continue Shopping
              </Button>
            </div>
          </div>
        )}

        {/* Cart Structure (Always Visible) */}
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fw-normal">Your cart</h1>
          <a href="/shop" className="text-decoration-underline">Continue shopping</a>
        </div>

        {/* Cart Headings */}
        <Row className="d-flex justify-content-between align-items-center g-4">
          <Col xs={6} className='text-start mt-5'><p>Product</p></Col>
          <Col xs={3} className="d-none d-sm-block mt-5"><p>Quantity</p></Col>
          <Col xs={3} className='text-end mt-5'><p>Total</p></Col>
        </Row>

        <hr className="mt-5" />

        {/* Cart Items (Will be empty if cart is empty) */}
        <div id="cart-container">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Row key={item.id} className="align-items-center py-3 border-bottom">
                <Col xs={6} className="d-flex align-items-center">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="me-3" />
                  <p className="m-0">{item.name}</p>
                </Col>
                <Col xs={3} className="d-none d-sm-block">
                  <p className="m-0">{item.quantity}</p>
                </Col>
                <Col xs={3}>
                  <p className="m-0">₦{(item.price * item.quantity).toLocaleString()} NGN</p>
                </Col>
              </Row>
            ))
          ) : (
            <p className="text-center py-5">No items in your cart</p>
          )}
        </div>

        {/* Checkout Section (Always Visible) */}
        <div className="d-flex justify-content-center justify-content-sm-end my-5 w-100">
          <div id="second-block" className="text-end">
            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p id="Subtotal">₦{calculateTotal().toLocaleString()} NGN</p>
            </div>
            <div>
              Taxes and <a href="/shipping-policy" className="text-decoration-underline">shipping</a> calculated at checkout
            </div>
            <a href="/checkout">
              <Button variant="dark" className="w-100 my-4 discover_button">
                Check Out
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Cart;
