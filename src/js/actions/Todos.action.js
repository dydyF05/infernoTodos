import * as types from './types/Todos.types'

export const add_new_todo = (todo) => {
  type: types.ADD_NEW_TODO
  todo
}
