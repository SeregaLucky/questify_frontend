import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './card.module.css';
import DifIcon from './difficultyIcons';

const Difficulty = ({ difficulty }) => {
  return (
    <div className={styles.diffWrapper}>
      {difficulty === 'Easy' && <DifIcon.Easy />}
      {difficulty === 'Normal' && <DifIcon.Normal />}
      {difficulty === 'Hard' && <DifIcon.Hard />}
      <Typography variant="subtitle2" gutterBottom color="secondary">
        {difficulty}
      </Typography>
    </div>
  );
};

export default Difficulty;
