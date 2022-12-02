import cn from "classnames";
import { GLOBAL_CONST } from "../../constants";
import { Button } from "../commons";

const SocialMedias = ({ className }) => {
  const { socialMedias } = GLOBAL_CONST;

  return (
    <div className={cn("flex items-center gap-9 sm:gap-4", className)}>
      {socialMedias.map(({ id, icon, link }) => (
        <Button key={id} target type="a" icon={icon} href={link} />
      ))}
    </div>
  );
};

export { SocialMedias };
