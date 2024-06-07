import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    const empty = [];
    if (!email) empty.push('email');
    if (!password) empty.push('password');

    if (empty.length > 0) {
      alert('All fields are mandatory');
      setEmptyFields(empty);
      return;
    }

    const storedUserData = localStorage.getItem(email);
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.password === password) {
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('User not found. Please register.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className={`input-group ${emptyFields.includes('email') ? 'error' : ''}`}>
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
        <button onClick={handleLogin} className="btn btn-primary">Login</button>
        {isAuthenticated && <Navigate to="/edit-account" />}
        <div className="register-link">
          <Link to="/register">Don't have an account? Register here.</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
