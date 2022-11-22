import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1> Alan Grintu </h1>
            <p>Bogotá - Colombia</p>
        </div>
        <div className='footer-contact'>
            <h3>Contact me</h3>
            <p>And let's get down go work!</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                Design by: Jorge Fiquitiva Mora
            </div>
            <div className='sns-links'>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-facebook facebook'></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-twitter twitter'></i>
                </a>

            </div>
        </div>
    </footer>
  );
};

export default Footer