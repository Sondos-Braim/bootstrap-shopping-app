import { Icon } from "@iconify/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BarWithIcon from "../BarWithIcon";
import List from "./List";

export default function Footer() {
  return (
    <Container className="left-text pt-4">
      <Row className="m-0">
        <Col className="p-0 d-flex" md={4} lg={3}>
          <List heading="Follow us on">
            <div className="pb-4 d-flex justify-content-between">
              <Icon
                icon="entypo-social:facebook-with-circle"
                width={35}
                color="#4f5864"
              />
              <Icon
                icon="entypo-social:twitter-with-circle"
                width={35}
                color="#4f5864"
              />
              <Icon
                icon="entypo-social:instagram-with-circle"
                width={35}
                color="#4f5864"
              />
              <Icon
                icon="entypo-social:youtube-with-circle"
                width={35}
                color="#4f5864"
              />
            </div>
            <p className="greyText">Get app exclusive deals</p>
            <button className="shadow-button">
              <Icon icon="bi:phone" color="white" width="20" />
              Download our App
            </button>
          </List>
        </Col>
        <Col className="p-0" md={4} lg={2}>
          <List
            items={[
              "Contact Us",
              "About Us",
              "Terms & Returns",
              "Blog",
              "Gift Cards",
            ]}
            heading="GrabOne"
          />
        </Col>
        <Col className="p-0" md={4} lg={2}>
          <List
            items={["My Account", "My Cart", "My Coupons", "FAQ"]}
            heading="My Account"
          />
        </Col>
        <Col className="p-0" md={4} lg={2}>
          <List items={["Run a Deal", "Merchant Centre"]} heading="Merchants" />
        </Col>
        <Col
          className="p-0 pb-md-4 mb-md-4 border-bottom"
          md={{ span: 12, order: "first" }}
          lg={{ span: 3, order: "last" }}
          xs={{ order: "first" }}
        >
          <List heading="Newsletter Signup">
            <p>
              Sign up for our daily emails and we'll send you all the best
              deals, tailored for you.
            </p>
            <Row className="p-0">
              <BarWithIcon
                icon="carbon:email"
                placeholder="Enter email address"
                button="Subscribe"
              />
            </Row>
          </List>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <p className="small pt-2 text-center">
          <span className="blueText">Privacy Policy</span> © 2022 GrabOne
          Limited
        </p>
      </Row>
    </Container>
  );
}
