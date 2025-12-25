//import React from 'react';

const MOCK_PHOTOS = [
  {
    id: 1,
    src: 'room.jpg',
    alt: 'Photo studio'
  },
  {
    id: 2,
    src: 'apartment-01.jpg',
    alt: 'Photo studio'
  },
  {
    id: 3,
    src: 'apartment-02.jpg',
    alt: 'Photo studio'
  },
  {
    id: 4,
    src: 'apartment-03.jpg',
    alt: 'Photo studio'
  },
  {
    id: 5,
    src: 'studio-01.jpg',
    alt: 'Photo studio'
  },
  {
    id: 6,
    src: 'apartment-01.jpg',
    alt: 'Photo studio'
  }
];

const OfferGallery = () => (

  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {
        MOCK_PHOTOS.map((item) => (
          <div className="offer__image-wrapper" key={item.id}>
            <img
              className="offer__image"
              src={`img/${item.src}`}
              alt={`${item.alt}`}
            />
          </div>
        ))
      }
    </div>

  </div>
);


export default OfferGallery;
