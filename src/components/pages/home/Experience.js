import { Button } from "../../commons";
import { InfoSection } from "../../elements";

function Experience({ items }) {
  return (
    <InfoSection
      patternP="4"
      patternN="5"
      title="experience"
      listPosition="center"
      listClassName="pt-14"
      patternPClassName="top-[9.2rem] right-0"
      patternNClassName="-bottom-[16rem] left-0 z-10"
    >
      {items.map(({ id, title, link, date, subtitle }, index) => (
        <li
          key={id}
          className="w-full relative [&:not(:last-child)]:mb-14 md:[&:not(:last-child)]:mb-10 [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:w-[90%] [&:not(:last-child)]:before:h-[1px] [&:not(:last-child)]:before:bg-green-500 [&:not(:last-child)]:before:left-1/2 [&:not(:last-child)]:before:-translate-x-1/2 [&:not(:last-child)]:before:bottom-0 [&:not(:last-child)]:before:absolute"
        >
          <Button
            target
            type="a"
            href={link}
            className="w-full pb-14 gap-9 md:gap-6 md:pb-10"
          >
            <span className="text-9xl lg:text-8xl sm:text-7xl text-text-3">
              {("0" + (index + 1)).slice(-2)}
            </span>
            <div className="flex items-center justify-between gap-x-6  gap-y-2 flex-grow tp-h4 md:tp-h5 2md:flex-wrap">
              <div className="flex flex-col gap-2 items-start 2md:w-full">
                <span className="tp-h1 lg:tp-h2 md:tp-h4">{title}</span>
                <span>{subtitle}</span>
              </div>
              <span>{date}</span>
            </div>
          </Button>
        </li>
      ))}
    </InfoSection>
  );
}

export { Experience };
