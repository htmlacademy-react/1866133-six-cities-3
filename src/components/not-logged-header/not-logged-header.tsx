import HeaderLogo from '../header/header-logo';


const NotLoggedHeader = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link" href="main.html">
            <HeaderLogo />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default NotLoggedHeader;
