import { Button } from "../commons";
import { HEADER_CONST } from "../../constants";
import { SocialMedias } from "./SocialMedias";

const Header = () => {
  const { routes } = HEADER_CONST;

  return (
    <header className="app-container z-50 flex items-center justify-center py-8 sm:py-5">
      <nav className="flex items-center gap-x-10 gap-y-2 mr-auto">
        {routes.map(({ id, title }) => (
          <Button
            key={id}
            href="/"
            type="link"
            title={title}
            titleClassName="font-caption"
          />
        ))}
      </nav>
      <Button
        href="/"
        type="link"
        className="w-min absolute"
        title="leonardo santiago"
        titleClassName="tp-h2 !leading-5 uppercase text-center sm:tp-h3 xs:tp-h5 "
      />
      <SocialMedias />
    </header>
  );
};

export { Header };
