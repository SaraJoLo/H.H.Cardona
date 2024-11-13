import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from '../src/components/header/header';
import Services from './pages/Servicios/services';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
  );
}

export default App;
