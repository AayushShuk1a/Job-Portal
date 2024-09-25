import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Temp from './temp/Temp';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Jobs from './pages/jobs/Jobs';
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/jobdetails" element={<Jobs />} />
        
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
