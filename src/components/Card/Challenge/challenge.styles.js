import makeStyles from '@material-ui/core/styles/makeStyles';
export const header = makeStyles(theme => ({
  root: {
    widht: '25px',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
}));

export const content = makeStyles(theme => ({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '1.75em',
  },
}));

export const actions = makeStyles(theme => ({
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    padding: '20px',
  },
  crossBtn: {
    color: '#f50057',
  },
  delete: {
    color: '#ee6f9c',
  },
  done: {
    color: '#37ce12',
  },
  devider: {
    backgroundColor: 'var(--light-gray)',
    height: '25px',
    alignSelf: 'center',
  },
}));
