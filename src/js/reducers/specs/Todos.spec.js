import todos from '../Todos.reducer'
import * as types from '../../actions/types/Todos.types'

const initialState = {
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

describe('Todos reducer', () => {
    it('should return the initial state', () => {
        expect(todos(undefined, {})).toEqual(initialState)
    })

    it('should add a new todo as an unfinished task', () => {
        const todo = {id: 0, name: 'taggle', creator: 'tonpew'}
        const action = {type: types.ADD_NEW_TODO, todo}
        const expectedState = {
            ...initialState,
            all: initialState.all.concat(todo),
            todo: initialState.todo.concat(todo)
        }

        expect(todos(undefined, action)).toEqual(expectedState)
    })

    it('should undo a todo', () => {
        const todo = {id: 123, name: 'implement shit', creator: 'my very self'}
        const action = {type: types.UNDO_TODO, todo}
        const expectedState = {
            ...initialState,
            done: initialState.done.filter( t => t.id !== todo.id ),
            todo: initialState.todo.concat([todo])
        }

        expect(todos(undefined, action)).toEqual(expectedState)
    })

    it('should do an undone todo', () => {
        const todo = {id: 124, name: 'unfinished business', creator: 'the other one'}
        const action = {type: types.DO_TODO, todo}
        const expectedState = {
            ...initialState,
            todo: initialState.todo.filter( t => t.id !== todo.id ),
            done: initialState.done.concat([todo])
        }

        expect(todos(undefined, action)).toEqual(expectedState)
    })

    it('should change the filter', () => {
        const new_filter = 'done'
        const action = {type: types.CHANGE_FILTER, new_filter}
        const expectedState = {
            ...initialState,
            current_filter: new_filter
        }

        expect(todos(undefined, action)).toEqual(expectedState)
    })
})
