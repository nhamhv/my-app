import React from 'react';
import uidV4 from 'uuid/v4';

import PlanCard from './PlanCard';

const PlanList = () => {
  function createItem(name) {
    let i = 1;
    return {
      id: uidV4(),
      contents: [
        {
          title: name + (i += 1),
          status: Math.random() >= 0.5
        },
        {
          title: name + (i += 1),
          status: Math.random() >= 0.5
        },
        {
          title: name + (i += 1),
          status: Math.random() >= 0.5
        },
      ],
      date: '2017-12-12 00:00:01'
    };
  }

  const list = [
    createItem('React 16'),
    createItem('React Router 4'),
    createItem('Semantic UI as the CSS Framework'),
    createItem('Hot Module Replacement'),
  ];

  return (
      <div>
        {list.map((item) => (
          <PlanCard contents={item.contents} date={item.date}></PlanCard>
        ))}
      </div>
  );
};

export default PlanList;
