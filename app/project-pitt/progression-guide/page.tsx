import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittProgressionGuideContent from "@/data/project-pitt/progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/progression-guide`;

const metadataTitle =
  "Project P.I.T.T. Progression Guide: What to Do Next";

const metadataDescription =
  "Follow Project P.I.T.T. from Ducks to Cash Registers, Phase 3, Piñatas, Anomalies, the fuse route, 200kg platform, and hidden ending branch.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-early-duck-feed.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-phase-3-factory-break.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-phase-3-pinata-unlocked.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-upper-area-fuses.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-all-fuses-ceiling-grate.webp`,
];

const toc = [
  {
    id: "start-with-ducks",
    label: "Start With Ducks",
  },
  {
    id: "duck-to-cash",
    label: "Move From Ducks to Cash",
  },
  {
    id: "before-phase-3",
    label: "Before Phase 3",
  },
  {
    id: "phase-3",
    label: "Phase 3 and Piñatas",
  },
  {
    id: "phase-4",
    label: "Phase 4 and Anomalies",
  },
  {
    id: "upper-route",
    label: "When to Take the Upper Route",
  },
  {
    id: "all-fuses",
    label: "Place All Three Fuses",
  },
  {
    id: "200kg",
    label: "200 kg Platform",
  },
  {
    id: "hidden-gate",
    label: "After the Hidden Gate Opens",
  },
  {
    id: "when-i-go-back",
    label: "When I Rebuild Old Setups",
  },
  {
    id: "my-route",
    label: "My Full Progression Route",
  },
];

const relatedLinks = [
  {
    href: "/project-pitt",
    label: "Project P.I.T.T. Guide Hub",
  },
  {
    href: "/project-pitt/automation-layouts",
    label: "Automation Layout Helper",
  },
  {
    href: "/project-pitt/anomaly-guide",
    label: "Project P.I.T.T. Anomaly Guide",
  },
  {
    href: "/project-pitt/200kg-platform-what-next",
    label: "200 kg Platform & 0% Guide",
  },
  {
    href: "/project-pitt/secret-ending",
    label: "Project P.I.T.T. Secret Ending Guide",
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
    title: "Project P.I.T.T. Progression Guide – What to Do Next",
    description:
      "A stage-by-stage Project P.I.T.T. route from Ducks and Cash Registers through Phase 3, Piñatas, Phase 4, Anomalies, the fuse route, 200kg blocker, and hidden branch.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-phase-3-pinata-unlocked.webp`,
        width: 1600,
        height: 900,
        alt: "Piñata production unlocking during Project P.I.T.T. progression after Phase 3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Progression Guide",
    description:
      "Know what to do next from Ducks to Cash Registers, Phase 3, Piñatas, Anomalies, fuses, 200kg, and the hidden route.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-phase-3-pinata-unlocked.webp`,
    ],
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
          name: "Project P.I.T.T. Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression Guide",
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
        "Project P.I.T.T. Progression Guide: Ducks, Phases, Fuses and Hidden Route",
      description:
        "A stage-by-stage Project P.I.T.T. progression guide focused on what to do next instead of overbuilding each factory. It covers the move from Ducks to Cash Registers, when to stop optimizing before Phase 3, the Piñata rebuild, Phase 4 and Anomaly timing, when to branch into the upper camera and fuse route, the three-fuse completion signal, when to leave for the dedicated 200 kg and 0% blocker guide, and when the run becomes the Secret Ending route.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-19",
      dateModified: "2026-08-19",
      articleSection: "Project P.I.T.T. Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Project P.I.T.T.",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. progression",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Phase 3",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Phase 4",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Piñatas",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Anomalies",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. camera and fuse route",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. hidden route",
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
          title="What I Do Next in Project P.I.T.T."
          description="I use this route to know when to stop polishing an old factory, move to the next product or phase, branch into the fuse route, and switch to a dedicated blocker or ending guide."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittProgressionGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
