import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAuthorization } from '../../../hooks/use-authorization';

type BookmarkButtonPropsType = {
  isFavorite: boolean;
}

const BOOKMARK_ICON_SIZE = {
  WIDTH: '18',
  HEIGHT: '19'
};

const BookmarkButton = ({ isFavorite }: BookmarkButtonPropsType): JSX.Element => {


  const navigate = useNavigate();
  const isAuthorized = useAuthorization();

  const onBookmarkButtonClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={`place-card__bookmark-button
        ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
      onClick={onBookmarkButtonClick}
    >
      <svg
        className="place-card__bookmark-icon"
        width={BOOKMARK_ICON_SIZE.WIDTH}
        height={BOOKMARK_ICON_SIZE.HEIGHT}
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
