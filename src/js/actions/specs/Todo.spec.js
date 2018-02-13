import * as actions from '../Todos.action'
import * as types from '../types/Todos.types'

describe('Todo actions', () => {
    it('should create an action to add a todo', () => {
        const todo = {id: 231301, name: 'Finish docs', creator: 'yo moma'}
        const expectedAction = {
            type: types.ADD_NEW_TODO,
            todo
        }

        expect(actions.add_new_todo(todo)).toEqual(expectedAction)
    })

    it('should create an action to declare a todo done', () => {
        const todo = {id: 231301, name: 'Done todo', creator: 'who cares'}
        const expectedAction = {
            type: types.DO_TODO,
            todo
        }

        expect(actions.toggle_todo(todo, 'do')).toEqual(expectedAction)
    })

    it('should create an action to declare a todo as unfinished', () => {
        const todo = {id: 231301, name: 'Undo todo', creator: 'guess who\'s back'}
        const expectedAction = {
            type: types.UNDO_TODO,
            todo
        }

        expect(actions.toggle_todo(todo, 'todo')).toEqual(expectedAction)
    })

    it('should change the current filter to \'done\'', () => {
        const filt = 'done'
        const expectedAction = {
            type: types.CHANGE_FILTER,
            new_filter: filt
        }

        expect(actions.change_filter(filt)).toEqual(expectedAction)
    })

})
