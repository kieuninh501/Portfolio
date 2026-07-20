import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n";

type CaseStudyPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseStudies.map((caseStudy) => ({
      locale,
      slug: caseStudy.slug,
    })),
  );
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;
  const normalizedLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} Case Study`,
    description: `Product design case study for ${study.title}.`,
    alternates: {
      canonical: `/${normalizedLocale}/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyLayout study={study} />;
}
