import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SintopiaBestHellLayoutGuideContent from "@/data/sintopia/best-hell-layout-guide.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/sintopia/best-hell-layout-guide";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/sintopia`;

export const metadata: Metadata = {
  title: "How To Create The Best Hell Layout In Sintopia",
  description:
    "A real Sintopia hell layout guide covering Hearos routing, dual Souls Dispatchers, Saints, Deviants, Hellpet Show placement, Imployees, and strike-proof scaling.",
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
        name: "Best Hell Layout Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "How To Create The Best Hell Layout In Sintopia",
    description:
      "A real Sintopia hell layout guide covering Hearos routing, dual Souls Dispatchers, Saints, Deviants, Hellpet Show placement, Imployees, and strike-proof scaling.",
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
          title="How To Create The Best Hell Layout In Sintopia"
          description="This guide explains how to build the best hell layout in Sintopia, including Hearos routing, Saint lanes, dual Souls Dispatchers, Deviant specialist branches, Hellpet Show placement, and how to scale without triggering Imployee strikes."
          gameTitle="Sintopia"
          gameHref="/sintopia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 19, 2026"
          toc={[
            {
              id: "core-routing-rules",
              label: "Core routing rules",
            },
            {
              id: "best-early-game-hell-layout",
              label: "Best early-game hell layout",
            },
            {
              id: "bad-layout-vs-fixed-layout",
              label: "Bad layout vs fixed layout",
            },
            {
              id: "infernal-corruption-and-why-shorter-walks-win",
              label: "Infernal corruption and shorter walks",
            },
            {
              id: "waiting-lines-and-booths",
              label: "Waiting lines and booths",
            },
            {
              id: "best-souls-dispatcher-setup",
              label: "Best Souls Dispatcher setup",
            },
            {
              id: "the-two-dispatcher-layout",
              label: "The two-Dispatcher layout",
            },
            {
              id: "hearos-lane",
              label: "Hearos lane",
            },
            {
              id: "fallback-loop",
              label: "Fallback loop",
            },
            {
              id: "saint-lane",
              label: "Saint lane",
            },
            {
              id: "deviant-branch-and-specialist-districts",
              label: "Deviant branch and specialist districts",
            },
            {
              id: "envy-deviant-routing-example",
              label: "Envy Deviant routing example",
            },
            {
              id: "hellpet-show-faithcoins-and-total-hell-recall",
              label: "Hellpet Show and Faithcoins",
            },
            {
              id: "best-imployees-to-hire-early",
              label: "Best Imployees to hire early",
            },
            {
              id: "how-to-stop-imployee-strikes",
              label: "How to stop Imployee strikes",
            },
            {
              id: "mode-adjustments-campaign-sandbox-and-challenge",
              label: "Campaign, Sandbox, and Challenge",
            },
            {
              id: "faq",
              label: "FAQ",
            },
            {
              id: "final-build-order",
              label: "Final build order",
            },
          ]}
          relatedLinks={[
            {
              href: "/sintopia",
              label: "Sintopia Guide Hub",
            },
            {
              href: "/sintopia/common-problems-fixes",
              label: "Sintopia Common Problems and Fixes",
            },
            {
              href: "/sintopia/overworld-spells-cultists-demon-invasion-guide",
              label: "Sintopia Overworld Guide",
            },
            {
              href: "/sintopia/campaign-progression-hard-mode-guide",
              label: "Sintopia Campaign and Hard Mode Guide",
            },
          ]}
        >
          <SintopiaBestHellLayoutGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}