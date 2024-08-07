import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MyAccount.module.scss';
import { jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';


const MyAccount = () => {
  const [user, setUser] = useState({ id:'', name: '', email: '' });
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = Cookies.get('token');
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.user.id;
          const res = await axios.get('http://localhost:5000/api/users/me/'+ userId, { withCredentials: true });
          setUser(res.data);
        }
       
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:5000/api/users/me', user, { withCredentials: true });
      setUser(res.data);
      setMessage('User details updated successfully');
    } catch (err) {
      console.error(err);
      setMessage('Error updating user details');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/api/users/me/password', { oldPassword, newPassword }, { withCredentials: true });
      setMessage('Password updated successfully');
    } catch (err) {
      console.error(err);
      setMessage('Error updating password');
    }
  };

  return (
    <div className={styles.myAccountPage}>
      <h2>My Account</h2>
      <form onSubmit={handleUpdate} className={styles.accountForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        {message && <p className={styles.message}>{message}</p>}
        <button type="submit" className={styles.updateButton}>Update Details</button>
      </form>

      <h3>Change Password</h3>
      <form onSubmit={handlePasswordChange} className={styles.passwordForm}>
        <div className={styles.formGroup}>
          <label htmlFor="oldPassword">Old Password</label>
          <input type="password" id="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button type="submit" className={styles.changePasswordButton}>Change Password</button>
      </form>
    </div>
  );
};

export default MyAccount;
