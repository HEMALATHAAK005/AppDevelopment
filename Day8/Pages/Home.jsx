import React from 'react';
import '../Asserts/Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header className="header" id="header">
        <Navbar/>
        
      </header>
      <br/><br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>

      {/* New Arrivals Section */}
      <section className="section new-arrival">
        <div className="title1">
          <h1><b>Welcome to Appliance360</b></h1>
          
        </div>
        
        
      </section>

      {/* Promo Section */}
      <section className="section banner">
        
        <div className="left">
  <span className="service-center">Home Appliance Service Center</span>
  <h1>Quality Repairs & Maintenance</h1>
  <p>Expert Technicians <span className="color">Get Your Appliances Working Like New</span></p>
  <div className="btn btn-1">
  <Link
              to="/Services"
              style={{ color: 'white' }}
            >
              <h4>Explore Services</h4>
              
            </Link>
  </div>
</div>

        
      </section>

      {/* Featured Section */}
      <section className="section new-arrival">
        <div className="title">
          <h1>Why choose us?</h1>
          <p>Our team of talented designers and developers is passionate about 
            crafting visually stunning and functional websites that stand out in the digital landscape.
            We don't believe in one-size-fits-all. Our approach is to create customized web 
            solutions that perfectly align with your unique brand identity and objectives.</p>
        </div>
        <div className="product-center">
          <div className="product-item">
            
            
            <ul className="icons">
              <li><i className="bx bx-heart"></i></li>
              <li><i className="bx bx-search"></i></li>
              <li><i className="bx bx-cart"></i></li>
            </ul>
          </div>
          {/* Add more featured product items here */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="row">
          <div className="col">
            <h2>EXCELLENT SUPPORT</h2>
            <p>We love our customers, and they can reach us anytime. We are at your service 24/7.</p>
            
          </div>
          <div className="col">
            <form action="">
              <div>
                <input type="email" placeholder="Email Address" />
                <Link
              to=" "
              
            >
              Send
            </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer/>
      {/* Popup Section */}
      
    </div>
  );
}

export default Home;
