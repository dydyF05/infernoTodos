import { render } from 'inferno';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, IndexRoute } from 'inferno-router';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './js/reducers/Main.reducer';
import App from './js/App';
import './css/index.css';

const store = createStore(
    reducers
);
store.subscribe(() => {
    console.group(); // eslint-disable-line
    console.info(store.getState()); // eslint-disable-line
    console.groupEnd(); // eslint-disable-line
});

render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Route component={App}>
                <IndexRoute component={App} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
