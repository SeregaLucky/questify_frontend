import React from 'react';
import Header from '../../components/Header/Header';
import TodayList from '../../components/TodayList/TodayList';

const DashboardPage = ({ quests = [] }) => {
  return (
    <>
      <Header />
      <div>
        <TodayList quests={quests} />
      </div>
    </>
  );
};

export default DashboardPage;
