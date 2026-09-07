import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerHumanGrowthProfessionsContent from "@/data/the-last-caretaker/human-growth-professions-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/human-growth-professions-guide`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-human-growth-minimum-requirements.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-visual-technician-81-percent-missing-traits.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-human-growth-memory-traits.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-visual-technician-100-percent.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-council-missing-professions.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker Human Growth & Professions Guide",
  description:
    "Learn Human Growth in The Last Caretaker: fix Weight, Height and Life Expectancy, use Memories for traits, reach 100% professions, and fill Council roles.",
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
          name: "Human Growth & Professions Guide",
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
        "The Last Caretaker Human Growth, Professions and Council Guide",
      description:
        "A player-focused guide to Human Growth in The Last Caretaker, covering minimum Weight, Height and Life Expectancy requirements, food production, Memory traits, profession prediction, reaching 100% profession matches, Visual Technician setup, Council roles, missing traits, and when to stop spending growth resources.",
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
          name: "Human Growth",
        },
        {
          "@type": "Thing",
          name: "Human Professions",
        },
        {
          "@type": "Thing",
          name: "Council",
        },
        {
          "@type": "Thing",
          name: "Growth Prediction",
        },
        {
          "@type": "Thing",
          name: "Memories",
        },
        {
          "@type": "Thing",
          name: "Visual Technician",
        },
        {
          "@type": "Thing",
          name: "Sculptor",
        },
        {
          "@type": "Thing",
          name: "Cultural Archivist",
        },
        {
          "@type": "Thing",
          name: "Manual Holder",
        },
        {
          "@type": "Thing",
          name: "Life Expectancy",
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
          title="The Last Caretaker Human Growth & Professions Guide"
          description="Build the human you actually need: clear the physical growth requirements, use Memories to fill profession traits, reach a 100% match, and let the Council decide which specialist should come next."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "choose-the-human-first",
              label: "Choose the profession first",
            },
            {
              id: "growth-system-ready",
              label: "Get Human Growth ready",
            },
            {
              id: "physical-requirements",
              label: "Physical requirements",
            },
            {
              id: "memories-and-traits",
              label: "Memories and traits",
            },
            {
              id: "visual-technician-81-percent",
              label: "Visual Technician at 81%",
            },
            {
              id: "visual-technician-100-percent",
              label: "Reach 100% profession",
            },
            {
              id: "council-professions",
              label: "Council professions",
            },
            {
              id: "when-to-stop-optimizing",
              label: "When to stop optimizing",
            },
            {
              id: "missing-profession-trait",
              label: "Missing profession traits",
            },
            {
              id: "human-growth-stuck",
              label: "Human Growth stuck",
            },
            {
              id: "after-growth",
              label: "After growth",
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
              href: "/the-last-caretaker/exodus-launch-guide",
              label: "Exodus Launch Guide",
            },
            {
              href: "/the-last-caretaker/new-horizons-guide",
              label: "New Horizons Guide",
            },
            {
              href: "/the-last-caretaker/project-eden-guide",
              label: "Project Eden Guide",
            },
          ]}
        >
          <TheLastCaretakerHumanGrowthProfessionsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}