import * as types from '../actions/types/Todos.types';

export const initialState = {
    all : [{
        id: 123,
        name: 'implement shit',
        creator: 'my very self'
    },
    {
        id: 124,
        name: 'unfinished business',
        creator: 'the other one'
    }],
    done: [{
        id: 123,
        name: 'implement shit',
        creator: 'my very self'
    }],
    todo: [{
        id: 124,
        name: 'unfinished business',
        creator: 'the other one'
    }],
    current_filter: 'all'
}

const todos = (state = initialState, action) => {
    switch (action.type) {
    case types.ADD_NEW_TODO:
        return {
            ...state,
            all: state.all.concat(action.todo),
            todo: state.todo.concat(action.todo)
        }
    case types.UNDO_TODO:
        return {
            ...state,
            done: state.done.filter( t => t.id !== action.todo.id ),
            todo: state.todo.concat([action.todo])
        }
    case types.DO_TODO:
        return {
            ...state,
            todo: state.todo.filter( t => t.id !== action.todo.id ),
            done: state.done.concat([action.todo])
        }
    case types.CHANGE_FILTER:
        return {
            ...state,
            current_filter: action.new_filter
        }
    default:
        return state
    }
}
export default todos
