import { Introduction } from "../components/pages/home";
import { InfoSection } from "../components/elements";
import { HOME_CONST } from "../constants";

const Home = () => {
  const { skills } = HOME_CONST;

  return (
    <main>
      <Introduction />
      <InfoSection
        patternP="3"
        title="skills"
        listPosition="left"
        patternPClassName="top-0 right-0"
        itemsClassName=""
      >
        {skills.map(({ id, title }) => (
          <li key={id} className="py-2 tp-h3 w-[17.7%] list-disc">
            {title}
          </li>
        ))}
      </InfoSection>
    </main>
  );
};

export default Home;
