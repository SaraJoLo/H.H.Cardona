import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import Carrousel from '../../components/carrousel/carrousel';
import Map from '../../components/map/map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faSoap, faMountain, faSwimmingPool, faPaw, faGamepad, faCar, faTv, faBaby, faKitchenSet, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import InfoService from '../../components/infoservice/infoservice';
import Reviews from '../../components/reviews/reviews';

const amenities = [
  { icon: faWifi, label: "Wi-Fi" },
  { icon: faMountain, label: "Vista a la montaña" },
  { icon: faSwimmingPool, label: "Piscina" },
  { icon: faPaw, label: "Admite mascotas" },
  { icon: faGamepad, label: "Juegos" },
  { icon: faCar, label: "Aparcamiento gratuito" },
  { icon: faTv, label: "TV" },
  { icon: faBaby, label: "Equipamiento para bebés" },
  { icon: faSoap, label: "Lavadora" },
  { icon: faKitchenSet, label: "Cocina equipada" },
]
const images = [
  '../public/assets/greatviews/drone.webp',
  '../public/assets/garden/chiringuitocinco.jpg',
  '../public/assets/livingroom/livingsiete.webp',
  '../public/assets/garden/frentederecho.webp',
  '../public/assets/livingroom/living8.jpg',
  '../public/assets/garden/inicio1.webp',
  '../public/assets/greatviews/asaodres.jpg',
  '../public/assets/garden/dronetres.webp',
  '../public/assets/rooms/room11.jpg',
  '../public/assets/garden/frentederecho.webp',
  '../public/assets/garden/uno.webp',
  '../public/assets/livingroom/living5.webp',
  '../public/assets/garden/dos.webp',
];

function Home() {
  return (
    <div className="home-container">
      <div className='subtitle'>
        <p>"Tu Refugio en Lloret de Mar: tranquilidad y confort en cada rincón de Holiday Home Cardona"</p>
      </div>
      <Carrousel images={images} />
      <div className="description-container">
        <div className="text-section">
          <p>Escapa al lujo y la tranquilidad en esta casa rural en Lloret de Mar. Con capacidad para 13 personas, piscina privada, amplios jardines y actividades para toda la familia. ¡Perfecta para un retiro memorable! La piscina en verano y la chimenea en invierno son, sin duda alguna, sus mayores atracciones.</p>
          <p>Dos barbacoas, mucho jardín con césped, ping pong, dardos, fútbol sala, jersey para niños, juegos de mesa, biblioteca de cine, cierre de protección para niños, tronas, cunas... Todo lo que necesitas para pasar unos días inolvidables en cualquier época del año con tu familia o amigos.</p>
        </div>

        <div className="divider" />

        <div className="icon-section">
          <h3>¿QUÉ TENEMOS?</h3>
          <div className="amenities-grid">
            {amenities.map((item, index) => (
              <div key={index} className="amenity-item">
                <FontAwesomeIcon icon={item.icon} className="amenity-icon" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="moreButton">
            <Link to="/services" className="button-link">
              Y más
              <FontAwesomeIcon icon={faChevronRight} className='arrowButton' />
            </Link>
          </div>
        </div>
      </div>
      <div className='contact-box'>
        <p>Contacta con los propietarios para reservar</p>
        <Link to="/contact" className="button-link-contact">
          CONTACTAR
        </Link>
      </div>
      <InfoService />
      <Map />
      <div id="reviews">
       < Reviews />
      </div>
    </div>
  );
}

export default Home;
