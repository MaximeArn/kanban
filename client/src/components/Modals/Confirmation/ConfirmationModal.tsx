import React, { useEffect, useRef } from "react";
import { ConfirmationModalProps } from "../../../types/Modals";
import "../modal.scss";

const ConfirmationModal = ({ closeModal, handler }: ConfirmationModalProps) => {
  const modal = useRef<HTMLDivElement>(null);

  const handleClick = ({ target }: any) => {
    !modal.current?.contains(target) && closeModal();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-content" ref={modal}>
        <header>
          <h2>Confirmation</h2>
        </header>
        <form>
          <div className="btn-group">
            <button onClick={() => closeModal()}>No</button>
            <button onClick={() => handler()}>Yes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationModal;
