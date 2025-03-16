import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import image1 from "../assets/American_Express.png";
import image2 from "../assets/Diners_Club.png";
import image3 from "../assets/mastercard.png";
import image4 from "../assets/Visa.png";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });

  const cartItems = [
    { id: 1, name: "Black T-Shirt", price: 5000, quantity: 1, image: "/shirt.jpg" },
    { id: 2, name: "Blue Jeans", price: 12000, quantity: 1, image: "/jeans.jpg" }
  ];

  // Calculate total dynamically
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
    alert("Order Placed! Proceeding to payment...");
  };

  return (
    <Container style={{ marginTop: "100px", marginBottom: "100px", paddingTop: "20px" }}>
      <Row className="justify-content-center">
        {/* Left Column - Form */}
        <Col md={7} className="pe-5">
          {/* Form Structure */}
          <Row className="justify-content-between mb-2">
            <Col className="text-start"><h5>Contact</h5></Col>
            <Col className="text-end"><a href="/login" className="text-decoration-underline" style={{ color: "black" }}>Log in</a></Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" className="h" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check type="checkbox" label="Email me with news & offers" className="text-start" />
          </Form.Group>

          <h5 className="mb-3 text-start">Delivery</h5>

          <Form.Group className="mb-3">
            <Form.Select>
                <option value="" disabled selected>Country/Region</option>
                <option value="NG">Nigeria</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="CA">Canada</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="First Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Last Name" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Apartment, suite, etc. (optional)" />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="City" />
            </Col>
            <Col>
              <Form.Select>
                <option value="" disabled selected>State</option>
                <option value="Lagos">Lagos</option>
                <option value="Kano">Kano</option>
                <option value="Abuja">Abuja</option>
                <option value="Imo">Imo</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Postal Code (optional)" />
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Control type="text" placeholder="Phone" />
          </Form.Group>

          <h5 className="mb-3 text-start">Shipping Method</h5>

          <Form.Group className="mb-3">
            <Form.Check type="radio" label="Standard Shipping (3-5 business days)" className="text-start" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check type="radio" label="One-Day Shipping (1 business day)" className="text-start" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check type="radio" label="Express Shipping (2-3 business days)" className="text-start" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check type="checkbox" label="Save this information for next time" className="text-start" />
          </Form.Group>

          <h5 className="mb-3 text-start">Payment</h5>
          <p className="text-start">All transactions are secured & encrypted</p>
          <Row className="border p-2 rounded mb-4" style={{ backgroundColor: "#f0f0f0" }}>
          <Row className="mb-3 justify-content-between">
            <Col><h6 className="text-start fw-normal mt-2">Credit Card</h6></Col>
            <Col className="text-end">
              {/* 4 Card images here */}
              <Image src={image1} alt="Credit Card" style={{ width: "40px" }} />
              <Image src={image2} alt="Credit Card" style={{ width: "40px" }} />
              <Image src={image3} alt="Credit Card" style={{ width: "40px" }} />
              <Image src={image4} alt="Credit Card" style={{ width: "40px"}} />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Card Number" />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Expiration Date (MM/YY)" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Security Code" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name on Card" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check type="checkbox" label="Use shipping address as billing address" className="text-start" />
          </Form.Group>
          </Row>

          <Button variant="dark" className="w-100 p-2 discover_button">Pay Now</Button>
        </Col>

        {/* Right Column - Order Summary */}
        <Col md={5} className="ps-5" style={{ backgroundColor: "#f0f0f0" }}>
          {/* Order details Structure */}
          <Row className="align-items-center my-3 pe-4 text-start">
            <Col xs={3}>
            {/* product image */}
              <Image src={image1} alt="Product" style={{ width: "100px" }} />
            </Col>

            <Col>
              <p className="mb-1">Product Name</p>
              <small>Size: M</small>
            </Col>

            <Col className="text-end">
              <p>₦15,000.00</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
