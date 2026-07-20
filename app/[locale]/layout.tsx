import { notFound } from "next/navigation";
import { PortfolioShell } from "@/components/layout/PortfolioShell";
import { isLocale, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return <PortfolioShell locale={locale}>{children}</PortfolioShell>;
}
