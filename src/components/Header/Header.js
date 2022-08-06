import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Icon } from "@iconify/react";
import locations from "../../data/locations.json";
import "./header.css";
import DropdownComp from "../DropdownComp/DropdownComp";
import { Nav } from "react-bootstrap";
export default function Header() {
  let actions = [
    "My Account",
    "Gifts",
    "Profile",
    "My Subscriptions",
    "My Purchases",
    "Login",
  ];
  return (
    <Navbar className="upperNavbar d-flex justify-content-between">
      <Navbar.Brand>GrabOne</Navbar.Brand>
      <Nav className="d-flex justify-content-between">
        <DropdownComp
          data={locations}
          icon={"feather:map-pin"}
          defaultValue="Auckland"
        />
        <Icon
          className="d-none d-lg-block"
          icon="akar-icons:heart"
          height="25"
          color="white"
        />
        <Icon
          className="d-none d-lg-block"
          icon="eva:shopping-cart-outline"
          height="25"
          color="white"
        />
        <div className="d-none d-lg-block">
          <DropdownComp data={actions} icon={"line-md:account"} />
        </div>
        <div className="d-none d-lg-block">
          <Icon icon="ci:mail" height="25" color="white" />
          <span className="text-white">Subscribe</span>
        </div>
      </Nav>
    </Navbar>
  );
}
