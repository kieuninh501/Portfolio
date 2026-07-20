/* eslint-disable @next/next/no-img-element */
import { RevealItem } from "@/components/motion/RevealSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { copy, journeyStories } from "@/data/content";
import { profile } from "@/data/profile";
import type { Locale } from "@/lib/i18n";
import { SectionDescription } from "./SectionDescription";

type ExperienceProps = {
  locale: Locale;
};

export function Experience({ locale }: ExperienceProps) {
  const section = copy[locale].sections.experience;

  return (
    <section className="journey-section" id="experience">
      <RevealItem
        className="journey-section__background-wrap journey-section__background-wrap--motion"
        rootMargin="0px 0px 8% 0px"
        threshold={0.08}
      >
        <img
          alt=""
          className="journey-section__background"
          height={960}
          src="/assets/sections/section-6-bg.png"
          width={1280}
        />
      </RevealItem>

      <div className="journey-section__inner">
        <RevealItem
          className="journey-section__header journey-section__header--motion"
          rootMargin="0px 0px -4% 0px"
          threshold={0.18}
        >
          <p className="journey-section__eyebrow">{section.eyebrow}</p>
          <div className="journey-section__title-group">
            <h2 className="journey-section__title">{section.title}</h2>
            <SectionDescription className="journey-section__description" text={section.description} />
          </div>
        </RevealItem>

        <RevealItem
          className="journey-section__cv-motion"
          rootMargin="0px 0px 0% 0px"
          threshold={0.18}
        >
          <ButtonLink
            className="journey-section__cv-button"
            href={profile.links.resume}
            rel="noreferrer"
            target="_blank"
            variant="solid-secondary"
          >
            {section.cta}
          </ButtonLink>
        </RevealItem>

        <div className="journey-section__cards" aria-label={section.title}>
          {journeyStories.map((story, index) => (
            <RevealItem
              as="article"
              className="journey-card journey-card--motion"
              data-journey-index={index}
              key={story.title.en}
              rootMargin="0px 0px 4% 0px"
              threshold={0.12}
            >
              <div className="journey-card__heading">
                <h3 className="journey-card__title">{story.title[locale]}</h3>
                <ul className="journey-card__tags" aria-label={`${story.title[locale]} tags`}>
                  {story.tags[locale].map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <p className="journey-card__description">{story.description[locale]}</p>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
