import dispatcher from "../appDispatcher";
import * as taskAPI from "../taskAPI";
import actionTypes from "./actionTypes";

export function saveTask(description) {
  return taskAPI.addTask(description).then((id) => {
    dispatcher.dispatch({
      actionType: actionTypes.ADD_TASK,
      task: {
        description,
        id: JSON.stringify(id),
      },
    });
  });
}

export function loadTasks(from = "") {
  return taskAPI.getTasks().then((tasks) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_TASK,
      tasks: tasks,
    });
  });
}

export function deleteTask(id) {
  return taskAPI.deleteTask(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_TASK,
      id,
    });
  });
}
