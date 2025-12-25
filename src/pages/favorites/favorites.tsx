import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import { favoriteData } from '../../mocks/favorite-data/favorite-data';


const Favorites = () => {

  const CLASS_NAME = 'favorites';

  const uniqueCityNames: string[] = [];

  favoriteData.forEach((item) => {
    if(!uniqueCityNames.includes(item.city.name)){
      uniqueCityNames.push(item.city.name);
    }
  });

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                uniqueCityNames.map((cityName) => (

                  <li className="favorites__locations-items" key={cityName}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">

                      {
                        favoriteData.filter((favoriteOffer) => favoriteOffer.city.name === cityName)
                          .map((item) => (
                            <PlaceCard
                              key={item.id}
                              title={item.title}
                              type={item.type}
                              price={item.price}
                              isPremium={item.isPremium}
                              isFavorite={item.isFavorite}
                              rating={item.rating}
                              previewImage={item.previewImage}
                              className={CLASS_NAME}
                            />
                          ))
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};

export default Favorites;
