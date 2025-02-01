import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import InvestorRelations from './components/InvestorRelations';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src="/logo.png" alt="RouteLogic Logo" className="w-64 h-auto" />
        {/* <h1>Welcome to RouteLogic</h1> */}
        
        {/* Routes for different components (React Router v6+) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
