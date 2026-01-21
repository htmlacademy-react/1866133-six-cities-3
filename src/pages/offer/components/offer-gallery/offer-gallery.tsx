
type OfferGalleryPropsType = {
  images: string[];
}

const OfferGallery = ({images}: OfferGalleryPropsType) => (

  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {
        images.map((src) => (
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
);


export default OfferGallery;
