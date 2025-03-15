import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/Instagram2.png';
import image2 from '../assets/tik-tok.png';
import image3 from '../assets/right-arrow.png'

const NewsLetterBox = () => {

    // Function to prevent the page from reloading on submit
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <hr className='mt-5 mb-5'/>
        <Container className="my-4">
            <Row className="align-items-center">
                {/* Left: Form */}
                <Col md={6} className='text-start'>
                    <p className="mb-3 fs-3">Subscribe to our emails</p>
                    <form onSubmit={onSubmitHandler} className="d-flex border p-1" style={{ maxWidth: "380px" }}>
                        <input className="form-control flex-grow-1 border-0 shadow-none px-2 py-1" type="email" placeholder="Enter your email" required />
                        <button type="submit" className="btn btn-light px-3 py-2"><img src={image3} alt="submit" style={{ width: "20px" }} /></button>
                    </form>
                </Col>

                {/* Right: Social Media Icons */}
                <Col md={6} className="d-flex justify-content-end gap-3 mt-3 mt-md-0">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-4"><img src={image1} alt="Instagram" style={{ width: "20px" }} /></a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-4"><img src={image2} alt="TikTok" style={{ width: "20px" }} /></a>
                </Col>
            </Row>
        </Container>
        <hr className='mt-5'/>
        </>
    )
}

export default NewsLetterBox;
