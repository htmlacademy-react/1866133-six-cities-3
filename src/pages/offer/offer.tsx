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
import { capitalizeFirstLetter } from '../../utils/common';

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

  const upgradeType = capitalizeFirstLetter(type);

  const insideList = [
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cabel TV',
    'Fridge'
  ];

  // const Features = {
  //   TYPE: type.toUpperCase(),
  //   BEDROOMS: `${bedrooms} Bedrooms`,
  //   MaxAdults: `Max ${maxAdults} adults`
  // };

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
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    ${isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <OfferReting rating={rating} />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {upgradeType}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside insideList={insideList}/>
              <OfferHost host={host} description={description}/>
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
