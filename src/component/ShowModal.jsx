import { useEffect } from "react";
import ReactDOM from "react-dom";
const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  });
  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <img
          src={process.env.PUBLIC_URL + "/images/Error-512.webp"}
          alt=""
          id="img"
        />

        <p class="p">Your password is incorrect</p>
        <button className="btn btn-primary" onClick={closeModal} id="btn1">
          Done
        </button>
      </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};
export default MyModal;
