import React, { useState } from "react";
import "./dropdown.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "@iconify/react";

export default function DropdownComp(props) {
  const [value, setValue] = useState(props.defaultValue);
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
      <Icon icon="ri:arrow-drop-down-line" color="white" width="30" />
    </a>
  ));
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        {props.icon && <Icon icon={props.icon} color="white" width="25" />}
        <span className="text-white">{value}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-0">
        {props.data &&
          props.data.map((item) => (
            <>
              <Dropdown.Item onClick={() => setValue(item)}>
                {item}
              </Dropdown.Item>
              <hr></hr>
            </>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
