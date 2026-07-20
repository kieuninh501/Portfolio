/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { RevealItem } from "@/components/motion/RevealSection";
import { copy } from "@/data/content";
import { profile } from "@/data/profile";

type SiteFooterProps = {
  locale: Locale;
};

const socialLinks = [
  {
    key: "behance",
    label: "Behance",
    href: profile.links.behance,
    icon: "/assets/icons/behance.svg",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: "/assets/icons/linkedin.svg",
  },
  {
    key: "github",
    label: "GitHub",
    href: profile.links.github,
    icon: "/assets/icons/github.svg",
  },
] as const;

export function SiteFooter({ locale }: SiteFooterProps) {
  const footer = copy[locale].sections.footer;

  return (
    <footer className="site-footer">
      <RevealItem
        aria-hidden="true"
        className="site-footer__background site-footer__background--motion"
        rootMargin="0px 0px 12% 0px"
        threshold={0.04}
      >
        <img alt="" className="site-footer__background-image" src="/assets/backgrounds/bg-footer.png" />
      </RevealItem>

      <RevealItem
        className="site-footer__inner site-footer__inner--motion"
        rootMargin="0px 0px 10% 0px"
        threshold={0.08}
      >
        <div className="site-footer__contact-container">
          <div className="site-footer__profile">
            <div className="site-footer__bio">
              <p className="site-footer__brand">{footer.headline}</p>
              <p className="site-footer__description">{footer.bio}</p>
            </div>

            <ul aria-label="Social links" className="site-footer__social-list">
              {socialLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    aria-label={link.label}
                    className="site-footer__social-link"
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img alt="" aria-hidden="true" className="site-footer__social-icon" src={link.icon} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="site-footer__contact">
            <p className="site-footer__contact-heading">{footer.getInTouch}</p>
            <div className="site-footer__contact-content">
              <a className="site-footer__contact-entry" href={`mailto:${profile.email}`}>
                <img alt="" aria-hidden="true" className="site-footer__contact-icon" src="/assets/icons/email.svg" />
                <span>{profile.email}</span>
              </a>
              <p className="site-footer__contact-entry">
                <span className="site-footer__map-icon-wrap">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="site-footer__map-icon"
                    src="/assets/icons/map-point.svg"
                  />
                </span>
                <span>{profile.location[locale]}</span>
              </p>
            </div>
          </address>
        </div>

        <p className="site-footer__copyright">{footer.copyright}</p>
      </RevealItem>
    </footer>
  );
}
