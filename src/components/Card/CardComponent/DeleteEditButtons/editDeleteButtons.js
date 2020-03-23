import React from 'react';
import {
  CardActions,
  IconButton,
  Select,
  Divider,
  Button,
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { actions } from '../../CardEding/styles/cardStyling';
import styles from '../card.module.css';

const EditDeleteButtons = ({ onClickDone, onClickDelete }) => {
  const actionsStyles = actions();
  return (
    <>
      <div className={styles.wrapBtn}>
        <IconButton
          aria-label="close"
          type="button"
          onClick={onClickDelete}
          classes={{
            label: actionsStyles.delete,
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
        <IconButton
          aria-label="close"
          type="button"
          onClick={onClickDone}
          classes={{
            label: actionsStyles.done,
          }}
        >
          <DoneOutlineIcon />
        </IconButton>
      </div>
    </>
  );
};

export default EditDeleteButtons;
