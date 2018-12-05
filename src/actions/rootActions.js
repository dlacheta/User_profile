import {
  GET_USER,
  ADD_LIKE,
  REMOVE_LIKE,
  ADD_FOLLOWER,
  REMOVE_FOLLOWER,
  TOOGLE_COMMENTS,
  TOOGLE_MODAL,
  ADD_COMMENT,
} from './actionTypes';

export const getUser = () => ({
  type: GET_USER,
});

export const addLike = () => ({
  type: ADD_LIKE,
});

export const removeLike = () => ({
  type: REMOVE_LIKE,
});

export const addFollower = () => ({
  type: ADD_FOLLOWER,
});

export const removeFollower = () => ({
  type: REMOVE_FOLLOWER,
});

export const toogleComments = () => ({
  type: TOOGLE_COMMENTS,
});

export const toogleModal = () => ({
  type: TOOGLE_MODAL,
});

export const addComment = newComment => ({
  type: ADD_COMMENT,
  newComment,
});
