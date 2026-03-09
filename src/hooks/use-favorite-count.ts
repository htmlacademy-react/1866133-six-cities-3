import { useEffect } from 'react';
import { selectFavorites, selectFavoritesStatus } from '../store/favorite/favorite.selectors';
import { useAppDispatch, useAppSelector } from './';
import { RequestStatus } from '../const';
import { fetchFavoritesAction } from '../store/favorite/favorite.thunks';


export const useFavoriteCount = () => {
  const status = useAppSelector(selectFavoritesStatus);
  const count = useAppSelector(selectFavorites).length;
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      if(status === RequestStatus.Idle) {
        dispatch(fetchFavoritesAction());
      }
    },
    [dispatch, status]
  );

  return count;
};
