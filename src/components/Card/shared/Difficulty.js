import React from 'react';
import Typography from '@material-ui/core/Typography';
import T from 'prop-types';
import styles from '../Challenge/challenge.module.css';
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

Difficulty.propTypes = {
  difficulty: T.string.isRequired,
};

export default Difficulty;
