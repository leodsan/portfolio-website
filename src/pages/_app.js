import "../styles/globals.css";
import { Footer, Header } from "../components/elements";

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
