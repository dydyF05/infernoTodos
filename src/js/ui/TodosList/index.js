import Component from 'inferno-component';
import './todosList.css';

class TodosListComponent extends Component {

  renderTodos() {
    if (this.props.todos.all.length) {
      return (
        <ul>
          {this.props.todos.all.map( todo => {
            return (
              <li>{todo.name}</li>
            )
          })}
        </ul>
      )
    }
    return null;
  }

  render() {
    console.log(this.props)
    return (
      this.renderTodos()
    );
  }
}

export default TodosListComponent;
