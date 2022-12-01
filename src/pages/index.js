import { Introduction } from "../components/pages/home";
import { InfoSection } from "../components/elements";
import { HOME_CONST } from "../constants";
import { Button } from "../components/commons";

const Home = () => {
  const { skills, experience } = HOME_CONST;

  return (
    <main>
      <Introduction />
      <InfoSection
        patternP="3"
        title="skills"
        listPosition="left"
        listClassName="py-24"
        patternPClassName="top-0 right-0"
      >
        {skills.map(({ id, title }) => (
          <li key={id} className="py-2 tp-h3 w-[17.7%] list-disc">
            {title}
          </li>
        ))}
      </InfoSection>
      <InfoSection
        patternP="4"
        title="experience"
        listPosition="center"
        listClassName="pt-24"
        patternPClassName="top-[9.2rem] right-0"
      >
        {experience.map(({ id, title, link, date, subtitle }, index) => (
          <li
            key={id}
            className="w-full relative [&:not(:last-child)]:mb-14 [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:w-[90%] [&:not(:last-child)]:before:h-[1px] [&:not(:last-child)]:before:bg-green-500 [&:not(:last-child)]:before:left-1/2 [&:not(:last-child)]:before:-translate-x-1/2 [&:not(:last-child)]:before:bottom-0 [&:not(:last-child)]:before:absolute"
          >
            <Button target type="a" href={link} className="w-full pb-14 gap-9">
              <span className="text-9xl text-text-3">
                {("0" + (index + 1)).slice(-2)}
              </span>
              <div className="flex items-center justify-between flex-grow tp-h4">
                <div className="flex flex-col gap-2 items-start">
                  <span className="tp-h1">{title}</span>
                  <span>{subtitle}</span>
                </div>
                <span>{date}</span>
              </div>
            </Button>
          </li>
        ))}
      </InfoSection>
    </main>
  );
};

export default Home;
