import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col
            className="text-center py-3"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              fontFamily: "Georgia",
            }}
          >
            Note Zipper App &nbsp; &nbsp;&nbsp;&copy; &nbsp; Trust us before use
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
