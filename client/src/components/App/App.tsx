import React, { useEffect } from "react";
import List from "../List/List";
import { ListType } from "../../types/List";
import "./App.scss";

function App({ lists, getLists }: any) {
  useEffect(() => {
    getLists();
  }, []);
  return (
    <div className="App">
      {lists.map((list: ListType) => (
        <List key={list.name} {...list} />
      ))}
    </div>
  );
}

export default App;
