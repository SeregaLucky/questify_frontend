import React from 'react';
import T from 'prop-types';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { actions } from '../CardEding/styles/cardStyling';
import styles from '../CardComponent/card.module.css';

const EditDeleteButtons = ({ done, onClickDone, onClickDelete }) => {
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
        {!done && (
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
        )}
      </div>
    </>
  );
};

EditDeleteButtons.propTypes = {
  done: T.bool.isRequired,
  onClickDone: T.func.isRequired,
  onClickDelete: T.func.isRequired,
};

export default EditDeleteButtons;
