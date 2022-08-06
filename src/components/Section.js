import { Icon } from "@iconify/react";
import React from "react";
import ListOfImages from "./ListOfImages";

export default function Section(props) {
  return (
    <div className="left-text">
      <div className="heading d-flex flex-md-row flex-sm-column align-items-baseline m-2">
        <p className="large-text greyText blueHover text-nowrap m-0">
          {props.heading}
        </p>
        <button className="customButton">
          View More
          <Icon
            className="itemIcon"
            icon="dashicons:arrow-right-alt2"
            color="white"
          />
        </button>
      </div>
      <ListOfImages data={props.data} />
    </div>
  );
}
