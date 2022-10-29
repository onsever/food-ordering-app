import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";
import LayoutWrapper from "../components/layout/LayoutWrapper";

import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <LayoutWrapper>
            <Component {...pageProps} />
        </LayoutWrapper>
    </Provider>
  );
}

export default MyApp;
