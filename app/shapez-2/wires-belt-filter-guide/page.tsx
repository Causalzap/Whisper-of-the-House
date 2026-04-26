import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WiresBeltFilterGuideContent from "@/data/shapez-2/wires-belt-filter-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/shapez-2`;
const pageUrl = `${gameUrl}/wires-belt-filter-guide`;

export const metadata: Metadata = {
  title: "Shapez 2 Wires & Logic Guide: Signals, Filters & MAM Automation",
  description:
    "Master the Shapez 2 logic system! Learn to use Belt Filters, logic gates, and shape signals to handle 1/0/null states and automate your first MAM.",
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
          name: "Shapez 2 Guide",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shapez 2 Wires and Belt Filter Guide",
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
      headline:
        "Shapez 2 Wires Guide: Belt Filters, Signals & Logic Explained",
      description:
        "This Shapez 2 Wires and Belt Filter guide explains the automation menu, Belt Filter behavior for shape, 1, 0, null and conflict signals, how to use Displays, why Belt Readers output null between shapes, why Belt Filters may not work, common logic gate traps, and how wires prepare you for a MAM.",
      image: [
        `${siteUrl}/images/shapez-2/wires-belt-filter-guide.webp`,
        `${siteUrl}/images/shapez-2/wire-logic-tools.webp`,
        `${siteUrl}/images/shapez-2/wire-debugging-wrong-output.webp`,
        `${siteUrl}/images/shapez-2/codex-and-tooltips.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-26",
      about: [
        {
          "@type": "VideoGame",
          name: "shapez 2",
        },
        {
          "@type": "Thing",
          name: "Wires",
        },
        {
          "@type": "Thing",
          name: "Belt Filter",
        },
        {
          "@type": "Thing",
          name: "Signals",
        },
        {
          "@type": "Thing",
          name: "Shape Signal",
        },
        {
          "@type": "Thing",
          name: "Null Signal",
        },
        {
          "@type": "Thing",
          name: "Conflict Signal",
        },
        {
          "@type": "Thing",
          name: "Display",
        },
        {
          "@type": "Thing",
          name: "Belt Reader",
        },
        {
          "@type": "Thing",
          name: "Signal Producer",
        },
        {
          "@type": "Thing",
          name: "Logic Gates",
        },
        {
          "@type": "Thing",
          name: "Make Anything Machine",
        },
        {
          "@type": "Thing",
          name: "MAM",
        },
        {
          "@type": "Thing",
          name: "Factory Automation",
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
          title="Shapez 2 Wires Guide: Belt Filters, Signals & Logic Explained"
          description="Learn how Wires and Belt Filters work in Shapez 2, including signal behavior, Displays, Belt Readers, null signals, logic gate traps, troubleshooting, and how wires connect to MAMs."
          gameTitle="Shapez 2"
          gameHref="/shapez-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 26, 2026"
          toc={[
            {
              id: "wires-system-at-a-glance",
              label: "Wires at a glance",
            },
            {
              id: "automation-menu",
              label: "Automation menu",
            },
            {
              id: "belt-filter-behavior",
              label: "Belt Filter behavior",
            },
            {
              id: "simple-belt-filter-setup",
              label: "Simple filter setup",
            },
            {
              id: "why-belt-filter-not-working",
              label: "Filter not working",
            },
            {
              id: "signal-types",
              label: "Signal types",
            },
            {
              id: "belt-reader-null-output",
              label: "Belt Reader null",
            },
            {
              id: "display-debugging",
              label: "Display debugging",
            },
            {
              id: "when-to-use-logic-gates",
              label: "Logic gates",
            },
            {
              id: "wires-and-mam",
              label: "Wires and MAMs",
            },
            {
              id: "common-wire-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/shapez-2",
              label: "Shapez 2 Guide Hub",
            },
            {
              href: "/shapez-2/manufacture-mode-guide",
              label: "Shapez 2 Manufacture Mode Guide",
            },
            {
              href: "/shapez-2/trade-station-guide",
              label: "Shapez 2 Trade Station Guide",
            },
            {
              href: "/shapez-2/mam-guide",
              label: "Shapez 2 MAM Guide",
            },
            {
              href: "/shapez-2/space-belts-trains-guide",
              label: "Shapez 2 Space Belts and Trains Guide",
            },
          ]}
        >
          <WiresBeltFilterGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
