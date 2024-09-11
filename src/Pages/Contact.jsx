import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="contact-page my-5">
            <Row className="text-center mb-4">
                <Col>
                    <h1>Contact Us</h1>
                    <p className="lead">We'd love to hear from you! Send us a message using the form below.</p>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mx-auto">
                    <Form className="contact-form">
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Type your message here" />
                        </Form.Group>
                        <Button variant="success" type="submit" className="submit-button">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
