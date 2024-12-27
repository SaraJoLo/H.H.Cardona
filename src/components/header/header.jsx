import React, { useState } from 'react';
import './header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="headerBox">
      <div className="titleBox">
        <a href="/" className="titleLink">
        <span className='full-title'>Holiday Home Cardona</span>
        <span className='short-title'>H.H Cardona</span>
        </a>
      </div>
      
      <button 
        className="menuButton" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className='hamburgerMenu'></span>
        <span className='hamburgerMenu'></span>
        <span className='hamburgerMenu'></span>
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