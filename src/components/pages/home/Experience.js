import { useState } from "react";

import { Button } from "../../commons";
import { InfoSection } from "../../elements";

function Experience({ items }) {
  const [toggleMenu, setToggleMenu] = useState(null);

  const handleToggleList = (id) => {
    if (id === toggleMenu) {
      setToggleMenu(null);
    } else {
      setToggleMenu(id);
    }
  };

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
      {items.map(({ id, title, date, subtitle, list }, index) => (
        <li
          key={id}
          className="w-full relative [&:not(:last-child)]:mb-14 md:[&:not(:last-child)]:mb-10 [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:w-[90%] xs:[&:not(:last-child)]:before:w-[100%] [&:not(:last-child)]:before:h-[1px] [&:not(:last-child)]:before:bg-green-500 [&:not(:last-child)]:before:left-1/2 [&:not(:last-child)]:before:-translate-x-1/2 [&:not(:last-child)]:before:bottom-0 [&:not(:last-child)]:before:absolute"
        >
          <div className="flex items-center w-full pb-14 gap-9 md:gap-6 md:pb-10 xs:flex-col xs:gap-4">
            <span className="text-9xl lg:text-8xl xs:text-6xl text-text-3">
              {("0" + (index + 1)).slice(-2)}
            </span>
            <div className="flex items-center justify-between gap-x-6  gap-y-2 flex-grow tp-h4 md:tp-h5 xs:tp-h6 2md:flex-wrap xs:flex-col xs:text-center xs:justify-center">
              <div className="flex flex-col gap-2 items-start 2md:w-full xs:items-center">
                <span className="tp-h1 lg:tp-h2 md:tp-h4 xs:tp-h5">
                  {title}
                </span>
                <div className="flex gap-4 items-center md:flex-col md:items-start xs:items-center">
                  <span>{subtitle}</span>
                  <Button
                    title="(see more)"
                    onClick={handleToggleList.bind(null, id)}
                  />
                </div>
              </div>
              <span>{date}</span>
            </div>
          </div>
          <div
            className="overflow-hidden transition-all duration-700"
            style={{ maxHeight: toggleMenu === id ? "1000px" : 0 }}
          >
            <ul className="flex flex-col gap-5 mb-12 mx-12 md:mx-6 md:mb-6 whitespace-pre-line">
              {list.map(({ id, text }) => (
                <li key={id} className="list-disc">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </InfoSection>
  );
}

export { Experience };
