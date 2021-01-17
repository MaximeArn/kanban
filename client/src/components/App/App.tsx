import React, { useEffect, useState } from "react";
import List from "../../containers/List";
import ListModal from "../../containers/modals/ListModal";
import { FaPlus } from "react-icons/fa";
import { ListType } from "../../types/List";
import "./App.scss";

function App({ lists, getLists }: any) {
  useEffect(() => {
    getLists();
  }, []);

  const [createListModal, setCreateListModal] = useState(false);
  return (
    <div className="app">
      {createListModal && (
        <ListModal
          closeModal={() => setCreateListModal(false)}
          action="Create"
        />
      )}
      <header className="app-header">
        <h1>Kanban</h1>
        <button onClick={() => setCreateListModal(true)}>
          <FaPlus />
        </button>
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
