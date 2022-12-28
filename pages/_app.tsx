import '../styles/globals.scss'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <div >
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp
