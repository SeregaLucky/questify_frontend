import React from 'react';
import {
  CardActions,
  IconButton,
  Select,
  Divider,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { actions } from '../styles/cardStyling';
import styles from '../styles/cardEditing.module.css';

const Footer = ({ value, onChange }) => {
  const actionsStyles = actions();
  return (
    <CardActions disableSpacing className={actionsStyles.cardActions}>
      {/* Here goes the DirectionSelect instead of my Select component */}
      <Select
        native
        value={value}
        onChange={onChange}
        inputProps={{
          name: 'chip',
          id: 'filled-age-native-simple',
        }}
      >
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
      {/* ---------------- */}
      <div className={styles.wrapBtn}>
        <IconButton
          aria-label="close"
          color="inherit"
          classes={{
            colorInherit: actionsStyles.crossBtn,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <Button>START</Button>
      </div>
    </CardActions>
  );
};

export default Footer;
