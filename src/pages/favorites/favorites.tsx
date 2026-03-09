
import { useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/favorite/favorite.selectors';
import FavoritesEmpty from './components/favorites-empty';
import FavoritesList from './components/favorites-list';


const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);
  const hasFavorites = favorites.length > 0;

  return (
    <main className={`
      page__main
      page__main--favorites
      ${hasFavorites ? 'page__main--favorites-empty' : ''}`}
    >
      <div className="page__favorites-container container">

        <section className={`
          favorites
          ${hasFavorites ? 'favorites--empty' : ''}`}
        >
          {hasFavorites ? <FavoritesList favorites={favorites} /> : <FavoritesEmpty />}
        </section>

      </div>
    </main>
  );
};

export default Favorites;
