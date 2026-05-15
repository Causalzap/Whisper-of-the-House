
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CollectorLeviathanContent from "@/data/subnautica-2/collector-leviathan.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/collector-leviathan`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-distraction-flare-pickup.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-scanner-essential-tool.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-distraction-flare-throw.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-air-bladder-escape-tool.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-tadpole-repair-tool.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-powered-base-safe-oxygen.webp`,
];

const toc = [
  { id: "should-you-enter-collector-territory", label: "Should you enter?" },
  { id: "collector-location", label: "Location" },
  { id: "what-to-bring", label: "What to bring" },
  { id: "first-sighting-decision", label: "First sighting" },
  { id: "lock-on-escape-plan", label: "Lock-on escape" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "distraction-flare-strategy", label: "Distraction Flare" },
  { id: "scan-collector-safely", label: "Safe scan" },
  { id: "tadpole-safety", label: "Tadpole safety" },
  { id: "base-safety", label: "Base safety" },
  { id: "pearl-warning-signs", label: "Pearl signs" },
  { id: "can-you-kill-collector", label: "Can you kill it?" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/first-base-setup", label: "First Base Setup" },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Collector Leviathan Guide: Escape, Scan & Flares",
  description:
    "A decision-first Collector Leviathan guide for Subnautica 2: when to enter its territory, where it appears, what to bring, how to use Distraction Flares, how to scan it, and when to run.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Collector Leviathan Guide: Escape, Scan & Flares",
    description:
      "Know when to enter Collector territory, how to react when it locks on, how to use Distraction Flares, whether the Tadpole is safe, and how to scan the Collector without forcing a death run.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Distraction Flare picked up before entering dangerous territory.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Collector Leviathan Guide",
    description:
      "A practical survival guide for Collector territory: bring flares, plan an exit, scan safely, and do not trust the Tadpole as a panic room.",
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
          name: "Subnautica 2 Guide",
          item: `${siteUrl}/subnautica-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Collector Leviathan",
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
        "Subnautica 2 Collector Leviathan Guide: When to Enter, What to Bring, How to Escape, How to Use Distraction Flares and How to Scan It Safely",
      description:
        "A decision-first Subnautica 2 Collector Leviathan guide that explains whether you should enter Collector territory, where it appears, how ocean currents can pull players into Sparse Plains, what to bring before going in, how to react to sonar-style lock-on, how to use Distraction Flares, how to avoid common mistakes, how to scan the Collector safely, whether the Tadpole is safe, why sealed bases are useful reset points, and whether you should try to kill it.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-15",
      dateModified: "2026-05-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Collector Leviathan" },
        { "@type": "Thing", name: "Distraction Flare" },
        { "@type": "Thing", name: "Sparse Plains" },
        { "@type": "Thing", name: "Outer Bounds" },
        { "@type": "Thing", name: "Tadpole" },
        { "@type": "Thing", name: "Scanner" },
        { "@type": "Thing", name: "Leviathan Survival" },
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does the Collector Leviathan spawn in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Current reporting places the Collector Leviathan in Sparse Plains and Outer Bounds. Treat both areas as dangerous until you confirm the route yourself.",
          },
        },
        {
          "@type": "Question",
          name: "Can ocean currents pull me into Collector territory?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Ocean currents can pull players into Sparse Plains without much warning, so check your HUD position before deep dives near the biome edge.",
          },
        },
        {
          "@type": "Question",
          name: "Does Distraction Flare work on the Collector Leviathan?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Bring a Distraction Flare on your hotbar and throw it away from your escape route so the attention moves off your path instead of following you.",
          },
        },
        {
          "@type": "Question",
          name: "Can you scan the Collector Leviathan?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but treat it as a planned scan attempt. Bring flares, unload rare materials, keep an exit route, approach from an angle, and abort if it turns toward you.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Tadpole safe near the Collector Leviathan?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The Tadpole is useful for travel and retreat, but it is not a guaranteed safe room. Keep it pointed toward the exit and do not idle near the Collector.",
          },
        },
        {
          "@type": "Question",
          name: "Are bases safe from the Collector Leviathan?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A sealed base compartment is a useful safe reset point once you are inside, but the danger is reaching the hatch. Do not build your main base directly on the Collector route.",
          },
        },
        {
          "@type": "Question",
          name: "Can you kill the Collector Leviathan?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not plan around killing it. Treat the Collector as an avoid, distract, scan, and escape threat unless a future update adds a verified method.",
          },
        },
      ],
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
          title="Subnautica 2 Collector Leviathan Guide: When to Run, When to Scan, and How to Survive"
          description="Do not enter Collector territory casually. Bring a Distraction Flare, plan an exit, know how ocean currents can pull you into Sparse Plains, scan only with a reset plan, and treat the Tadpole as a retreat tool instead of a safe room."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CollectorLeviathanContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}