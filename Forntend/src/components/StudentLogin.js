import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8082/students/login?registrationNumber=${registrationNumber}&password=${password}`
      );

      // Handle successful login here
      console.log(response.data);

      // Navigate to the dashboard page or any other page
      navigate('/tutorials');
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center' }}>Student Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="registrationNumber" className="form-label">
            Registration Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="registrationNumber"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
