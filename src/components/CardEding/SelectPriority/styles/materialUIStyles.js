import { makeStyles } from '@material-ui/core/styles';

export const formControlStyles = makeStyles({
  formControl: {
    minWidth: 120,
  },
});

export const selectStyles = makeStyles({
  select: {
    color: 'var(--light-gray)',
  },
  icon: {
    fill: 'var(--light-blue)',
  },
});
export const placeholderStyles = makeStyles({
  root: {
    color: 'var(--light-gray)',
    '&:focus': {
      color: 'var(--light-gray)',
    },
  },
});

export const iconStyles = makeStyles({
  root: {
    marginRight: '10px',
  },
  colorPrimary: {
    color: 'var(--light-blue)',
  },
  colorSecondary: {
    color: '#1de9b6',
  },
  colorAction: {
    color: '#ff3d00',
  },
  fontSizeInherit: '10px',
});
