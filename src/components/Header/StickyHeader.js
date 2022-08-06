import React from "react";
import { Col, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import BarWithIcon from "../BarWithIcon";
import DetailedDropDown from "../DetailedDropDown/DetailedDropDown";
// import categories from '../../data/categories.json'

export default function StickyHeader(props) {
  let data = {
    "Activities, Events & Outdoors": {
      "Adventure & Outdoors":
        "Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking",
      "Events, Shows & Tickets":
        "Circus, Comedy, Concerts, Expos & Conventions, Festivals",
      "Fun & Leisure":
        "Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours",
      "Kids Activities": "Kid's Camps, Kid's Classes, Kid's Shows, Play ",
    },
    "Activities, Events & Outdoors2222": {
      "Adventure & Outdoors":
        "Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking",
      "Events, Shows & Tickets":
        "Circus, Comedy, Concerts, Expos & Conventions, Festivals",
      "Fun & Leisure":
        "Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours",
      "Kids Activities": "Kid's Camps, Kid's Classes, Kid's Shows, Play ",
    },
  };

  return (
    <Navbar
      className="lowerNavBar d-none d-lg-flex"
      scrolling
      sticky="top"
      expand="lg"
    >
      <Col md={5}>
        <Nav className="d-flex justify-content-between">
          <li>
            <DetailedDropDown
              text="Browse Categories"
              data={data}
              defaultValue="Activities, Events & Outdoors"
            />
          </li>
          <li className="greyText blueHover">What's New</li>
          <li className="greyText blueHover">Trending</li>
          <li className="greyText blueHover">For You</li>
          <li className="greyText blueHover">Shop Products</li>
        </Nav>
      </Col>
      <Col md={{ span: 5, offset: 2 }}>
        <BarWithIcon icon="akar-icons:search" placeholder="Search GrabOne" />
      </Col>
    </Navbar>
  );
}
