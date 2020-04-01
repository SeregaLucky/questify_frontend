import React from 'react';
import T from 'prop-types';
import clsx from 'clsx';
import { CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '../shared/starIcon';
import { content } from '../CardEding/styles/cardStyling';
import styles from './card.module.css';
import Difficulty from '../shared/Difficulty';
import EditDeleteButtons from '../shared/editDeleteButtons';
import formatDate from '../helpers/dateHelper';

const Card = ({ questData, onClickEditing, onClickDone, onClickDelete }) => {
  const cardContentStyles = content();

  return (
    <div
      onClick={onClickEditing}
      role="presentation"
      className={styles.cardWrp}
    >
      <CardHeader
        title={<Difficulty difficulty={questData.difficulty} />}
        action={<StarIcon />}
      />
      <CardContent className={cardContentStyles.cardContent}>
        <Typography variant="h6" gutterBottom>
          {questData.name}
        </Typography>
        <Typography variant="subtitle2" gutterBottom color="secondary">
          {formatDate(questData.dueDate)}
        </Typography>
      </CardContent>
      <div className={styles.foterWrapper}>
        <div
          className={clsx(
            styles.chip,
            questData.group === 'Health' && styles['chipBg-health'],
            questData.group === 'Family' && styles['chipBg-family'],
            questData.group === 'Leisure' && styles['chipBg-leisure'],
            questData.group === 'Work' && styles['chipBg-work'],
            questData.group === 'Learning' && styles['chipBg-learning'],
            questData.group === 'Stuff' && styles['chipBg-stuff'],
          )}
        >
          <Typography variant="body2">{questData.group}</Typography>
        </div>
        <EditDeleteButtons
          done={questData.done}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  questData: T.shape({
    questId: T.string,
    difficulty: T.string.isRequired,
    name: T.string,
    dueDate: T.instanceOf(Date).isRequired,
    group: T.string.isRequired,
    done: T.bool.isRequired,
    isQuest: T.bool,
    challengeSendToUser: T.oneOf([null]),
  }).isRequired,
  onClickEditing: T.func.isRequired,
  onClickDone: T.func.isRequired,
  onClickDelete: T.func.isRequired,
};

export default Card;
