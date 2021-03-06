import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 478,
      md: 990,
      lg: 1280,
      xl: 1920,
    }
  },
  typography: {
    fontFamily: 'Nunito'
  },
  palette: {
    primary: {
      main: 'rgb(56, 152, 236)',
    },
    secondary: {
      main: 'rgb(174, 15, 59)',
    },
    text: {
      primary: 'rgb(20, 20, 20)',
      secondary: 'rgb(174, 15, 59)',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: 'rgb(174, 15, 59)',
        color: 'white',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: 'rgb(174, 15, 59)',
          filter: 'grayscale(30%)'
        }
      },
      outlined: {
        textTransform: 'capitalize',
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
