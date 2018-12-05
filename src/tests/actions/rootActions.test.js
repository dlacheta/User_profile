import * as actions from '../../actions/rootActions';

describe('Actions', () => {
  it('Should get user', () => {
    const expectedAction = {
      type: 'GET_USER',
    };
    expect(actions.getUser()).toEqual(expectedAction);
  });
  it('Should add like', () => {
    const expectedAction = {
      type: 'ADD_LIKE',
    };
    expect(actions.addLike()).toEqual(expectedAction);
  });
  it('Should remove like', () => {
    const expectedAction = {
      type: 'REMOVE_LIKE',
    };
    expect(actions.removeLike()).toEqual(expectedAction);
  });
  it('Should add follower', () => {
    const expectedAction = {
      type: 'ADD_FOLLOWER',
    };
    expect(actions.addFollower()).toEqual(expectedAction);
  });
  it('Should remove follower', () => {
    const expectedAction = {
      type: 'REMOVE_FOLLOWER',
    };
    expect(actions.removeFollower()).toEqual(expectedAction);
  });
  it('Should toogle comments', () => {
    const expectedAction = {
      type: 'TOOGLE_COMMENTS',
    };
    expect(actions.toogleComments()).toEqual(expectedAction);
  });
  it('Should toogle modal', () => {
    const expectedAction = {
      type: 'TOOGLE_MODAL',
    };
    expect(actions.toogleModal()).toEqual(expectedAction);
  });
  it('Should add comment', () => {
    const newComment = {
      id: 1,
      name: 'Rachel Zein',
      date: 1538325456075,
      comment: 'Comment',
      avatar: 'user.png',
    };
    const expectedAction = {
      type: 'ADD_COMMENT',
      newComment,
    };
    expect(actions.addComment(newComment)).toEqual(expectedAction);
  });
});
