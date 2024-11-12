
import React, { useState } from 'react';
import './carrousel.scss';

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section clalss="boxCarrousel">
        <div className="carrousel-container">
        <button className="nav-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="image-wrapper">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="nav-button next" onClick={goToNext}>
        &#10095;
      </button>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
        </div>
      
    </section>
  );
};

export default Carrousel;
