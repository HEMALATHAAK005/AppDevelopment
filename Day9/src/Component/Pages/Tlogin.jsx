import React, { useState } from 'react';
import '../Asserts/Tlogin.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function TechnicianLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook to get the navigate function

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here, e.g., send a request to the server for authentication
    // For this example, we'll just log the values for demonstration purposes
    console.log('Username:', username);
    console.log('Password:', password);

    if (username && password) {
      // Use the navigate function to navigate to the /dashboard route
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-containertt">
      <h2>Technician Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grouptt">
          <label htmlFor="uusername">Username</label>
          <input
            type="text"
            id="uusername"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-grouptt">
          <label htmlFor="ppassword">Password</label>
          <input
            type="password"
            id="ppassword"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="bton" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default TechnicianLogin;
