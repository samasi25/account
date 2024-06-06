// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for conditional routing

import Registration from './components/Registration';
import Login from './components/Login';
import EditAccount from './components/EditAccount'; // Import the EditAccount component

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Route to the registration page */}
        <Route path="/register" element={<Registration setUser={setUser} />} />
        {/* Route to the login page */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        {/* Protected route for the edit account page */}
        <Route path="/edit-account" element={<EditAccount user={user} />} />
        {/* Redirect to registration if not registered */}
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
};

export default App;
