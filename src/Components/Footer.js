import React from 'react';
import './Footer.css';
import logo from '../Assests/Frame 1.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-logo">
                    <img src={logo} alt="Travlog Logo" />
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                </div>
                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Career</li>
                        <li>Mobile</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact</h4>
                    <ul>
                        <li>Why Travlog?</li>
                        <li>Partner with us</li>
                        <li>FAQ's</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Meet Us</h4>
                    <ul>
                        <li>+00 92 1234 56789</li>
                        <li>info@travlog.com</li>
                        <li>205. R Street, New York</li>
                        <li>BD23200</li>
                    </ul>
                </div>
            </div>
            <div className="footer-social">
        <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
        </footer>
    );
};

export default Footer;