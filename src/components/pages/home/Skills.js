import { InfoSection } from "../../elements";

function Skills({ items }) {
  return (
    <InfoSection
      patternP="3"
      title="skills"
      listPosition="left"
      listClassName="py-24 xl:py-16 list-inside"
      patternPClassName="top-0 right-0"
    >
      {items.map(({ id, title }) => (
        <li
          key={id}
          className="py-2 tp-h3 lg:tp-h4 w-[30%] xs:w-full flex-grow list-disc"
        >
          {title}
        </li>
      ))}
    </InfoSection>
  );
}

export { Skills };
