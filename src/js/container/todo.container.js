import { connect } from 'inferno-redux'
import {
  toggle_todo
} from '../actions/Todos.action'
import TodoComponent from "../ui/Todo";


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle_todo(todo, todo_state) {
            dispatch(toggle_todo(todo, todo_state));
        }
    }
}

const Todo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoComponent)
export default Todo
