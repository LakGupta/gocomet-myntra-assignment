import React, { useState } from "react";
import {Link} from 'react-router-dom';

import "./ProductPage.css";
import Data from "./data.json";

export default function ProductPage(props) {
  const [data, setData] = useState(Data);

  const [sizeFilter, setSizeFilter] = useState("");
  const [sortByType, setSortByType] = useState("");

  const sizeFilterHandler = (event) => {
    setSizeFilter(event.target.value);
  };

  const sortByFilterHandler = (event) => {
    setSortByType(event.target.value);
  };

  var sortedArray = [...Data];
  {
    if (sortByType === "low-to-high") {
      sortedArray = [...Data.sort((a, b) => a.price - b.price)];
    } else if (sortByType === "high-to-low") {
      sortedArray = [...Data.sort((a, b) => b.price - a.price)];
    } else if (sortByType === "discount") {
      sortedArray = [...Data.sort((b, a) => a.discount - b.discount)];
    }
  }
{
  if(sizeFilter ==="")
  {
    var filteringSizeByArray = [...sortedArray];

  }
  else
  {var filteringSizeByArray = [...sortedArray.filter((sizeValue) => sizeValue.inventoryInfo.some((i) => i.label === sizeFilter) )]}

}



  return (
    <div className="col-10 col-md-10 col-sm-12">
      <div className="d-flex">
        <select
          className="form-select mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Bundles</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          onChange={sizeFilterHandler}
          className="form-select mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected value="">Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="3XL">3XL</option>
          <option value="4XL">4XL</option>

        </select>
        <select
          className="form-select mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Country of origin</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          id="sort-by"
          className="form-select mb-3"
          aria-label=".form-select-lg example"
          onChange={sortByFilterHandler}
        >
          <option selected>Sort by</option>
          <option value="low-to-high">Sort by: Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="discount">Better Discount</option>
        </select>
      </div>
      <div className="products-container row">
        {
        filteringSizeByArray.filter((val) => {
            if (props.searchTerm == "") {
              return val;
            } else if (
              val.additionalInfo.toLowerCase().includes(props.searchTerm) || val.brand.toLowerCase().includes(props.searchTerm)
            ) {
              return val;
            }
          })
          .map((post) => {
            return (
              <Link className="product-metainfo col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-4" to={`/product/${post.productId}`}>
                <img src={post.images[0].src}></img>
                <h3 className="product-brand">{post.brand}</h3>
                <h4 className="product-product">{post.additionalInfo}</h4>
                <div className="product-price">
                  <span>
                    <span className="discounted-price">Rs. {post.price} </span>
                    <span className="product-strike"> Rs. {post.mrp}</span>
                  </span>
                  <span className="product-discountPercentage">
                    ({Math.floor((100 * post.discount) / post.mrp)}% off)
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
