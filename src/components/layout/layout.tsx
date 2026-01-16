import { Link, Outlet, useLocation } from 'react-router-dom';
import HeaderLogo from '../header/header-logo';
import { AppRoute, AutorizationStatus } from '../../const';
import { getAutorizationStatus } from '../../authorization-status';
import { getLayoutState } from '../../utils/common';
import { AuthorizedMenu } from '../menu/AuthorizedMenu';
import { UnauthorizedMenu } from '../menu/UnauthorizedMenu';


const FOOTER_LOGO_SIZE = {
  WIDTH: '64',
  HEIGHT: '33'
};


export const Layout = () => {
  const {pathname} = useLocation();

  const {rootClassName,
    linkClassName,
    shouldRenderUser,
    shouldRenderFooter
  } = getLayoutState(pathname as AppRoute);

  const autorizationStatus = getAutorizationStatus();

  const menu = autorizationStatus === AutorizationStatus.Auth
    ? <AuthorizedMenu />
    : <UnauthorizedMenu />;

  return (
    <div className={`page ${rootClassName}`}>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={`header__logo-link ${linkClassName}`}
                to={AppRoute.Root}
              >
                <HeaderLogo />
              </Link>
            </div>
            { shouldRenderUser &&
              <nav className="header__nav">
                {menu}
              </nav>}
          </div>
        </div>
      </header>

      <Outlet />

      {shouldRenderFooter &&
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={FOOTER_LOGO_SIZE.WIDTH}
            height={FOOTER_LOGO_SIZE.HEIGHT}
          />
        </Link>
      </footer>}

    </div>
  );
};


