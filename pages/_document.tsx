import React from "react";
import { Head, Main, NextScript } from 'next/document';

const TaskManagerDocument = () => (
  <html lang="en" dir="ltr">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap" rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </html>
);

export default TaskManagerDocument;
