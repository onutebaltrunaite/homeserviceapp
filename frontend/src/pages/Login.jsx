import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.scss';
import Cookies from 'js-cookie';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password }); // Adjusted endpoint
    
      // Store the JWT token in a cookie
      Cookies.set('token', res.data.token, { expires: 1 });

      navigate('/'); 
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleSignup = () => {
    navigate('/register'); 
  };

  return (
    <div className={styles.loginPage}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.formActions}>
          <button type="submit" className={styles.loginButton}>Login</button>
          <p>Don't have an account? <span onClick={handleSignup} className={styles.signupLink}>Sign up</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
