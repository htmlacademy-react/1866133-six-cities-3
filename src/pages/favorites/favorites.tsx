import { favoriteData } from '../../mocks/favorite-data/favorite-data';
import { City } from './city';


const Favorites = () => {

  const uniqueCityNames: string[] = [];

  favoriteData.forEach((item) => {
    if (!uniqueCityNames.includes(item.city.name)) {
      uniqueCityNames.push(item.city.name);
    }
  });

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              uniqueCityNames.map((cityName) => (
                <City
                  key={cityName}
                  cityName={cityName}
                  favoriteData={favoriteData}
                />
              ))
            }
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Favorites;
