import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentType } from '../../types/comments.type';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { OfferType } from '../../types/offer.type';


export const fetchCommentsAction = createAsyncThunk<CommentType[], OfferType['id'], {extra: AxiosInstance}>(
  'fetchComments',
  async (offerId, {extra: api}) => {
    const response = await api.get<CommentType[]>(`${APIRoute.Comments}/${offerId}`);
    return response.data;
  }
);

type PostCommentPropsType = {
  comment: string;
  rating: number;
  offerId?: OfferType['id'];
}

export const postCommentAction = createAsyncThunk<CommentType, PostCommentPropsType, {extra: AxiosInstance}>(
  'postComments',
  async ({comment, rating, offerId}, {extra: api}) => {
    const response = await api.post<CommentType>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    return response.data;
  }
);
