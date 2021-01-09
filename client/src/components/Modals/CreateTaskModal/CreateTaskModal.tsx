import React, { useState, useEffect, useRef } from "react";
import { TaskModalProps } from "../../../types/Modals";
import "../modal.scss";

const CreateTaskModal = ({
  listId,
  createTask,
  setCreateTaskModalOpen,
}: TaskModalProps) => {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [color, setColor] = useState("#ffffff");

  const modal = useRef<HTMLDivElement>(null);

  const handleClick = ({ target }: any) => {
    !modal.current?.contains(target) && setCreateTaskModalOpen(false);
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
