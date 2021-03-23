import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Recommend from './Recommend';
import Rutin from './Rutin';

const Home = () => {
  return (
    <div>
      <Header />
      <Recommend />
      <Rutin />
    </div>
  );
};

export default Home;
