import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  GalleryContainer,
  GalleryWrapper,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrap,
  Img,
} from './GalleryElements';

const Gallery = ({ dark, imgStart }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('./JSON/gallery.json')
      .then((response) => response.json())
      .then((result) => setPhotos(result));
  }, []);

  return (
    <GalleryContainer isDark={dark} id={'gallery'}>
      <GalleryWrapper>
        <TextWrapper>
          <TopLine>gallery</TopLine>
          <Heading isDark={dark}>What does the Hotel look like?</Heading>
        </TextWrapper>
        <Carousel>
          {photos.map((photo, key) => (
            <ImgWrap key={key}>
              <Img
                src={require(`../../images/gallery/${photo.fileName}`)?.default}
                alt={`${photo.title}`}
              />
              <p className='legend'>{photo.title}</p>
            </ImgWrap>
          ))}
        </Carousel>
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
