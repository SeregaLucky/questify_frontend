import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './DeleteQuestModal.module.css';

export default class DeleteChalllengeModal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    onDeleteChallenge: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onCloseModal();
  };
  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.onCloseModal();
  };

  render() {
    const { onCloseModal, onDeleteChallenge } = this.props;

    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>
          <p className={styles.modalText}>Delete this Challenge?</p>
          <div className={styles.btnCloseModal}>
            <button
              type="button"
              className={styles.btnCancel}
              onClick={onCloseModal}
            >
              cancel
            </button>
            <button
              type="button"
              className={styles.btnDelete}
              onClick={onDeleteChallenge}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
