import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  overrides: {
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
      input: {
        textAlign: 'center',
        color: 'var(--vary-dark)',
      },
    },
    MuiCardContent: {
      root: {
        padding: '5px',
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
    text: {
      primary: '#131212',
      secondary: '#ffffff',
    },
  },
  status: {
    danger: '#f50057',
  },
});

export default theme;
