import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import galleryData from './galleryData.json';
import {
  GalleryContainer,
  GalleryWrapper,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrap,
  Img,
} from './GalleryElements';

const Gallery = ({ dark }) => {
  return (
    <GalleryContainer isDark={dark} id={'gallery'}>
      <GalleryWrapper>
        <TextWrapper>
          <TopLine>gallery</TopLine>
          <Heading isDark={dark}>What does the Hotel look like?</Heading>
        </TextWrapper>
        <Carousel>
          {galleryData.map((photo, key) => (
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
