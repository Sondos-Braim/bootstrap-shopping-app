import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BarWithIcon from "../BarWithIcon";
import "./subscribe.css";
export default function Subscribe() {
  return (
    <Container fluid className="mt-2">
      <Row className="subscribe p-4">
        <Col lg={7} md={12} sm={12}>
          <p className="blueText large-text">
            Get the best deals delivered direct to your inbox each day
          </p>
        </Col>
        <Col className="d-flex p-0" lg={5} md={12} sm={10}>
          <BarWithIcon
            icon="carbon:email"
            placeholder="Enter email address"
            button="Subscribe"
          />
        </Col>
      </Row>
    </Container>
  );
}
