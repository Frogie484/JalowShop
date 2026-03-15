type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <span className="pill">{eyebrow}</span> : null}
      <h2 className="mt-4 font-display text-4xl font-semibold leading-none sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-stone">{description}</p> : null}
    </div>
  );
}
