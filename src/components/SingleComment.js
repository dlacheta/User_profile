import React from 'react';
import PropTypes from 'prop-types';
import dateDiffInDays from '../func/dateDiffInDays';

const SingleComment = ({
  comment: {
    name, comment, date, avatar,
  },
}) => (
  <div className="comments-scroll">
    <img className="comment-img" src={avatar} alt={name} />
    <div className="container-fluid">
      <div className="comment-header">
        <h4>{name}</h4>
        <span className="comment-date">{dateDiffInDays(date)}</span>
      </div>
      {comment}
    </div>
  </div>
);

SingleComment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.number,
    comment: PropTypes.string,
  }),
};

SingleComment.defaultProps = {
  comment: {},
};

export default SingleComment;
