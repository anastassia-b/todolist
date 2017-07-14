import { RECEIVE_TODOS, RECEIVE_TODO, TODO_ERROR } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    case TODO_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default todosReducer;
