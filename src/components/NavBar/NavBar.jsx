import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://img.icons8.com/?size=100&id=104308&format=png&color=000000"
          alt="HomeService"
          style={{ height: '35px' }}
        />
        HomeService
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
};

export default NavBar;
