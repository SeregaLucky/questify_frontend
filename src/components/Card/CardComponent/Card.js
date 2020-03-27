import React from 'react';
import clsx from 'clsx';
import { CardHeader } from '@material-ui/core';
import { isToday, isTomorrow, format, isValid } from 'date-fns';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from './starIcon';
import { content } from '../CardEding/styles/cardStyling';
import styles from './card.module.css';
import Difficulty from './Difficulty';
import EditDeleteButtons from './DeleteEditButtons/editDeleteButtons';

const Card = ({
  questData,
  onClickEditing,
  onClickDone,
  onClickDelete,
  cancelEditing,
}) => {
  const cardContentStyles = content();

  const formatDate = pickedDate => {
    if (isToday(pickedDate)) return 'Today';
    if (isTomorrow(pickedDate)) return 'Tomorrow';
    return isValid(pickedDate)
      ? format(pickedDate, 'dd MMMM yyyy')
      : 'Invalid date';
  };

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

export default Card;
