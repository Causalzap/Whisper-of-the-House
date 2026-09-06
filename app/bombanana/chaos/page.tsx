import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaChaosContent from "@/data/bombanana/chaos.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana/chaos`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-chaos-warning-control.webp`,
  `${siteUrl}/images/bombanana/bombanana-chaos-modules.webp`,
];

const toc = [
  {
    id: "first-chaos",
    label: "The first Chaos warning",
  },
  {
    id: "campaign-ramp",
    label: "How Chaos ramps through Campaign",
  },
  {
    id: "interrupt-or-finish",
    label: "Interrupt or finish the solve",
  },
  {
    id: "three-players-reacting",
    label: "Keep one warning from breaking the team",
  },
  {
    id: "return-check",
    label: "Return to the right module state",
  },
  {
    id: "manage-not-solve",
    label: "Why Chaos never feels finished",
  },
  {
    id: "practice-level-4",
    label: "Practice one hazard on Level 4",
  },
  {
    id: "replay-or-push",
    label: "Replay or keep pushing",
  },
  {
    id: "late-game",
    label: "Surviving Level 29 Chaos",
  },
];

const relatedLinks = [
  {
    href: "/bombanana/roles",
    label: "BOMBANANA Roles & Communication Guide",
  },
  {
    href: "/bombanana/levels",
    label: "BOMBANANA Levels & Walkthrough",
  },
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver",
  },
  {
    href: "/bombanana/calculator",
    label: "BOMBANANA Calculator Guide & Solver",
  },
  {
    href: "/bombanana/piano",
    label: "BOMBANANA Piano Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Manual & Guide",
  },
];

export const metadata: Metadata = {
  title: "BOMBANANA Chaos Guide: Slider, Pressure & Alarm",

  description:
    "See when to stop a solve, stabilize Slider, Pressure or Alarm, recover the current module state, and decide when to replay easier Chaos levels.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "BOMBANANA Chaos Guide: Slider, Pressure & Alarm",

    description:
      "Keep BOMBANANA Chaos under control without losing the module you were solving. Handle urgent hazards, resume safely, and survive stacked late-game pressure.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "BOMBANANA warning-marked Chaos control rising beside active defusal modules",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BOMBANANA Chaos Guide: Slider, Pressure & Alarm",

    description:
      "Know when Chaos should interrupt the solve, how to recover the panel you paused, and when stacked hazards mean it is time to replay an easier level.",

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
          name: "BOMBANANA Manual & Guide",
          item: `${siteUrl}/bombanana`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BOMBANANA Chaos Guide",
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

      headline: "BOMBANANA Chaos Guide: Slider, Pressure and Alarm",

      description:
        "A player-focused guide to managing BOMBANANA Chaos hazards while normal defusal modules remain active. It covers the first warning Slider, the Campaign escalation from Level 4 onward, when urgent Slider, Pressure, or Alarm states should interrupt a solve, how to return to a confirmed module state after that interruption, why stale answers cause follow-up mistakes, and how Levels 4, 12, 26, and 29 expose different Chaos-management problems.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-09-06",

      articleSection: "BOMBANANA Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "BOMBANANA",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Chaos Modules",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Slider Chaos",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Pressure Chaos",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Alarm Chaos",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Chaos management",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "BOMBANANA Level 4",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 6",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 10",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 12",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 26",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 29",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="BOMBANANA Chaos: When to Stop the Solve and Save the Run"
          description="If Slider, Pressure, or Alarm starts turning urgent, I stabilize it first, then return to the module state we can actually confirm instead of guessing from memory."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaChaosContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}