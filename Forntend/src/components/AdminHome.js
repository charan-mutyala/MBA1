import React from 'react';
import { Link } from 'react-router-dom';
import { MdContentPaste, MdOutlineContentPasteGo } from 'react-icons/md';
import { PiStudent, PiUsersFour, PiUsersThreeFill } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import './AdminHome.css';

const AdminHome = () => {
  return (
    <div className="admin-home-container">
      <h2 style={{ marginBottom: '15px', padding: '10px', textAlign: 'center' }}>Welcome to Admin Home</h2>
      <div className="admin-options">
        <Link to="/create" className="admin-option">
          <MdContentPaste className="admin-icon" />
          Add Content
        </Link>

        <Link to="/view-all" className="admin-option">
          <MdOutlineContentPasteGo className="admin-icon" />
          View Content
        </Link>

        <Link to="/add-students" className="admin-option">
          <PiStudent className="admin-icon" />
          Add Student
        </Link>

        <Link to="/view-students" className="admin-option">
          <PiUsersFour className="admin-icon" />
          View All Students
        </Link>

        <Link to="/add-admin" className="admin-option">
          <CgProfile className="admin-icon" />
          Add Admins
        </Link>

        <Link to="/view-admins" className="admin-option">
          <PiUsersThreeFill className="admin-icon" />
          View All Admins
        </Link>

        <Link to="/" className="admin-option">
          <RiLogoutCircleRLine className="admin-icon" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
