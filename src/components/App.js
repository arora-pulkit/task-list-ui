import NewTaskInput from "./NewTaskInput";
import TaskList from "./TaskList";
import React from "react";
function App() {
  return (
    <div className="container">
      <TaskList />
      <h5>Add New Task</h5>
      <NewTaskInput id="description" name="Description" />
    </div>
  );
}
export default App;
