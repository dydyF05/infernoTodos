import * as types from "../actions/types/Todos.types";

const initialState = {
  all : [],
  done: [],
  todo: []
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      return {
        ...state,
        all: state.all.concat(action.todo),
        todo: state.todo.concat(action.todo)
      }
    default:
      return state
  }
}
