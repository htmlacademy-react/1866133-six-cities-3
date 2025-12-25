//import React from 'react';
import { offerData } from '../../mocks/offer-data/offer-data';
import { otherOffersData } from '../../mocks/other-offers-data/other-offers-data';
import Header from '../../components/header/header';
import OfferGallery from './components/offer-gallery/offer-gallery';
import OfferReting from './components/offer-rating/offer-reting';
import OfferInside from './components/offer-inside/offer-inside';
import OfferHost from './components/offer-host/offer-host';
import OfferReviews from './components/offer-reviews/offer-reviews';
import NearPlaces from './components/near-places/near-places';
import OfferMap from './components/offer-map/offer-map';
import OfferPrice from './components/offer-price/offer-price';
import OfferFeatures from './components/offer-features/offer-features';

const Offer = ():JSX.Element => {

  const { title,
    type,
    price,
    //city,
    isFavorite,
    isPremium,
    rating,
    description,
    bedrooms,
    host,
    maxAdults
  } = offerData;

  const IconSize = {
    WIDTH: '31',
    HEIGHT: '33'
  };


  return (

    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button
                  className="offer__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="offer__bookmark-icon"
                    width={IconSize.WIDTH}
                    height={IconSize.HEIGHT}
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    ${isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <OfferReting rating={rating} />
              <OfferFeatures
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <OfferPrice price={price}/>
              <OfferInside />
              <OfferHost
                host={host}
                description={description}
              />
              <OfferReviews />
            </div>
          </div>
          <OfferMap />
        </section>
        <div className="container">
          <NearPlaces otherOffersData={otherOffersData} />
        </div>
      </main>
    </div>
  );
};

export default Offer;
