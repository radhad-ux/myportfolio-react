import ReactDOM from "react-dom";

export default function Modal({ showModal, setShowModal }) {
  //safeguard
  if (showModal === null) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay_style">
        <div className="modal_style">
          <div className="btn_cancel">
            <button onClick={() => setShowModal(null)}>X</button>
          </div>
          {showModal}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
