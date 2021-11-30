import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import DeepDive from './DeepDive';
import LongTerm from './LongTerm';
import SupplyAndDemand from './SupplyAndDemand';
import WhyYouShouldCare from './WhyYouShouldCare';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div id="App">
        <Navbar />
        <div id="container">
          <Switch>
            <Route path="/About"><About/></Route>
            <Route path="/DeepDive"><DeepDive/></Route>
            <Route path="/LongTerm"><LongTerm/></Route>
            <Route path="/SupplyAndDemand"><SupplyAndDemand/></Route>
            <Route path="/WhyYouShouldCare"><WhyYouShouldCare/></Route>
            <Route path="/"><Home/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
