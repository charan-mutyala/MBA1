
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast components and styles
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './Admin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/admins/checkLogin?username=${username}&password=${password}`);

      // Handle successful login here
      console.log(response.data);

      // Navigate to the dashboard page
      // navigate('/create');
      navigate('/AdminHome');

      // Show success toast
      toast.success('Login successful', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);

      // Show error toast
      toast.error('Login failed. Please check your credentials.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form">
        <h2 className="admin-login-title">Admin Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="admin-login-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-login-input"
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} className="admin-login-button">
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
