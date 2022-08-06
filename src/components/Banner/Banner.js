import React from "react";
import { Col, Row } from "react-bootstrap";
import CardComp from "../CardComp/CardComp";
import Discover from "../Discovor/Discover";

export default function Banner() {
  let data = [
    {
      id: "003301",
      name: "40 Breakfast or Lunch Voucher for Two People",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/ed9c8819fecc112a9655aaf8c48561c94e4a7a58.jpg",
      location: "Remuera Local & Laneway",
      old: "$40",
      price: "$20",
      bought: 45,
      desc: "$40 Breakfast or Lunch Voucher for Two People - Option for $60 Dinner Voucher",
    },
    {
      id: "233321312",
      name: "Five-Course European Dining Experience for One Person",
      location: "Monsieur Madame",
      old: null,
      price: "$69",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/5147d794573f908e161e61e5b2408c9d33522522.jpg",
      bought: 45,
      desc: "Five-Course European Dining Experience for One Person - Options for up to Eight People",
    },
  ];
  return (
    <Row>
      <Col className="d-none d-lg-block" lg={3}>
        <Discover />
      </Col>
      <Col lg={9} md={12} sm={12}>
        <Row>
          {data &&
            data.map((item) => (
              <Col md={6} sm={12} lg={6}>
                <CardComp item={item} />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
}
