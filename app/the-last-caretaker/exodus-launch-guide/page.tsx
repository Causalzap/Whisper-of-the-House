import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerExodusLaunchContent from "@/data/the-last-caretaker/exodus-launch-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/exodus-launch-guide`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-time-to-let-go-soon.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-navigation-beacon-32.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-communications-array-objective.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-launch-facility-revealed.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-pod-elevator-logistics.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-rocket-launch.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker Exodus Guide: First Human & Rocket Launch",
  description:
    "Take the first grown human from Lazarus to Exodus, restore Navigation Beacon 32, repair the Communications Array, reach the rocket, and complete the launch.",
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
          name: "The Last Caretaker Guide",
          item: `${siteUrl}/the-last-caretaker`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Exodus Launch Guide",
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
        "The Last Caretaker Exodus Guide: First Human and Rocket Launch",
      description:
        "A player-focused Exodus route for The Last Caretaker covering the first grown human after Lazarus, the southeast trip to Navigation Beacon 32, relay power, the Communications Array, the Exodus launch facility, departure hall, repeat pod logistics, rocket launch readiness, and launch-side methane and oxygen troubleshooting.",
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-07",
      about: [
        {
          "@type": "VideoGame",
          name: "The Last Caretaker",
        },
        {
          "@type": "Thing",
          name: "Exodus Station",
        },
        {
          "@type": "Thing",
          name: "Lazarus Complex",
        },
        {
          "@type": "Thing",
          name: "Time to Let Go Soon",
        },
        {
          "@type": "Thing",
          name: "Navigation Beacon 32",
        },
        {
          "@type": "Thing",
          name: "Communications Array",
        },
        {
          "@type": "Thing",
          name: "Departure Hall",
        },
        {
          "@type": "Thing",
          name: "Rocket Launch",
        },
        {
          "@type": "Thing",
          name: "Human Pods",
        },
        {
          "@type": "Thing",
          name: "Methane",
        },
        {
          "@type": "Thing",
          name: "Oxygen",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="The Last Caretaker Exodus Launch Guide"
          description="Move the first grown human out of Lazarus, restore the relay at Navigation Beacon 32, open the Exodus route, and get the rocket into a real launch-ready state."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "lazarus-to-exodus",
              label: "Lazarus to Exodus",
            },
            {
              id: "navigation-beacon-32",
              label: "Navigation Beacon 32",
            },
            {
              id: "relay-power",
              label: "Power the relay",
            },
            {
              id: "communications-array",
              label: "Communications Array",
            },
            {
              id: "bring-human-to-exodus",
              label: "Bring the human to Exodus",
            },
            {
              id: "repeat-pod-logistics",
              label: "Repeat pod logistics",
            },
            {
              id: "rocket-ready",
              label: "Rocket ready state",
            },
            {
              id: "keep-exodus-or-strip-it",
              label: "Keep or strip Exodus",
            },
            {
              id: "rocket-not-filling",
              label: "Rocket not filling",
            },
            {
              id: "when-to-leave-exodus",
              label: "When to leave Exodus",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-last-caretaker",
              label: "The Last Caretaker Guide Hub",
            },
            {
              href: "/the-last-caretaker/walkthrough",
              label: "The Last Caretaker Walkthrough",
            },
            {
              href: "/the-last-caretaker/human-growth-professions-guide",
              label: "Human Growth & Professions Guide",
            },
            {
              href: "/the-last-caretaker/power-fuel-wall-outlets",
              label: "Power, Fuel & Wall Outlets Guide",
            },
            {
              href: "/the-last-caretaker/new-horizons-guide",
              label: "New Horizons Guide",
            },
          ]}
        >
          <TheLastCaretakerExodusLaunchContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}