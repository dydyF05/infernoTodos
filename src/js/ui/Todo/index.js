import Component from 'inferno-component';
import './todo.css';

class TodosListComponent extends Component {
    renderDoneTodo(todo) {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {todo.name}
                <button
                    onClick={() => this.props.toggle_todo(todo, 'todo')}
                    class="btn btn-xs btn-default pull-right"
                >
                    <i class="far fa-minus-square"></i>
                </button>
            </li>
        );
    }

    renderUnfinishedTodo(todo) {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center disabled">
                {todo.name}
                <button
                    onClick={() => this.props.toggle_todo(todo, 'done')}
                    class="btn btn-xs btn-default pull-right"
                >
                    <i class="far fa-plus-square"></i>
                </button>
            </li>
        );
    }

    render() {
        const { todo } = this.props;
        if (this.props.todos.done.find(globTodo => globTodo.id === todo.id))
            return this.renderDoneTodo(todo);
        return this.renderUnfinishedTodo(todo);
    }
}

export default TodosListComponent;
