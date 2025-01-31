import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BusinessPlan from './components/BusinessPlan';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center' }}>
        {/* Correct path to the logo in the public folder */}
        <img src="/logo.png" alt="RouteLogic Logo" />
        <h1>Welcome to RouteLogic</h1>
        <Home />
        <About />
        <Contact />
        <BusinessPlan />
      </div>
    </div>
  );
}

export default App;
