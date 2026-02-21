import OfferGallery from './components/offer-gallery/offer-gallery';
import OfferReting from './components/offer-rating/offer-reting';
import OfferInside from './components/offer-inside/offer-inside';
import OfferHost from './components/offer-host/offer-host';
import OfferReviews from './components/offer-reviews/offer-reviews';
import NearPlaces from './components/near-places/near-places';
import OfferPrice from './components/offer-price/offer-price';
import OfferFeatures from './components/offer-features/offer-features';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { NotFound } from '../not-found/not-found';
import { FavoriteButton } from './components/favorite-button/favorite-button';
import CitiesMap from '../home/components/cities-map/cities-map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchOfferAction } from '../../store/offer/offer.thunks';
import { fetchCommentsAction } from '../../store/comments/comments.thunks';
import { RequestStatus } from '../../const';
import { Preloader } from '../../components/preloader/preloader';
import { fetchNearbyAction } from '../../store/nearby/nearby.thunks';
import { commentsSelector, nearbySelector, offerSelector, offerStatusSelector } from '../../store';


const Offer = () => {

  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(offerSelector);
  const status = useAppSelector(offerStatusSelector);
  const nearbyOffers = useAppSelector(nearbySelector).slice(0, 3);
  const comments = useAppSelector(commentsSelector);

  const {id} = useParams();

  useEffect(() => {
    Promise.all([
      dispatch(fetchOfferAction(id as string)),
      dispatch(fetchNearbyAction(id as string)),
      dispatch(fetchCommentsAction(id as string))
    ]);
  }, [dispatch, id]);

  if (status === RequestStatus.Loading) {
    return <Preloader />;
  }

  if(status === RequestStatus.Failed || !currentOffer) {
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
          offers={[currentOffer, ...nearbyOffers]}
          activeCardId={currentOffer.id}
          className={'offer__map'}
        />
      </section>
      <div className="container">
        <NearPlaces otherOffers={nearbyOffers} />
      </div>
    </main>
  );
};

export default Offer;
