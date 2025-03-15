import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image1 from '../assets/American_Express.png'
import image2 from '../assets/Diners_Club.png'
import image3 from '../assets/mastercard.png'
import image4 from '../assets/Visa.png'

const Footer = () => {
  return (
    <footer className='pb-4'>
        <Container>
            {/* Row for Images */}
            <Row className='d-flex justify-content-center align-items-center mt-5 g-0'>
                <Col xs="auto" className="px-1">
                    <img src={image1} alt="image 1" className='img-fluid' style={{ width: '55px'}} />
                </Col>
                <Col xs="auto" className="px-1">
                    <img src={image2} alt="image 2" className='img-fluid' style={{ width: '55px'}} />
                </Col>
                <Col xs="auto" className="px-1">
                    <img src={image3} alt="image 3" className='img-fluid' style={{ width: '55px'}} />
                </Col>
                <Col xs="auto" className="px-1">
                    <img src={image4} alt="image 4" className='img-fluid' style={{ width: '55px'}} />
                </Col>
            </Row>

            {/* Row for Policies & Contact Info */}
            <Row className='text-center pt-3'>
                <Col md={12} className='d-flex flex-wrap justify-content-center gap-3'>
                    <p className="text-dark fw-light copyright-text mx-2">
                        &copy; {new Date().getFullYear()},{" "}
                        <a href="/" className="text-dark text-decoration-none hover-underline">
                            Tisora
                        </a>. All Rights Reserved
                    </p>

                    <span className="dot">·</span>

                    <a href="#" className='text-dark text-decoration-none fs-6 fw-light mx-2 hover-underline'>
                        <small>Refund Policy</small>
                    </a>

                    <span className="dot">·</span>

                    <a href="#" className='text-dark text-decoration-none fs-6 fw-light mx-2 hover-underline'>
                        <small>Privacy Policy</small>
                    </a>

                    <span className="dot">·</span>

                    <a href="#" className='text-dark text-decoration-none fs-6 fw-light mx-2 hover-underline'>
                        <small>Terms of Service</small>
                    </a>

                    <span className="dot">·</span>

                    <a href="#" className='text-dark text-decoration-none fs-6 fw-light mx-2 hover-underline'>
                        <small>Shipping Policy</small>
                    </a>

                    <span className="dot">·</span>

                    <a href="#" className='text-dark text-decoration-none fs-6 fw-light mx-2 hover-underline'>
                        <small>Contact Information</small>
                    </a>
                </Col>
            </Row>
        </Container>

        {/* CSS */}
        <style>
            {`
                .dot {
                    color: #333;
                    font-size: 16px;
                }

                .hover-underline:hover {
                    text-decoration: underline !important;
                }
            `}
        </style>
    </footer>
  )
}

export default Footer
