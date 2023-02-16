import React, { useState } from "react";

export default function Modal1() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div>
        <button onClick={onOpenModal}>Open modal</button>
        <Modal1 open={open} onClose={onCloseModal} center>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal1>
      </div>
    </div>
  );
}
