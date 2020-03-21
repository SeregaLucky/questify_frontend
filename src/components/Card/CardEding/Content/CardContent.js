import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  TextField,
  InputLabel,
  SvgIcon,
  Grid,
  CardContent,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { content } from '../styles/cardStyling';

const ContentSection = ({
  textValue,
  onChangeText,
  dateValue,
  formatDate,
  onChangeDate,
}) => {
  const cardContentStyles = content();
  return (
    <CardContent className={cardContentStyles.cardContent}>
      <InputLabel className={cardContentStyles.label} htmlFor="name-quest">
        CREATE NEW QUEST
      </InputLabel>
      <TextField
        className={cardContentStyles.textField}
        id="name-quest"
        type="text"
        inputProps={{
          value: textValue,
          onChange: onChangeText,
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
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </CardContent>
  );
};

export default ContentSection;
