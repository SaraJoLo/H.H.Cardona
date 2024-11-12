import React from 'react';
import Carrousel from '../components/carrousel/carrousel';

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
    <div>
        <Carrousel images={images} />
    </div>
  );
}

export default Home;
