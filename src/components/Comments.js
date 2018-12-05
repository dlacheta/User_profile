import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser, toogleComments } from '../actions/rootActions';
import SingleComment from './SingleComment';
import CommentForm from './CommentForm';

export class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.messagesEnd = React.createRef();
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    const { getUserDispatch, commentsVisible } = this.props;
    getUserDispatch();
    if (commentsVisible) {
      this.scrollToBottom();
    }
  }

  componentDidUpdate() {
    const { commentsVisible } = this.props;
    if (commentsVisible) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { allComments, commentsVisible, toogleCommentsDispatch } = this.props;
    return (
      <div className="comments">
        <button type="button" onClick={toogleCommentsDispatch}>
          {commentsVisible
            ? `Hide comments (${allComments.length})`
            : `Show comments (${allComments.length})`}
        </button>
        {commentsVisible ? (
          <div className="container-fluid">
            <div className="comments-scroll-container">
              {allComments.map(comment => (
                <SingleComment key={comment.id} comment={comment} />
              ))}
              <div ref={this.messagesEnd} />
            </div>
            <CommentForm />
          </div>
        ) : null}
      </div>
    );
  }
}

Comments.propTypes = {
  getUserDispatch: PropTypes.func.isRequired,
  allComments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.number,
      comment: PropTypes.string,
    }),
  ),
  commentsVisible: PropTypes.bool,
  toogleCommentsDispatch: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  allComments: [],
  commentsVisible: true,
};

const mapStateToProps = state => ({
  allComments: state.comments.sort((a, b) => {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  }),
  commentsVisible: state.commentsVisible,
});

const mapDispatchToProps = dispatch => ({
  getUserDispatch: () => dispatch(getUser()),
  toogleCommentsDispatch: () => dispatch(toogleComments()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
