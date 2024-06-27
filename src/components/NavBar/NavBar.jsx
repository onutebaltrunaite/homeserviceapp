import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img
          src="https://img.icons8.com/?size=100&id=104308&format=png&color=000000"
          alt="HomeService"
          style={{ height: '35px' }}
        />
        HomeService
      </div>
      <div className={styles.space}>
        <div className={styles.navbarLinks}>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/services">Services</Link>
        </div>
        <div className={`${styles.navbarLinks} ${styles.navbarLogin}`}>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
