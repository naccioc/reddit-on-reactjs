import '../styles/globals.css';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { useStore } from '../state/store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initial_state);
  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.elementType
};

export default MyApp;
