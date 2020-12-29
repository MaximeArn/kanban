import React from "react";
import { FaPen, FaTrashAlt, FaTag } from "react-icons/fa";
import { MdLabel } from "react-icons/md";
import { TaskType } from "../../types/Tasks";
import "./task.scss";

const Task = ({ _id, title, info, color, done, deleteTask }: TaskType) => {
  return (
    <li className="task" data-id={_id}>
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
        <button onClick={deleteTask()}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default Task;
