import React from 'react';
import clsx from 'clsx';
import { CardHeader } from '@material-ui/core';
import { IconButton, Divider, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { isToday, isTomorrow, format, isValid } from 'date-fns';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { content, actions } from '../CardEding/styles/cardStyling';
import styles from './challenge.module.css';
import stylesBtn from '../CardEding/styles/cardEditing.module.css';
import Difficulty from './Difficulty';
import EditDeleteButtons from './DeleteEditButtons/editDeleteButtons';

//challengeSendToUser: true
const Challenge = ({ questData, onClickDone, onClickDelete, onAccept }) => {
  const cardContentStyles = content();
  const actionsStyles = actions();

  const formatDate = pickedDate => {
    if (isToday(pickedDate)) return 'Today';
    if (isTomorrow(pickedDate)) return 'Tomorrow';
    return isValid(pickedDate)
      ? format(pickedDate, 'dd MMMM yyyy')
      : 'Invalid date';
  };

  return (
    <div className={styles.challengeWrap}>
      <CardHeader
        title={<Difficulty difficulty={questData.difficulty} />}
        action={<EmojiEventsIcon />}
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
          )}
        >
          <Typography variant="body2">{questData.group}</Typography>
        </div>
        {!questData.challengeSendToUser && (
          <div className={stylesBtn.wrapBtn}>
            <IconButton
              aria-label="close"
              type="button"
              onClick={onClickDelete}
              classes={{
                label: actionsStyles.crossBtn,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <Button type="button" onClick={onAccept}>
              START
            </Button>
          </div>
        )}
        <EditDeleteButtons
          done={questData.done}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      </div>
    </div>
  );
};

export default Challenge;
