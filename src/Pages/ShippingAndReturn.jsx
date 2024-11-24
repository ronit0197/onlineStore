import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ShippingAndReturn = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                Shipping and Return Policy
                            </Card.Title>
                            <Card.Text>
                                <h5>Shipping Policy</h5>
                                <p>
                                    We offer free shipping on all orders above ₹1000. Orders are
                                    processed within 2-3 business days and delivered within 5-7
                                    business days. Tracking information will be provided once
                                    your order is shipped.
                                </p>
                                <h6>Delivery Areas</h6>
                                <p>
                                    We currently deliver across India. International shipping is
                                    not available at this time.
                                </p>
                                <h6>Shipping Charges</h6>
                                <p>
                                    Orders below ₹1000 incur a flat shipping fee of ₹50. Free
                                    shipping applies to orders above ₹1000.
                                </p>
                                <hr />
                                <h5>Return Policy</h5>
                                <p>
                                    Returns are accepted within 15 days of delivery. Items must be
                                    unused, in their original packaging, and accompanied by a
                                    receipt or proof of purchase.
                                </p>
                                <h6>How to Initiate a Return</h6>
                                <p>
                                    To initiate a return, email us at{" "}
                                    <a href="mailto:returns@example.com">returns@example.com</a>{" "}
                                    with your order details.
                                </p>
                                <h6>Refund Process</h6>
                                <p>
                                    Refunds will be processed within 7-10 business days after we
                                    receive and inspect the returned item. The amount will be
                                    credited to your original payment method.
                                </p>
                                <p>
                                    For any questions, contact us at{" "}
                                    <a href="mailto:support@example.com">support@example.com</a>.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ShippingAndReturn;