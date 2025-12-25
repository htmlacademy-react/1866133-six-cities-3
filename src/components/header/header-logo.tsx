
const LogoSize = {
  WIDTH: '81',
  HEIGHT: '41'
};

const HeaderLogo = () => (
  <img
    className="header__logo"
    src="img/logo.svg"
    alt="6 cities logo"
    width={LogoSize.WIDTH}
    height={LogoSize.HEIGHT}
  />
);

export default HeaderLogo;
