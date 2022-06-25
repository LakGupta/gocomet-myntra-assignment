import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div onClick = {props.onClick} className="custom-backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="custom-modal">
      <div className="custom-content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick = {props.onClick} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}



