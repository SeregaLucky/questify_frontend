import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';

import * as styles from './DashboardPage.module.css';
import Quests from '../../redux/tasks/tasksSelectors';
import CardEding from '../../components/CardEding/CardEding';
import Header from '../../components/Header/Header';

class DashboardPage extends Component {
  state = {
    isDoneOpen: false,
  };

  handleClick = e => {
    this.setState(state => ({ isDoneOpen: !state.isDoneOpen }));
  };

  render() {
    return (
      <>
        cardEditing DashboardPage
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
            {this.props.collection.tomorrow.map(item => (
              <div key={shortid.generate()} className={styles.card}>
                {item.dueDate}
              </div>
            ))}
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
      tomorrow: Quests.getTomorowQuests(state),
    },
  };
};

export default connect(mapStateToProps)(DashboardPage);
