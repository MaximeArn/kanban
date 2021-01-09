import React, { useState } from "react";
import { FaPen, FaTrashAlt, FaTag } from "react-icons/fa";
import TaskModal from "../../containers/modals/TaskModal";
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
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  return (
    <>
      {taskModalOpen && (
        <TaskModal
          listId={listId}
          closeModal={() => setTaskModalOpen(false)}
          action="Edit"
        />
      )}

      <li className="task">
        <div className="task-title">
          <i>
            <FaTag color={color} />
          </i>
          <input type="checkbox" name="done" checked={done} />
          <p>{title}</p>
        </div>
        <div className="task-icons">
          <button onClick={() => setTaskModalOpen(true)}>
            <FaPen />
          </button>
          <button onClick={() => deleteTask(listId, _id)}>
            <FaTrashAlt />
          </button>
        </div>
      </li>
    </>
  );
};

export default Task;
