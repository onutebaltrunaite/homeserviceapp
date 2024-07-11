import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Mock login logic - replace with actual login API call
    if (username === 'demo' && password === 'password') {
      navigate('/dashboard'); // Redirect on successful login
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSignup = () => {
    // Redirect to signup or handle signup logic
    console.log('Redirect to signup');
  };

  return (
    <div className={styles.loginPage}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
