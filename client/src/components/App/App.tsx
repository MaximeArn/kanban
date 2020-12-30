import React, { useEffect } from "react";
import List from "../List/List";
import { ListType } from "../../types/List";
import "./App.scss";

function App({ lists, getLists }: any) {
  useEffect(() => {
    getLists();
  }, []);
  return (
    <div className="app">
      <header>
        <h1>Kanban</h1>
      </header>
      <main className="app-content">
        {lists.map((list: ListType) => (
          <List key={list._id} {...list} />
        ))}
      </main>
    </div>
  );
}

export default App;
