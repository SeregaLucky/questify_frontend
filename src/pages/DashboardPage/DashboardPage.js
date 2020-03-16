import React, { Component } from 'react';
import shortid from 'shortid';

import * as styles from './DashboardPage.module.css';
import CardEding from '../../components/CardEding/CardEding';
import Header from '../../components/Header/Header';

class DashboardPage extends Component {
  state = {
    isDoneOpen: false,
    collection: [
      {
        today: false,
        tomorrow: false,
        done: true,
        dueDate: '2019-03-16T14:13:53.954Z',
      },
      {
        today: false,
        tomorrow: false,
        done: true,
        dueDate: '2019-03-17T14:13:53.954Z',
      },
      {
        today: false,
        tomorrow: false,
        done: false,
        dueDate: '2019-03-17T14:13:53.954Z',
      },
    ],
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
            <div className={styles.card}>1</div>
            <div className={styles.card}>2</div>
            <div className={styles.card}>3</div>
            <div className={styles.card}>4</div>
            <div className={styles.card}>5</div>
            <div className={styles.card}>6</div>
          </div>
          <div className={styles.tomorrow}>
            <p className={styles.text}>tomorrow</p>
            <div className={styles.card}>7</div>
            <div className={styles.card}>8</div>
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
              ? this.state.collection
                  .filter(items => items.done)
                  .map(item => (
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

export default DashboardPage;
