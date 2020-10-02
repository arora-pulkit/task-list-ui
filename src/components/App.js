import React, { useState, useEffect } from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";
import taskStore from "../stores/taskStore";
import { loadTasks } from "../actions/taskActions";

function App() {
  const [tasks, setTasks] = useState(taskStore.getTasks());
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    taskStore.addChangeListener(onChange);
    if (taskStore.getTasks("lengthCompare").length === 0) loadTasks();
  }, []);

  function onChange() {
    setTasks(taskStore.getTasks());
    setTime(new Date());
  }
  return (
    <div className="container">
      <TaskList rows={tasks} key={time} />
      <h5>Add New Task</h5>
      <AddNewTask id="description" name="Description" />
    </div>
  );
}

export default App;
