import React from "react";
import "./infoservice.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';

function InfoService() {
    return (
        <section className="section-container">
             <div className="foundImg">
               <img src='../../public/assets/garden/dronetres.webp' alt="imagen-de-fondo" />
            </div>
        <div className="info-container">
        <ul>
            <p>INFORMACION</p>
          <li class="list"><Link to="/">Ubicación <FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
          <li class="list"><Link to="/contact">Contacto<FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
          <li class="list"><Link to="/">Valoraciones<FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
        </ul>
        </div>
        
        <div className="info-container">
        <ul>
            <p>SERVICIOS</p>
          <li class="list"><Link to="/services">Servicios<FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
          <li class="list"><Link to="/gallery">Galería de fotos<FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
          <li class="list"><Link to="/askers">Preguntas frecuentes  <FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
        </ul>
        </div>
        </section> 
    );
}
export default InfoService;