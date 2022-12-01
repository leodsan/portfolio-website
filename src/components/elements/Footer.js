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
        <div className="flex items-center justify-center w-[460px] h-[460px] relative before:-z-10 before:rotate-45 before:w-full before:h-full before:bg-green-650 before:absolute before:content-['']">
          <span className="tp-display2 pl-14">CALL Leonardo</span>
          <span className="absolute tp-h4 right-[10%] top-[32%] w-32 text-right normal-case">
            let’s talk about your project
          </span>
        </div>
        <div className="flex w-full items-center justify-between tp-h5 mt-60 ">
          <span>all rights reserved</span>
          <Button
            target
            type="a"
            title={email}
            href={`mailto:${email}`}
            titleClassName="tp-h5"
          />
          <SocialMedias />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
