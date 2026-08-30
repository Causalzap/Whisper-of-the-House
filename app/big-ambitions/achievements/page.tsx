import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsContent from "@/data/big-ambitions/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-ambitions`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Big Ambitions Achievements Guide: All 126 & Checklist";

const metadataDescription =
  "Track all 126 Big Ambitions achievements with a checklist and roadmap for long counters, Factory, Rivals, hidden achievements, sports, and cleanup.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-golf-tennis-activities-map.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-factory-production-floor.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-special-rivals-overview.webp`,
];

const toc = [
  {
    id: "achievement-roadmap",
    label: "126 achievement roadmap",
  },
  {
    id: "start-early",
    label: "Counters to start early",
  },
  {
    id: "natural-progression",
    label: "Natural progression",
  },
  {
    id: "customer-income",
    label: "Customer & income goals",
  },
  {
    id: "specialist-employees",
    label: "Specialist employees",
  },
  {
    id: "property-achievements",
    label: "Property achievements",
  },
  {
    id: "vehicles-luxury",
    label: "Vehicles & luxury",
  },
  {
    id: "factory-achievements",
    label: "Factory achievements",
  },
  {
    id: "rival-achievements",
    label: "Rival achievements",
  },
  {
    id: "long-save-achievements",
    label: "Long-save achievements",
  },
  {
    id: "hoarder-insomnia",
    label: "Hoarder & Insomnia",
  },
  {
    id: "golf-tennis",
    label: "Golf & tennis",
  },
  {
    id: "hidden-achievements",
    label: "Hidden achievements",
  },
  {
    id: "final-cleanup",
    label: "Final cleanup",
  },
];

const relatedLinks = [
  {
    href: "/big-ambitions",
    label: "Big Ambitions Guide Hub",
  },
  {
    href: "/big-ambitions/progression-guide",
    label: "Progression Guide & What to Unlock Next",
  },
  {
    href: "/big-ambitions/employees-hr-guide",
    label: "Employees, HR Managers & Headhunters",
  },
  {
    href: "/big-ambitions/factory-guide",
    label: "Factory & Manufacturing Guide",
  },
  {
    href: "/big-ambitions/rivals-guide",
    label: "Special Rivals & Takeovers Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description:
      "Plan all 126 Big Ambitions achievements with a persistent checklist, long-counter route, late-game cleanup order, and the three hidden achievement requirements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Big Ambitions map showing golf and tennis activities used for achievement cleanup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Track all 126 Big Ambitions achievements, including long counters, Factory and Rival goals, sports, property, and hidden achievements.",
    images: [imageUrls[0]],
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
          name: "Big Ambitions Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
        "Big Ambitions Achievements Guide: All 126 Achievements and Checklist",
      description:
        "A complete Big Ambitions 1.0 achievement roadmap for all 126 achievements, including a persistent checklist, counters worth starting early, natural business milestones, specialist employee goals, property and vehicle requirements, Executive Producer Factory production, Arch-nemesis Special Rivals, casino and age requirements, Hoarder, Insomnia, golf, tennis, the three hidden achievements, and a final cleanup order.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-30",
      dateModified: "2026-08-30",
      articleSection: "Big Ambitions Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Ambitions",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Big Ambitions achievements",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions all 126 achievements",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions achievement checklist",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Executive Producer",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Arch-nemesis",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Hostile Takeover",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Bullseye",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Pound Sand",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Hoarder",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Insomnia",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Route All 126 Big Ambitions Achievements"
          description="Most achievements should ride alongside a normal company instead of taking over the save. I start the long counters early, let business milestones happen naturally, and keep expensive or disruptive requirements for a deliberate late-game cleanup."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}