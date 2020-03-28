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

//Existing card
//<CardContainer questData={questData} />

//New card
//<CardContainer questData={{}} newCard={true} />

class DashboardPage extends Component {
  state = {
    isDoneOpen: false,
    isOpen: false,
  };

  handleClick = e => {
    this.setState(state => ({ isDoneOpen: !state.isDoneOpen }));
  };

  handleClickCreate = e => {
    this.setState(state => ({ isOpen: true }));
  };

  render() {
    const { collection } = this.props;
    const { isDoneOpen, isOpen } = this.state;
    return (
      <>
        <Header />
        <div className={styles.container}>
          <div className={styles.today}>
            <p className={styles.text}>today</p>

            {isOpen ? <CardContainer questData={{}} newCard={true} /> : null}

            {collection.today.map(item => (
              <div key={item._id} className={styles.card}>
                <CardContainer
                  questData={{
                    questId: item._id,
                    difficulty: item.difficulty,
                    name: item.name,
                    dueDate: item.dueDate,
                    group: item.group,
                    done: item.done,
                    isQuest: item.isQuest,
                    challengeSendToUser: item.challengeSendToUser || null,
                  }}
                />
              </div>
            ))}
          </div>

          <div className={styles.tomorrow}>
            <p className={styles.text}>tomorrow</p>
            {collection.tomorrow.map(item => (
              <div key={item._id} className={styles.card}>
                <CardContainer
                  questData={{
                    questId: item._id,
                    difficulty: item.difficulty,
                    name: item.name,
                    dueDate: item.dueDate,
                    group: item.group,
                    done: item.done,
                    isQuest: item.isQuest,
                    challengeSendToUser: item.challengeSendToUser || null,
                  }}
                />
              </div>
            ))}
          </div>

          <div className={styles.other}>
            <p className={styles.text}>other</p>
            {collection.other.map(item => (
              <div key={item._id} className={styles.card}>
                <CardContainer
                  questData={{
                    questId: item._id,
                    difficulty: item.difficulty,
                    name: item.name,
                    dueDate: item.dueDate,
                    group: item.group,
                    done: item.done,
                    isQuest: item.isQuest,
                    challengeSendToUser: item.challengeSendToUser || null,
                  }}
                />
              </div>
            ))}
          </div>

          <div className={styles.done}>
            {isDoneOpen ? (
              <p className={styles.text} onClick={this.handleClick}>
                done &#9650;
              </p>
            ) : (
              <p className={styles.text} onClick={this.handleClick}>
                done &#9660;
              </p>
            )}
            {isDoneOpen
              ? collection.done.map(item => (
                  <div key={item._id} className={styles.card}>
                    <CardContainer
                      questData={{
                        questId: item._id,
                        difficulty: item.difficulty,
                        name: item.name,
                        dueDate: item.dueDate,
                        group: item.group,
                        done: item.done,
                        isQuest: item.isQuest,
                        challengeSendToUser: item.challengeSendToUser || null,
                      }}
                    />
                  </div>
                ))
              : null}
            <CreateQuestButton
              handleClick={this.handleClickCreate}
              isOpen={isOpen}
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
      other: Quests.getOtherQuests(state),
    },
  };
};

export default connect(mapStateToProps)(DashboardPage);
