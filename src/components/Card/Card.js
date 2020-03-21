import React from 'react';
import clsx from 'clsx';
import { CardHeader, IconButton } from '@material-ui/core';
import { isToday, isTomorrow, format, isValid, parseISO } from 'date-fns';
import CardContent from '@material-ui/core/CardContent';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Typography from '@material-ui/core/Typography';
import StarIcon from './starIcon';
import { content } from '../CardEding/styles/cardStyling';
import styles from './card.module.css';
import Difficulty from './Difficulty';

const Card = ({ questData, onClick }) => {
  const cardContentStyles = content();

  const formatDate = pickedDate => {
    const x = parseISO(pickedDate);
    if (isToday(x)) return 'Today';
    if (isTomorrow(x)) return 'Tomorrow';
    return isValid(x) ? format(x, 'dd MMMM yyyy') : 'Invalid date';
  };
  return (
    <div onClick={onClick} role="presentation">
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
      <div
        className={clsx(
          styles.chip,
          questData.group === 'Health' && styles['chipBg-health'],
        )}
      >
        <Typography variant="body2">{questData.group}</Typography>
      </div>
    </div>
  );
};

export default Card;
