import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Component/Pages/LoginPage';
import Signup from './Component/Pages/Signup';
import Layout from './Component/Components/Layout';
import Home from './Component/Pages/Home';
import Navbar from './Component/Components/Navbar';
import Dashboard from './Component/Pages/Dashboard';
import Footer from './Component/Components/Footer';
import AboutUs from './Component/Pages/Aboutus';
import Services from './Component/Pages/Services';
import Book from './Component/Pages/Book';
import ApplianceComponent from './Component/Redux/ApplianceComponent';
import Privacy from './Component/Pages/Privacy';
import FAQ from './Component/Pages/FAQ';
import  TechnicianLogin from './Component/Pages/Tlogin';
import FeedbackForm from './Component/Pages/Feedback';
import Cart from './Component/Redux/Cart';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route exact path='/Dashboard'element={<Dashboard/>} />
          <Route exact path='/Layout' element={<Layout/>}/>
          <Route exact path='/Footer' element={<Footer/>}/>
          <Route exact path='/Aboutus' element={<AboutUs/>}/>
          <Route exact path='/Services' element={<Services/>}/>
          <Route exact path='/Book' element={<Book/>}/>
          <Route exact path='/Privacy' element={<Privacy/>}/>
          <Route exact path='/FAQ' element={<FAQ/>}/>
          <Route exact path='/TechnicianLogin' element={<TechnicianLogin/>}/>
          <Route exact path='/Feedback' element={<FeedbackForm/>}/>
          <Route exact path="/ApplianceComponent" element={<ApplianceComponent/>} />
          <Route path="/cart" element={<Cart/>} />
         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
