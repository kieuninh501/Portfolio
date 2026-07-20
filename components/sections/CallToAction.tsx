import { RevealItem } from "@/components/motion/RevealSection";
import { copy } from "@/data/content";
import type { Locale } from "@/lib/i18n";

type CallToActionProps = {
  locale: Locale;
};

export function CallToAction({ locale }: CallToActionProps) {
  const section = copy[locale].sections.callToAction;

  return (
    <section className="call-to-action-section" id="contact">
      <RevealItem
        className="call-to-action-section__content call-to-action-section__content--motion"
        rootMargin="0px 0px 8% 0px"
        threshold={0.12}
      >
        <h2 className="call-to-action-section__title">{section.title}</h2>
      </RevealItem>
    </section>
  );
}
