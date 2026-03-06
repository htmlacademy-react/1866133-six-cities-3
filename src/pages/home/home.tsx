import NavTabs from './components/navigation-tabs/nav-tabs';
import CitiesMap from './components/cities-map/cities-map';
import FormSorting from './components/form-sorting/form-sorting';
import { OfferType } from '../../types/offer.type';
import { OfferList } from './components/offer-list/offer-list';
import { useCallback, useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { useSearchParams } from 'react-router-dom';
import { CITIE_NAMES, RequestStatus, SortOption } from '../../const';
import OfferListEmpty from '../../components/offer-list-empty/offer-list-empty';
import { Preloader } from '../../components/preloader/preloader';
import { selectOffers, selectOffersStatus } from '../../store/offers/offers.selector';


const Home = () => {

  const [searchParams] = useSearchParams();
  const selectedCity = searchParams.get('city') || CITIE_NAMES[0];

  const offers = useAppSelector(selectOffers);

  const filteredOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === selectedCity),
    [offers, selectedCity]
  );

  const [selectedSort, setSelectedSort] = useState<SortOption>(SortOption.Popular);

  const getSortedOffers = useCallback((value: string) => {
    switch (value) {
      case SortOption.PriceLowToHigh:
        return filteredOffers.toSorted((a, b) => a.price - b.price);

      case SortOption.PriceHighToLow:
        return filteredOffers.toSorted((a, b) => b.price - a.price);

      case SortOption.TopRatedFirst:
        return filteredOffers.toSorted((a, b) => b.rating - a.rating);

      default: return filteredOffers;
    }
  }, [filteredOffers]
  );

  const sortedOffers = useMemo(
    () => getSortedOffers(selectedSort),
    [getSortedOffers, selectedSort]
  );

  const [activeCard, setActiveCard] = useState<null | OfferType>(null);

  const handleHoverCard = useCallback(
    (offer?: OfferType) => {
      setActiveCard(offer || null);
    },
    []
  );


  const status = useAppSelector(selectOffersStatus);

  if (status === RequestStatus.Loading) {
    return <Preloader />;
  }

  const isEmpty = filteredOffers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <NavTabs selectedCity={selectedCity} />
      {isEmpty
        ? <OfferListEmpty selectedCity={selectedCity} />
        : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {selectedCity}</b>
                <FormSorting
                  selectedSort={selectedSort}
                  setSelectedSort={setSelectedSort}
                />
                <OfferList
                  offers={sortedOffers}
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
