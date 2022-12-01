import { Button } from "../commons";
import { HEADER_CONST } from "../../constants";

const Header = () => {
  const { routes, socialMedias } = HEADER_CONST;

  return (
    <header className="app-container z-50 flex items-center justify-center py-8">
      <nav className="flex items-center gap-10 mr-auto">
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
        titleClassName="tp-h2 uppercase text-center"
      />
      <div className="flex items-center gap-9">
        {socialMedias.map(({ id, icon, link }) => (
          <Button key={id} target type="a" icon={icon} href={link} />
        ))}
      </div>
    </header>
  );
};

export { Header };
