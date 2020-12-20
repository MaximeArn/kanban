import React, { useEffect } from "react";
import axios from "axios";
import apiUrl from "../../environments/api";
import "./App.scss";

function App() {
  useEffect(() => {
    const lists = axios
      .get(`${apiUrl}/lists`)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;
