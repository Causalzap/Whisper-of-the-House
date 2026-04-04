import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BladeMammothBossGuideContent from "@/data/grime-2/blade-mammoth-boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/grime-2/blade-mammoth-boss-guide`;

export const metadata: Metadata = {
  title: "How to Beat Blade Mammoth in GRIME II",
  description:
    "Stuck on Blade Mammoth in GRIME II? This guide covers its main attacks, Phase 2 changes, and the safest punish windows.",
  alternates: {
    canonical: pageUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "GRIME II",
          item: `${siteUrl}/grime-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Blade Mammoth Boss Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: "How to Beat Blade Mammoth in GRIME II",
      description:
        "Blade Mammoth is one of the larger and more punishing boss fights in GRIME II. This guide focuses on the fight’s real pressure points, including its charge coverage, heavy slam threat, counter timing, and the ways Phase 2 becomes harder to control.",
      image: [
        `${siteUrl}/images/grime-2/blade-mammoth/blade-mammoth-overview.webp`,
        `${siteUrl}/images/grime-2/blade-mammoth/blade-mammoth-charge.webp`,
        `${siteUrl}/images/grime-2/blade-mammoth/blade-mammoth-phase-2.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-04",
      about: [
        {
          "@type": "VideoGame",
          name: "GRIME II",
        },
        {
          "@type": "Thing",
          name: "Blade Mammoth",
        },
        {
          "@type": "Thing",
          name: "Blade Mammoth boss guide",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="How to Beat Blade Mammoth in GRIME II"
          description="Blade Mammoth is one of the larger and more punishing boss fights in GRIME II. This guide focuses on the fight’s real pressure points, including its charge coverage, heavy slam threat, counter timing, and the ways Phase 2 becomes harder to control."
          gameTitle="GRIME II"
          gameHref="/grime-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 4, 2026"
          toc={[
            {
              id: "why-blade-mammoth-is-one-of-the-first-bosses-worth-studying",
              label: "Why Blade Mammoth matters",
            },
            {
              id: "blade-mammoth-boss-summary",
              label: "Boss summary",
            },
            {
              id: "best-preparation-before-the-fight",
              label: "Best preparation",
            },
            {
              id: "blade-mammoths-main-attacks-and-how-to-read-them",
              label: "Main attacks",
            },
            {
              id: "how-to-handle-phase-2-without-panicking",
              label: "How to handle Phase 2",
            },
            {
              id: "best-punish-windows-and-most-common-mistakes",
              label: "Punish windows and mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/grime-2/kankan-guide/",
              label: "GRIME II Kankan Guide",
            },
            {
              href: "/grime-2/best-early-weapons/",
              label: "GRIME II Best Early Weapons",
            },
            {
              href: "/grime-2/vs-grime-1-differences/",
              label: "GRIME II vs GRIME 1 Differences",
            },
            {
              href: "/grime-2/",
              label: "GRIME II Guide Hub",
            },
          ]}
        >
          <BladeMammothBossGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}