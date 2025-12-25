
type BookmarkButtonPropsType = {
  isFavorite: boolean;
}

const BookmarkButton = ({isFavorite}:BookmarkButtonPropsType):JSX.Element => {

  const BookmarkIconSize = {
    WIDTH: '18',
    HEIGHT: '19'
  };

  return (
    <button
      className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={BookmarkIconSize.WIDTH}
        height={BookmarkIconSize.HEIGHT}
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
