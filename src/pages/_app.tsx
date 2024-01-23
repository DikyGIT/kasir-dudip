import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="cashier.png" type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

//Rafce
