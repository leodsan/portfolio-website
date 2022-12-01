import "../styles/globals.css";
import { Header } from "../components/elements";

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
