import Image from "next/image";
import { copy, craftSteps } from "@/data/content";
import type { Locale } from "@/lib/i18n";
import { RevealItem } from "@/components/motion/RevealSection";
import { SectionDescription } from "./SectionDescription";

type CraftProcessProps = {
  locale: Locale;
};

export function CraftProcess({ locale }: CraftProcessProps) {
  const section = copy[locale].sections.craft;

  return (
    <section className="craft-process-section" id="craft">
      <div className="craft-process-section__inner">
        <RevealItem
          className="craft-process-section__header craft-process-section__header--motion"
          rootMargin="0px 0px -4% 0px"
          threshold={0.16}
        >
          <p className="craft-process-section__eyebrow">{section.eyebrow}</p>
          <div className="craft-process-section__title-group">
            <h2 className="craft-process-section__title">{section.title}</h2>
            <SectionDescription
              className="craft-process-section__description"
              text={section.description}
            />
          </div>
        </RevealItem>

        <div className="craft-process-section__notes" aria-label={section.title}>
          {craftSteps.map((step) => (
            <RevealItem
              as="article"
              className="craft-note craft-note--motion"
              data-note-index={step.number}
              key={step.number}
              rootMargin="0px 0px 8% 0px"
              threshold={0.08}
            >
              <Image
                alt=""
                className="craft-note__image"
                height={353}
                sizes="(width < 640px) 270px, 353px"
                src={step.image}
                width={353}
              />
              <div className="craft-note__content">
                <h3 className="craft-note__title">
                  {step.number}. {step.title[locale]}
                </h3>
                <p className="craft-note__description">{step.description[locale]}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
