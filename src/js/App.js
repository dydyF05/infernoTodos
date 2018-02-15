import { version } from 'inferno'
import Component from 'inferno-component'
import '../registerServiceWorker'
import Logo from '../logo'
import '../css/App.css'
import '../css/font-awesome/css/fontawesome-all.min.css'
import TodosList from './container/todosList.container.js'

class App extends Component {
    render() {
        return (
            <div className="container App">
                <div className="App-header">
                    <Logo width="80" height="80" />
                    <h2>{`Welcome to Inferno ${version}`}</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <hr/>
                <TodosList/>
            </div>
        );
    }
}

export default App
