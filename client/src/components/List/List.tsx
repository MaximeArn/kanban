import React from "react";
import { ListType } from "../../types/List";
import { TaskType } from "../../types/Tasks";
import Task from "../../containers/Task";
import "./list.scss";

const List = ({ name, color, tasks, _id }: ListType) => {
  return (
    <div className="list" data-id={_id}>
      <div className="title">
        <div className="tag" style={{ color: color }}></div>
        <h2>{name}</h2>
      </div>
      <ul>
        {tasks.map((task: TaskType) => (
          <Task key={task._id} {...task} listId={_id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
