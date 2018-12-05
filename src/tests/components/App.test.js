import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

it('App component renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
