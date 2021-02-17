import React, { useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
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
  toggleStatus,
}: TaskType) => {
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  return (
    <>
      {taskModalOpen && (
        <TaskModal
          listId={listId}
          closeModal={() => setTaskModalOpen(false)}
          action="Edit"
          taskId={_id}
        />
      )}

      <li className="task">
        <div className="task-firstRow">
          <div className="task-firstRow-title">
            <input
              type="checkbox"
              name="done"
              checked={done}
              onChange={() =>
                toggleStatus(listId, { done: !done, id: _id, color, info, title })
              }
            />
            <h3>{title}</h3>
          </div>
          <div className="task-firstRow-icons">
            <button onClick={() => setTaskModalOpen(true)}>
              <FaPen />
            </button>
            <button onClick={() => deleteTask(listId, _id)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
        {info && (
          <div className="task-info">
            <p>{info}</p>
          </div>
        )}
      </li>
    </>
  );
};

export default Task;
