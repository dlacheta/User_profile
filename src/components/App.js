import React from 'react';
import UserInfo from './UserInfo';
import Comments from './Comments';

const App = () => (
  <div className="container">
    <div className="top-dark" />
    <div className="inside-container">
      <UserInfo />
      <Comments />
    </div>
  </div>
);

export default App;
