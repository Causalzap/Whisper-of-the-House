import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SintopiaOverworldGuideContent from "@/data/sintopia/overworld-guide.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/sintopia/overworld-guide";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/sintopia`;

export const metadata: Metadata = {
  title:
    "Sintopia Overworld Guide: Best Spells, Rulers, Power Shrines and Demon Invasions",
  description:
    "Learn the best Overworld strategy in Sintopia, including early spells, ruler personalities, Power Shrines, Corruption Stones, Demons, Sin Spawns, and Temple pressure.",
  alternates: {
    canonical: pageUrl,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
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
        name: "Sintopia",
        item: gameHubUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Overworld Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline:
      "Sintopia Overworld Guide: Best Spells, Rulers, Power Shrines and Demon Invasions",
    description:
      "Learn the best Overworld strategy in Sintopia, including early spells, ruler personalities, Power Shrines, Corruption Stones, Demons, Sin Spawns, and Temple pressure.",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "en",
    datePublished: "2026-04-19",
    dateModified: "2026-04-19",
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Whisper of the House",
      url: siteUrl,
    },
    about: {
      "@type": "VideoGame",
      name: "Sintopia",
    },
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
  },
];

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
          title="Sintopia Overworld Guide"
          description="This guide explains the best Overworld strategy in Sintopia, including early spells, ruler personalities, Power Shrines, Corruption Stones, Demons, Sin Spawns, Temple pressure, and how the surface affects your Hell economy."
          gameTitle="Sintopia"
          gameHref="/sintopia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 19, 2026"
          toc={[
            {
              id: "quick-answer",
              label: "Quick answer",
            },
            {
              id: "how-the-overworld-affects-your-hell",
              label: "How the Overworld affects your Hell",
            },
            {
              id: "best-early-spells-in-sintopia",
              label: "Best early spells",
            },
            {
              id: "which-ruler-personalities-are-best-and-worst",
              label: "Best and worst ruler personalities",
            },
            {
              id: "when-to-kill-rulers-and-when-to-keep-them",
              label: "When to kill rulers and when to keep them",
            },
            {
              id: "how-power-shrines-work",
              label: "How Power Shrines work",
            },
            {
              id: "how-corruption-stones-affect-your-run",
              label: "How Corruption Stones affect your run",
            },
            {
              id: "how-demons-spawn-and-why-they-snowball",
              label: "How Demons spawn and snowball",
            },
            {
              id: "other-overworld-threats",
              label: "Other Overworld threats",
            },
            {
              id: "how-to-stop-sin-spawns-and-temple-pressure",
              label: "How to stop Sin Spawns and Temple pressure",
            },
            {
              id: "demon-fights-are-about-control-not-just-damage",
              label: "Demon fights and control",
            },
            {
              id: "best-overworld-priorities-in-campaign-vs-sandbox",
              label: "Campaign vs Sandbox priorities",
            },
            {
              id: "how-the-overworld-connects-to-your-other-guides",
              label: "How this connects to your other guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
            {
              id: "final-verdict",
              label: "Final verdict",
            },
          ]}
          relatedLinks={[
            {
              href: "/sintopia",
              label: "Sintopia Guide Hub",
            },
            {
              href: "/sintopia/best-hell-layout-guide",
              label: "Sintopia Best Hell Layout Guide",
            },
            {
              href: "/sintopia/hearos-guide",
              label: "How to Get Hearos in Sintopia",
            },
            {
              href: "/sintopia/saints-guide",
              label: "Sintopia Saints Guide",
            },
          ]}
        >
          <SintopiaOverworldGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}