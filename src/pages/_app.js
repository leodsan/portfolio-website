import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import "../styles/globals.css";
import { Footer, Header } from "../components/elements";

function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.3,
      easing: (x) => Math.min(1, 1.001 - 2 ** (-10 * x)), // https://www.desmos.com/calculator/brs54l4xou
      smooth: true,
      direction: "vertical",
    });
    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
