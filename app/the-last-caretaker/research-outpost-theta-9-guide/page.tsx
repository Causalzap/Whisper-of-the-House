import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerTheta9Content from "@/data/the-last-caretaker/research-outpost-theta-9-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/research-outpost-theta-9-guide`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-emergency-survivor-flag.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-underwater-entry.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-nests-spiders.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-ventilation-authorization.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-authorization-granted.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker Theta 9 Guide: Ventilation 3.3",
  description:
    "Find Research Outpost Theta 9, enter safely, clear the station, get Outpost Theta authorization, and fix Ventilation 3.3 when the route stops.",
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
          name: "Research Outpost Theta 9 Guide",
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
        "The Last Caretaker Research Outpost Theta 9 Guide: Ventilation 3.3 and Authorization",
      description:
        "A practical Research Outpost Theta 9 guide for The Last Caretaker covering the old emergency survivor signal, underwater station entry, Tide Ripper preparation, nests and enemy rooms, Ventilation 3.3, Outpost Theta authorization, terminal backtracking, No Power states, deeper station progression, inventory management, and when to return to the boat.",
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
          name: "Research Outpost Theta 9",
        },
        {
          "@type": "Thing",
          name: "Ventilation 3.3",
        },
        {
          "@type": "Thing",
          name: "Outpost Theta Authorization",
        },
        {
          "@type": "Thing",
          name: "Emergency Survivor Signal",
        },
        {
          "@type": "Thing",
          name: "Tide Ripper",
        },
        {
          "@type": "Thing",
          name: "Roth's Anomaly",
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
          title="The Last Caretaker Theta 9: How Do You Open Ventilation 3.3?"
          description="Follow the survivor signal into Theta 9, clear enough of the station to read the route properly, get Outpost Theta authorization, and return to Ventilation 3.3 without turning the dive into an overloaded salvage run."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "where-theta-9-starts",
              label: "Where Theta 9 starts",
            },
            {
              id: "prepare-for-the-dive",
              label: "Prepare for the dive",
            },
            {
              id: "find-theta-9-entry",
              label: "Find the station entry",
            },
            {
              id: "clear-the-station",
              label: "Clear the station",
            },
            {
              id: "ventilation-33",
              label: "Ventilation 3.3",
            },
            {
              id: "theta-9-authorization",
              label: "Get authorization",
            },
            {
              id: "after-ventilation-33",
              label: "After Ventilation 3.3",
            },
            {
              id: "loot-theta-9",
              label: "Loot Theta 9",
            },
            {
              id: "theta-9-stuck",
              label: "Theta 9 stuck",
            },
            {
              id: "when-to-return-to-boat",
              label: "When to return",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-last-caretaker",
              label: "The Last Caretaker Guide Hub",
            },
            {
              href: "/the-last-caretaker/new-horizons-guide",
              label: "New Horizons Guide",
            },
            {
              href: "/the-last-caretaker/walkthrough",
              label: "The Last Caretaker Walkthrough",
            },
            {
              href: "/the-last-caretaker/project-eden-guide",
              label: "Project Eden Guide",
            },
            {
              href: "/the-last-caretaker/oil-whale-guide",
              label: "Oil Whale Guide",
            },
          ]}
        >
          <TheLastCaretakerTheta9Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}