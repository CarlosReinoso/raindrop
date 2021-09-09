import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 478,
      md: 990
    }
  },
  // typography: {
  //   subtitle1: {
  //     fontFamily: "'Times New Roman', 'Nunito', serif",
  //     fontSize: "3.75rem",
  //   },
  // },
  palette: {
    primary: {
      main: 'rgb(255,255,255)',
    },
    text: {
      primary: 'rgb(20, 20, 20)',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: 'rgb(174, 15, 59)',
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgb(174, 15, 59)',
          filter: 'grayscale(30%)'
        }
      },
      outlined: {
        '&:hover': {
          backgroundColor: 'rgb(245, 245, 245)',
        }
      },
    }
  }  
});

theme = responsiveFontSizes(theme)

export const section = {
  paddingX: {
    xs: 2,
    sm: 4,
    md: 12,
    lg: 24,
  },
  paddingY: {
    xs: 1,
    sm: 2,
    md: 4,
    lg: 8,
  },
};

export default theme;
