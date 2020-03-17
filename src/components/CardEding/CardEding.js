import React from 'react';
import { isToday, isTomorrow, format, isValid } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Select,
  TextField,
  InputLabel,
  Divider,
  SvgIcon,
  Button,
  Grid,
  CardContent,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import StarRoundedIcon from '@material-ui/icons/StarRounded';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CloseIcon from '@material-ui/icons/Close';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/muiTheme';
import SelectPriority from './SelectPriority';
import { general, header, content, actions } from './styles/cardStyling';
import styles from './styles/cardEditing.module.css';

const CardEditing = () => {
  //--------state-------
  const [difficulty, setDifficulty] = React.useState('');
  const [text, setText] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [chip, setChip] = React.useState('');

  //------- styles -----------------
  const generalStyles = general();
  const headerStyles = header();
  const cardContentStyles = content();
  const actionsStyles = actions();

  //--------- handlers -------------
  const handleDifficulty = ({ target }) => setDifficulty(target.value);
  const handleChangeText = ({ target }) => setText(target.value);
  const handleDateChange = date => setSelectedDate(date);
  const handleDestination = ({ target }) => setChip(target.value);

  //------- Date helper ----------
  const formatDate = pickedDate => {
    if (isToday(pickedDate)) return 'Today';
    if (isTomorrow(pickedDate)) return 'Tomorrow';
    return isValid(pickedDate)
      ? format(pickedDate, 'dd MMMM yyyy')
      : 'Invalid date';
  };

  //DO NOT DELETE this comment
  // console.log('state', chip,
  //   selectedDate,
  //   difficulty,
  //   text);
  return (
    <ThemeProvider theme={theme}>
      <Card className={generalStyles.root}>
        <form noValidate autoComplete="off">
          <CardHeader
            action={
              <>
                <SelectPriority
                  onChangeDiff={handleDifficulty}
                  value={difficulty}
                />
                <IconButton
                  aria-label="settings"
                  color="inherit"
                  classes={{
                    root: headerStyles.startRoot,
                    colorInherit: headerStyles.starColor,
                  }}
                >
                  <StarRoundedIcon />
                </IconButton>
              </>
            }
            classes={{ action: headerStyles.action }}
          />
          <CardContent className={cardContentStyles.cardContent}>
            <InputLabel
              className={cardContentStyles.label}
              htmlFor="name-quest"
            >
              CREATE NEW QUEST
            </InputLabel>
            <TextField
              className={cardContentStyles.textField}
              id="name-quest"
              type="text"
              inputProps={{
                value: text,
                onChange: handleChangeText,
              }}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid
                container
                justify="center"
                className={cardContentStyles.grid}
              >
                <KeyboardDatePicker
                  autoOk
                  disableToolbar
                  disablePast
                  variant="inline"
                  onChange={handleDateChange}
                  labelFunc={() => formatDate(selectedDate)}
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
                  value={selectedDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </CardContent>
          <CardActions disableSpacing className={actionsStyles.cardActions}>
            {/* Here goes the DirectionSelect instead of my Select component */}
            <Select
              native
              value={chip}
              onChange={handleDestination}
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
        </form>
      </Card>
    </ThemeProvider>
  );
};

export default CardEditing;
