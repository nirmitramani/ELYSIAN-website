import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import Hero from './components/home';
import Properties from './components/pages/Properties';
import ContactUs from './components/pages/ContactUs';
import PropertieDetails from './components/pages/PropertieDetails';

window.react_app_url = "http://localhost:3000/";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties-details/:id" element={<PropertieDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
