import React, { useRef } from 'react';
import './carrousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Carrousel = ({ images }) => {
    const carrouselRef = useRef(null);
    const scrollLeft = () => {
        carrouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carrouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <section className="boxCarrousel">
            <button className="nav-button left" onClick={scrollLeft}>
                <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#ffffff' }} />
            </button>
            <div className="carrousel-container" ref={carrouselRef}>
                <div className="image-wrapper">
                    {images.map((image) => (

                        <img 
                        key={image.id}
                        src={image.url}
                        alt={image.alt}
                        className="carousel-image"
                        />
                        
                    ))}
                </div>
            </div>
            <button className="nav-button right" onClick={scrollRight}>
                <FontAwesomeIcon icon={faChevronRight} style={{ color: '#ffffff' }} />
            </button>
        </section>
    );
};

export default Carrousel;
