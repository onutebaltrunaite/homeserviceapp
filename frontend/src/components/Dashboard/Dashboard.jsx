import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Library for decoding JWT tokens
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');


    if (token) {
      try {
        // Decode token to get user information

        const decodedToken = jwtDecode(token);
        if (decodedToken) {
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
 
  }, []);

  return (
    <div className={styles.dashboard}>
      {username ? <p>Hello, {username}</p> : <p></p> }
    </div>
  );
};

export default Dashboard;