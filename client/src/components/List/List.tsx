import React, { useState } from "react";
import { ListType } from "../../types/List";
import { TaskType } from "../../types/Tasks";
import CreateTaskModal from "../../containers/modals/CeateTaskModal";
import Task from "../../containers/Task";
import { FaPen, FaTrashAlt, FaPlus } from "react-icons/fa";
import "./list.scss";

const List = ({ name, color, tasks, _id, deleteList }: ListType) => {
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  return (
    <>
      {createTaskModalOpen && (
        <CreateTaskModal
          listId={_id}
          closeModal={() => setCreateTaskModalOpen(false)}
        />
      )}
      <article className="list">
        <header className="list-header">
          <div className="left-icons-group">
            <button onClick={() => deleteList(_id)}>
              <FaTrashAlt />
            </button>
            <button>
              <FaPen />
            </button>
          </div>
          <div className="title">
            <div className="tag" style={{ backgroundColor: color }}></div>
            <h2>{name}</h2>
          </div>
          <button onClick={() => setCreateTaskModalOpen(true)}>
            <FaPlus />
          </button>
        </header>
        <ul>
          {tasks.map((task: TaskType) => (
            <Task key={task._id} {...task} listId={_id} />
          ))}
        </ul>
      </article>
    </>
  );
};

export default List;
