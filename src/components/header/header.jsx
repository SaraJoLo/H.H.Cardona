import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section class="headerBox">
      <div className="titleBox">
        <Link to="/" className="titleLink">Holiday Home Cardona</Link>
      </div>
      <div >
        <ul className="navBar">
          <li class="navOp"><Link to="/">Inicio</Link></li>
          <li class="navOp"><Link to="/aboutus">Sobre nosotros</Link></li>
          <li class="navOp"><Link to="/services">Servicios</Link></li>
          <li class="navOp"><Link to="/gallery">Galería</Link></li>
          <li class="navOp"><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </section>
  );
};
export default Header; 