import { Link } from 'react-router-dom';
import { favoriteData } from '../../mocks/favorite-data/favorite-data';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/user/auth.thunks';

const favoriteCount = favoriteData.length;


export const AuthorizedMenu = () => {
  const profile = useAppSelector((state) => state.user.info);
  const dispatch = useAppDispatch();

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{profile?.email}</span>
          <span className="header__favorite-count">{favoriteCount}</span>
        </Link>
      </li>

      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to="#"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logout());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
};
