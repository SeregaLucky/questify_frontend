import React from 'react';
import clsx from 'clsx';
import T from 'prop-types';
import { CardHeader } from '@material-ui/core';
import { IconButton, Divider, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { content, actions, header } from './challenge.styles';
import styles from './challenge.module.css';
import stylesBtn from '../CardEding/styles/cardEditing.module.css';
import Difficulty from '../shared/Difficulty';
import EditDeleteButtons from '../shared/editDeleteButtons';
import AmforaIcon from '../shared/amforaIcon';
import formatDate from '../helpers/dateHelper';

const Challenge = ({
  questData,
  onClickEditing,
  onClickDone,
  onClickDelete,
  onAccept,
}) => {
  const cardContentStyles = content();
  const headerStyles = header();
  const actionsStyles = actions();

  return (
    <div
      className={styles.challengeWrap}
      onClick={questData.challengeSendToUser && onClickEditing}
      role="presentation"
    >
      <CardHeader
        title={<Difficulty difficulty={questData.difficulty} />}
        action={<AmforaIcon />}
        className={headerStyles.root}
      />
      <CardContent className={cardContentStyles.cardContent}>
        <Typography variant="subtitle2" gutterBottom color="secondary">
          CHALLENGE
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary">
          {questData.name}
        </Typography>
        <Typography variant="subtitle2" gutterBottom color="secondary">
          {formatDate(questData.dueDate)}
        </Typography>
      </CardContent>
      <div className={styles.footerWrapper}>
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
            <Divider
              orientation="vertical"
              flexItem
              light
              classes={{
                light: actionsStyles.devider,
              }}
            />
            <Button type="button" onClick={onAccept}>
              START
            </Button>
          </div>
        )}
        {questData.challengeSendToUser && (
          <EditDeleteButtons
            done={questData.done}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
        )}
      </div>
    </div>
  );
};

Challenge.propTypes = {
  questData: T.shape({
    questId: T.string,
    difficulty: T.string.isRequired,
    name: T.string,
    dueDate: T.instanceOf(Date).isRequired,
    group: T.string.isRequired,
    done: T.bool.isRequired,
    isQuest: T.bool,
    challengeSendToUser: T.bool,
  }).isRequired,
  onClickEditing: T.func.isRequired,
  onClickDone: T.func.isRequired,
  onClickDelete: T.func.isRequired,
  onAccept: T.func.isRequired,
};

export default Challenge;
