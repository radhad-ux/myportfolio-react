import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  //safeguard
  if (showModal === null) return null;

  return (
    <div className="container_modal">
      <button onClick={() => setShowModal(null)}>X</button>
      {showModal}
    </div>
  );
};

export default Modal;
