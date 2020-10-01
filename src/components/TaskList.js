import React, { useState, useEffect } from "react";
import MyTable from "./MyTable";
import taskStore from "../stores/taskStore";
import { loadTasks, deleteTask } from "../actions/taskActions";
function TaskList() {
  const [tasks, setTasks] = useState(taskStore.getTasks());

  useEffect(() => {
    console.log("hello from tasklist");
    taskStore.addChangeListener(onChange);
    if (taskStore.getTasks().length === 0) loadTasks();
  }, []);

  function onChange() {
    setTasks(taskStore.getTasks());
  }

  return <MyTable tasks={tasks} /*deleteTask={deleteTask}*/></MyTable>;
}

export default TaskList;
