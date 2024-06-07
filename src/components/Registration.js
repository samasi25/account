import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Registration.css';
import { FaUser, FaEnvelope, FaLock, FaMobileAlt } from 'react-icons/fa';

const Registration = ({ setUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const handleRegister = () => {
    const empty = [];
    if (!firstName) empty.push('firstName');
    if (!lastName) empty.push('lastName');
    if (!email) empty.push('email');
    if (!password) empty.push('password');
    if (!mobileNumber) empty.push('mobileNumber');

    if (empty.length > 0) {
      alert('All fields are mandatory');
      setEmptyFields(empty);
      return;
    }

    const storedUserData = localStorage.getItem(email);
    if (storedUserData) {
      setEmailExists(true);
      return;
    }

    const userData = { firstName, lastName, email, password, mobileNumber };
    localStorage.setItem(email, JSON.stringify(userData));
    setUser(userData);
    setIsRegistered(true);
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Register</h2>
        {emailExists && <p className="error-message">Email is already registered. Try logging in.</p>}
        <div className={`input-group ${emptyFields.includes('firstName') ? 'error' : ''}`}>
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className={`input-group ${emptyFields.includes('lastName') ? 'error' : ''}`}>
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className={`input-group ${emptyFields.includes('email') || emailExists ? 'error' : ''}`}>
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className={`input-group ${emptyFields.includes('password') ? 'error' : ''}`}>
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className={`input-group ${emptyFields.includes('mobileNumber') ? 'error' : ''}`}>
          <FaMobileAlt className="input-icon" />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button onClick={handleRegister} className="btn btn-primary">Register</button>
        {isRegistered && <Navigate to="/edit-account" />}
        <div className="login-link">
          <Link to="/login">Already registered? Login here.</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
