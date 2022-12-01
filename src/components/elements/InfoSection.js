import cn from "classnames";

const InfoSection = ({
  title,
  children,
  listClassName,
  patternP = null,
  patternN = null,
  patternPClassName,
  patternNClassName,
  listPosition = "left",
}) => {
  return (
    <section className="relative pt-[17.5rem]">
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
      <div className="app-container flex flex-col gap-8">
        <div className="flex gap-8 items-end">
          <span className="text-7xl leading-[0.6]">&#9642;</span>
          <h2 className="uppercase tp-display3">{title}</h2>
        </div>
        <ul
          className={cn(
            "bg-green-700 flex flex-wrap list-inside gap-x-8",
            listClassName,
            {
              "-ml-[var(--app-space)] px-[var(--app-space)]":
                listPosition === "left",
              "-mr-[var(--app-space)] px-[var(--app-space)]":
                listPosition === "right",
              "px-[4.9375rem]": listPosition === "center",
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
