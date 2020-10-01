import React, { useState } from "react";
import { saveTask } from "../actions/taskActions";

function NewTaskInput(props) {
  const [newTask, setNewTask] = useState("");

  function onNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleSubmitNewTask(event) {
    event.preventDefault();
    saveTask(newTask).then(
      (res) => {
        setNewTask("");
      },
      (err) => {
        alert("Oops! Failed to add a new task");
      }
    );
  }
  return (
    <form onSubmit={handleSubmitNewTask}>
      <div className="form-group">
        <div className="field">
          <input
            id={props.id}
            onChange={onNewTaskChange}
            name={props.name}
            className="form-control"
            value={newTask}
          />
        </div>
      </div>
    </form>
  );
}

export default NewTaskInput;
