// src/components/AccountManagement.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const AccountManagement = ({ user }) => {
  return (
    <div>
      <h2>Account Management</h2>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <Link to="/edit-account"><button>Edit Account</button></Link>
    </div>
  );
};

export default AccountManagement;
