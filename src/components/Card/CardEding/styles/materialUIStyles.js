import { makeStyles } from '@material-ui/core/styles';

export const selectStyles = makeStyles({
  select: {
    color: 'var(--light-gray)',
    fontFamily: 'HelveticaNeueCyrRoman, sans-serif',
  },
  icon: {
    fill: 'var(--light-blue)',
  },
});
export const placeholderStyles = makeStyles({
  root: {
    color: 'var(--light-gray)',
    fontFamily: 'HelveticaNeueCyrRoman, sans-serif',
    '&:focus': {
      color: 'var(--light-gray)',
      fontFamily: 'HelveticaNeueCyrRoman, sans-serif',
    },
  },
});

export const iconStyles = makeStyles({
  root: {
    marginRight: '10px',
    width: '18px',
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
