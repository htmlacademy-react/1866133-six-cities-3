
import { Link } from 'react-router-dom';
import { AppRoute, citieNames } from '../../../../const';


type NavTabsPropsType = {
  selectedCity: string;
}


const NavTabs = ({ selectedCity }: NavTabsPropsType) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citieNames.map((cityName) => (

            <li className="locations__item" key={cityName}>
              <Link
                className={`locations__item-link tabs__item
                  ${cityName === selectedCity ? 'tabs__item--active' : ''}
                `}
                to={{
                  pathname: AppRoute.Root,
                  search: `?city=${cityName}`,
                }}
              >
                <span>{cityName}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  </div>
);


export default NavTabs;
