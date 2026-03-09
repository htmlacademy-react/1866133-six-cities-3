import { Link, Outlet, useLocation } from 'react-router-dom';
import HeaderLogo from '../header-logo/header-logo';
import { AppRoute } from '../../const';
import { getLayoutState } from '../../utils/common';
import { AuthorizedMenu } from '../menu/authorized-menu';
import { UnauthorizedMenu } from '../menu/unauthorized-menu';
import { useAuthorization } from '../../hooks/use-authorization';
import Footer from '../footer/footer';


export const Layout = () => {
  const {pathname} = useLocation();

  const {rootClassName,
    linkClassName,
    shouldRenderUser,
    shouldRenderFooter
  } = getLayoutState(pathname as AppRoute);

  const isAuthorized = useAuthorization();

  const menu = isAuthorized ? <AuthorizedMenu /> : <UnauthorizedMenu />;

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

      {shouldRenderFooter && <Footer />}

    </div>
  );
};

