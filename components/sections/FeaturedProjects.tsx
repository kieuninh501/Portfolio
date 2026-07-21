import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { copy, projects } from "@/data/content";
import { RevealItem } from "@/components/motion/RevealSection";
import { SectionDescription } from "./SectionDescription";

type FeaturedProjectsProps = {
  locale: Locale;
};

export function FeaturedProjects({ locale }: FeaturedProjectsProps) {
  const section = copy[locale].sections.projects;
  const ctaLabel = locale === "en" ? "View Case Study" : "Xem Case Study";
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="featured-projects-section" id="projects">
      <div className="featured-projects-section__inner">
        <RevealItem
          className="featured-projects-section__header featured-projects-section__header--motion"
          rootMargin="0px 0px -4% 0px"
          threshold={0.18}
        >
          <p className="featured-projects-section__eyebrow">{section.eyebrow}</p>
          <div className="featured-projects-section__title-group">
            <h2 className="featured-projects-section__title">{section.title}</h2>
            <SectionDescription
              className="featured-projects-section__description"
              text={section.description}
            />
          </div>
        </RevealItem>

        <div className="featured-projects-section__stage">
          {featuredProjects.map((project, index) => (
            <RevealItem
              as="a"
              aria-label={`${ctaLabel}: ${project.title}`}
              className="featured-project-card featured-project-card--motion"
              data-project-index={index}
              href={`/${locale}/case-studies/${project.slug}`}
              key={project.slug}
              rootMargin="0px 0px 2% 0px"
              threshold={0.12}
            >
              <Image
                alt=""
                className="featured-project-card__image"
                height={269}
                sizes="(width < 640px) 120px, 360px"
                src={project.image}
                width={360}
              />
              <div className="featured-project-card__content">
                <div className="featured-project-card__text">
                  <div className="featured-project-card__heading">
                    <h3 className="featured-project-card__title">{project.title}</h3>
                    <p className="featured-project-card__meta">{project.meta[locale]}</p>
                  </div>
                  <p className="featured-project-card__summary">{project.summary[locale]}</p>
                </div>
                <span className="featured-project-card__link">
                  <span>{ctaLabel}</span>
                  <span className="featured-project-card__link-icon" aria-hidden="true" />
                </span>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
