import {favoriteData} from '../../mocks/favorite-data/favorite-data';
import HeaderLogo from './header-logo';

const MOCK_EMAIL = 'Oliver.conner@gmail.com';
const favoriteCount = favoriteData.length;

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active">
            <HeaderLogo />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{MOCK_EMAIL}</span>
                <span className="header__favorite-count">{favoriteCount}</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);


export default Header;
