import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Kalam, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const homeScrollResetScript = `
(function () {
  try {
    var path = window.location.pathname.replace(/\\/$/, "");
    var navigationEntry = performance.getEntriesByType("navigation")[0];
    var isReload = navigationEntry && navigationEntry.type === "reload";
    var isHomeLocale = path === "/en" || path === "/vi";

    if (!isHomeLocale || (window.location.hash && !isReload)) {
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    var root = document.documentElement;
    var previousScrollBehavior = root.style.scrollBehavior;
    var forceTop = function () {
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
    };

    forceTop();
    window.addEventListener("pageshow", forceTop);
    window.addEventListener("load", forceTop);

    [0, 50, 150, 350, 800, 1500, 2500].forEach(function (delay) {
      window.setTimeout(forceTop, delay);
    });

    window.setTimeout(function () {
      root.style.scrollBehavior = previousScrollBehavior;
    }, 2600);
  } catch (error) {
  }
})();
`;

export const metadata: Metadata = {
  title: {
    default: "Kieu Ninh - Product Designer",
    template: "%s | Kieu Ninh",
  },
  description:
    "A bilingual product design portfolio built with Next.js, TypeScript, and a structured design token system.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${inter.variable} ${kalam.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: homeScrollResetScript }} />
        {children}
      </body>
    </html>
  );
}
