// src/components/Registration.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Cookies from 'js-cookie'; // Import Cookies for cookie management

const Registration = ({ setUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // State to track registration status

  const handleRegistration = () => {
    // Perform registration logic here
    // For simplicity, we'll save user data in cookies
    Cookies.set('userData', JSON.stringify({ firstName, lastName, email, password, mobileNumber }));
    setUser({ firstName, lastName, email, password, mobileNumber });
    setIsRegistered(true);
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="tel" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
      {/* Redirect to edit page after successful registration */}
      {isRegistered && <Navigate to="/edit-account" />}
      {/* Link to login page */}
      <Link to="/login">Already registered? Login here.</Link>
    </div>
  );
};

export default Registration;
