import React, { useEffect, useRef } from "react";

const ConfirmationModal = () => {
  const modal = useRef<HTMLDivElement>(null);

  // const handleClick = ({ target }: any) => {
  //   !modal.current?.contains(target) && closeModal();
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <div className="modal">
      <div className="modal-content" ref={modal}>
        <header>
          <h2></h2>
        </header>
      </div>
    </div>
  );
};

export default ConfirmationModal;
