import Link from "next/link";

import { GLOBAL_CONST } from "../../constants";
import { Button } from "../commons";
import { SocialMedias } from "./";

const Footer = () => {
  const { email } = GLOBAL_CONST;

  return (
    <footer className="relative pt-52 pb-8 overflow-hidden">
      <img
        alt="pattern"
        src="/media/pattern-6.svg"
        className="absolute top-0 -right-20 -z-10"
      />
      <img
        alt="pattern"
        src="/media/pattern-6.svg"
        className="absolute -bottom-20 -left-20 -scale-[1] -z-10"
      />
      <div className="app-container flex flex-col items-center justify-center">
        <Link
          href={`mailto:${email}`}
          className="flex items-center justify-center w-[460px] aspect-square max-w-[65vw] relative before:-z-10 before:rotate-45 before:w-full before:h-full before:bg-green-650 before:absolute before:content-['']"
        >
          <span className="tp-display2 md:text-[14vw] pl-14 md:pl-8 whitespace-pre-line">
            {`CALL 
            Leonardo`}
          </span>
          <span className="absolute tp-h4 md:text-[3vw] left-[70%] md:!leading-tight top-[33%] whitespace-pre-line text-right normal-case">
            {`let’s talk about 
            your project`}
          </span>
        </Link>
        <div className="flex w-full items-center justify-between tp-h5 mt-60 gap-5 md:flex-wrap">
          <span>all rights reserved</span>
          <Button
            target
            type="a"
            title={email}
            href={`mailto:${email}`}
            titleClassName="tp-h5 xs:tp-h6"
            className="md:w-full order-3"
          />
          <SocialMedias />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
