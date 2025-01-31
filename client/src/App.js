import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports
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
        {/* Logo */}
        <img src="/logo.png" alt="RouteLogic Logo" />
        {/* <h1>Welcome to RouteLogic</h1> */}
        
        {/* Routes for different components (React Router v6+) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-plan" element={<BusinessPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
