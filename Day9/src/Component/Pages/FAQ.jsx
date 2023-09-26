import React from 'react';
import '../Asserts/FAQ.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FAQ = () => {
   
  const faqData = [
    {
      question: 'How can I schedule a service appointment?',
      answer: 'You can schedule a service appointment by calling our customer support or using our online booking system.'
    },
    {
      question: 'What types of appliances do you repair?',
      answer: 'We repair a wide range of home appliances, including refrigerators, washing machines, ovens, and more. Check our services page for a complete list.'
    },
    {
      question: 'What are your service hours?',
      answer: 'Our service center is open from Monday to Friday, 9:00 AM to 6:00 PM, and on Saturdays from 10:00 AM to 4:00 PM.'
    },
    
    {
      question: 'Do you offer emergency repair services?',
      answer: 'Yes, we offer emergency repair services for urgent appliance issues. Contact us immediately, and we will dispatch a technician as soon as possible.'
    },
    {
      question: 'What is the warranty on your repairs?',
      answer: 'Our repairs come with a 90-day warranty. If the same issue reoccurs within this period, we will fix it at no additional cost.'
    },
    {
      question: 'How can I track the status of my service request?',
      answer: 'You can track the status of your service request by logging into your account on our website or by calling our customer support and providing your service request number.'
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
    <div className="faq">
         <Navbar/>
         
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
      
    </div>
    
    </div>
  );
};

export default FAQ;
