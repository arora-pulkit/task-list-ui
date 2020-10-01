import dispatcher from "../appDispatcher";
import * as taskAPI from "../taskAPI";
import actionTypes from "./actionTypes";

export function saveTask(description) {
  return taskAPI.addTask(description).then(() =>
    dispatcher.dispatch({
      actionType: actionTypes.ADD_TASK,
      description: description,
    })
  );
}
