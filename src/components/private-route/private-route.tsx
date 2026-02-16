import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAuthorization } from '../../hooks/use-authorization';


type PrivateRoutePropsType = {
  children: JSX.Element;
}

export const PrivateRoute = ({children}: PrivateRoutePropsType) => {
  const isAuthorized = useAuthorization();

  return isAuthorized ? children : <Navigate to={AppRoute.Login}/>;
};
