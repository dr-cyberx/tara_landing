import type { AppProps } from 'next/app';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tara Nft</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
