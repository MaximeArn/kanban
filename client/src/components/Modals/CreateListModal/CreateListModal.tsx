import React, { useState, useEffect, useRef } from "react";
import "../modal.scss";

const CreateListModal = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="modal">
      <div className="modal-content">
        <header>
          <h2>Create a new task </h2>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
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
