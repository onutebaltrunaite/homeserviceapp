import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
import styles from './NavBar.module.scss';
import Cookies from 'js-cookie';

const NavBar = () => {
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const token = Cookies.get('token');

    if (token) {
      try {
        // Decode token to get user information
        const decodedToken = jwtDecode(token);
        if (decodedToken && decodedToken.user && decodedToken.user.name) {
          const username = decodedToken.user.name;
          // Set username state to display in UI
          setUsername(username);
        } else {
          // Handle cases where decoded token does not have expected structure
          console.error('Invalid token structure');
          setUsername(null);
        }
      } catch (error) {
        // Handle token decoding errors
        console.error('Error decoding token:', error.message);
        setUsername(null);
      }
    } else {
      // Token not found case
      setUsername(null);
    }
  }, [navigate]);

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    
    Cookies.remove('token');
    setUsername(null); // Clear username state
    navigate('/'); // Adjust to your login route
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogoContainer}>

         <div className={styles.navbarLogo}>
        <img
          src="https://img.icons8.com/?size=100&id=104308&format=png&color=000000"
          alt="HomeService"
          style={{ height: '35px' }}
        />
        HomeService
      </div>
      
        <div className={styles.navbarLinks}>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/services">Services</Link>
        </div>
        </div>
     
        
          {username ? (
            <div className={styles.userContainer}>
              <div className={styles.avatar} onClick={toggleDropdown}>
                {getInitial(username)}
              </div>
              {showDropdown && (
                <div className={styles.dropdown}>
                  <ul>
                    <li onClick={() => navigate('/my-account')}>My Account</li>
                    <li onClick={() => navigate('/my-bookings')}>My Bookings</li>
                    <li onClick={handleSignOut}>Sign Out</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className={styles.loginBtn} onClick={() => navigate('/login')}>Login/Signup</button>
          )}
        
      
    </nav>
  );
};

export default NavBar;
