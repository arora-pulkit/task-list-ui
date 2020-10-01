import React from "react";

function MyTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Mark Complete</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.description}</td>
              <td>
                <input type="checkbox"></input>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MyTable;
