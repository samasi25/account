// src/components/Login.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Import Navigate for redirection

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true'); // Check if user is already logged in

  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, we'll retrieve user data from local storage only if logged in
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      setUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true'); // Set logged in status in local storage
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {/* Redirect to edit page after successful login */}
      {isLoggedIn && <Navigate to="/edit-account" />}
      {/* Link to registration page */}
      <Link to="/register">Not registered? Register here.</Link>
    </div>
  );
};

export default Login;
