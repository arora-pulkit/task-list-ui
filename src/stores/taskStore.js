import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _tasks = [];

class TaskStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getTasks() {
    return _tasks;
  }
}

const store = new TaskStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.DELETE_TASK:
      _tasks = _tasks.filter((task) => task.id !== action.id);
      store.emitChange();
      break;
    case actionTypes.ADD_TASK:
      _tasks.push(action.task);
      store.emitChange();
      break;
    case actionTypes.LOAD_TASK:
      _tasks = action.tasks;
      store.emitChange();
      break;
    default:
  }
});

export default store;
