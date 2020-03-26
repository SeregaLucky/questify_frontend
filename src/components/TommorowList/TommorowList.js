import React from 'react';
import Card from '../../components/Card/Card';

const TommorowList = ({ quests = [] }) => {
  return (
    <ul>
      {quests.map(({ _id, name, done }) => (
        <li>
          <Card key={_id} id={_id} name={name} isDone={done} />
        </li>
      ))}
    </ul>
  );
};

export default TommorowList;
