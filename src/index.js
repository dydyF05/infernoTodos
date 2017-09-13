import { render } from 'inferno';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, IndexRoute } from 'inferno-router';
import { Provider } from 'inferno-redux'
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux'
import { Main } from './js/reducers/Main.reducer'
import App from './js/App'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(
  Main,
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.group()
  console.info(store.getState())
  console.groupEnd()
})

render(
  <Provider store={store}>
    <Router history={ createBrowserHistory() }>
      <Route component={ App }>
        <IndexRoute component={ App }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
