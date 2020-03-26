import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CompletedModal.module.css';
import imgAward from '../../assets/images/award-2-02.svg';
import iconArrow from '../../assets/icons/right-arrow-sprite.svg';

export default class CompletedModal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    onCloseQuest: PropTypes.func.isRequired,
    taskName: PropTypes.string.isRequired,
  };

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

  render() {
    const { onCloseModal, onCloseQuest, taskName } = this.props;

    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div className={styles.btnCloseModal}>
            <span className={styles.text}>completed: </span>
            <button
              type="button"
              className={styles.taskName}
              onClick={onCloseModal}
            >
              {taskName}
            </button>
          </div>
          <div className={styles.imgWrapper}>
            <img src={imgAward} alt="target" />
          </div>
          <div className={styles.btnContinueWrapper}>
            <span className={styles.btnContinueText}>Continue </span>
            <button
              type="button"
              className={styles.btnContinueIcon}
              onClick={onCloseQuest}
            >
              <svg>
                <use href={`${iconArrow}#right-arrow`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
