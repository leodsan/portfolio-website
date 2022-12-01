import {
  Introduction,
  Skills,
  Experience,
  Education,
} from "../components/pages/home";
import { HOME_CONST } from "../constants";

const Home = () => {
  const { skills, experience, education } = HOME_CONST;

  return (
    <main>
      <Introduction />
      <Skills items={skills} />
      <Experience items={experience} />
      <Education items={education} />
    </main>
  );
};

export default Home;
