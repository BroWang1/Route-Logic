import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BusinessPlan from './components/BusinessPlan';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ textAlign: 'center' }}>
        <img src="/logo.png" alt="RouteLogic Logo" />
        <h1>Welcome to RouteLogic</h1>

        {/* Routes for different components */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/business-plan" component={BusinessPlan} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
