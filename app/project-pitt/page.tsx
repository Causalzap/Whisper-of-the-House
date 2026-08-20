import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittHubContent from "@/data/project-pitt/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/project-pitt`;

const metadataTitle =
  "Project P.I.T.T. Guide: Progression, Automation & Endings";

const metadataDescription =
  "Use this Project P.I.T.T. guide hub to find progression, automation, product setups, the 200kg blocker, achievements, troubleshooting, and endings.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-duck-auto-machine-5-second-rate.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-phase-3-pinata-unlocked.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-anomaly-first-unlock.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-anomaly-gate-open.webp`,
];

const toc = [
  {
    id: "where-to-start",
    label: "Where to Start",
  },
  {
    id: "early-game",
    label: "Early Game",
  },
  {
    id: "cash-and-phase-3",
    label: "Cash Registers and Phase 3",
  },
  {
    id: "pinata-stage",
    label: "Piñata Stage",
  },
  {
    id: "anomaly-stage",
    label: "Anomaly Stage",
  },
  {
    id: "hidden-route",
    label: "200 kg and Hidden Route",
  },
  {
    id: "secret-ending",
    label: "Secret Ending Route",
  },
  {
    id: "achievements",
    label: "Achievement Cleanup",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting vs Layout Fixes",
  },
];

const relatedLinks = [
  {
    href: "/project-pitt/progression-guide",
    label: "Project P.I.T.T. Progression Guide",
  },
  {
    href: "/project-pitt/automation-layouts",
    label: "Automation Layout Helper",
  },
  {
    href: "/project-pitt/200kg-platform-what-next",
    label: "200 kg Platform & 0% Guide",
  },
  {
    href: "/project-pitt/secret-ending",
    label: "Project P.I.T.T. Secret Ending Guide",
  },
  {
    href: "/project-pitt/achievements",
    label: "Project P.I.T.T. Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Project P.I.T.T. Guide Hub",
    description:
      "Find the right Project P.I.T.T. guide for progression, automation layouts, Ducks, Cash Registers, Piñatas, Anomalies, hidden progression, achievements, troubleshooting, and endings.",
    siteName: "Whisper of the House",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-anomaly-gate-open.webp`,
        width: 1600,
        height: 900,
        alt: "Project P.I.T.T. hidden progression route open above the factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Guide Hub",
    description:
      "Progression, automation, product guides, the 200kg blocker, achievements, troubleshooting, and the Secret Ending route.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-anomaly-gate-open.webp`,
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Project P.I.T.T. Guide: Progression, Automation and Endings",
      description:
        "A Project P.I.T.T. guide hub that routes players to focused walkthroughs for stage progression, early automation layouts, Duck automation, Cash Register automation, Piñata automation, Anomaly production, the 200 kg platform and 0% gate, the Secret Ending, all 23 achievements, and game-state troubleshooting.",
      inLanguage: "en",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      about: {
        "@type": "VideoGame",
        name: "Project P.I.T.T.",
      },
      mainEntity: {
        "@id": `${pageUrl}#guides`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guides`,
      name: "Project P.I.T.T. Guides",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Progression Guide",
          url: `${pageUrl}/progression-guide`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Automation Layout Helper",
          url: `${pageUrl}/automation-layouts`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Duck Automation Guide",
          url: `${pageUrl}/duck-automation`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Cash Register Automation Guide",
          url: `${pageUrl}/cash-register-automation`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Piñata Automation Guide",
          url: `${pageUrl}/pinata-automation`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Anomaly Guide",
          url: `${pageUrl}/anomaly-guide`,
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "200 kg Platform and 0% Guide",
          url: `${pageUrl}/200kg-platform-what-next`,
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Secret Ending Guide",
          url: `${pageUrl}/secret-ending`,
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Achievements Guide",
          url: `${pageUrl}/achievements`,
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Troubleshooting Guide",
          url: `${pageUrl}/troubleshooting`,
        },
      ],
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
          title="Project P.I.T.T. Guide: Where I Go Next"
          description="I use this hub to identify my current product, blocker, or late-game objective, then jump into the one Project P.I.T.T. guide that owns the full solution."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
