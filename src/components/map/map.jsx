import React from 'react';
import './map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


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
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={{ lat: '41.7341501', lng: '2.8204023' }}
        >
          <Popup>-Holiday Home Cardona-</Popup>
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
    </>
  );
};

export default Map;
