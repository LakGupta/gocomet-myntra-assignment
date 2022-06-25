import React from "react";
import { useParams, Route } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Middlebar from "../Components/Middlebar";
import Navbar from "../Components/Navbar";
import "./ProductDetail.css";
import Data from "./data.json";
import CartContext from "../store/cart-context";
export default function ProductDetail(props) {
  const params = useParams();
  const cartCtx=useContext(CartContext);
  const [sizeToCart, setSizeToCart] = useState("");
  const item = Data.find((item) => item.productId == params.id);


  useEffect(() => {
    console.log("cart changed?")
  },[cartCtx.items]);

  const addSizeToCartHandler= (event) =>{
    console.log(event);
        setSizeToCart(event.target.innerText);
  }

 const addToCartHandler = () =>{
  cartCtx.addItem({
    id: item.productId + sizeToCart + Math.floor((Math.random() * 100) + 1),
    name: item.productName,
    price: item.price,
    size: sizeToCart,
    key: item.productId + sizeToCart + Math.floor((Math.random() * 100) + 1)
  })
 }

  return (
    <div>
      <Navbar onClickCart={props.onClickCartBtn}></Navbar>
      <Middlebar></Middlebar>
      <div className="row">
        <div className="col-12 col-lg-7 col-md-7 col-sm-12 custom-image-container">
          {item.images.map((image) => {
            if(image.src!=="")
            return  <img src={image.src} alt="" />;
          })}
        </div>
        <div className="col-5 col-lg-5 col-md-5 col-sm-12">
          <h2>{item.brand}</h2>
          <h3> {item.productName} </h3>
          <div className="item-description-container">
            <div className="pricing-container">
              <div className="ratings-outer-container">
                <div className="ratings-container mt-4 d-flex">
                  <div className="ratings-value">
                    {" "}
                    {item.rating.toFixed(1)}{" "}
                  </div>
                  <span class="myntraweb-sprite index-starIcon index-productRatingsExcellentIcon productRatingsExcellentIcon"></span>
                  <div className="ratings-separator">|</div>
                  <div className="ratings-count">
                    {" "}
                    {item.ratingCount} Ratings{" "}
                  </div>
                </div>
              </div>
              <div className="discount-container mt-3">
                <span>
                  <span className="discounted-price">Rs. {item.price} </span>
                  <span className="product-strike"> Rs. {item.mrp}</span>
                </span>
                <span className="product-discountPercentage">
                  ({Math.floor((100 * item.discount) / item.mrp)}% off)
                </span>
              </div>
              <p className="product-taxes-container mt-2">
                <span className="product-taxes">inclusive of all taxes</span>
              </p>
            </div>
            <div className="product-sizes-container">
              <div className="sizes-header">
                <h4>SELECT SIZE (UK Size)</h4>
              </div>
              <div className="sizes-buttons-container d-flex mt-4">
                {item.inventoryInfo.map((inventory) => {
                  return (
                    <div className="individual-button me-2">
                      <button onClick={addSizeToCartHandler} className="size-buttons-size">
                        <p>{inventory.label}</p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="product-action-container d-flex mt-3 me-2">
              <div onClick={addToCartHandler} className="add-to-bag-button d-flex justify-content-center">
                <span className="white-bag-icon"></span>
                ADD TO BAG
              </div>
              <div className="wishlist-button d-flex justify-content-center align-items-center">
                <span className="wishlist-bag-icon"></span>
                WISHLIST
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
