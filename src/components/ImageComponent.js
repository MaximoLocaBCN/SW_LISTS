import React, { useContext } from 'react';
import { useLocation, useRoute } from 'wouter';
import { ImageContext } from '../contexts/imageContext';

function ImageComponent()/*{ imageSources }*/ {
  const [, setLocation] = useLocation();

  const {filteredImages} = useContext(ImageContext);

  const handleClick = (id, attribute) => {
    console.log('Clicked image:', id, attribute);
    setLocation(`/${attribute}/${id}`);
  };

  return (
    <div className="img-container">
      <section>
        {filteredImages.map((image) => (
          <img
            key={`${image.attribute}-${image.id}`}
            src={image.src}
            alt={`${image.id}`}
            className="photo-img"
            onClick={() => handleClick(image.id, image.attribute)}
          />
        ))}
      </section>
    </div>
  );
}

export default ImageComponent;
