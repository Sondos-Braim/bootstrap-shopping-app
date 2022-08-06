import React from "react";
import { Col, Row } from "react-bootstrap";
import CardComp from "./CardComp/CardComp";

export default function ListOfImages(props) {
  return (
    <Row>
      {props.data &&
        props.data.map((item) => (
          <Col md={6} sm={12} lg={3}>
            <CardComp item={item} />
          </Col>
        ))}
    </Row>
  );
}
