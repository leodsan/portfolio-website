import { InfoSection } from "../../elements";

function Skills({ items }) {
  return (
    <InfoSection
      patternP="3"
      title="skills"
      listPosition="left"
      listClassName="py-24 list-inside"
      patternPClassName="top-0 right-0"
    >
      {items.map(({ id, title }) => (
        <li key={id} className="py-2 tp-h3 w-[17.7%] list-disc">
          {title}
        </li>
      ))}
    </InfoSection>
  );
}

export { Skills };
