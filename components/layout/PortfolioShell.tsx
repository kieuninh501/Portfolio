"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { CaseStudyBackground } from "./CaseStudyBackground";
import { IntroLoader } from "./IntroLoader";
import { PageBackground } from "./PageBackground";
import { ScrollToHero } from "./ScrollToHero";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PortfolioShellProps = {
  children: React.ReactNode;
  locale: Locale;
};

export function PortfolioShell({ children, locale }: PortfolioShellProps) {
  const pathname = usePathname();
  const isCaseStudyPage = pathname.includes("/case-studies/");

  return (
    <div className={isCaseStudyPage ? "portfolio-page-shell portfolio-page-shell--case-study" : "portfolio-page-shell"}>
      {!isCaseStudyPage ? (
        <>
          <ScrollToHero />
          <IntroLoader />
          <PageBackground />
        </>
      ) : (
        <CaseStudyBackground />
      )}
      <SiteHeader locale={locale} />
      <main>{children}</main>
      {!isCaseStudyPage ? <SiteFooter locale={locale} /> : null}
    </div>
  );
}
