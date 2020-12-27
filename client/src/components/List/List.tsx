import React from "react";
import { ListType } from "../../types/List";

const List = ({ name, color, tasks }: ListType) => {
  return (
    <div className="list">
      <h2>{name}</h2>
      <ul></ul>
    </div>
  );
};

export default List;
