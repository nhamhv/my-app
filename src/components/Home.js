import React from 'react';
import { Link } from 'react-router-dom';

import PlanList from './PlanList';

const Home = () => {
  return (
    <div className="container">
      <PlanList />
      <Link to="/dynamic">Navigate to Dynamic Page</Link>
      <Link to="/about">Navigate to About Page</Link>
    </div>
  );
};

export default Home;
