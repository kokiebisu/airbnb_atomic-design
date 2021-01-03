import React from "react";
import { ContextProvider } from "../context/provider";
import "../styles/global.scss";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Vacation Rentals, Homes, Experiences & Places - Airbnb</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"
        />
      </Head>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const data = {};
  // Can send requests for app
  // const client = APIClient(ctx);
  // const { data } = await client.get('...');
  console.log("entered _app initial props");
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

export default MyApp;
