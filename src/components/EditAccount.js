import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EditAccount.css';
import { FaUser, FaEnvelope, FaMobileAlt, FaEdit } from 'react-icons/fa';

const EditAccount = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    const updatedUser = { ...user, firstName, lastName, email, mobileNumber };
    localStorage.setItem(email, JSON.stringify(updatedUser));
    alert('Changes saved successfully!');
    setIsEditing(false);
  };

  return (
    <div className="edit-account-container">
      <div className="profile-header">
        <h2><FaUser /> Profile</h2>
        <button onClick={() => setIsEditing(true)} className="edit-btn"><FaEdit /> Edit</button>
      </div>
      {isEditing ? (
        <div className="edit-form">
          <div className="form-row">
            <div className="input-group">
              <label><FaUser /> First Name:</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" />
            </div>
            <div className="input-group">
              <label><FaUser /> Last Name:</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label><FaEnvelope /> Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="input-group">
              <label><FaMobileAlt /> Mobile Number:</label>
              <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="form-control" />
            </div>
          </div>
          <button onClick={handleSave} className="btn btn-primary">Save Changes</button>
        </div>
      ) : (
        <div className="profile-info">
          <p><strong>Name:</strong> {firstName} {lastName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Mobile Number:</strong> {mobileNumber}</p>
        </div>
      )}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default EditAccount;
