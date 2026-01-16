import { Link } from 'react-router-dom';
import { favoriteData } from '../../mocks/favorite-data/favorite-data';

const MOCK_EMAIL = 'Oliver.conner@gmail.com';
const favoriteCount = favoriteData.length;


export const AuthorizedMenu = () => (
  <ul className="header__nav-list">
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to="#">
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">{MOCK_EMAIL}</span>
        <span className="header__favorite-count">{favoriteCount}</span>
      </Link>
    </li>

    <li className="header__nav-item">
      <Link className="header__nav-link" to="#">
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  </ul>
);
