import uuid from 'uuid';
import {
  GET_USER,
  ADD_LIKE,
  REMOVE_LIKE,
  ADD_FOLLOWER,
  REMOVE_FOLLOWER,
  TOOGLE_COMMENTS,
  TOOGLE_MODAL,
  ADD_COMMENT,
} from '../actions/actionTypes';

export const defaultData = {
  name: 'Harvey Specter',
  city: 'New York',
  country: 'USA',
  likes: 121,
  following: 723,
  followers: 4433,
  commentsVisible: true,
  modalIsOpen: false,
  liked: false,
  followed: false,
  comments: [
    {
      id: uuid(),
      name: 'Mike Ross',
      date: 1538325445783,
      avatar: 'user.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Integer pellentesque quam vel velit. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.',
    },
    {
      id: uuid(),
      name: 'Rachel Zein',
      date: 1538325372527,
      avatar: 'user.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Integer pellentesque quam vel velit. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.',
    },
    {
      id: uuid(),
      name: 'Luis Litt',
      date: 1538325456075,
      avatar: 'user.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Integer pellentesque quam vel velit. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.',
    },
  ],
};
const rootReducer = (state = defaultData, action) => {
  switch (action.type) {
    case GET_USER:
      return state;
    case ADD_LIKE:
      return Object.assign({}, state, {
        likes: state.likes + 1,
        liked: true,
      });
    case REMOVE_LIKE:
      return Object.assign({}, state, {
        likes: state.likes - 1,
        liked: false,
      });
    case ADD_FOLLOWER:
      return Object.assign({}, state, {
        followers: state.followers + 1,
        followed: true,
      });
    case REMOVE_FOLLOWER:
      return Object.assign({}, state, {
        followers: state.followers - 1,
        followed: false,
      });
    case TOOGLE_COMMENTS:
      return Object.assign({}, state, {
        commentsVisible: !state.commentsVisible,
      });
    case TOOGLE_MODAL:
      return Object.assign({}, state, {
        modalIsOpen: !state.modalIsOpen,
      });
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [...state.comments, action.newComment],
      });
    default:
      return state;
  }
};

export default rootReducer;
