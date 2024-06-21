import React from 'react';
import './NavBar.css';
// import { AiFillAccountBook } from "react-icons/ai";
// <AiFillAccountBook />

const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-logo"><img src="https://img.icons8.com/?size=100&id=104308&format=png&color=000000" style={{ height: '35px' }}></img>HomeService</div>   
                    
            <div className="navbar-links">    

                <a href="#home">Home </a>
                <a href="#services">Services </a>
                <a href="#contact">About Us</a>
                
                
            </div>
        </nav>
    );
};

export default NavBar;