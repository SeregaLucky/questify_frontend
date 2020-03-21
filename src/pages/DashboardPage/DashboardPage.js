import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import CardContainer from '../../components/Card/CardContainer';
import * as styles from './DashboardPage.module.css';
import Quests from '../../redux/tasks/tasksSelectors';
import CardEding from '../../components/CardEding/CardEding';
import Header from '../../components/Header/Header';
import CreateQuestButton from '../../components/CreateQuestButton';
import CardEditing from '../../components/CardEding/CardEding';

// dueDate: "2020-03-24T11:57:29.2929+02:00"
// name: "Hello world"
// group: "Productivity"
// difficulty: "Hard"
// userId: "5e68c62a4a36bf664bacf714"

const questData = {
  questId: '5e74dddeba2453135f060c1c',
  difficulty: 'Easy',
  name: 'Java Script',
  dueDate: '2020-03-30T20:14:36.363Z',
  group: 'Health',
};
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
        {/* Uncommit for checking */}
        {/* <CardEding /> */}
        <Header />
        <div className={styles.container}>
          <div className={styles.today}>
            <p className={styles.text}>today</p>
            {this.props.collection.today.map(item => (
              <div key={shortid.generate()} className={styles.card}>
                {item.dueDate}
              </div>
            ))}
          </div>
          <div className={styles.tomorrow}>
            <p className={styles.text}>tomorrow</p>
            <div className={styles.card}>
              <CardContainer questData={questData} />
            </div>
            <div className={styles.card}>
              <CardContainer qestData={{}} newCard={true} />
            </div>
            <div className={styles.card}>9</div>
          </div>

          <div className={styles.done}>
            {this.state.isDoneOpen ? (
              <p className={styles.text} onClick={this.handleClick}>
                done &#9650;
              </p>
            ) : (
              <p className={styles.text} onClick={this.handleClick}>
                done &#9660;
              </p>
            )}
            {this.state.isDoneOpen
              ? this.props.collection.done.map(item => (
                  <div key={shortid.generate()} className={styles.card}>
                    {item.dueDate}
                  </div>
                ))
              : null}
            {/* {this.state.isDoneOpen
              ? this.state.collection
                  .filter(items => items.done)
                  .map(item => (
                    <div key={shortid.generate()} className={styles.card}>
                      {item.dueDate}
                    </div>
                  ))
              : null} */}
          </div>
        </div>
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
