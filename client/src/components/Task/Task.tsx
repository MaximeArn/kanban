import React from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { TaskType } from "../../types/Tasks";
import "./task.scss";

const Task = ({ title, info, color }: TaskType) => {
  return (
    <li className="task">
      <div className="task-title">
        <input type="checkbox" name="done" />
        <p>{title}</p>
      </div>
      <div className="task-icons">
        <button>
          <FaPen />
        </button>
        <button>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default Task;
