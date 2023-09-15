import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hstyle.css'; 

function SignupPage() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = () => {
    // Add your signup logic here (e.g., create a new user on the server).
    if (newPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
    } else {
      // Perform signup actions (e.g., API request to create a new user).
      console.log('User signed up successfully!');
      // Clear form fields and errors after successful signup.
      setNewUsername('');
      setNewPassword('');
      setConfirmPassword('');
      setSignupError('');
    }
  };

  return (
    <div className="container">
      <div className="design">
      <div className="pill-1 rotate-45"></div>
        <div className="pill-2 rotate-45"></div>
        <div className="pill-3 rotate-45"></div>
        <div className="pill-4 rotate-45"></div>
      
      </div>
      <div className="signup">
        <h3 className="title">Create an Account</h3>
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input type="text" placeholder="Username" value={newUsername} onChange={handleNewUsernameChange} />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Password" value={newPassword} onChange={handleNewPasswordChange} />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button className="signup-btn" onClick={handleSignup}>SIGN UP</button>
        <br/>
        <p className="error">{signupError}</p>
        <br/>
        <div className="create">
          <Link to="/">Already have an account? Login</Link>
          <i className="ri-arrow-right-fill"></i> 
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
