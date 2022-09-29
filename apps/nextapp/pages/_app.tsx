import { AppProps } from 'next/app';
import Head from 'next/head';
import Two from '../components/two/two';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Two />
      <Head>
        <title>Welcome to nextapp!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
