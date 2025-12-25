
import {citieNames} from '../../../../const';


const NavTabs = () => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citieNames.map((name, index) => (

            <li className="locations__item" key={name}>
              <a
                // временное решение
                className={`locations__item-link tabs__item ${index === 3 ? 'tabs__item--active' : ''}`}
                href="#"
              >
                <span>{name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  </div>
);


export default NavTabs;
