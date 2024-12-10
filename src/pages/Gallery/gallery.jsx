import React, { useState, useEffect } from 'react';
import './gallery.scss';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('experience');
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada en el modal

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/assets/json/img.json');
        if (!response.ok) throw new Error('Error fetching JSON');
        const data = await response.json();

        const filteredImages = Object.entries(data.images || {}).reduce(
          (acc, [category, items]) => {
            if (category === 'carrousel') return acc;
            if (category === 'Experiencias') {
              acc[category] = items.filter((item) => item.id !== 4 && item.id !== 5);
            } else {
              acc[category] = items;
            }
            return acc;
          },
          {}
        );

        setImages(filteredImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderImages = () => {
    if (!images[currentCategory] || images[currentCategory].length === 0) {
      return <p>Selecciona una categoría válida.</p>;
    }

    return images[currentCategory].map((image) => (
      <div key={image.id} className="image-container" onClick={() => openModal(image.url)}>
        <img src={image.url} alt={image.alt} />
      </div>
    ));
  };

  return (
    <div className="gallery-page">
      <h1>Galería</h1>

      <div className="category-selector">
        {Object.keys(images).map((category) => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={currentCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="image-gallery">{renderImages()}</div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
