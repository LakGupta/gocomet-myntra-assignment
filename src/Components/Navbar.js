import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/cart-context";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export default function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);


  const searchItemHandlder = (event) => {
    props.onSearch(event.target.value);

    setSearchTerm(event.target.value);
  };
  return (
    <nav className="d-flex justify-content-between">
      <div className="left d-flex align-items-center">
        <Link className="myntra-logo" to="/gocomet-myntra-assignment/#"></Link>
        <ul className="d-flex align-items-center justify-content-center">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home and Living</li>
          <li>Beauty</li>
          <li>Studio</li>
        </ul>
      </div>
      <div className="right d-flex align-items-center">
        <input
          placeholder="Search for products, brands and more"
          className="ms-2 me-2"
          type="text"
          onChange={searchItemHandlder}
        />
        <a className="profile ms-2 me-2">
          <span className="profile-icon-logo"></span>
          <div>Profile</div>
        </a>
        <a className="ms-2 me-2">
          <span className="wishlist-bag-logo"><span></span></span><div>Wishlist</div>
        </a>
        <a onClick={props.onClickCart} className="ms-2 me-2">
          <span className="icon-bag-logo"></span>
          <span>  </span>
          <div>Bag</div>
        </a>
      </div>
    </nav>
  );
}
