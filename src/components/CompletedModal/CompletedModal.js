import React from 'react';
import styles from './CompletedModal.module.css';
import imgAward from '../../assets/images/award-2-02.svg';
import iconArrow from '../../assets/icons/right-arrow-sprite.svg';

const CompletedModal = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.btnCloseModal}>
          <span className={styles.text}>completed: </span>
          <button type="button" className={styles.taskName}>
            Visit dentisttttttttttttttttttttt
          </button>
        </div>
        <div className={styles.imgWrapper}>
          <img src={imgAward} alt="target" />
        </div>
        <div className={styles.btnContinueWrapper}>
          <span className={styles.btnContinueText}>Continue </span>
          <button type="button" className={styles.btnContinueIcon}>
            <svg>
              <use href={`${iconArrow}#right-arrow`}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedModal;
