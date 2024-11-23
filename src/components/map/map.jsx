import React from 'react';
import './map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';



const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `<i class="fa-solid fa-location-dot" style="color: #e08401; font-size: 24px;"></i>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

const Map = () => {
  return (
    <>
    <section className="map-section">
      <div className="text-box">
        <p>¿CÓMO LLEGAR?</p>
      </div>
      <MapContainer
        center={{ lat: '41.7341501', lng: '2.8204023' }}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={{ lat: '41.7341501', lng: '2.8204023' }}
        >
          <Popup>-Holiday Home Cardona- <br/> <a
          href="https://www.google.com/maps/place/Holiday+Home+Cardona/@41.7341501,2.8204023,17z/data=!4m10!3m9!1s0x12bb19c9d798ed57:0xce192fc9584eb23d!5m3!1s2024-12-20!4m1!1i2!8m2!3d41.7341501!4d2.8229772!16s%2Fg%2F11pb30fl1g?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir en Google Maps
        </a> </Popup>
        </Marker>
      </MapContainer>
      <div className="google-maps-link">
        <a
          href="https://www.google.com/maps/place/Holiday+Home+Cardona/@41.7341501,2.8204023,17z/data=!4m10!3m9!1s0x12bb19c9d798ed57:0xce192fc9584eb23d!5m3!1s2024-12-20!4m1!1i2!8m2!3d41.7341501!4d2.8229772!16s%2Fg%2F11pb30fl1g?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir en Google Maps
        </a>
      </div>
      <div className='more-info'>
        <p>La casa se encuentra situada a 10 minutos coche del centro de Lloret, 30 minutos de Tossa de Mar y 35 minutos de Girona. Es una ubicación ideal para quienes buscan descanso, desconexión y pasar por las calas mas lindas de la Costa Brava.</p>
        <p>Para más información sobre cómo llegar a nuestro alojamiento, no dudes en contactar con nosotros.</p>
        <h3>Alrededores del alojamiento</h3>
<div className="routes-container">
  <ul className="routes-list">
    <li>
      <a href="https://www.google.com/maps/place/Jardines+de+Santa+Clotilde/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Jardines de Santa Clotilde - 5 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Castell+de+Sant+Joan/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Castell de Sant Joan - 6 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Sould+Park+Lloret+de+Mar/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Sould Park Lloret de Mar - 6 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Colección+de+Automóviles+Salvador+Claret/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Colección de Automóviles Salvador Claret - 17 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Playa+de+Fenals/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Playa de Fenals - 5 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Aeropuerto+de+Girona-Costa+Brava/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Aeropuerto de Girona - 29 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Platja+de+Lloret+de+Mar/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Playa de Lloret de Mar - 5 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Cala+Treumal/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Playa de Treumal - 7 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Blanes/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Tren de Blanes - 11 km
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/Estación+de+tren+de+Tordera/...">
        <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
        Tren de Tordera - 16 km
      </a>
    </li>
  </ul>
</div>
<p>Se muestran las distancias estimadas más cortas a pie o en coche (las distancias reales pueden variar).</p>


      </div>
      </section>
    </>
  );
};

export default Map;
