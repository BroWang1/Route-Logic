import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import InvestorRelations from './components/InvestorRelations';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Main content area */}
        <div className="flex-grow flex flex-col items-center justify-center">
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

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
