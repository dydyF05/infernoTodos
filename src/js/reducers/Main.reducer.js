import { combineReducers } from 'redux'
import todos from './Todos.reducer'
import { initialState as initialTodosState } from './Todos.reducer'

export const initialState = {
    todos: initialTodosState
}

export const Main = combineReducers({
    todos
})
