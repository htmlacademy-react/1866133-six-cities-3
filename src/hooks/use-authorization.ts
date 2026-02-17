import { AutorizationStatus } from '../const';
import { useAppSelector } from '.';

export const useAuthorization = () => {

  const status = useAppSelector((state) => state.user.authorizationStatus);

  return status === AutorizationStatus.Auth;
};
