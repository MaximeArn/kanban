import React, { useRef } from "react";
import { FaPen, FaTrashAlt, FaTag } from "react-icons/fa";
import { TaskType } from "../../types/Tasks";
import "./task.scss";

const Task = ({
  listId,
  _id,
  title,
  info,
  color,
  done,
  deleteTask,
}: TaskType) => {
  const task = useRef<HTMLLIElement>(null);
  return (
    <li className="task" data-id={_id} ref={task}>
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
        <button onClick={() => deleteTask(listId, task.current?.dataset.id)}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default Task;
