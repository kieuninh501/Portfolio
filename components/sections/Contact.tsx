import type { Locale } from "@/lib/i18n";
import { copy } from "@/data/content";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const section = copy[locale].sections.contact;

  return (
    <section className="py-20" id="contact">
      <Container>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-text)] p-6 text-[var(--color-background)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">{section.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">{section.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 opacity-75">{section.description}</p>
          <div className="mt-8">
            <ButtonLink href={`mailto:${profile.email}`}>{copy[locale].contactCta}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
