import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Admin.css';

const AddAdmin = () => {
  const [adminData, setAdminData] = useState({
    username: '',
    password: '',
    // Add more fields as needed
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateAdmin = () => {
    axios.post('http://localhost:8082/admins/createadmin', adminData)
      .then(response => {
        console.log('Admin created successfully:', response.data);
        toast.success('Admin created successfully');
        // Redirect to admin login page or other page as needed
        navigate('/adminlogin');
      })
      .catch(error => {
        console.error('Error creating admin:', error);
        toast.error('Error creating admin');
      });
  };

  return (
    <div>
      <h2>Create Admin</h2>

      <form className="admin-login-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={adminData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={adminData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleCreateAdmin}>
          Create Admin
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddAdmin;
