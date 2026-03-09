import { memo } from 'react';

const IMAGES_LIMIT = 6;

type OfferGalleryPropsType = {
  images: string[];
}

const OfferGallery = memo(({images}: OfferGalleryPropsType) => (

  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {
        images.slice(0, IMAGES_LIMIT).map((src) => (
          <div className="offer__image-wrapper" key={src}>
            <img
              className="offer__image"
              src={src}
            />
          </div>
        ))
      }
    </div>

  </div>
));

OfferGallery.displayName = 'OfferGallery';

export default OfferGallery;
