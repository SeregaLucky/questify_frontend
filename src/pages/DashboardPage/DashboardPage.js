import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Quests from '../../redux/tasks/tasksSelectors';

class DashboardPage extends Component {
  state = {
    isDoneOpen: false,
    // collection: {
    //   dueDate: '2019-03-16T14:13:53.954Z',
    // },

    // collection
    // [
    // {
    //   today: false,
    //   tomorrow: false,
    //   done: true,
    //   dueDate: '2019-03-16T14:13:53.954Z',
    // },
    //   {
    //     today: false,
    //     tomorrow: false,
    //     done: true,
    //     dueDate: '2019-03-17T14:13:53.954Z',
    //   },
    //   {
    //     today: false,
    //     tomorrow: false,
    //     done: false,
    //     dueDate: '2019-03-17T14:13:53.954Z',
    //   },
    // ],
  };

  handleClick = e => {
    this.setState(state => ({ isDoneOpen: !state.isDoneOpen }));
  };

  render() {
    return (
      <>
        {/* cardEditing DashboardPage */}
        {/* Uncommit for checking */}
        {/* <CardEding /> */}
        <Header />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    collection: {
      all: Quests.getAllQuests(state),
      done: Quests.getDoneQuests(state),
      today: Quests.getTodayQuests(state),
    },
  };
};

export default connect(mapStateToProps)(DashboardPage);
