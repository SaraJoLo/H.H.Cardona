import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from '../src/components/header/header';
import Services from './pages/Servicios/services';
import Gallery from './pages/Gallery/gallery';
import Contact from './pages/Contact/conctact';
import AboutUs from './pages/AboutUs/aboutus';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
  );
}

export default App;
