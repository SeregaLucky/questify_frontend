import React from 'react';
import T from 'prop-types';
import clsx from 'clsx';
import { CardActions, IconButton, Divider, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { actions } from '../styles/cardStyling';
import styles from '../styles/cardEditing.module.css';
import DirectionsSelect from '../../../DirectionsSelect/DirectionsSelect';

const Footer = ({
  value,
  onChange,
  cancelEditing,
  newCard,
  handleCloseForm,
}) => {
  const actionsStyles = actions();
  const onClose = () => {
    cancelEditing();
    if (newCard) return handleCloseForm();
  };
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
          onClick={onClose}
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

Footer.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  cancelEditing: T.func.isRequired,
  newCard: T.bool,
  handleCloseForm: T.func,
};

export default Footer;
