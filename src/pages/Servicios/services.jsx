import React from 'react';
import ServiceCard from '../../components/service-card/servicecard';
import './services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
  { 
    title: 'Habitaciones',
    image:'/assets/rooms/room1.webp',
    details: [
      {text :'3 camas dobles', icon: faArrowRight},
      {text :'4 camas individuales', icon: faArrowRight},
      {text :'Habitaciones luminosas', icon: faArrowRight},
      {text :'Armarios espaciosos', icon: faArrowRight},
    ],
  },
  { 
    title: 'Baños',
    image:'/assets/bathroom/bath1.webp', 
    details: [
      {text : 'Bañera', icon: faArrowRight},
      {text :'Secador', icon: faArrowRight},
      {text :'Agua caliente 24/7', icon: faArrowRight},
      {text :'Productos de aseo', icon: faArrowRight},
      {text :'Ducha exterior', icon: faArrowRight},
    ], 
  },
  { 
    title: 'Cocina',
    image:'/assets/kitchen/kit3.webp',
    details: [
      {text :'Equipamiento completo', icon: faArrowRight},
      {text :'Microondas y horno', icon: faArrowRight},
      {text :'Cafetera y utensilios', icon: faArrowRight},
      {text :'Lavavajillas', icon: faArrowRight},
      {text :'Aceite, sal y especias', icon: faArrowRight},
      {text :'Tostadora y hervidor', icon: faArrowRight},
    ], 
  },
  { 
    title: 'Entretenimiento',
    image:'/assets/experience/tres.jpg',
    details: [
      {text :'TV con streaming', icon: faArrowRight},
      {text :'Juegos de mesa', icon: faArrowRight},
      {text :'WiFi de alta velocidad', icon: faArrowRight},
      {text :'Mesa de ping-pong', icon: faArrowRight},
      {text :'Libros y revistas', icon: faArrowRight},
    ], 
  },
  { 
    title: 'Familias',
    image:'/assets/livingroom/living7.webp',
    details: [
      {text :'Cuna disponible', icon: faArrowRight},
      {text :'Sillas para niños', icon: faArrowRight},
      {text :'Espacios seguros', icon: faArrowRight},
      {text :'Vajilla infantil', icon: faArrowRight},
      {text :'Bañera para bebés' , icon: faArrowRight},
    ], 
  },
  { 
    title: 'Jardín',
    image:'/assets/greatviews/10terraza.webp',
    details: [
      {text : 'Patio o balcón privado', icon: faArrowRight},
      {text : 'Zona de barbacoa', icon: faArrowRight},
      {text : 'Mesa de comedor exterior', icon: faArrowRight},
      {text : 'Tumbonas y sombrillas', icon: faArrowRight},
    ], 
  },
  { 
    title: 'Seguridad', 
    image:'/assets/garden/9garden.webp',
    details: [
      {text : 'El anfitrión da la bienvenida', icon: faArrowRight},
      {text : 'Custodia de maletas', icon: faArrowRight},
      {text : 'Extintor de incendios', icon: faArrowRight},
      {text : 'Botiquín de primeros auxilios', icon: faArrowRight},
    ], 
  },
  { 
    title: 'Instalaciones',
    image:'/assets/garden/11chiri.webp',
    details: [
      {text : 'Piscina privada', icon: faArrowRight},
      {text : 'Calefacción', icon: faArrowRight},
      {text : 'Ventiladores portátiles', icon: faArrowRight},
      {text : 'Chimenea equipada', icon: faArrowRight},
      {text :  'Lavadora y tendedero', icon: faArrowRight},
    ], 
  },
  { 
    title: 'Vistas',
    image:'/assets/greatviews/11vistas.jpg',
    details: [
      {text :'Balcón con vistas', icon: faArrowRight},
      {text :'Entorno natural' , icon: faArrowRight},
      {text : 'Paisajes amplios', icon: faArrowRight},
    ], 
  },
];
function Services() {
  return (
    <div className="services-page">
      <h3>SERVICIOS</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} details={service.details} image={service.image}/>
        ))}
      </div>
    </div>
  );
}

export default Services;
