import React, { useEffect } from "react";
import axios from "axios";
import { useFetchData, useToggle } from "./myhooks";
import "./App.css";

export function App() {
  const [todoFetch, setTodoFetch] = useFetchData();

  async function onGetTodo() {
    try {
      setTodoFetch.onLoading();
      const data = await axios
        .get("https://jsonplaceholder.typicode.cm/todos/1")
        .then((r) => r.data);
      console.log("Data;", data);
      setTodoFetch.onSuccess(data);
    } catch (error) {
      setTodoFetch.onError("Todo Gelmedi!");
    }
  }
  useEffect(() => {
    onGetTodo();
  }, []);
  return (
    <div className="App">
      <h1>Custom Hooks - Fetch Data</h1>
      <hr />
      <div>
        <h2>{todoFetch.status}</h2>
        {todoFetch.status === "loading" && <div>Loading</div>}
        {todoFetch?.status === "success" && <div> {todoFetch?.data?.title} </div>}
        {todoFetch?.status === "error" && <div> {todoFetch.error} </div>}
      </div>
    </div>
  );
}

export default App;
