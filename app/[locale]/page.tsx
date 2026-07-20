import { notFound } from "next/navigation";
import { CallToAction } from "@/components/sections/CallToAction";
import { Capabilities } from "@/components/sections/Capabilities";
import { CraftProcess } from "@/components/sections/CraftProcess";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { LearningPlayground } from "@/components/sections/LearningPlayground";
import { WorkingTogether } from "@/components/sections/WorkingTogether";
import { profile } from "@/data/profile";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  const normalizedLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const title = `${profile.name} - ${profile.role[normalizedLocale]}`;

  return {
    title,
    description:
      normalizedLocale === "en"
        ? "A bilingual product design portfolio built with Next.js, TypeScript, and a structured design token system."
        : "Portfolio product design song ngữ được xây bằng Next.js, TypeScript và hệ thống design token có cấu trúc.",
    alternates: {
      canonical: `/${normalizedLocale}`,
      languages: {
        vi: "/vi",
        en: "/en",
      },
    },
  };
}

export default async function LocaleHome({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return (
    <>
      <Hero locale={locale} />
      <Capabilities locale={locale} />
      <FeaturedProjects locale={locale} />
      <LearningPlayground locale={locale} />
      <CraftProcess locale={locale} />
      <Experience locale={locale} />
      <WorkingTogether locale={locale} />
      <CallToAction locale={locale} />
    </>
  );
}
