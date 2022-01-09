import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import ServerStyleSheets from '@mui/styles/ServerStyleSheets';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="Routinr" key="title" />
          <meta
            name="p:domain_verify"
            content="6cb18173e477452bb494f0fdd27946a8"
          />
          <meta name="apple-itunes-app" content="app-id=1459345510" />
          <meta name="google-play-app" content="app-id=org.routinr.newapp" />

          <link rel="preconnect" href="https://cookiehub.net" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://cdn.amplitude.com" />
          <link rel="preconnect" href="https://connect.facebook.net" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://onesignal.com" />

          <script src="/js/segment.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://widget.cloudinary.com/v2.0/global/all.js"
            type="text/javascript"
          />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  const styledComponentsSheet = new ServerStyleSheet();
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    // eslint-disable-next-line no-param-reassign
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(
            materialSheets.collect(<App {...props} />)
          ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {materialSheets.getStyleElement()}
          {styledComponentsSheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    styledComponentsSheet.seal();
  }
};

export default MyDocument;
