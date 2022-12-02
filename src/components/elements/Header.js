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
      stagger: {
        each: 0.1,
        from: "center",
      },
    });
  }, []);

  return (
    <header
      id="header"
      className="app-container !fixed left-0 right-0 top-0 z-50 flex items-center justify-center py-4 my-4 sm:py-5 overflow-hidden"
    >
      <nav className="flex items-center gap-x-10 gap-y-2 mr-auto">
        {routes.map(({ id, title, href }) => (
          <Button
            key={id}
            href={href}
            type="link"
            title={title}
            titleClassName="font-caption"
          />
        ))}
      </nav>
      <span className="tp-h2 !leading-5 whitespace-pre-line uppercase text-center sm:tp-h3 xs:tp-h5 absolute">
        {`leonardo 
        santiago`}
      </span>
      <SocialMedias />
    </header>
  );
};

export { Header };
