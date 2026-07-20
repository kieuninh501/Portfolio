import type { Locale } from "@/lib/i18n";
import { capabilities, copy } from "@/data/content";
import { RevealOnView, RevealSection } from "@/components/motion/RevealSection";

type CapabilitiesProps = {
  locale: Locale;
};

export function Capabilities({ locale }: CapabilitiesProps) {
  const section = copy[locale].sections.capabilities;
  const titleLines = Array.isArray(section.title) ? section.title : [section.title];
  const capabilityRows = [capabilities.slice(0, 2), capabilities.slice(2, 4)];

  return (
    <RevealSection
      className="capabilities-section capabilities-section--motion"
      id="capabilities"
      once={false}
    >
      <div className="capabilities-section__background" aria-hidden="true" />
      <div className="capabilities-section__inner">
        <div className="capabilities-section__header">
          <p className="capabilities-section__eyebrow">{section.eyebrow}</p>
          <div className="capabilities-section__title-group">
            <h2 className="capabilities-section__title" aria-label={titleLines.join(" ")}>
              {titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p
              aria-label={section.description.join(" ")}
              className="capabilities-section__description"
            >
              {section.description.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
        </div>

        <RevealOnView
          className="capabilities-section__visual capabilities-section__visual--motion"
          once={false}
          rootMargin="0px 0px -8% 0px"
          threshold={0.01}
        >
          <div className="capabilities-section__circle" aria-hidden="true" />
          <div className="capabilities-section__grid">
            {capabilityRows.map((row) => (
              <RevealOnView
                className="capabilities-section__row capabilities-section__row--motion"
                key={row.map((capability) => capability.title.en).join("-")}
                once={false}
                rootMargin="0px 0px -8% 0px"
                threshold={0.01}
              >
                {row.map((capability) => (
                  <article
                    className="capability-card capability-card--motion"
                    key={capability.title.en}
                  >
                    <div className="capability-card__content">
                      <div className="capability-card__copy">
                        <h3 className="capability-card__title">{capability.title[locale]}</h3>
                        <p className="capability-card__description">
                          {capability.description[locale]}
                        </p>
                      </div>
                      <ul className="capability-card__list" aria-label={capability.title[locale]}>
                        {capability.items[locale].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </RevealOnView>
            ))}
          </div>
        </RevealOnView>
      </div>
    </RevealSection>
  );
}
