import React from "react";
import "./FilterTab.css";

export default function FilterTab() {
  return (
    <div className=" filter-section col-2">
      <div className="radio">
        <div className="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label">Men</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label">Women</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label">Boys</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label">Girls</label>
        </div>
      </div>
      <div className="radio">
        <p>CATEGORIES</p>
        <div className="">
          <label class="container">
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark">Men</span>
          </label>
        </div>
        <div className="">
          <label class="container">
            <input type="radio" name="radio" />
            <span class="checkmark">Women</span>
          </label>
        </div>
        <div className="">
          <label class="container">
            <input type="radio" name="radio" />
            <span class="checkmark">Boys</span>
          </label>
        </div>
        <div className="">
          <label class="container">
            <input type="radio" name="radio" />
            <span class="checkmark">Girls</span>
          </label>
        </div>
      </div>
      <div className="radio checkbox">
        <p>BRANDS</p>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Parkx</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Roadster</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Nautica</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Allen Solly</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">WROGN</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Moda Rapido</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">HRX by Hrithik Roshan</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">H&M</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Damensch</label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Hummel</label>
        </div>
      </div>
    </div>
  );
}
