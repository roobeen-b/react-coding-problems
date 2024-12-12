import React, { useState } from "react";
import "./modal.css";
import Modal from "./Modal";

const ModalPopup = () => {
  const [showModal, setShowModal] = useState(false);

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }
  return (
    <>
      <button className="modal-button" onClick={handleModalOpen}>
        Open Modal Popup
      </button>
      {showModal && (
        <Modal
          handleModalClose={handleModalClose}
          header={"Header"}
          content={"content"}
          footer={"footer"}
        />
      )}
    </>
  );
};

export default ModalPopup;
