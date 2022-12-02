import gsap from "gsap";

import { Button } from "../commons";
import { HEADER_CONST } from "../../constants";
import { SocialMedias } from "./SocialMedias";
import { useEffect } from "react";

const Header = () => {
  const { routes } = HEADER_CONST;

  useEffect(() => {
    gsap.set(["#header > *"], {
      yPercent: -150,
      opacity: 0,
    });

    gsap.to(["#header > *"], {
      yPercent: 0,
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <header
      id="header"
      className="app-container !fixed left-0 right-0 top-0 z-50 flex items-center justify-between py-6 bg-green-900 sm:py-3 overflow-hidden"
    >
      <span className="tp-h2 !leading-5 whitespace-pre-line uppercase text-center sm:tp-h3 xs:tp-h5">
        {`leonardo 
        santiago`}
      </span>
      <SocialMedias />
    </header>
  );
};

export { Header };
