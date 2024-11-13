import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login'; 
import SignUp from './components/SignUp'; 
import HomePage from './components/HomePage'; 
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<SignUp />} /> {/* Sign-up page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
