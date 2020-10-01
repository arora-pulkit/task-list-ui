import React, { useState, useEffect } from "react";
import MyTable from "./MyTable";
import NewTaskInput from "./NewTaskInput";
import { addTask, getTasks } from "../taskAPI";

function loadTasks(setTasks, setIsLoaded, setError) {
  getTasks()
    .then((res) => res.json())
    .then(
      (result) => {
        setTasks(result);
        setIsLoaded(true);
      },
      (err) => {
        setIsLoaded(true);
        setError(err);
      }
    );
}

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newTask, setNewTask] = useState("");

  function onNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleSubmitNewTask(event) {
    event.preventDefault();
    addTask(newTask).then(
      (res) => {
        loadTasks(setTasks, setIsLoaded, setError);
        setNewTask("");
      },
      (err) => {
        alert("Oops! Failed to add a new task");
      }
    );
  }

  useEffect(() => {
    loadTasks(setTasks, setIsLoaded, setError);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <h1 style={{ float: "left" }}>Tasks</h1>
        <MyTable tasks={tasks}></MyTable>
        <h3>Add New Task</h3>
        <NewTaskInput
          id="description"
          label="Description"
          onChange={onNewTaskChange}
          name="Description"
          value={newTask}
          onSubmit={handleSubmitNewTask}
        />
      </div>
    );
  }
}

export default HomePage;
