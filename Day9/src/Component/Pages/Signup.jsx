import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link , useNavigate } from 'react-router-dom';
import '../Asserts/signup.css'; 

function SignupPage() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  
  const navigate=useNavigate();
  
  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {  // useselector,usedispatch,usestate,props,redex
    setConfirmPassword(event.target.value);
  };

  const handleSignup = () => {
    // Reset any previous error messages
    setSignupError('');

    // Basic validation
    if (newUsername.trim() === '') {
      setSignupError('Username is required');
    } else if (newPassword.trim() === '') {
      setSignupError('Password is required');
    } else if (newPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
    } else {
      // Perform signup actions (e.g., API request to create a new user).
      console.log('User signed up successfully!');
      
      // Display an alert box with the entered details
      alert(`Signed up with username: ${newUsername} and password: ${newPassword}`);
      
      // Clear form fields after successful signup.
      setNewUsername('');
      setNewPassword('');
      setConfirmPassword('');
      navigate("/");
    }
  };

  return (
    <div className="container1">
      <div className="design1">
        <div className="pill-11 rotate-45"></div>
        <div className="pill-21 rotate-45"></div>
        <div className="pill-31 rotate-45"></div>
        <div className="pill-41 rotate-45"></div>
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
          <Link to="/LoginPage">Already have an account? Login</Link>
          <i className="ri-arrow-right-fill"></i> 
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
