import "../styles/globals.scss";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Layout from "../components/Layout/Layout";
import { firebaseConfig } from "../firebase.config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import UIPovider from "../context/uiContext";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIPovider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIPovider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
