import React, { useRef } from "react";
import { FaPen, FaTrashAlt, FaTag } from "react-icons/fa";
import { TaskType } from "../../types/Tasks";
import "./task.scss";

const Task = ({ _id, title, info, color, done, deleteTask }: TaskType) => {
  const taskRef = useRef<HTMLLIElement>(null);
  return (
    <li className="task" data-id={_id} ref={taskRef}>
      <div className="task-title">
        <i>
          <FaTag color={color} />
        </i>
        <input type="checkbox" name="done" checked={done} />
        <p>{title}</p>
      </div>
      <div className="task-icons">
        <button>
          <FaPen />
        </button>
        <button onClick={() => deleteTask(taskRef.current?.dataset.id)}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default Task;
