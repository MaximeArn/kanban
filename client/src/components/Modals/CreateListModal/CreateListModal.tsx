import React, { useState, useEffect, useRef } from "react";
import { ListModalProps } from "../../../types/Modals";
import "../modal.scss";

const CreateListModal = ({ closeModal, createList }: ListModalProps) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ffffff");

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
          <h2>Create a new task </h2>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createList({
              name,
              color,
            });
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <input
            type="color"
            name="color"
            value={color}
            onChange={({ target: { value } }) => setColor(value)}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateListModal;
