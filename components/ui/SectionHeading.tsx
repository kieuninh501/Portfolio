type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{description}</p>
    </div>
  );
}
