import React from "react";
import "./modal.css";

const Modal = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal slide-top">{children}</div>
    </div>
  );
};
export default Modal;
