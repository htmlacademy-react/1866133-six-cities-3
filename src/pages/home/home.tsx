import NavTabs from './components/navigation-tabs/nav-tabs';
import CitiesMap from './components/cities-map/cities-map';
import FormSorting from './components/form-sorting/form-sorting';
import { OfferType } from '../../types/offer.type';
import { OfferList } from './components/offer-list/offer-list';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { useSearchParams } from 'react-router-dom';
import { citieNames } from '../../const';
import OfferListEmpty from '../../components/offer-list-empty/offer-list-empty';


const Home = () => {

  const [searchParams] = useSearchParams();
  const selectedCity = searchParams.get('city') || citieNames[0];

  const [activeCard, setActiveCard] = useState<null | OfferType>(null);

  const handleHoverCard = (offer?: OfferType) => {
    setActiveCard(offer || null);
  };

  const offers = useAppSelector((state) => state.offers);

  const filteredOffers = offers.filter((offer) => offer.city.name === selectedCity);

  const isEmpty = filteredOffers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <NavTabs selectedCity={selectedCity} />
      {isEmpty
        ? <OfferListEmpty />
        : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {selectedCity}</b>
                <FormSorting />
                <OfferList
                  offers={filteredOffers}
                  handleHoverCard={handleHoverCard}
                />
              </section>
              <div className="cities__right-section">
                <CitiesMap
                  coordinatesCity={filteredOffers[0].city.location}
                  offers={filteredOffers}
                  activeCardId={activeCard ? activeCard.id : ''}
                  className={'cities__map'}
                />
              </div>
            </div>
          </div>
        )}
    </main>
  );
};

export default Home;
