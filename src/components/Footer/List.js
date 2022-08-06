import React from "react";

export default function List(props) {
  return (
    <div className="d-flex flex-column justify-content-start m-2">
      <p className="greyText">{props.heading}</p>
      {props.items
        ? props.items.map((item) => <p className="small">{item}</p>)
        : props.children}
    </div>
  );
}
