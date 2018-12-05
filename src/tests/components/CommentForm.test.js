import React from 'react';
import { shallow } from 'enzyme';
import { CommentForm } from '../../components/CommentForm';

it('CommentForm component renders correctly', () => {
  const addCommentDispatch = jest.fn();
  const wrapper = shallow(<CommentForm addCommentDispatch={addCommentDispatch} />);
  expect(wrapper).toMatchSnapshot;
});
