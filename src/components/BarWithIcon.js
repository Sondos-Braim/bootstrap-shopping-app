import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Icon } from "@iconify/react";

export default function BarWithIcon(props) {
  return (
    <InputGroup>
      <InputGroup.Text className="text-white bg-white">
        <Icon icon={props.icon} color="gray" width="25" />
      </InputGroup.Text>
      <FormControl placeholder={props.placeholder} />
      {props.button && (
        <button className="shadow-button">{props.button}</button>
      )}
    </InputGroup>
  );
}
