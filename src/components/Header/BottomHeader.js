import { Icon } from "@iconify/react";
import React from "react";
import { Navbar } from "react-bootstrap";

export default function BottomHeader() {
  return (
    <Navbar
      className="lowerNavBar d-lg-none d-flex"
      scrolling
      sticky="bottom"
      expand="lg"
    >
      <div>
        <Icon icon="bx:home-alt" color="gray" width="25" />
        <p>Home</p>
      </div>
      <div>
        <Icon icon="ant-design:search-outlined" color="gray" width="25" />
        <p>Search</p>
      </div>
      <div>
        <Icon icon="carbon:categories" color="gray" width="25" />
        <p>Categories</p>
      </div>
      <div>
        <Icon icon="eva:shopping-cart-outline" color="gray" width="25" />
        <p>Cart</p>
      </div>
      <div>
        <Icon icon="line-md:account" color="gray" width="25" />
        <p>Account</p>
      </div>
    </Navbar>
  );
}
