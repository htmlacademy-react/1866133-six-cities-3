import { Link } from 'react-router-dom';
import {
  AppRoute,
  PREVIEW_IMAGE_SIZE_DEFAULT,
  PREVIEW_IMAGE_SIZE_FAVORITES,
} from '../../const';
import { OfferType, ShortenedOfferType } from '../../types/offer.type';
import { capitalizeFirstLetter } from '../../utils/common';
import BookmarkButton from './bookmark-button/bookmark-button';
import { StarRating } from '../star-rating/star-rating';

type PlaceCardPropsType = {
  offer: OfferType | ShortenedOfferType;
  className: string;
  handleHoverCard?: (offer?: OfferType) => void;
}

const PlaceCard = ({
  offer,
  className,
  handleHoverCard
}: PlaceCardPropsType) => {

  const {
    id,
    title,
    type,
    price,
    isPremium,
    isFavorite,
    rating,
    previewImage } = offer;

  const upgradeType = capitalizeFirstLetter(type);

  const handleMouseOn = () => handleHoverCard && handleHoverCard(offer as OfferType);
  const handleMouseOff = () => handleHoverCard && handleHoverCard();

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${className}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={`${className === 'favorites'
              ? PREVIEW_IMAGE_SIZE_FAVORITES.WIDTH
              : PREVIEW_IMAGE_SIZE_DEFAULT.WIDTH}
            `}
            height={`${className === 'favorites'
              ? PREVIEW_IMAGE_SIZE_FAVORITES.HEIGHT
              : PREVIEW_IMAGE_SIZE_DEFAULT.HEIGHT}
            `}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${className === 'favorites' ? 'favorites__card-info' : ''} place-card__info `}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <StarRating rating={rating} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{upgradeType}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
