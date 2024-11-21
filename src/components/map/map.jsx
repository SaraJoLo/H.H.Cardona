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
        <li className='list-box'>
            <a href='https://www.google.com/maps/place/Jardines+de+Santa+Clotilde/@41.6937638,2.8200474,16z/data=!3m1!4b1!4m6!3m5!1s0x12bb170486e592d7:0xc84852d63cd27a60!8m2!3d41.6937639!4d2.8249183!16s%2Fg%2F1hl3gqhkd?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D'><FontAwesomeIcon icon={ faChevronRight} className='arrowButton' ></FontAwesomeIcon>Jardines de Santa Clotilde </a>
            <a href='https://www.google.com/maps/place/Castell+de+Sant+Joan/@41.6938328,2.836766,17z/data=!3m1!4b1!4m6!3m5!1s0x12bb10cc92080c7d:0xa3ca0f06cde34621!8m2!3d41.6938328!4d2.8393409!16s%2Fg%2F128dgmkdc?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D'><FontAwesomeIcon icon={ faChevronRight} className='arrowButton' ></FontAwesomeIcon>Castell de Sant Joan</a>
            <a href='https://www.google.com/maps/place/Colecci%C3%B3n+de+Autom%C3%B3viles+Salvador+Claret/@41.8334222,2.7519419,17z/data=!3m1!4b1!4m6!3m5!1s0x12bb21b893c1e0bf:0x43cb6a07337c0c98!8m2!3d41.8334223!4d2.7568128!16s%2Fg%2F121g0z_r?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D'><FontAwesomeIcon icon={ faChevronRight} className='arrowButton' ></FontAwesomeIcon>Colección de Automóviles Salvador Claret</a>
        </li>
      </div>
    </>
  );
};

export default Map;
