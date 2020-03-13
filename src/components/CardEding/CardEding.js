import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Divider,
  Button,
  Grid,
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import CardContent from '@material-ui/core/CardContent';
import { red, blue } from '@material-ui/core/colors';
import StarIcon from '@material-ui/icons/Star';
import SelectPriority from './SelectPriority';
import styles from './cardEditing.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CardEditing = () => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  // const [state, setState] = React.useState({
  //     age: '',
  //     name: 'hai',
  // });
  // const handleExpandClick = () => {
  //     setExpanded(!expanded);
  // };
  const [chip, setChip] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //     setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  const handleChange2 = event => {
    setChip(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Card className={styles.cardWrapp}>
      <CardHeader
        subheader={<SelectPriority />}
        action={
          <IconButton aria-label="settings">
            <StarIcon />
          </IconButton>
        }
      />
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <InputLabel htmlFor="standard-basic">CREATE NEW QUEST</InputLabel>
          <TextField id="standard-basic" />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </form>
      </CardContent>
      <CardActions disableSpacing>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
          <Select
            native
            value={chip}
            onChange={handleChange2}
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
        </FormControl>
        <IconButton aria-label="close">
          <CloseIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <Button>CLOSE</Button>
      </CardActions>
    </Card>
  );
};

export default CardEditing;

{
  /* <FormControl className={classes.formControl}>
<Select
  value={age}
  onChange={handleChange}
  displayEmpty
  className={classes.selectEmpty}
>
  <MenuItem value="" disabled>
    Priority
  </MenuItem>
  <MenuItem value={0}>Low</MenuItem>
  <MenuItem value={1}>Normal</MenuItem>
  <MenuItem value={2}>High</MenuItem>
</Select>
</FormControl> */
}
