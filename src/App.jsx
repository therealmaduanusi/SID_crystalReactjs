// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Demo from "./Demo.jsx";

import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import Service from './Components/Service.jsx';
import Tracking from './Components/Tracking.jsx';
import Contact from './Components/Contact.jsx';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 2000
    });
  }, []); // Ensure this useEffect runs only once after component mount


  return(
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/service' element={<Service />}/>
        <Route exact path='/tracking' element={<Tracking />}/>
        <Route exact path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}


export default App