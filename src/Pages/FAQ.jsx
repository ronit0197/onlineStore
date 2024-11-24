import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FAQ = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is this website about?</Accordion.Header>
                            <Accordion.Body>
                                This website provides information about our services, products,
                                and other related details.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How can I contact support?</Accordion.Header>
                            <Accordion.Body>
                                You can reach out to us at{" "}
                                <a href="mailto:support@example.com">support@example.com</a>.
                                We’re here to help!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Is my data secure?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we prioritize your data security by using advanced
                                encryption and secure storage methods.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do you offer refunds?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we have a refund policy in place. Please check our terms
                                and conditions for more details.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;