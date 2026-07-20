import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { copy } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const t = copy[locale];

  return (
    <section className="hero-section">
      <Container className="hero-section__inner">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow hero-motion hero-motion--eyebrow">{t.eyebrow}</p>
          <div className="hero-section__main-copy">
            <div className="hero-section__headline-group">
              <p className="hero-section__intro hero-motion hero-motion--intro">{t.heroIntro}</p>
              <h1 className="hero-section__headline">
                <span className="hero-section__headline-line hero-motion hero-motion--headline-1">
                  {t.heroTitleLine1}{" "}
                </span>
                <span className="hero-section__headline-line hero-motion hero-motion--headline-2">
                  {t.heroTitleLine2} <span className="hero-section__headline-accent">{t.heroTitleAccent}</span>
                </span>
              </h1>
            </div>
            <p className="hero-section__lead hero-motion hero-motion--lead">{t.heroLead}</p>
          </div>
        </div>
        <div className="hero-section__actions hero-motion hero-motion--actions">
          <div className="hero-section__button-group">
            <ButtonLink href={`/${locale}#projects`} size="md" variant="solid-neutral">
              {t.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={`/${locale}#contact`}
              size="md"
              trailingIconSrc="/assets/icons/solar-plain.svg"
              variant="outline-primary"
            >
              {t.secondaryCta}
            </ButtonLink>
          </div>
          <div className="hero-section__status hero-motion hero-motion--status">
            <Image alt="" aria-hidden="true" height={20} src="/assets/icons/status-glow.svg" width={20} />
            <span>{t.availability}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
