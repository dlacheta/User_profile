import reducer, { defaultData } from '../../reducers/rootReducer';

describe('Reducers', () => {
  it('Should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultData);
  });
  it('Should handle GET_USER', () => {
    expect(reducer(undefined, { type: 'GET_USER' })).toEqual(defaultData);
  });
  it('Should handle ADD_LIKE', () => {
    const addLikeState = {
      likes: 121,
      liked: false,
    };
    const addLikeAction = {
      type: 'ADD_LIKE',
    };
    expect(reducer(addLikeState, addLikeAction)).toEqual({ likes: 122, liked: true });
  });
  it('Should handle REMOVE_LIKE', () => {
    const removeLikeState = {
      likes: 122,
      liked: true,
    };
    const removeLikeAction = {
      type: 'REMOVE_LIKE',
    };
    expect(reducer(removeLikeState, removeLikeAction)).toEqual({ likes: 121, liked: false });
  });
  it('Should handle ADD_FOLLOWER', () => {
    const addFollowerState = {
      followers: 4433,
      followed: false,
    };
    const addFollowerAction = {
      type: 'ADD_FOLLOWER',
    };
    expect(reducer(addFollowerState, addFollowerAction)).toEqual({
      followers: 4434,
      followed: true,
    });
  });
  it('Should handle REMOVE_FOLLOWER', () => {
    const removeFollowerState = {
      followers: 4434,
      followed: true,
    };
    const removeFollowerAction = {
      type: 'REMOVE_FOLLOWER',
    };
    expect(reducer(removeFollowerState, removeFollowerAction)).toEqual({
      followers: 4433,
      followed: false,
    });
  });
  it('Should handle TOOGLE_COMMENTS', () => {
    const toogleCommentState = {
      commentsVisible: true,
    };
    const toogleCommentAction = {
      type: 'TOOGLE_COMMENTS',
    };
    expect(reducer(toogleCommentState, toogleCommentAction)).toEqual({ commentsVisible: false });
  });
  it('Should handle TOOGLE_MODAL', () => {
    const toogleModalState = {
      modalIsOpen: false,
    };
    const toogleModalAction = {
      type: 'TOOGLE_MODAL',
    };
    expect(reducer(toogleModalState, toogleModalAction)).toEqual({ modalIsOpen: true });
  });
  it('Should handle ADD_COMMENT', () => {
    const newComment = {
      id: 1,
      name: 'Rachel Zein',
      date: 1538325456075,
      comment: 'Comment',
      avatar: 'user.png',
    };
    const addCommentAction = {
      type: 'ADD_COMMENT',
      newComment,
    };
    expect(reducer(defaultData, addCommentAction)).toEqual(
      defaultData,
      ...defaultData.comments.push(newComment),
    );
  });
});
