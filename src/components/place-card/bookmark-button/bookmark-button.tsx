import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAuthorization } from '../../../hooks/use-authorization';


type BookmarkButtonPropsType = {
  isFavorite: boolean;
  className: string;
  onFavoriteButtonClick: () => void;
}

const ICON_SIZE_STANDART = {
  WIDTH: '18',
  HEIGHT: '19'
};

const ICON_SIZE_LARGE = {
  WIDTH: '31',
  HEIGHT: '33'
};


const BookmarkButton = ({ isFavorite, className, onFavoriteButtonClick }: BookmarkButtonPropsType) => {


  const navigate = useNavigate();
  const isAuthorized = useAuthorization();

  const onBookmarkButtonClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
    } else {
      onFavoriteButtonClick();
    }
  };

  return (
    <button
      className={`${className}__bookmark-button
        ${isFavorite ? `${className}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={onBookmarkButtonClick}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={className === 'place-card' ? ICON_SIZE_STANDART.WIDTH : ICON_SIZE_LARGE.WIDTH}
        height={className === 'place-card' ? ICON_SIZE_STANDART.HEIGHT : ICON_SIZE_LARGE.HEIGHT}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        ${isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
};

export default BookmarkButton;


