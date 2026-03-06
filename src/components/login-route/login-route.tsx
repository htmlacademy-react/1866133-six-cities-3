import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAuthorization } from '../../hooks/use-authorization';


type LoginRoutePropsType = {
  children: JSX.Element;
}

export const LoginRoute = ({children}: LoginRoutePropsType) => {
  const isAuthorized = useAuthorization();
  return !isAuthorized ? children : <Navigate to={AppRoute.Root}/>;
};
