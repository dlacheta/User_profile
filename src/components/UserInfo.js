import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {
  getUser,
  addLike,
  removeLike,
  addFollower,
  removeFollower,
  toogleModal,
} from '../actions/rootActions';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

export class UserInfo extends React.Component {
  componentDidMount() {
    const { getUserDispatch } = this.props;
    getUserDispatch();
  }

  render() {
    const {
      addLikeDispatch,
      addFollowerDispatch,
      shareUrlDispatch,
      removeLikeDispatch,
      removeFollowerDispatch,
      user: {
        name, city, country, likes, following, followers, modalIsOpen, liked, followed,
      },
    } = this.props;
    return (
      <div className="user-data">
        <div className="user-info-container">
          <img className="user-img" src="user.png" alt={name} />
          <i onClick={shareUrlDispatch} className="material-icons share-icon">
            exit_to_app
          </i>
          <div className="user-info">
            <h1>
              {name}
              {liked ? (
                <i onClick={removeLikeDispatch} className="material-icons like-icon" alt="Unlike">
                  favorite
                </i>
              ) : (
                <i onClick={addLikeDispatch} className="material-icons like-icon" alt="Like">
                  favorite_border
                </i>
              )}
            </h1>
            <h2>{`${city}, ${country}`}</h2>
          </div>
        </div>
        <div className="user-follow">
          <div>
            <h3>{likes}</h3>
            Likes
          </div>
          <div className="follow-divider" />
          <div>
            <h3>{following}</h3>
            Following
          </div>
          <div className="follow-divider" />
          <div>
            <h3>{followers}</h3>
            Followers
          </div>
          {followed ? (
            <button onClick={removeFollowerDispatch} type="button" className="follow-button">
              UNFOLLOW
            </button>
          ) : (
            <button onClick={addFollowerDispatch} type="button" className="follow-button">
              FOLLOW
            </button>
          )}
        </div>
        <Modal className="modal" isOpen={modalIsOpen} onRequestClose={shareUrlDispatch}>
          <i onClick={shareUrlDispatch} className="material-icons close-button">
            close
          </i>
          <h3 className="modal__title">Copy link below to share:</h3>
          {window.location.href}
        </Modal>
      </div>
    );
  }
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    likes: PropTypes.number,
    following: PropTypes.number,
    followers: PropTypes.number,
  }),
  addLikeDispatch: PropTypes.func.isRequired,
  removeLikeDispatch: PropTypes.func.isRequired,
  addFollowerDispatch: PropTypes.func.isRequired,
  removeFollowerDispatch: PropTypes.func.isRequired,
  shareUrlDispatch: PropTypes.func.isRequired,
  getUserDispatch: PropTypes.func.isRequired,
};
UserInfo.defaultProps = {
  user: {},
};

const mapStateToProps = state => ({ user: state });

const mapDispatchToProps = dispatch => ({
  getUserDispatch: () => dispatch(getUser()),
  addLikeDispatch: () => dispatch(addLike()),
  removeLikeDispatch: () => dispatch(removeLike()),
  addFollowerDispatch: () => dispatch(addFollower()),
  removeFollowerDispatch: () => dispatch(removeFollower()),
  shareUrlDispatch: () => dispatch(toogleModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfo);
