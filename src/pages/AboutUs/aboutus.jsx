import React from 'react';
import './aboutus.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faStar, faFaceSmile, faClock, faCheck, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <div className='admin-box'>
      <h2>Sobre nosotras</h2>

      <div className='content-box'>
        <div className='about-card'>
          <img
            src='../public/assets/aboutUs.jpg'
            alt='aboutUs'
            className='admin-img'
          />
          <ul className='admin-features'>
            <li>
              <FontAwesomeIcon icon={faStar} style={{ color: '#000000' }} />
              Más de 90 valoraciones positivas
            </li>
            <li>
              <FontAwesomeIcon icon={faFaceSmile} style={{ color: '#000000' }} />
              Nací en los 60
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} style={{ color: '#000000' }} />
              7 años de experiencia
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} style={{ color: '#000000' }} />
              Usuario verificado
            </li>
            <li>
              <FontAwesomeIcon
                icon={faShieldHalved}
                style={{ color: '#000000' }}
              />
              Idiomas: catalán, inglés y español
            </li>
          </ul>
        </div>

        <div className='text-box'>
          <h3>Anfitriones: Alejandra y Juan</h3>
          <p>
            Me enorgullece brindar un servicio de excelencia, asegurándome de que
            cada detalle de tu estancia esté cuidado. Mi familia y yo somos de
            Barcelona, y vivimos a solo unas horas de esta hermosa casa
            vacacional, por lo que conocemos bien la zona y sus encantos.
          </p>
          <p>
            Holiday Home Cardona es más que un simple alojamiento; es un espacio
            diseñado para disfrutar en cualquier época del año, con comodidades
            como piscina privada, amplios jardines y actividades para toda la
            familia. Nos hemos asegurado de que cada rincón esté pensado para tu
            confort y diversión, desde las barbacoas al aire libre hasta la
            chimenea en invierno.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;