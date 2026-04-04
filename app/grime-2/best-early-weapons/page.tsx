import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestEarlyWeaponsContent from "@/data/grime-2/best-early-weapons.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/grime-2/best-early-weapons`;

export const metadata: Metadata = {
  title: "GRIME II Best Early Weapons: Which Weapon Should You Use First?",
  description:
    "Need a GRIME II starter weapon? Our guide covers the Maul Axe, Knifehand, and Throwing Thumbs—including drop locations, early safety, and optimal stats.",
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
          name: "GRIME II Best Early Weapons",
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
      headline: "GRIME II Best Early Weapons: Which Weapon Should You Use First?",
      description:
        "This GRIME II guide explains the best early weapons to use first, why Maul Axe is the safest early choice, and when it makes sense to respec into something else.",
      image: [
        `${siteUrl}/images/grime-2/best-early-weapons/maul-axe.webp`,
        `${siteUrl}/images/grime-2/best-early-weapons/growth-screen.webp`,
        `${siteUrl}/images/grime-2/best-early-weapons/knifehand.webp`,
        `${siteUrl}/images/grime-2/best-early-weapons/throwing-thumbs.webp`,
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
          name: "Maul Axe",
        },
        {
          "@type": "Thing",
          name: "Knifehand",
        },
        {
          "@type": "Thing",
          name: "Throwing Thumbs",
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
          title="GRIME II Best Early Weapons: Which Weapon Should You Use First?"
          description="Not sure which early weapon to use in GRIME II? This guide explains why Maul Axe is the safest early pick, when Knifehand and Throwing Thumbs fall behind, and what stats to level first."
          gameTitle="GRIME II"
          gameHref="/grime-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 4, 2026"
          toc={[
            {
              id: "which-early-weapon-is-best-in-grime-ii",
              label: "Best early weapon",
            },
            {
              id: "why-maul-axe-is-the-best-early-weapon-in-grime-ii",
              label: "Why Maul Axe is best",
            },
            {
              id: "knifehand-vs-throwing-thumbs-vs-maul-axe-in-grime-ii",
              label: "Weapon comparison",
            },
            {
              id: "what-stats-to-level-first-for-early-weapons-in-grime-ii",
              label: "What stats to level first",
            },
            {
              id: "when-to-respec-and-when-to-upgrade-your-weapon-in-grime-ii",
              label: "Respec and upgrade timing",
            },
            {
              id: "who-should-not-stick-with-maul-axe-in-grime-ii",
              label: "Who should skip Maul Axe",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/grime-2/",
              label: "GRIME II Guide Hub",
            },
            {
              href: "/grime-2/kankan-guide/",
              label: "GRIME II Kankan Guide",
            },
            {
              href: "/grime-2/blade-mammoth-boss-guide/",
              label: "How to Beat Blade Mammoth in GRIME II",
            },
            {
              href: "/grime-2/vs-grime-1-differences/",
              label: "GRIME II vs GRIME 1 Differences",
            },
          ]}
        >
          <BestEarlyWeaponsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}