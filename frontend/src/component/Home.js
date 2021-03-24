import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Recommend from './Recommend';
import Rutin from './Rutin';
import Menubar from './Menubar';

const Home = () => {
  return (
    <div>
      <Header />
      <Recommend />
      <Rutin />
      <Menubar />
    </div>
  );
};

export default Home;
