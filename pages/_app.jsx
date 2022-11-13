import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";
import LayoutWrapper from "../components/layout/LayoutWrapper";

import { Provider } from "react-redux";
import store from "../redux/store";

import { SessionProvider } from "next-auth/react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
        <Provider store={store}>
            <LayoutWrapper>
                <ToastContainer />
                <Component {...pageProps} />
            </LayoutWrapper>
        </Provider>
    </SessionProvider>
  );
}

export default MyApp;
