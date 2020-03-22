import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        border: '1px solid var(--light-blue)',
      },
    },
    MuiSvgIcon: {
      root: {
        '&:hover': {
          fill: '#00d7ff',
        },
      },
    },
    MuiButton: {
      text: {
        color: '#b9c3c8',
        '&:hover': {
          color: '#00d7ff',
        },
      },
    },
    MuiInput: {
      underline: {
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '2px solid #b9c3c8',
        },
      },
    },
    MuiInputBase: {
      root: {
        color: 'var(--vary-dark)',
      },
    },
  },
  palette: {
    primary: {
      main: '#00d7ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#b9c3c8',
    },
    error: {
      main: '#f50057',
    },
  },
  status: {
    danger: '#f50057',
  },
});

export default theme;
