import React from "react";
import { ListType } from "../../types/List";
import "./list.scss";

const List = ({ name, color, tasks }: ListType) => {
  return (
    <div className="list">
      <div className="title">
        <div className="tag" style={{ backgroundColor: color }}></div>
        <h2>{name}</h2>
      </div>
      <ul></ul>
    </div>
  );
};

export default List;
