import { Button } from "../../commons";
import { HOME_CONST } from "../../../constants";

const Introduction = () => {
  const { contact, biography, title, yearsOfExperiance, projecsDone } =
    HOME_CONST.introductionInfo;

  return (
    <section className="relative before:-z-50 bg-green-900 before:shadow-box before:absolute before:content-[''] before:w-full before:h-1/2 before:bottom-0 before:left-0">
      <img
        className="absolute top-0 left-0"
        src="/media/pattern-1.svg"
        alt="pattern"
      />
      <img
        className="absolute -top-[15%] right-0"
        src="/media/pattern-2.svg"
        alt="pattern"
      />
      <div className="app-container flex items-center justify-center [&>:nth-child(2n+1)]:w-[30%] [&>*]:z-20 pt-[6.5rem] pb-32 before:content-[''] before:absolute before:z-10 before:top-0 before:-translate-y-[20%] before:w-[29%] before:bottom-0 before:bg-green-700">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <span className="tp-h8 text-text-2 font-caption">contact</span>
            <div className="flex flex-col gap-3">
              {contact.map(({ id, title, link }) =>
                link ? (
                  <Button
                    key={id}
                    title={title}
                    href={link}
                    target
                    type="a"
                    titleClassName="tp-h4"
                  />
                ) : (
                  <span key={id} className="tp-h4">
                    {title}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="tp-h8 text-text-2 font-caption">biography</span>
            <p>{biography}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[7rem] items-center">
          <div className="w-full flex justify-center">
            <h1 className="tp-display4 w-0 flex-grow text-center">{title}</h1>
          </div>
          <div className="relative  flex justify-center before:content-[''] before:w-2/3 before:h-2/3 before:absolute before:rotate-45 before:bottom-[14%] before:z-10 before:bg-green-500">
            <img className="block z-20" src="/media/avatar.png" alt={title} />
          </div>
        </div>
        <div className="flex flex-col gap-14 text-right">
          <div className="flex flex-col gap-5">
            <span className="tp-h8 text-text-2 font-caption">
              years of experiance
            </span>
            <span className="tp-display3">{yearsOfExperiance}</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="tp-h8 text-text-2 font-caption">projecs done</span>
            <span className="tp-display3">{projecsDone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Introduction };
