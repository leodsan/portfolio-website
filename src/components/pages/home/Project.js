import { Button } from "../../commons";
import { InfoSection } from "../../elements";

const Project = ({ items }) => {
  return (
    <InfoSection
      title="project"
      patternP="4"
      patternPClassName="-right-20 top-[70%] z-10"
      listClassName="gap-8 lg:gap-4 2md:flex-wrap 2md:justify-center !bg-transparent !px-0"
      listPosition="center"
    >
      {items.map(({ id, title, text, href, img }) => (
        <li
          key={id}
          className="w-[30%] 2md:w-[48.5%] md:w-full 2md:flex-grow-0 items-end justify-center flex group overflow-hidden flex-grow relative aspect-square"
        >
          <span className="group-hover:translate-y-[110%] lg:hidden group-hover:opacity-0 transition-all duration-500 tp-h1 2lg:text-[2.2vw] pt-2 pb-3 z-20 relative before:absolute before:w-[70%] before:-top-[2%] before:bg-green-500 before:h-[2px] flex justify-center">
            {title}
          </span>
          <div className="flex flex-col w-full h-full justify-center translate-y-full lg:translate-y-0 z-40 p-8 absolute gap-5 lg:gap-2 group-hover:translate-y-0 items-center transition-all duration-500">
            <span className="tp-h1 2lg:text-[2.2vw] 2md:text-[3vw] md:tp-h1 sm:tp-h3 xs:tp-h4 flex pb-2 relative before:absolute before:w-[70%] before:-bottom-[2%] before:bg-green-500 before:h-[2px] justify-center">
              {title}
            </span>
            <p className="text-center tp-h4 2lg:text-[1.5vw] 2md:text-[2vw] md:tp-h3 sm:tp-h5 xs:tp-h6">
              {text}
            </p>
            <Button
              title="(see more)"
              titleClassName="tp-h4 2lg:text-[1.5vw] 2md:text-[2vw] md:tp-h3 sm:tp-h5 xs:tp-h6"
            />
          </div>
          <span className="absolute top-0 opacity-0 lg:opacity-80 group-hover:opacity-100 transition-all duration-500 left-0 w-full h-full z-30 bg-green-900 border-[1.5rem] 2md:border-[1rem] border-green-700" />
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 group-hover:opacity-0"
          />
        </li>
      ))}
    </InfoSection>
  );
};

export { Project };
