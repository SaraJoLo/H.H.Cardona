import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="headerBox">
      <div className="titleBox">
        <Link to="/" className="titleLink">
          <span className='full-title'>Holiday Home Cardona</span>
          <span className='short-title'>H.H Cardona</span>
        </Link>
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
          <li className="navOp"><Link to="/">Inicio</Link></li>
          <li className="navOp"><Link to="/aboutus">Sobre nosotros</Link></li>
          <li className="navOp"><Link to="/services">Servicios</Link></li>
          <li className="navOp"><Link to="/gallery">Galería</Link></li>
          <li className="navOp"><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
