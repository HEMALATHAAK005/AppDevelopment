import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartActions';


import '../Asserts/Services.css'; // Import your CSS file here
import Navbar from '../Components/Navbar';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Link } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Washing Machine',
    category: 'Appliances',
    price: 499.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 2,
    name: 'Air Conditioner',
    category: 'Appliances',
    price: 799.99,
    image: '/images/air-conditioner.jpg',
  },
  // Add more products here with correct price values
  {
    id: 3,
    name: 'Fridge',
    category: 'Appliances',
    price: 499.99,
    image: '/images/fridge.jpg',
  },
  {
    id: 4,
    name: 'Television',
    category: 'Appliances',
    price: 499.99,
    image: '/images/television.jpg',
  },
  {
    id: 5,
    name: 'Mixer',
    category: 'Appliances',
    price: 339.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 6,
    name: 'Grinder',
    category: 'Appliances',
    price: 459.99,
    image: '/images/washing-machine.jpg',
  },
  
  {
    id: 8,
    name: 'Induction Stove',
    category: 'Appliances',
    price: 1199.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 9,
    name: 'Speaker',
    category: 'Appliances',
    price: 99.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 10,
    name: 'Water dispenser',
    category: 'Appliances',
    price: 8799.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 11,
    name: 'Disk Washer',
    category: 'Appliances',
    price: 5699.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 12,
    name: 'Air Cooler',
    category: 'Appliances',
    price: 3499.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 13,
    name: 'Rice cooker',
    category: 'Appliances',
    price: 6599.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 14,
    name: 'Microwave oven',
    category: 'Appliances',
    price: 699.99,
    image: '/images/washing-machine.jpg',
  },
  {
    id: 15,
    name: 'Vacuum cleaner',
    category: 'Appliances',
    price: 499.99,
    image: '/images/washing-machine.jpg',
  },
  
];

function Services() {
  const dispatch = useDispatch();

  // Function to add an appliance to the cart
  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    dispatch(addToCart(product));
  };
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      
      
      
      <section className="section all-products" id="products">
        
         <br/> <br/> <br/>
         <div className='servicehead'>
          <h1>Services Available</h1>
          </div>
          <br/><br/><br/>
        <div className="product-center containerr">
          
          {/* Render product items */}
          {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="overlay">
              <a href={`/product/${product.id}`} className="product-thumb"></a>
              

            </div>
            <div className="product-info">
              <span>{product.category}</span>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
              <h4>&#8377;{product.price}</h4>
              </div>
             
              <button onClick={() => handleAddToCart(product)}>Book a Service</button>
             
              
            </div>
          ))}
        </div>
       
      </section>
      
      <footer className="footer1">
      <div className="footer-content1">
        <div className="footer-contact1">
          <h3>Contact Us</h3>
          <p>48,East Pondy Road</p>
          <p>Villupuram,TamilNadu</p>
          <p>Email: appliance360@email.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-links1">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/Aboutus">About Us</a>
            </li>
            
          </ul>
        </div>
        <div className="footer-links1">
          <h3>Terms and Conditions</h3>
          <ul>
            
            <li>
              <Link to="/Privacy">Privacy Policy</Link>
            </li>
            <li>
            <Link to="/Feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ</Link>
            </li>

          </ul>
        </div>
        <div className="footer-links1">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon /> Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon /> Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> Instagram
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom1">
        <p>&copy; {new Date().getFullYear()} Home Appliance Service Center</p>
      </div>
    </footer>
  );
    </div>
  );
}

export default Services;
