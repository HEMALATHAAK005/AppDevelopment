import React, { useState } from 'react';
import '../Asserts/Feedback.css'; // Import the CSS for styling
import Navbar from '../Components/Navbar';


const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the feedback data (e.g., send it to a server)
    console.log('Feedback submitted:', { feedback, name, email });
    // Reset the form fields
    setFeedback('');
    setName('');
    setEmail('');
  };

  return (
    
    <div className="feedback-form">
        <Navbar/>
        
      
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default FeedbackForm;
