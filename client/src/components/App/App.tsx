import React, { useEffect } from "react";
import "./App.scss";

function App({ lists, getLists }: any) {
  console.log("lists  :  ", lists);

  useEffect(() => {
    getLists();
  }, []);
  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;
