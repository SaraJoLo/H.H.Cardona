import React from 'react';
import './home.scss';
import Carrousel from '../../components/carrousel/carrousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faMountain, faSwimmingPool, faPaw, faGamepad, faCar, faTv, faBaby, faKitchenSet } from '@fortawesome/free-solid-svg-icons';

const amenities = [
  { icon: faWifi, label: "Wi-Fi" },
  { icon: faMountain, label: "Vista a la montaña" },
  { icon: faSwimmingPool, label: "Piscina" },
  { icon: faPaw, label: "Admite mascotas" },
  { icon: faGamepad, label: "Juegos" },
  { icon: faCar, label: "Aparcamiento gratuito" },
  { icon: faTv, label: "TV" },
  { icon: faBaby, label: "Equipamiento para bebés" },
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
        </div>
      </div>
    </div>
  );
}

export default Home;
