import { InfoSection } from "../../elements";

function Education({ items }) {
  return (
    <InfoSection
      hasShadow
      title="education"
      listPosition="right"
      listClassName="pt-14 xs:pt-7"
    >
      {items.map(({ id, title, date, subtitle }) => (
        <li
          key={id}
          className="list-disc w-full relative [&:not(:last-child)]:mb-14 [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:w-[90%] [&:not(:last-child)]:before:h-[1px] [&:not(:last-child)]:before:bg-green-500 [&:not(:last-child)]:before:left-1/2 [&:not(:last-child)]:before:-translate-x-1/2 [&:not(:last-child)]:before:bottom-0 [&:not(:last-child)]:before:absolute"
        >
          <div className="flex items-center w-full pb-14 xs:pb-7 gap-9">
            <div className="flex items-center justify-between flex-grow tp-h1 sm:tp-h3 xs:tp-h4 md:flex-col md:items-start gap-3">
              <div className="flex gap-5 items-end lg:flex-col lg:items-start lg:gap-2">
                <span>{title}</span>
                <span className="lg:hidden">_</span>
                <span className="tp-h4 xs:tp-h5">{subtitle}</span>
              </div>
              <span className="md:!tp-h4 xs:tp-h5">{date}</span>
            </div>
          </div>
        </li>
      ))}
    </InfoSection>
  );
}

export { Education };
