import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Link , useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { login } from './userSlice'; 

import './style.css'; 

function LoginPage() {
  
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('');

  const navigate=useNavigate();
  
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }

 
  const submitHandler = (e) => {

    console.log(formdata.username,formdata.password)
    
    e.preventDefault();
    dispatch(login({
      username :formdata.username
    }))
    navigate('/Dashboard')
  }

  return ( 
    <div className="container">
      <div className="design">
        <div className="pill-1 rotate-45"></div>
        <div className="pill-2 rotate-45"></div>
        <div className="pill-3 rotate-45"></div>
        <div className="pill-4 rotate-45"></div>
      </div>
      <div className="login">
        <h3 className="title">User Login</h3>
        {error && <div className="error">{error}</div>}
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input type="text" placeholder="Username" id="username" value={formdata.username} onChange={handleChange} />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Password" id="password" value={formdata.password} onChange={handleChange} />
        </div>
        <button className="login-btn" onClick={submitHandler}>LOGIN</button>
        <br/>
        <br/> 
        <div className="create">
          <Link to="/Signup">Create Your Account</Link>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;