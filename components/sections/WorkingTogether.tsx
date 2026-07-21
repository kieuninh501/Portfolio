import Image from "next/image";
import { copy, workingTogetherCards } from "@/data/content";
import type { Locale } from "@/lib/i18n";
import { RevealItem } from "@/components/motion/RevealSection";
import { SectionDescription } from "./SectionDescription";

type WorkingTogetherProps = {
  locale: Locale;
};

export function WorkingTogether({ locale }: WorkingTogetherProps) {
  const section = copy[locale].sections.workingTogether;

  return (
    <section className="working-together-section" id="working-together">
      <RevealItem
        className="working-together-section__header working-together-section__header--motion"
        rootMargin="0px 0px -4% 0px"
        threshold={0.16}
      >
        <p className="working-together-section__eyebrow">{section.eyebrow}</p>
        <div className="working-together-section__title-group">
          <h2 className="working-together-section__title">{section.title}</h2>
          <SectionDescription
            className="working-together-section__description"
            text={section.description}
          />
        </div>
      </RevealItem>

      <div className="working-together-section__cards" aria-label={section.title}>
        {workingTogetherCards.map((card) => (
          <RevealItem
            as="article"
            className="working-together-card working-together-card--motion"
            key={card.title.en}
            rootMargin="0px 0px 8% 0px"
            threshold={0.08}
          >
            <Image
              alt=""
              className="working-together-card__orb"
              height={258}
              sizes="258px"
              src={card.orb}
              width={258}
            />
            <div className="working-together-card__content">
              <h3 className="working-together-card__title">{card.title[locale]}</h3>
              <div className="working-together-card__description">
                {card.description[locale].map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </div>
    </section>
  );
}
