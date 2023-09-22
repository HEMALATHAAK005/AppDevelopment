import React from 'react';
import '../Asserts/Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
function Home() {
  return (
     
    <div >
      <Navbar/>
      <section className="services">
        <div className="service">
          <h2>Our Services</h2>
          
        </div>
        
          
        
      </section>
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At Home Appliance Service Center, we specialize in repairing and
          maintaining a wide range of home appliances. With our experienced
          technicians and quality spare parts, we ensure that your appliances
          are up and running in no time.
        </p>
      </section>
      
      <Footer/>
    </div>
  );
}

export default Home;
