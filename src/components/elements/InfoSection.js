import cn from "classnames";

const InfoSection = ({
  title,
  children,
  className,
  hasShadow,
  listClassName,
  patternP = null,
  patternN = null,
  patternPClassName,
  patternNClassName,
  listPosition = "left",
}) => {
  return (
    <section
      className={cn("relative pt-[17.5rem] lg:pt-40", className, {
        "bg-green-900 pb-48 before:content-[''] before:w-full before:bottom-0 before:left-0 before:h-1/2 before:shadow-box before:absolute before:-z-20":
          hasShadow,
      })}
    >
      {patternP && (
        <img
          alt="pattern"
          src={`/media/pattern-${patternP}.svg`}
          className={cn("absolute -z-10", patternPClassName)}
        />
      )}
      {patternN && (
        <img
          alt="pattern"
          src={`/media/pattern-${patternN}.svg`}
          className={cn("absolute -z-10", patternNClassName)}
        />
      )}
      <div className="app-container flex flex-col gap-16 lg:gap-8">
        <div className="flex gap-8 xl:gap-6 items-end">
          <span className="text-7xl xl:text-6xl md:text-5xl !leading-[0.6]">
            &#9642;
          </span>
          <h2 className="uppercase tp-display3 xl:tp-display4 md:tp-display5">
            {title}
          </h2>
        </div>
        <ul
          className={cn(
            "bg-green-700 flex flex-wrap gap-x-8 z-20",
            listClassName,
            {
              "-ml-[var(--app-space)] px-[var(--app-space)] md:ml-0":
                listPosition === "left",
              "-mr-[var(--app-space)] md:mr-0 px-[4.9375rem] lg:px-12 2md:px-10":
                listPosition === "right",
              "px-[4.9375rem] lg:px-12 2md:px-10": listPosition === "center",
            }
          )}
        >
          {children}
        </ul>
      </div>
    </section>
  );
};

export { InfoSection };
