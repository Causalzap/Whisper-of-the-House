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
          item: siteUrl,
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
        "Stuck on Blade Mammoth in GRIME II? This guide covers its main attacks, Phase 2 changes, and the safest punish windows.",
      image: [
        `${siteUrl}/images/grime-2/blade-mammoth/step1.jpg`,
        `${siteUrl}/images/grime-2/blade-mammoth/step2.jpg`,
        `${siteUrl}/images/grime-2/blade-mammoth/step3.jpg`,
        `${siteUrl}/images/grime-2/blade-mammoth/step5.jpg`,
        `${siteUrl}/images/grime-2/blade-mammoth/step6.jpg`,
        `${siteUrl}/images/grime-2/blade-mammoth/step7.jpg`,
        `${siteUrl}/images/grime-2/blade-mammoth/step-9.jpg`,
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
          description="Stuck on Blade Mammoth in GRIME II? This guide covers its main attacks, Phase 2 changes, and the safest punish windows."
          gameTitle="GRIME II"
          gameHref="/grime-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 4, 2026"
          toc={[
            {
              id: "why-blade-mammoth-is-worth-studying-in-grime-ii",
              label: "Why Blade Mammoth matters",
            },
            {
              id: "grime-ii-blade-mammoth-boss-summary",
              label: "Boss summary",
            },
            {
              id: "best-preparation-for-blade-mammoth-in-grime-ii",
              label: "Best preparation",
            },
            {
              id: "grime-ii-blade-mammoth-main-attacks-and-how-to-handle-them",
              label: "Main attacks",
            },
            {
              id: "grime-ii-blade-mammoth-phase-2-when-it-starts-and-how-to-handle-the-expanded-coverage",
              label: "Phase 2",
            },
            {
              id: "best-punish-windows-against-blade-mammoth-in-grime-ii",
              label: "Punish windows",
            },
            {
              id: "most-common-blade-mammoth-mistakes-in-grime-ii",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/grime-2/kankan-guide",
              label: "GRIME II Kankan Guide",
            },
            {
              href: "/grime-2/best-early-weapons",
              label: "GRIME II Best Early Weapons",
            },
            {
              href: "/grime-2/vs-grime-1-differences",
              label: "GRIME II vs GRIME 1 Differences",
            },
            {
              href: "/grime-2",
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