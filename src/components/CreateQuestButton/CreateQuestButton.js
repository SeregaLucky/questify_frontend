import React from 'react';
import styles from './CreateQuestButton.module.css';

function CreateQuestButton({ handleClick }) {
  return (
    <button className={styles.createButton} onClick={handleClick}>
      +
    </button>
  );
}

export default CreateQuestButton;
