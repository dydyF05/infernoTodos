import Component from 'inferno-component'
import Todo from '../../container/todo.container'
import './todosList.css'

class TodosListComponent extends Component {

  generateSelectedBtnClass = (btn_filter_name) => ( btn_filter_name === this.props.todos.current_filter ) ? 'btn btn-info' : 'btn btn-light'

  renderTodos() {
      const {current_filter} = this.props.todos
      if (this.props.todos[current_filter].length) {
          return (
              <ul className="list list-group col-xs-10 col-xs-offset-1">
                  {this.props.todos[current_filter].map( (todo, key) => ( <Todo key={key} todo={todo} />))}
              </ul>
          )
      }
      return null;
  }

  renderTodosFilters() {
      return (
          <div className="row btn-group" role="group" aria-label="Choose your filter">
              <button type="button" className={this.generateSelectedBtnClass('all')} onClick={()=>{this.props.change_filter('all')}}>all</button>
              <button type="button" className={this.generateSelectedBtnClass('done')} onClick={()=>{this.props.change_filter('done')}}>done</button>
              <button type="button" className={this.generateSelectedBtnClass('todo')} onClick={()=>{this.props.change_filter('todo')}}>todo</button>
          </div>
      )
  }

  render() {
      return (
          <div className="container">
              <div className="row">
                  <h3 className="col text text-info">Todos List</h3>
              </div>
              <div className="container">
                  {this.renderTodosFilters()}
              </div>
              <hr/>
              <div className="container">
                  {this.renderTodos()}
              </div>
          </div>
      );
  }
}

export default TodosListComponent;
