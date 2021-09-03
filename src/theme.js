import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'rgb(0,0,0,0.1)',
    },
  },
});

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