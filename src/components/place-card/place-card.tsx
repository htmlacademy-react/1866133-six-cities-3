import { HousingType,
  PREVIEW_IMAGE_SIZE_DEFAULT,
  PREVIEW_IMAGE_SIZE_FAVORITES,
} from '../../const';

import { capitalizeFirstLetter } from '../../utils/common';
import BookmarkButton from './bookmark-button/bookmark-button';

type PlaceCardPropsType = {
  title: string;
  type: `${HousingType.Apartment}` | `${HousingType.Hotel}` | `${HousingType.House}` | `${HousingType.Room}`;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
  className: string;
}

const PlaceCard = ({
  title, type, price, isPremium, isFavorite, rating, previewImage, className
}: PlaceCardPropsType) => {

  const upgradeType = capitalizeFirstLetter(type);

  return (
    <article className={`${className}__card place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${className}__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
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
        </a>
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
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{upgradeType}</p>
      </div>
    </article>
  );
};


export default PlaceCard;
