import { AppRoute } from '../const';

const capitalizeFirstLetter = (word:string) => word.charAt(0).toUpperCase() + word.slice(1);

const formatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  switch(pathname) {
    case AppRoute.Root: {
      rootClassName = 'page--gray page--main';
      linkClassName = 'header__logo-link--active';
    } break;
    case AppRoute.Login: {
      rootClassName = 'page--gray page--login';
      shouldRenderUser = false;
    } break;
    case AppRoute.Favorites: shouldRenderFooter = true;
  }

  return {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter};
};

const getRandomIntInRange = (a:number, b:number): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export { capitalizeFirstLetter, formatDate, getLayoutState, getRandomIntInRange };
