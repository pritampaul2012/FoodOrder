import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Modal(props) {
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
  };

  const ModalContent = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  const portalOverlay = document.getElementById("overlay");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalOverlay
      )}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        portalOverlay
      )}
    </Fragment>
  );
}

export default Modal;
