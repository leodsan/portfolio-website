import {
  Introduction,
  Skills,
  Experience,
  Education,
  Project,
} from "../components/pages/home";
import { HOME_CONST } from "../constants";

const Home = () => {
  const { skills, experience, education, project } = HOME_CONST;

  return (
    <main>
      <Introduction />
      <Skills items={skills} />
      <Experience items={experience} />
      <Project items={project} />
      <Education items={education} />
    </main>
  );
};

export default Home;
