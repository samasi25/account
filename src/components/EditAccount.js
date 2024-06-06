// src/components/EditAccount.js
import React, { useState, useEffect } from 'react';

const EditAccount = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true'); // Check if user is logged in

  useEffect(() => {
    // Check if user is logged in, otherwise redirect to login page
    if (!isLoggedIn) {
      alert('Please log in to edit your account.');
      window.location.href = '/login';
    }
  }, [isLoggedIn]);

  const handleEdit = () => {
    // Perform edit logic here
    // For simplicity, we'll update user data in local storage only if logged in
    if (isLoggedIn) {
      localStorage.setItem(email, JSON.stringify({ firstName, lastName, email, password, mobileNumber }));
      alert('Changes saved successfully!');
    }
  };

  return (
    <div>
      <h2>Edit Account</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="tel" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      <button onClick={handleEdit}>Save Changes</button>
    </div>
  );
};

export default EditAccount;
