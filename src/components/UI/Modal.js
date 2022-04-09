import classes from "./Modal.module.css";
import { Fragment } from "react";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const overlayId = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onClick={props.onClick} />, overlayId)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayId
      )}
    </Fragment>
  );
};

export default Modal;
