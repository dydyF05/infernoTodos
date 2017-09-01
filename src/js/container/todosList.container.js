import { connect } from 'inferno-redux'
import {
  add_new_todo
} from '../actions/Todos.action'
import TodosListComponent from "../ui/TodosList";


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_new_todo() {
            dispatch(add_new_todo());
        }
    }
}

const TodosList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosListComponent)
export default TodosList
