import React from 'react';
import './map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



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
          <h3>¿CÓMO LLEGAR?</h3>
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
            <Popup>-Holiday Home Cardona- <br /> <a
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
          <h3>Alrededores del alojamiento :</h3>
          <div className="routes-container">
            <ul className="routes-list">
              <li>
                <a href="https://www.google.com/maps/place/Jardines+de+Santa+Clotilde/@41.6942321,2.8314907,15.18z/data=!4m6!3m5!1s0x12bb170486e592d7:0xc84852d63cd27a60!8m2!3d41.6937639!4d2.8249183!16s%2Fg%2F1hl3gqhkd?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
                  <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
                  Jardines de Santa Clotilde - 5 km
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Castell+de+Sant+Joan/@41.6938328,2.836766,17z/data=!3m1!4b1!4m6!3m5!1s0x12bb10cc92080c7d:0xa3ca0f06cde34621!8m2!3d41.6938328!4d2.8393409!16s%2Fg%2F128dgmkdc?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
                  <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
                  Castell de Sant Joan - 6 km
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Sould+Park+Lloret+de+Mar+-+Parque+infantil+y+de+Atracciones/@41.7013033,2.8405665,16.27z/data=!4m6!3m5!1s0x12bb17396f09428b:0xe18c439eb500a973!8m2!3d41.7015791!4d2.8442598!16s%2Fg%2F11cmfw58nb?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
                  <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
                  Sould Park Lloret de Mar - 6 km
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Colecci%C3%B3n+de+Autom%C3%B3viles+Salvador+Claret/@41.8334223,2.7542379,17z/data=!3m1!4b1!4m6!3m5!1s0x12bb21b893c1e0bf:0x43cb6a07337c0c98!8m2!3d41.8334223!4d2.7568128!16s%2Fg%2F121g0z_r?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
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
                <a href="https://www.google.com/maps/place/Aeropuerto+de+Girona-Costa+Brava+(GRO)/@41.8978424,2.7634892,17z/data=!3m1!4b1!4m6!3m5!1s0x12badfefc8b510d3:0x9bc3dd82d40e4ae3!8m2!3d41.8978424!4d2.7660641!16zL20vMDdnX3ds?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
                  <FontAwesomeIcon icon={faChevronRight} className="arrowButton" />
                  Aeropuerto de Girona - 29 km
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Platja+de+Lloret+de+Mar/@41.6994805,2.8499975,17.73z/data=!4m14!1m7!3m6!1s0x12bb1040bdd82f91:0x4bd53307130b573!2sPlaya+de+Lloret!8m2!3d41.7!4d2.9166667!16s%2Fg%2F1q5br5l13!3m5!1s0x12bb1731190ed5a7:0xb0a210615963902d!8m2!3d41.6990722!4d2.8506776!16s%2Fg%2F11c4bhvfdn?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
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
                <a href="https://www.google.com/maps/place/Estaci%C3%B3n+de+tren+de+Tordera/@41.7070954,2.7170127,17z/data=!3m1!4b1!4m6!3m5!1s0x12bb3d93fd5eadf3:0x387d2dc99256c69d!8m2!3d41.7070954!4d2.7195876!16s%2Fg%2F11vjbz82zv?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
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
