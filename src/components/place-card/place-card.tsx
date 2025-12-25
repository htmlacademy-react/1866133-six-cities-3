import { capitalizeFirstLetter } from '../../utils/common';

type PlaceCardPropsType = {
  title: string;
  //type: 'apartment' | 'room' | 'house' | 'hotel';
  type: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
  className: string;
}

const PlaceCard = ({
  title, type, price, isPremium, isFavorite, rating, previewImage, className
}: PlaceCardPropsType): JSX.Element => {

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
            width={`${className === 'favorites' ? '150' : '260'}`}
            height={`${className === 'favorites' ? '110' : '200'}`}
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
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              ${isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
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
