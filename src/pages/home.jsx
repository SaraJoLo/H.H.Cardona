import React from 'react';
import Carrousel from '../components/carrousel/carrousel';

const images = [
  '../public/assets/greatviews/drone.webp',
  '../public/assets/greatviews/terraza.webp',
  '../public/assets/garden/uno.webp',
  '../public/assets/garden/dos.webp',
  '../public/assets/garden/droneuno.webp',
  '../public/assets/garden/dronedos.webp',
  '../public/assets/garden/dronetres.webp',
];

function Home() {
  return (
    <div>
      <Carrousel images={images} />
    </div>
  );
}

export default Home;
