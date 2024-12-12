import React from "react";

const Modal = ({ handleModalClose, header, content, footer }) => {
  return (
    <div className="modal-container">
      <div className="popup-container">
        <div className="d-flex">
          <div className="popup-header">
            <div className="popup-header-title">{header}</div>
            <div className="popup-close" onClick={handleModalClose}>
              &times;
            </div>
          </div>
          <div className="popup-content">{content}</div>
          <div className="popup-footer">{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
