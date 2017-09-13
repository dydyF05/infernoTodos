import Component from 'inferno-component'
import Todo from '../../container/todo.container'
import './todosList.css'

class TodosListComponent extends Component {

  generateSelectedBtnClass = (btn_filter_name) => ( btn_filter_name === this.props.todos.current_filter ) ? 'btn btn-primary' : 'btn btn-default'

  renderTodos() {
    const {current_filter} = this.props.todos
    if (this.props.todos[current_filter].length) {
      return (
        <ul className="list list-group col-xs-10 col-xs-offset-1">
          {this.props.todos[current_filter].map( todo => ( <Todo todo={todo} />))}
        </ul>
      )
    }
    return null;
  }

  renderTodosFilters() {
    return (
      <div className="btn-group" role="toolbar" aria-label="Button group with nested dropdown">
        <button type="button" className={this.generateSelectedBtnClass('all')} onClick={()=>{this.props.change_filter('all')}}>all</button>
        <button type="button" className={this.generateSelectedBtnClass('done')} onClick={()=>{this.props.change_filter('done')}}>done</button>
        <button type="button" className={this.generateSelectedBtnClass('todo')} onClick={()=>{this.props.change_filter('todo')}}>todo</button>
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        <h3 className="text text-primary">Todos List</h3>
        {this.renderTodosFilters()}
        <hr/>
        {this.renderTodos()}
      </div>
    );
  }
}

export default TodosListComponent;
