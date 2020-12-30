import React, { useState } from "react";
import { createTaskModalProps } from "../../../types/Modals";
import "./createTaskModal.scss";

const CreateTaskModal = ({ listId, createTask }: createTaskModalProps) => {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
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
            createTask(listId, {
              title,
              info,
              color,
            });
          }}
        >
          <input type="hidden" name="listId" value={listId} />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
          <input
            type="text"
            name="infos"
            placeholder="Infos"
            value={info}
            onChange={({ target: { value } }) => setInfo(value)}
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

export default CreateTaskModal;
