import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Temp from './temp/Temp';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Jobs from './pages/jobs/Jobs';
import Footer from './components/footer/Footer';
import Login from "./pages/login/Login"
import SignUp from "./pages/login/SignUp"

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const noNavbarFooterPaths = ['/register','/login'];

  return (
    <>
      {/* {!noNavbarFooterPaths.includes(location.pathname) && <Navbar />} */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/jobdetails" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      {!noNavbarFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
