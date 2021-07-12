import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/products" exact component={Products} />
            <Route path="/services" exact component={Services} />
            <Route path="/sign-up" exact component={SignUp} /> */}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
