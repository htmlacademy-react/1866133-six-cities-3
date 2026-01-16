import { Link } from 'react-router-dom';
import { OffersType } from '../../types/offers.type';
import PlaceCard from '../../components/place-card/place-card';

type CityPropsType = {
  cityName: string;
  favoriteData: OffersType;
}


export const City = ({cityName, favoriteData}: CityPropsType) => (

  <li className="favorites__locations-items" key={cityName}>
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to="#">
          <span>{cityName}</span>
        </Link>
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
              className={'favorites'}
            />
          ))
      }
    </div>
  </li>
);
