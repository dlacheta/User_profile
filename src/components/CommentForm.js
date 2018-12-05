import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { addComment } from '../actions/rootActions';

export class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
  }

  onCommentSubmit(event) {
    const { addCommentDispatch } = this.props;
    event.preventDefault();
    const newComment = {
      id: uuid(),
      name: 'Rachel Zein',
      date: +new Date(),
      comment: event.target.add_comment.value,
      avatar: 'user.png',
    };
    addCommentDispatch(newComment);
    event.target.add_comment.value = '';
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.onCommentSubmit}>
          <input name="add_comment" type="text" placeholder="Add a comment" />
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addCommentDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addCommentDispatch: newComment => dispatch(addComment(newComment)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CommentForm);
