import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";
import LayoutWrapper from "../components/layout/LayoutWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
