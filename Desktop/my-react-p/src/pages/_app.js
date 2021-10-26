import "../styles/reset.css";
import "../styles/globals.css";
import { Navbar } from "../components/elements/Navbar/Navbar";
import { Footer } from "../components/elements/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
