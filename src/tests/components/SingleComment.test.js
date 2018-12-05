import React from 'react';
import { shallow } from 'enzyme';
import SingleComment from '../../components/SingleComment';

it('SingleComment component renders correctly', () => {
  const wrapper = shallow(<SingleComment />);
  expect(wrapper).toMatchSnapshot();
});
