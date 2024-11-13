import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import * as Icon from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-dark py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="fw-bold">Urban Basket</h6>
            <p className="footer-description">
              Providing high-quality products and services to our customers.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h6>Quick link</h6>
            <div className="quick-links mb-3">
              <Link to="/men" className="nav-link me-3"><u>Men's clothings</u></Link>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h6>Follow Us</h6>
            <div className="social-icons">
              <Link to="/" className="nav-link me-3"><Icon.Facebook /></Link>
              <Link to="/" className="nav-link me-3"><Icon.Instagram /></Link>
              <Link to="/" className="nav-link me-3"><Icon.Linkedin /></Link>
              <Link to="/" className="nav-link"><Icon.Twitter /></Link>
            </div>
          </Col>
        </Row>
        <Row className="pt-3 mt-3 border-top">
          <Col className="text-center">
            <p className="text-dark after-footer">&copy; 2024 Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
