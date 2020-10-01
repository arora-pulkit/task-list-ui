import { EventEmiiter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _tasks = [];

class TaskStore extends EventEmiiter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const store = new TaskStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.ADD_TASK:
      _tasks.push(action.description);
      store.emitChange();
      break;
    default:
  }
});

export default store;
