import React, { useState } from 'react';
import './newsletter.css';
import newsImage from './news.png';


const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form submission logic here, like sending the email to your backend
        alert(`Subscribed with email: ${email}`);
        setEmail('');
    };

    return (
        <div className="newsletter-container">
            <div className="newsletter-icon">
                <img src="https://www.clipartmax.com/png/middle/139-1395052_google-icon-email-newsletter-graphic.png" alt="email-icon" />
            </div>
            <div className="newsletter-content">
                <h2>Subscribe to our Newsletter!</h2>
                <p>Subscribe to our newsletter and stay updated.</p>
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
