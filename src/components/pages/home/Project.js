import Link from "next/link";
import { Button } from "../../commons";
import { InfoSection } from "../../elements";

const Project = ({ items }) => {
  return (
    <InfoSection
      title="project"
      listClassName="gap-8 !bg-transparent px-0"
      listPosition="center"
    >
      {items.map(({ id, title, text, href, img }) => (
        <li
          key={id}
          className="w-[30%] flex flex-col group overflow-hidden items-center justify-center flex-grow relative h-[27vw]"
        >
          <div className="flex flex-col z-20 p-8 gap-5 group-hover:translate-y-0 items-center translate-y-full transition-all duration-300">
            <span className="tp-h1 block  group-hover:translate-y-0 transition-all duration-300 -translate-y-full">
              {title}
            </span>
            <p className="text-center tp-h4">{text}</p>
            <Button title="(see more)" titleClassName="tp-h4" />
          </div>
          <span className="absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 left-0 w-full h-full bg-green-900 border-[1.5rem] border-green-700 z-10" />
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover absolute top-0 left-0 transition-all duration-300 group-hover:opacity-0"
          />
        </li>
      ))}
    </InfoSection>
  );
};

export { Project };
