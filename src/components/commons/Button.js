import cn from "classnames";
import Link from "next/link";

const Button = ({
  href,
  disable,
  loading,
  reverse,
  className,
  icon = null,
  title = null,
  iconClassName,
  titleClassName,
  type = "button",
  target = false,
  onClick = () => false,
}) => {
  const Container = { link: Link, a: "a", button: "button" }[
    type === "link" && !href ? "a" : type
  ];

  return (
    <Container
      className={cn("button", className, {
        "flex-row-reverse": reverse,
      })}
      onClick={(e) => {
        if (loading || disable) {
          e.preventDefault();
          return;
        }
        onClick(e);
      }}
      href={href}
      target={type === "a" && target ? "_black" : null}
    >
      {title && (
        <span className={cn("button-text", titleClassName)}>{title}</span>
      )}
      {icon && (
        <i className={cn("button-icon", `icon-${icon}`, iconClassName)} />
      )}
    </Container>
  );
};

export { Button };
