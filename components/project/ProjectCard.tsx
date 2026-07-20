import type { Locale } from "@/lib/i18n";
import type { Project } from "@/data/content";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <article className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--color-accent)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--color-muted)]">{project.year}</p>
          <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">{project.title}</h3>
        </div>
        {project.featured ? (
          <span className="rounded-md bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--color-accent)]">
            Featured
          </span>
        ) : null}
      </div>
      <p className="mt-4 leading-7 text-[var(--color-muted)]">{project.summary[locale]}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            className="rounded-md border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
