import * as types from './types/Todos.types'

export const add_new_todo = (todo) => ({
  type: types.ADD_NEW_TODO,
  todo
})

const do_todo = (todo) => ({
  type: types.DO_TODO,
  todo
})
const undo_todo = (todo) => ({
  type: types.UNDO_TODO,
  todo
})

export const toggle_todo = (todo, todo_state) => todo_state === 'todo' ? undo_todo(todo) : do_todo(todo);

export const change_filter = (new_filter) => ({
  type: types.CHANGE_FILTER,
  new_filter
})
