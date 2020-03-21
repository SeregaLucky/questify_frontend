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
// import DirectionsSelect from '../../../DirectionsSelect/DirectionsSelect';

const Footer = ({ value, onChange, cancelEditing }) => {
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
        <option value="Family">Family</option>
        <option value="Health">Health</option>
        <option value="Leisure">Leisure</option>
        <option value="Stuff">Stuff</option>
        <option value="Learning">Learning</option>
        <option value="Work">Work</option>
      </Select>
      {/* <DirectionsSelect value={value} handleDestination={onChange} /> */}
      {/* ---------------- */}
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
