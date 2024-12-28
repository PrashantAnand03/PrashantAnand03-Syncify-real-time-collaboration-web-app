import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Main layout container with flex and full height */}
      <div className="d-flex flex-column min-vh-100">
        
        {/* Navbar stays at the top */}
        <Navbar />
        
        {/* Main content will grow and push the footer to the bottom */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        {/* Footer stays at the bottom */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
