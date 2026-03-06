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
import CitiesMap from '../home/components/cities-map/cities-map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchOfferAction } from '../../store/offer/offer.thunks';
import { fetchCommentsAction } from '../../store/comments/comments.thunks';
import { RequestStatus } from '../../const';
import { Preloader } from '../../components/preloader/preloader';
import { fetchNearbyAction } from '../../store/nearby/nearby.thunks';
import { selectOffer, selectOfferStatus } from '../../store/offer/offer.selector';
import { selectNearby } from '../../store/nearby/nearby.selector';
import { selectComments } from '../../store/comments/comments.selector';
import BookmarkButton from '../../components/place-card/bookmark-button/bookmark-button';
import { changeFavoriteAction, fetchFavoritesAction } from '../../store/favorite/favorite.thunks';
import { fetchAllOffers } from '../../store/offers/offers.thunks';

const NEAR_BY_OFFERS_LIMIT = 3;


const Offer = () => {

  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(selectOffer);
  const status = useAppSelector(selectOfferStatus);
  const nearbyOffers = useAppSelector(selectNearby).slice(0, NEAR_BY_OFFERS_LIMIT);
  const comments = useAppSelector(selectComments);

  const {id: offerId} = useParams();

  useEffect(() => {
    if(!offerId) {
      return;
    }
    Promise.all([
      dispatch(fetchOfferAction(offerId)),
      dispatch(fetchNearbyAction(offerId)),
      dispatch(fetchCommentsAction(offerId))
    ]);
  }, [dispatch, offerId]);

  if (status === RequestStatus.Loading) {
    return <Preloader />;
  }

  if(status === RequestStatus.Failed || !currentOffer) {
    return <NotFound />;
  }

  const { id,
    title,
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

  const handleFavoriteButtonClick = () => {
    dispatch(changeFavoriteAction({offerId: id, isFavorite}));
    dispatch(fetchFavoritesAction());
    dispatch(fetchOfferAction(offerId as string));
    dispatch(fetchAllOffers());
  };


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
              <BookmarkButton
                isFavorite={isFavorite}
                className={'offer'}
                handleFavoriteButtonClick={handleFavoriteButtonClick}
              />
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
