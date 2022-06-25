import React from "react";
import Modal from "../Modal";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount:1})
  };
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id + item.size + Math.floor((Math.random() * 100) + 1)}
          name={item.name}
          amount={item.amount}
          price={item.price}
          size={item.size}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHide}>
      {cartItems}
      <div className="total">
        <span>Total</span>
        <span>Rs. {cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button onClick={props.onHide} className="button--alt">
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
}
