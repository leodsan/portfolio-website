import { Button } from "../../commons";
import { HOME_CONST } from "../../../constants";

const Introduction = () => {
  const {
    contact,
    biography,
    title,
    subtitle,
    yearsOfExperiance,
    projecsDone,
  } = HOME_CONST.introductionInfo;

  return (
    <section className="relative before:-z-50 bg-green-900 before:shadow-box before:absolute before:content-[''] before:w-full before:h-1/2 before:bottom-0 before:left-0">
      <img
        className="absolute top-0 left-0 sm:w-1/4"
        src="/media/pattern-1.svg"
        alt="pattern"
      />
      <img
        className="absolute -top-[15%] right-0 sm:w-1/2"
        src="/media/pattern-2.svg"
        alt="pattern"
      />
      <div className="app-container pt-[6.5rem] pb-32 md:pb-20 flex flex-col gap-[7rem] xl:gap-16 lg:gap-6 lg:pt-14 items-center before:content-[''] before:absolute before:z-10 before:-top-[20%] before:h-[100%] lg:before:h-[70%]  xs:before:h-[55%] before:w-[29%] lg:before:w-[35%] md:before:w-[45%]  before:bg-green-700">
        <div className="text-center tp-display4 xl:tp-display5 lg:tp-display6 sm:tp-h1 z-20 xs:tp-h3">
          <h1>{title}</h1>
          <span className="whitespace-nowrap">{subtitle}</span>
        </div>
        <div className="flex justify-center gap-y-12 [&>:nth-child(2n+1)]:w-[30%] xl:[&>:nth-child(2n+1)]:w-[20%] lg:flex-wrap lg:[&>:nth-child(2n+1)]:w-[50%] xs:[&>:nth-child(2n+1)]:w-[100%] [&>*]:z-20 xs:[&>*]:!text-center">
          <div className="flex flex-col tp-h4 xl:tp-h5 md:tp-h6 sm:gap-y-8">
            <div className="flex flex-col gap-5 basis-52 xs:basis-0">
              <span className="tp-h7 text-text-2 font-caption">contact</span>
              <div className="flex flex-col gap-3">
                {contact.map(({ id, title, link }) =>
                  link ? (
                    <Button
                      key={id}
                      title={title}
                      href={link}
                      target
                      type="a"
                      className="xs:w-full justify-center"
                      titleClassName="tp-h4 xl:tp-h5 md:tp-h6"
                    />
                  ) : (
                    <span key={id}>{title}</span>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <span className="tp-h7 text-text-2 font-caption">biography</span>
              <p>{biography}</p>
            </div>
          </div>
          <div className="lg:-order-1 mx-auto -mt-6 lg:mt-0 lg:w-full flex justify-center">
            <div className="relative xl:w-[40vw] xl:h-[40vw] md:w-[55vw] md:h-[55vw] flex justify-center before:content-[''] before:w-2/3 before:h-2/3 before:absolute before:rotate-45 before:bottom-[14%] before:z-10 before:bg-green-500">
              <img className="block z-20" src="/media/avatar.png" alt={title} />
            </div>
          </div>
          <div className="flex flex-col text-right xs:text-left tp-display3 xl:tp-display4 md:tp-display5 sm:gap-y-8">
            <div className="flex flex-col gap-5 basis-52 xs:basis-0">
              <span className="tp-h7 text-text-2 font-caption">
                years of experience
              </span>
              <span>{yearsOfExperiance}</span>
            </div>
            <div className="flex flex-col gap-5">
              <span className="tp-h7 text-text-2 font-caption">
                projects done
              </span>
              <span>{projectsDone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Introduction };
