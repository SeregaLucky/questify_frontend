import React from 'react';
import clsx from 'clsx';
import { CardActions, IconButton, Divider, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { actions } from '../styles/cardStyling';
import styles from '../styles/cardEditing.module.css';
import DirectionsSelect from '../../../DirectionsSelect/DirectionsSelect';

const Footer = ({ value, onChange, cancelEditing, newCard }) => {
  const actionsStyles = actions();
  return (
    <CardActions
      disableSpacing
      className={clsx(
        actionsStyles.cardActions,
        newCard && actionsStyles.wrapForNew,
      )}
    >
      <DirectionsSelect value={value} handleDestination={onChange} />
      <div className={styles.wrapBtn}>
        <IconButton
          aria-label="close"
          type="button"
          onClick={cancelEditing}
          classes={{
            label: actionsStyles.crossBtn,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <Button type="submit">START</Button>
      </div>
    </CardActions>
  );
};

export default Footer;
