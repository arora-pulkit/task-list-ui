import React from "react";

function NewTaskInput(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            onChange={props.onChange}
            name={props.name}
            className="form-control"
            value={props.value}
          />
        </div>
      </div>
    </form>
  );
}

export default NewTaskInput;
