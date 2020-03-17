import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CompletedModal from '../CompletedModal/CompletedModal';

export default class Card extends Component {
  state = {
    isModalOpen: false,
    quest: {
      name: 'Visit a dentist with!!!!!!',
      done: false,
    },
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  closeQuest = () =>
    this.setState(state => ({
      isModalOpen: false,
      quest: { ...state.quest, done: true },
    }));

  /// fetch must be change to axios//
  //   fetchQuest = () => {
  //     const questId = this.match.params.questId;
  //     api.fetchQuest(questId).then(quest => {
  //       this.setState({ ...this.state, quest });
  //     });
  //   };
  //   componentDidMount() {
  //     this.fetchQuest();
  //   }

  render() {
    const { isModalOpen, quest } = this.state;

    return (
      <div>
        <span>Place for Modal</span>
        <button type="button" onClick={this.openModal}>
          done
        </button>
        {isModalOpen && (
          <CompletedModal
            onCloseModal={this.closeModal}
            onCloseQuest={this.closeQuest}
            taskName={quest.name}
          />
        )}
      </div>
    );
  }
}
