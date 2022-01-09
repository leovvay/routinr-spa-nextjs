import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';

import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterLuxon from '@mui/lab/AdapterLuxon';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { store } from '@store/index';
import { theme, GlobalStyles, materialTheme } from '@theme/index';
import { queryClient } from '@store/graphql.client';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const defaultSnackbarOrigin = {
  horizontal: 'right' as const,
  vertical: 'top' as const,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    if (window.analytics && process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY) {
      // eslint-disable-next-line no-underscore-dangle
      window.analytics._writeKey = process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY;
      window.analytics.SNIPPET_VERSION = '4.13.2';
      window.analytics.load?.(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY);
      window.analytics.page?.();
    }
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={materialTheme}>
              <LocalizationProvider dateAdapter={AdapterLuxon}>
                <SnackbarProvider
                  maxSnack={3}
                  variant="info"
                  anchorOrigin={defaultSnackbarOrigin}
                >
                  <Elements stripe={stripePromise}>
                    <GlobalStyles />
                    <Component {...pageProps} />
                  </Elements>
                </SnackbarProvider>
              </LocalizationProvider>
            </MuiThemeProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
