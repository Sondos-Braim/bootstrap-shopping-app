import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default function Discover() {
  let data = [
    { name: "Featured Auckland deals", num: 298 },
    { name: "Collectionss", num: 44 },
    { name: "Escapes", num: 298 },
    { name: "Picked for You", num: null },
    { name: "Activities, Events & Outdoors", num: 256 },
    { name: "Store", num: 4947 },
    { name: "Restaurants, Bars, Cafes", num: 20 },
    { name: "Beauty, Massage & Spa", num: 380 },
    { name: "House & Garden", num: 2443 },
    { name: "Fitness & Sports", num: 275 },
    { name: "Automotive", num: 164 },
  ];
  return (
    <Card className="border-0">
      <Card.Header className="p-2 left-text bg-white blueText large-text">
        Discover
      </Card.Header>
      <ListGroup variant="flush">
        {data.map((item) => (
          <ListGroup.Item>
            <div className="p-1 item d-flex justify-content-between align-items-center">
              <p className="m-0 greyText blueHover">{item.name}</p>
              <p className="m-0 small text-muted">{item.num}</p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
