import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const PrivacyPolicy = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                Privacy Policy
                            </Card.Title>
                            <Card.Text>
                                <h5>1. Introduction</h5>
                                <p>
                                    We value your privacy. This policy explains how we handle and
                                    protect your personal information.
                                </p>
                                <h5>2. Information We Collect</h5>
                                <p>
                                    We collect personal data such as your name, email address,
                                    and other details necessary to provide our services.
                                </p>
                                <h5>3. How We Use Your Information</h5>
                                <p>
                                    Your information is used to deliver services, improve user
                                    experience, and communicate updates.
                                </p>
                                <h5>4. Data Security</h5>
                                <p>
                                    We use secure systems to protect your data against
                                    unauthorized access or disclosure.
                                </p>
                                <h5>5. Contact Us</h5>
                                <p>
                                    If you have any questions, please contact us at{" "}
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

export default PrivacyPolicy;