import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { TextField, SvgIcon, Grid, CardContent } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateRangeIcon from '@material-ui/icons/DateRange';

import { content } from '../styles/cardStyling';
import styles from '../styles/cardEditing.module.css';

const ContentSection = ({
  textValue,
  onChangeText,
  dateValue,
  formatDate,
  onChangeDate,
  questId,
}) => {
  const cardContentStyles = content();
  return (
    <CardContent className={cardContentStyles.cardContentEditing}>
      {!questId && <h3 className={styles.createQuest}>CREATE NEW QUEST</h3>}
      <TextField
        className={cardContentStyles.textField}
        id="name-quest"
        type="text"
        inputProps={{
          value: textValue,
          onChange: onChangeText,
          classes: {
            input: cardContentStyles.input,
          },
        }}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="center" className={cardContentStyles.grid}>
          <KeyboardDatePicker
            autoOk
            disableToolbar
            disablePast
            variant="inline"
            onChange={onChangeDate}
            labelFunc={() => formatDate(dateValue)}
            format="dd MMMM yyyy"
            margin="normal"
            id="date-picker-inline"
            keyboardIcon={
              <SvgIcon color="secondary">
                <DateRangeIcon />
              </SvgIcon>
            }
            InputProps={{
              disableUnderline: true,
              classes: {
                input: cardContentStyles.input,
              },
            }}
            value={dateValue}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            classes={{
              root: cardContentStyles.formControl,
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </CardContent>
  );
};

export default ContentSection;
