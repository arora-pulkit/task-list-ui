import React from "react";
import { deleteTask } from "../actions/taskActions";
function TaskList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task Description</th>
          <th>Mark Complete</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.description}</td>
              <td>
                <input
                  type="checkbox"
                  onClick={() => deleteTask(task.id)}
                ></input>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TaskList;
