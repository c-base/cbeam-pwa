import "../styles/globals.css";
import Head from 'next/head';
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import '../i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#060606"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
