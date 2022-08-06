import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "@iconify/react";
import { Col, Row } from "react-bootstrap";
import "./detailedDropDown.css";
export default function DetailedDropDown(props) {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);
  const handleClick = (e, item) => {
    setSelectedValue(item);
    e.stopPropagation();
  };
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="/"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <Icon icon="ri:arrow-drop-down-line" color="#01b2ee" width="30" />
    </a>
  ));
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        <span className="greyText blueHover">{props.text}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="container-fluid large-menu p-4">
        <Row>
          <Col md={5}>
            {props.data &&
              Object.keys(props.data).map((item) => (
                <div
                  className={`item d-flex justify-content-between align-items-center ${
                    selectedValue === item ? "active" : ""
                  }`}
                >
                  <Dropdown.Item
                    className="menuItem"
                    onClick={(e) => handleClick(e, item)}
                  >
                    <p className="m-0 small">{item}</p>
                  </Dropdown.Item>
                  <Icon
                    className="itemIcon"
                    icon="dashicons:arrow-right-alt2"
                    color="gray"
                  />
                </div>
              ))}
          </Col>
          <Col md={7} style={{ borderLeft: "1px solid grey" }}>
            <div>
              <p className="blueText">{selectedValue}</p>
              {Object.keys(props.data[selectedValue]).map((item) => (
                <div>
                  <p className="small m-0 greyText blueHover">{item}</p>
                  <p className="text-muted small elipsis">
                    {props.data[selectedValue][item]}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Dropdown.Menu>
    </Dropdown>
  );
}
