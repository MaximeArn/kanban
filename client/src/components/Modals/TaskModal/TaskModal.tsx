import React, { useState, useEffect, useRef } from "react";
import { TaskModalProps } from "../../../types/Modals";
import "../modal.scss";

const CreateTaskModal = ({
  listId,
  createTask,
  editTask,
  closeModal,
  action,
  taskId,
}: TaskModalProps) => {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
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
          <h2>{action} Task</h2>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            action.toLowerCase() === "create"
              ? createTask(listId, {
                  title,
                  info,
                  color,
                })
              : editTask(listId, {
                  title,
                  info,
                  color,
                  id: taskId,
                });
            closeModal();
          }}
        >
          <input
            required
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
          <button type="submit">{action}</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
