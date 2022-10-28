import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Home from "./home";

export default function Index() {
  return (
    <div>
      <Head>
        <title>FoodLog</title>
        <meta
          name="description"
          content="World's famous burgers and pizzas, just for you!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home />
    </div>
  );
}
