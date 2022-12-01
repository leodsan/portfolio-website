import { Button } from "../../commons";
import { InfoSection } from "../../elements";

function Education({ items }) {
  return (
    <InfoSection
      hasShadow
      title="education"
      listPosition="right"
      listClassName="pt-14"
    >
      {items.map(({ id, title, link, date, subtitle }) => (
        <li
          key={id}
          className="list-disc w-full relative [&:not(:last-child)]:mb-14 [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:w-[90%] [&:not(:last-child)]:before:h-[1px] [&:not(:last-child)]:before:bg-green-500 [&:not(:last-child)]:before:left-1/2 [&:not(:last-child)]:before:-translate-x-1/2 [&:not(:last-child)]:before:bottom-0 [&:not(:last-child)]:before:absolute"
        >
          <Button target type="a" href={link} className="w-full pb-14 gap-9">
            <div className="flex items-center justify-between flex-grow tp-h1">
              <div className="flex gap-5 items-end">
                <span>{title}</span>_<span className="tp-h4">{subtitle}</span>
              </div>
              <span>{date}</span>
            </div>
          </Button>
        </li>
      ))}
    </InfoSection>
  );
}

export { Education };
