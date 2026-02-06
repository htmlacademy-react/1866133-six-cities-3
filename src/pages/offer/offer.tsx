import OfferGallery from './components/offer-gallery/offer-gallery';
import OfferReting from './components/offer-rating/offer-reting';
import OfferInside from './components/offer-inside/offer-inside';
import OfferHost from './components/offer-host/offer-host';
import OfferReviews from './components/offer-reviews/offer-reviews';
import NearPlaces from './components/near-places/near-places';
import OfferPrice from './components/offer-price/offer-price';
import OfferFeatures from './components/offer-features/offer-features';
import {Helmet} from 'react-helmet-async';
import { OfferType, ShortenedOfferType } from '../../types/offer.type';
import { useParams } from 'react-router-dom';
import { NotFound } from '../not-found/not-found';
import { FavoriteButton } from './components/favorite-button/favorite-button';
import { CommentType } from '../../types/comments.type';
import CitiesMap from '../home/components/cities-map/cities-map';
import { useAppSelector } from '../../hooks';


type OffersDataPropsType = {
  otherOffers: ShortenedOfferType[];
  comments: CommentType[];
}

const Offer: React.FC<OffersDataPropsType> = ({otherOffers, comments}: OffersDataPropsType) => {

  const offers: OfferType[] = useAppSelector((state) => state.offers.offers);

  const {id} = useParams();

  const currentOffer: OfferType | undefined = offers.find((offer) => offer.id === id);

  if(!currentOffer) {
    return <NotFound />;
  }

  const { title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    description,
    bedrooms,
    goods,
    host,
    images,
    maxAdults
  } = currentOffer;


  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>Предложение по аренде жилья!</title>
      </Helmet>
      <section className="offer">
        <OfferGallery images={images}/>
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
              <FavoriteButton isFavorite={isFavorite}/>
            </div>
            <OfferReting rating={rating} />
            <OfferFeatures
              type={type}
              bedrooms={bedrooms}
              maxAdults={maxAdults}
            />
            <OfferPrice price={price}/>
            <OfferInside goods={goods}/>
            <OfferHost
              host={host}
              description={description}
            />
            <OfferReviews comments={comments}/>
          </div>
        </div>
        <CitiesMap
          coordinatesCity={currentOffer.city.location}
          offers={[currentOffer, ...otherOffers]}
          activeCardId={currentOffer.id}
          className={'offer__map'}
        />
      </section>
      <div className="container">
        <NearPlaces otherOffers={otherOffers} />
      </div>
    </main>
  );
};

export default Offer;
