import { Icon } from "@iconify/react";
import React from "react";
import { Card } from "react-bootstrap";
import "./cardComp.css";

export default function CardComp(props) {
  const { desc, img, name, location, bought, price, old } = props.item;
  return (
    <Card className="mb-2">
      <div className="card-container">
        <Icon icon="tabler:heart-plus" className="like-icon" width="30" />
        <Card.Img variant="top" src={img} />
        <div class="overlay">
          <div class="text">{desc}</div>
        </div>
      </div>
      <Card.Body className="left-text">
        <Card.Title className="elipsis text-secondary">{name}</Card.Title>
        <Card.Text className="blueText">{location}</Card.Text>
        <div className="d-flex justify-content-between align-items-end">
          <p className="small text-muted">{bought} bought</p>
          <div className="d-flex flex-column align-items-end">
            <span className="blueText small">from</span>
            <p>
              <span className="small text-muted p-2 text-decoration-line-through">
                {old}
              </span>
              <span className="blueText large-text">{price}</span>
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
