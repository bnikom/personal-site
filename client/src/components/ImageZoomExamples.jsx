import React from 'react';
import ImageZoom from './ImageZoom';

const ImageZoomExamples = () => {
  const imgUrl = 'https://i.pinimg.com/originals/58/f0/8a/58f08a18c4917ad91df30805f4348a7d.jpg';
  const imgTitle = 'cutest fucking bunnies ever'
  
  return (
    <ImageZoom
      imgTitle={imgTitle}
      imgUrl={imgUrl}
    />
  );
}

export default ImageZoomExamples;