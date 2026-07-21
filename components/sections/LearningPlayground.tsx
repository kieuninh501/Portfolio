import Image from "next/image";
import { RevealItem } from "@/components/motion/RevealSection";
import { copy, playgroundStudies } from "@/data/content";
import type { Locale } from "@/lib/i18n";
import { SectionDescription } from "./SectionDescription";

type LearningPlaygroundProps = {
  locale: Locale;
};

export function LearningPlayground({ locale }: LearningPlaygroundProps) {
  const section = copy[locale].sections.playground;
  const [featuredStudy, ...supportingStudies] = playgroundStudies;

  return (
    <section className="learning-playground-section" id="playground">
      <div className="learning-playground-section__inner">
        <RevealItem
          className="learning-playground-section__header learning-playground-section__header--motion"
          rootMargin="0px 0px -4% 0px"
          threshold={0.18}
        >
          <p className="learning-playground-section__eyebrow">{section.eyebrow}</p>
          <div className="learning-playground-section__title-group">
            <h2 className="learning-playground-section__title">{section.title}</h2>
            <SectionDescription
              className="learning-playground-section__description"
              text={section.description}
            />
          </div>
        </RevealItem>

        <RevealItem
          className="learning-playground-section__panel learning-playground-section__panel--motion"
          rootMargin="0px 0px 6% 0px"
          threshold={0.1}
        >
          <Image
            alt=""
            className="learning-playground-section__panel-bg"
            height={760}
            sizes="(width < 900px) 100vw, 1120px"
            src="/assets/sections/section-4-bg.png"
            width={1120}
          />
          <div className="learning-playground-section__content">
            <div className="learning-playground-section__projects">
              <RevealItem
                as="a"
                className="study-card study-card--large study-card--motion"
                data-study-index="0"
                href={featuredStudy.url}
                rel="noreferrer"
                rootMargin="0px 0px 3% 0px"
                target="_blank"
                threshold={0.12}
              >
                <span className="study-card__image-wrap study-card__image-wrap--large">
                  <Image
                    alt=""
                    className="study-card__image"
                    height={435}
                    sizes="(width < 900px) 475px, 475px"
                    src={featuredStudy.image}
                    width={475}
                  />
                </span>
                <span className="study-card__footer">
                  <span className="study-card__title study-card__title--large">
                    {featuredStudy.title}
                  </span>
                </span>
              </RevealItem>

              <div className="learning-playground-section__small-grid">
                {supportingStudies.map((study, index) => (
                  <RevealItem
                    as="a"
                    className="study-card study-card--small study-card--motion"
                    data-study-index={index + 1}
                    href={study.url}
                    key={study.title}
                    rel="noreferrer"
                    rootMargin="0px 0px 4% 0px"
                    target="_blank"
                    threshold={0.12}
                  >
                    <span className="study-card__image-wrap study-card__image-wrap--small">
                      <Image
                        alt=""
                        className="study-card__image"
                        height={171}
                        sizes="(width < 900px) 222px, 222px"
                        src={study.image}
                        width={222}
                      />
                    </span>
                    <span className="study-card__footer">
                      <span className="study-card__title">{study.title}</span>
                    </span>
                  </RevealItem>
                ))}
              </div>
            </div>

            <RevealItem
              className="learning-playground-section__footer learning-playground-section__footer--motion"
              rootMargin="0px 0px 4% 0px"
              threshold={0.16}
            >
              <div className="learning-playground-section__footer-copy">
                <h3 className="learning-playground-section__footer-title">
                  {section.footerTitle}
                </h3>
                <p className="learning-playground-section__footer-description">
                  {section.footerDescription}
                </p>
              </div>
              <a
                className="learning-playground-section__footer-button"
                href="https://www.behance.net/kieuninh501"
                rel="noreferrer"
                target="_blank"
              >
                <span>{section.footerCta}</span>
                <span className="learning-playground-section__footer-button-icon" aria-hidden="true" />
              </a>
            </RevealItem>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
