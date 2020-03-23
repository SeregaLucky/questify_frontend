import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
//For card rendering ------------
import CardContainer from '../../components/Card';
//-----------------
import * as styles from './DashboardPage.module.css';
import Quests from '../../redux/tasks/tasksSelectors';
import Header from '../../components/Header/Header';
import CreateQuestButton from '../../components/CreateQuestButton';
import TodayList from '../../components/TodayList/TodayList';

//Existing card
//<CardContainer questData={questData} />

//New card
//<CardContainer qestData={{}} newCard={true} />

class DashboardPage extends Component {
  state = {
    isDoneOpen: false,
  };

  handleClick = e => {
    this.setState(state => ({ isDoneOpen: !state.isDoneOpen }));
  };

  handleClickCreate = e => {
    this.setState(state => ({ isDoneOpen: true }));
  };

  render() {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <div className={styles.today}>
            <p className={styles.text}>today</p>
            {this.state.isDoneOpen ? (
              <CardContainer qestData={{}} newCard={true} />
            ) : null}
            {/* <TodayList quests={this.props.collection.today} /> */}
            {this.props.collection.today.map(item => (
              <div key={shortid.generate()} className={styles.card}>
                <CardContainer qestData={{}} />
              </div>
            ))}
          </div>

          <div className={styles.tomorrow}>
            <p className={styles.text}>tomorrow</p>
            {this.props.collection.tomorrow.map(item => (
              <div key={shortid.generate()} className={styles.card}>
                <CardContainer qestData={{}} />
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
                    <CardContainer qestData={{}} />
                  </div>
                ))
              : null}
            <CreateQuestButton
              handleClick={this.handleClickCreate}
              isOpen={this.state.isDoneOpen}
            />
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
