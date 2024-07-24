import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correct default import
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');

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
          navigate('/');
        }
      } catch (error) {
        // Handle token decoding errors
        console.error('Error decoding token:', error.message);
        setUsername(null);
        navigate('/');
      }
    } else {
      // Token not found case
      setUsername(null);
      navigate('/');
    }
  }, [navigate]);

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className={styles.dashboard}>
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
          <p>Hello, {username}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
