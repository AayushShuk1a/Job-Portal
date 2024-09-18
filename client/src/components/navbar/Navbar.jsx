// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <header>
        <nav className="header__main-nav">
          <div className="header__main-nav__logo">
            <h1 className='logo'>Jobly</h1> {/* Replace with your logo */}
          </div>
          <button className="header__hamburger" onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </button>
          <ul className={`header__main-nav__links ${isOpen ? 'open' : ''}`}>
            <li><a href="/temp" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            
          </ul>

          <ul className={`header__main-nav__links link_buttons ${isOpen ? 'open' : ''}`}>
            <li><a href="#login" className="btn login-btn">Login</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Navbar;
