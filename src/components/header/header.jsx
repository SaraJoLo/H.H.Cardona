import React, { useState } from 'react';
import './header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="headerBox">
      <div className="titleBox">
        <a href="/" className="titleLink">Holiday Home Cardona</a>
      </div>
      
      <button 
        className="menuButton" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div>
        <ul className={`navBar ${isMenuOpen ? 'active' : ''}`}>
          <li className="navOp"><a href="/">Inicio</a></li>
          <li className="navOp"><a href="/aboutus">Sobre nosotros</a></li>
          <li className="navOp"><a href="/services">Servicios</a></li>
          <li className="navOp"><a href="/gallery">Galería</a></li>
          <li className="navOp"><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Header;