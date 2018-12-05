import React from 'react';
import { shallow } from 'enzyme';
import { UserInfo } from '../../components/UserInfo';

it('UserInfo component renders correctly', () => {
  const addLikeDispatch = jest.fn();
  const removeLikeDispatch = jest.fn();
  const addFollowerDispatch = jest.fn();
  const removeFollowerDispatch = jest.fn();
  const shareUrlDispatch = jest.fn();
  const getUserDispatch = jest.fn();
  const wrapper = shallow(
    <UserInfo
      addLikeDispatch={addLikeDispatch}
      removeLikeDispatch={removeLikeDispatch}
      addFollowerDispatch={addFollowerDispatch}
      removeFollowerDispatch={removeFollowerDispatch}
      shareUrlDispatch={shareUrlDispatch}
      getUserDispatch={getUserDispatch}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
