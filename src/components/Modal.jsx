import ReactDOM from "react-dom";

const Modal = ({ showModal, setShowModal }) => {
  //safeguard
  if (showModal === null) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay_style"></div>
      <div className="modal_style">
        <button onClick={() => setShowModal(null)}>X</button>
        {showModal}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
