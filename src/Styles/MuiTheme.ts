import { createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3D405B',
    },
    secondary: {
      main: '#E07A5F',
    },
    background: {
      default: '#bdbdbd',
    },
    warning: {
      main: '#771e8a',
    },
    error: {
      main: '#7d1010',
    },
    info: {
      main: '#285773',
    },
    success: {
      main: '#335a37',
    },
    divider: 'rgba(55,52,52,0.12)',
    text: {
      primary: 'rgba(49,45,45,0.96)',
      secondary: 'rgba(26,26,26,0.6)',
      disabled: 'rgba(53,49,49,0.38)',
    },
  },
});

export default customTheme;
