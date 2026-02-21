import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { CommentType } from '../../types/comments.type';
import { fetchCommentsAction, postCommentAction } from './comments.thunks';


type CommentsState = {
  items: CommentType[] | null;
  status: RequestStatus;
}

const initialState: CommentsState = {
  items: null,
  status: RequestStatus.Idle
};


const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.items = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.items?.push(action.payload);
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
});

export const commentsReducer = commentsSlice.reducer;
export const commentsActions = {...commentsSlice.actions, fetchCommentsAction, postCommentAction};
