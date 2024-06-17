import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Service from "./Pages/Service.jsx";
import Tracking from "./Pages/Tracking.jsx";
import Contact from "./Components/Contact.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 2000,
    });
  }, []); // Ensure this useEffect runs only once after component mount

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/tracking" element={<Tracking />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
