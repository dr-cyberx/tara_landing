/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const _document = () => {
  return (
    <div>
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </div>
  );
};

export default _document;
