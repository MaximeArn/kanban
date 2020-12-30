import React from "react";
import { ListType } from "../../types/List";
import { TaskType } from "../../types/Tasks";
import Task from "../../containers/Task";
import { FaPen, FaTrashAlt, FaPlus } from "react-icons/fa";
import "./list.scss";

const List = ({ name, color, tasks, _id }: ListType) => {
  return (
    <article className="list" data-id={_id}>
      <header className="list-header">
        <div className="left-icons-group">
          <button>
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
        <button onClick={() => console.log(_id)}>
          <FaPlus />
        </button>
      </header>
      <ul>
        {tasks.map((task: TaskType) => (
          <Task key={task._id} {...task} listId={_id} />
        ))}
      </ul>
    </article>
  );
};

export default List;
