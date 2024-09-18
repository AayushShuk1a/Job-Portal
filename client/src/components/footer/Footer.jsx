// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    Open-source library of over 400+ web components and interactive elements built for better web.
                </p>
                <ul className="footer-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Premium</a></li>
                    <li><a href="#">Campaigns</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <span className="footer-copy">
                    © 2021-2022 <a href="#">Jobly™</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
