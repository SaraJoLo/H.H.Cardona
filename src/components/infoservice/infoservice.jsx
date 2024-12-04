import React from "react";
import "./infoservice.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const img ="/assets/greatviews/12vistas.webp";
function InfoService() {
    return (
        <section className="section-container">
             <div className="foundImg">
               <img src={img} alt="imagen-de-fondo" />
            </div>
        <div className="info-container">
        <ul>
            <p>INFORMACION</p>
          <li class="list"><a href="https://www.google.com/maps/place/Holiday+Home+Cardona/@41.7341501,2.8204023,17z/data=!4m10!3m9!1s0x12bb19c9d798ed57:0xce192fc9584eb23d!5m3!1s2024-12-20!4m1!1i2!8m2!3d41.7341501!4d2.8229772!16s%2Fg%2F11pb30fl1g?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D">Ubicación <FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></a></li>
          <li class="list"><Link to="/contact">Contacto<FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
          <li class="list"><ScrollLink to="reviews" smooth={true} duration={500}>Valoraciones<FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></ScrollLink></li>
        </ul>
        </div>
        
        <div className="info-container">
        <ul>
            <p>SERVICIOS</p>
          <li class="list"><Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Servicios<FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
          <li class="list"><Link to="/gallery">Galería de fotos<FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
          <li class="list"><Link to="/askers">Preguntas frecuentes  <FontAwesomeIcon icon={ faChevronRight} className='arrowButton' /></Link></li>
        </ul>
        </div>
        </section> 
    );
}
export default InfoService;