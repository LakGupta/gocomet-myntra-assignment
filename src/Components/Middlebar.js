import React from "react";
import "./Middlebar.css";

export default function Middlebar() {
  return (
    <div className="div">
      <div className="row pt-2 pb-3 ms-1">
        <div className=" col-4">
          <div>
            Home / <span className="shirts-for-men"> Shirts For Men and Women</span>{" "}
          </div>
        </div>
      </div>
      <div className="row ms-1 pb-3">
        <div className="col-4 casual-wear">
          Casual Wear
          <span> - 9735 items</span>
        </div>
      </div>
    </div>
  );
}
