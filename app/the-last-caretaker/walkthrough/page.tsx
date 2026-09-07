import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerWalkthroughContent from "@/data/the-last-caretaker/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/walkthrough`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-beacon-49-lazarus-objective.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-lazarus-hall-of-humanity-power-restored.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-seed-vault-prometheus-arrival.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-human-seed-upkeep-warning.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-first-human-exodus-objective.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-rocket-facility.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker Walkthrough & Progression Guide",
  description:
    "Follow The Last Caretaker from the starting dock through Lazarus, the Human Seed, your first Human, Exodus, and later Early Access progression.",
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
          name: "Walkthrough",
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
      headline: "The Last Caretaker Walkthrough: What to Do Next",
      description:
        "A progression-focused The Last Caretaker walkthrough covering the Early Access route from the starting dock and Beacon 49 through Lazarus Complex, Seed Vault Prometheus, Human Seed recovery, first Human growth, the route toward Exodus, and the handoff into later Project Eden, Oil Whale, Theta 9, and Update 5 progression.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-07",
      dateModified: "2026-09-07",
      about: [
        {
          "@type": "VideoGame",
          name: "The Last Caretaker",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker Walkthrough",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker Progression",
        },
        {
          "@type": "Thing",
          name: "Beacon 49",
        },
        {
          "@type": "Thing",
          name: "Lazarus Complex",
        },
        {
          "@type": "Thing",
          name: "Hall of Humanity",
        },
        {
          "@type": "Thing",
          name: "Seed Vault Prometheus",
        },
        {
          "@type": "Thing",
          name: "Human Seed",
        },
        {
          "@type": "Thing",
          name: "Human Growth",
        },
        {
          "@type": "Thing",
          name: "Exodus Station",
        },
        {
          "@type": "Thing",
          name: "Project Eden",
        },
        {
          "@type": "Thing",
          name: "Oil Whale",
        },
        {
          "@type": "Thing",
          name: "Research Outpost Theta 9",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="The Last Caretaker Walkthrough: What to Do Next"
          description="Stuck between objectives? Follow the main progression from the starting dock to Lazarus, the Human Seed, your first Human, and Exodus, with clear points for when to leave, resupply, or come back later."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "starting-dock-beacon-49",
              label: "Starting Dock & Beacon 49",
            },
            {
              id: "lazarus-complex",
              label: "Lazarus Complex",
            },
            {
              id: "seed-vault-prometheus",
              label: "Seed Vault Prometheus",
            },
            {
              id: "human-seed-lazarus",
              label: "Human Seed at Lazarus",
            },
            {
              id: "grow-first-human",
              label: "Grow Your First Human",
            },
            {
              id: "exodus",
              label: "Go to Exodus",
            },
            {
              id: "later-progression",
              label: "Later Progression",
            },
            {
              id: "progression-rule",
              label: "Progression Rule",
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
              href: "/the-last-caretaker/project-eden-guide",
              label: "Project Eden Guide",
            },
            {
              href: "/the-last-caretaker/oil-whale-guide",
              label: "Oil Whale Guide",
            },
            {
              href: "/the-last-caretaker/research-outpost-theta-9-guide",
              label: "Research Outpost Theta 9 Guide",
            },
          ]}
        >
          <TheLastCaretakerWalkthroughContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}