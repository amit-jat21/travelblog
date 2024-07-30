import React from "react";
import "./Header.css";
import logo from "../Assests/Frame 1.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const openLoginPage = () => {
    navigate("/login");
  };

  const openSignupPage = () => {
    navigate("/signUp");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Travlog Logo" className="logo" />
        <span className="logo-text">Travlog</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#discover">Discover</a>
        <a href="#special-deals">Special Deals</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="auth-buttons">
        <button className="login-button" onClick={openLoginPage}>
          Log In
        </button>
        <button className="signup-button" onClick={openSignupPage}>
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
