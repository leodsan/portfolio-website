import { GLOBAL_CONST } from "../../constants";
import { Button } from "../commons";

const SocialMedias = () => {
  const { socialMedias } = GLOBAL_CONST;

  return (
    <div className="flex items-center gap-9">
      {socialMedias.map(({ id, icon, link }) => (
        <Button key={id} target type="a" icon={icon} href={link} />
      ))}
    </div>
  );
};

export { SocialMedias };
