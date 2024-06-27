// Modal.js

import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = ({ onClose, header, body, style }) => {
  return (
    <div className="modal" style={style}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{header}</h2>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">
          <Button>Save</Button>

          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
