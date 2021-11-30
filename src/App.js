import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div id="App">
        <Navbar />
        <div id="container">
          <Switch>
            <Route path="/Contact"><Contact/></Route>
            <Route path="/"><Home/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
