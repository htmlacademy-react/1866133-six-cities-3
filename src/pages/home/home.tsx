import NavTabs from './components/navigation-tabs/nav-tabs';
import CitiesMap from './components/cities-map/cities-map';
import FormSorting from './components/form-sorting/form-sorting';
import { OfferType } from '../../types/offer.type';
import { OfferList } from './components/offer-list/offer-list';
import { useState } from 'react';


type HomePropsType = {
  offersCount: number;
  offersData: OfferType[];
}

const Home = ({ offersCount, offersData }: HomePropsType) => {


  const [activeCard, setActiveCard] = useState<null | OfferType>(null);

  const handleHoverCard = (offer?: OfferType) => {
    setActiveCard(offer || null);
  };

  const selectedCity = 'Amsterdam';
  const filteredOffers = offersData.filter((offer) => offer.city.name === selectedCity);
  const coordinatesCity = filteredOffers[0].city.location;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <NavTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in Amsterdam</b>
            <FormSorting />
            <OfferList
              offers={offersData}
              handleHoverCard={handleHoverCard}
            />
          </section>
          <div className="cities__right-section">
            <CitiesMap
              coordinatesCity={coordinatesCity}
              offers={filteredOffers}
              activeCardId={activeCard ? activeCard.id : ''}
              className={'cities__map'}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
