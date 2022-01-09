import { createTheme } from '@mui/material/styles';

import typography from './typography';

const theme = {
  typography,
};

export const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#2e7eff',
    },
    success: {
      main: '#01be46',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'var(--font-primary)',
  },
});

export default theme;
