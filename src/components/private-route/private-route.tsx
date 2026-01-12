import { Navigate } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';


type PrivateRoutePropsType = {
  autorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

export const PrivateRoute = (props: PrivateRoutePropsType) => {

  const {autorizationStatus, children} = props;

  return (
    autorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
};
