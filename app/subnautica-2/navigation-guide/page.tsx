import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import NavigationGuideContent from "@/data/subnautica-2/navigation-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/navigation-guide`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-navigation-lifepod-zero-point.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-signals-tab-marker-toggle.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-cave-oxygen-bubbles-route.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-pathfinder-biomod-trail.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-beacon-naming-system.webp`,
];

const toc = [
  { id: "navigation-progression", label: "Progression" },
  { id: "use-lifepod-zero-point", label: "Lifepod zero point" },
  { id: "signals-tab", label: "Signals" },
  { id: "read-environment", label: "Read the world" },
  { id: "beacon-unlock", label: "Beacons" },
  { id: "beacon-names", label: "Beacon names" },
  { id: "shallow-water", label: "Shallow water" },
  { id: "cave-navigation", label: "Caves" },
  { id: "deep-water", label: "Deep water" },
  { id: "mini-outpost", label: "Mini outposts" },
  { id: "pathfinder", label: "Pathfinder" },
  { id: "lost-decision-tree", label: "Lost?" },
  { id: "coop-navigation", label: "Co-op" },
  { id: "death-recovery", label: "Death recovery" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  {
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
  { href: "/subnautica-2/co-op-guide", label: "Co-op Guide" },
  { href: "/subnautica-2/first-base-setup", label: "First Base Setup" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Navigation Guide: Map, Beacons & Signals",
  description:
    "Stop getting lost in Subnautica 2. Learn Signals, Beacons, Lifepod routes, cave exits, Pathfinder, mini outposts and co-op navigation.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Navigation Guide: Map, Beacons & Signals",
    description:
      "A practical no-map navigation guide for Subnautica 2: Lifepod routes, Signals, Beacons, cave exits, environmental clues, Pathfinder and co-op route names.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Lifepod used as a zero point for early navigation routes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Navigation Guide: Map, Beacons & Signals",
    description:
      "Use Lifepod routes, Signals, Beacons, cave rules and environmental clues to stop getting lost in Subnautica 2.",
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
          name: "Navigation Guide",
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
        "Subnautica 2 Navigation Guide: Lifepod Routes, Signals, Beacons, Environmental Clues, Pathfinder and Co-op Navigation",
      description:
        "A Subnautica 2 Early Access navigation guide for players who get lost without a traditional map. It explains how to use the Lifepod as a zero point, manage Signals, read environmental clues, unlock and name Beacons, navigate shallow water, caves and deep routes, build mini outposts, use Pathfinder, recover when completely lost, and coordinate route names in co-op.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-14",
      dateModified: "2026-05-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Navigation" },
        { "@type": "Thing", name: "Signals" },
        { "@type": "Thing", name: "Beacons" },
        { "@type": "Thing", name: "Pathfinder Biomod" },
        { "@type": "Thing", name: "Co-op Navigation" },
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
          name: "Does Subnautica 2 have a map?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not rely on a traditional map in the opening route. The practical navigation system is made from Signals, landmarks, Beacons, bases, outposts and your own route memory.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Beacons in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the current Early Access route, Beacons come from early blueprint progression, so keep scanning fragments, wreck pieces, habitat objects and useful route items as you explore. The exact trigger may change during Early Access.",
          },
        },
        {
          "@type": "Question",
          name: "What should I name my first Beacon?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Name your first base Beacon BASE-01. After that, use functional names like SILVER-CAVE, O2-STOP, DEEP-ENTRY or DANGER-PREDATOR.",
          },
        },
        {
          "@type": "Question",
          name: "Is Pathfinder better than Dash in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pathfinder is better when you get lost in caves because it can leave a visible return trail. Dash, another early active Biomod from the Welcome Center Biolab, is better for speed and escaping danger.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stop getting lost in co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use shared Beacon names, call out routes by function, and avoid everyone using different names for the same place. If someone gets lost, guide them back to a named marker instead of sending the whole team searching.",
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
          title="Subnautica 2 Navigation Guide: How to Stop Getting Lost"
          description="Use Lifepod routes, Signals, Beacons, environmental clues, Pathfinder, mini outposts and shared co-op names to build routes you can actually repeat."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NavigationGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
