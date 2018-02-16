import Component from 'inferno-component'
import '../registerServiceWorker'
import '../css/App.css'
import '../css/font-awesome/css/fontawesome-all.min.css'
import TodosList from './container/todosList.container.js'
import Navbar from './container/navbar.container.js'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container App">
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <hr/>
                    <TodosList/>
                </div>
            </div>
        );
    }
}

export default App
