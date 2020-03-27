import makeStyles from '@material-ui/core/styles/makeStyles';

export const general = makeStyles(theme => ({
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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(2),
  },
}));
export const header = makeStyles(theme => ({
  root: {
    '&.MuiCardHeader-root-158': {
      padding: '10px',
    },
  },
  startRoot: {
    widht: '20px',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
}));

export const content = makeStyles(theme => ({
  // label: {
  //   textAlign: 'center',
  //   fontFamily: 'HelveticaNeueCyrBold, sans-serif',
  //   marginBottom: '10px',
  // },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2.55em',
  },
  cardContentEditing: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '0.6em',
  },
  textField: {
    width: '190px',
    alignSelf: 'center',
    '&.MuiInputBase-input .MuiInputBase-root': {
      color: 'var(--vary-dark)',
      fontSize: '14px',
      fontFamily: 'HelveticaNeueCyrRoman, sans-serif',
      textAlign: 'center',
    },
    '&:focus': {
      '& .MuiInput-underline:after': {
        borderColor: 'var(--light-blue)',
      },
    },
  },
  grid: {
    width: '167px',
  },
  input: {
    textAlign: 'center',
  },
  gutterBottom: {
    marginBottom: '35px',
  },
  formControl: {
    '&.MuiFormControl-marginNormal-248': {
      marginTop: '5px',
    },
  },
}));

export const actions = makeStyles(theme => ({
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  crossBtn: {
    color: '#f50057',
  },
  // deleteEditRoot: {
  //   width: '20px',
  // },
  wrapForNew: {
    marginBottom: '5px',
  },
  delete: {
    color: '#ee6f9c',
  },
  done: {
    color: '#37ce12',
  },
}));
