import React, { useState } from "react";
import { ListType } from "../../types/List";
import { TaskType } from "../../types/Tasks";
import TaskModal from "../../containers/modals/TaskModal";
import ListModal from "../../containers/modals/ListModal";

import Task from "../../containers/Task";
import { FaPen, FaTrashAlt, FaPlus } from "react-icons/fa";
import "./list.scss";

const List = ({ name, color, tasks, _id, deleteList }: ListType) => {
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [listModalOpen, setListModalOpen] = useState(false);

  return (
    <>
      {taskModalOpen && (
        <TaskModal
          listId={_id}
          closeModal={() => setTaskModalOpen(false)}
          action="Create"
        />
      )}
      {listModalOpen && (
        <ListModal
          closeModal={() => setListModalOpen(false)}
          action="Edit"
          id={_id}
        />
      )}
      <article className="list">
        <header className="list-header">
          <div className="left-icons-group">
            <button onClick={() => deleteList(_id)}>
              <FaTrashAlt />
            </button>
            <button onClick={() => setListModalOpen(true)}>
              <FaPen />
            </button>
          </div>
          <div className="title">
            <div className="tag" style={{ backgroundColor: color }}></div>
            <h2>{name}</h2>
          </div>
          <button onClick={() => setTaskModalOpen(true)}>
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
