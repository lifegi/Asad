import React, { useState } from "react";
import MyModal from "./Showmodal";
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && <MyModal closeModal={closeModal} />}
    </>
  );
}
