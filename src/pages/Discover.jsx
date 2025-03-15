import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Discover = () => {
    return (
        <Container className="mt-4 p-5">
             <Row>
                <Col md={{ span: 6, offset: 2 }} className="text-start">
                    <h1 className="mb-3 pt-md-5 pb-md-3 fw-normal" style={{ fontSize: "3rem" }}>DISCOVER</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mx-auto">
                    <p className="fs-6 pt-3 pt-md-5">Tisora is a private label dedicated to the elegant and luxurious.</p>
                    <p className="fs-6">Our aim is to create and curate unique pieces for exceptional people.</p>
                    <p className="fs-6 pt-4">Our vision is simple: “Timeless”</p>
                </Col>
            </Row>

            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
                <Button variant="dark" href="/shop" className='px-5 py-2 discover_button'>Shop Now</Button>
                <Button variant="dark" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='px-5 py-2 discover_button'>Instagram</Button>
            </div>
        </Container>
    );
}

export default Discover;
