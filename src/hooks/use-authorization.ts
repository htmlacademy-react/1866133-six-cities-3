import { AutorizationStatus } from '../const';
import { useAppSelector } from '.';
import { authStatusSelector } from '../store';

export const useAuthorization = () => {

  const status = useAppSelector(authStatusSelector);

  return status === AutorizationStatus.Auth;
};
