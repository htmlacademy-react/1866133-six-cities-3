import { AppRoute } from '../const';
import { CommentType } from '../types/comments.type';

const capitalizeFirstLetter = (word:string) => word.charAt(0).toUpperCase() + word.slice(1);

const getFormattedDate = (date:string) => new Date(date)
  .toLocaleDateString('en-US', {year: 'numeric', month: 'long'});

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

const compareComments = (comment1:CommentType, comment2:CommentType) => Date.parse(comment2.date) - Date.parse(comment1.date);

export { capitalizeFirstLetter, getFormattedDate, getLayoutState, getRandomIntInRange, compareComments };
