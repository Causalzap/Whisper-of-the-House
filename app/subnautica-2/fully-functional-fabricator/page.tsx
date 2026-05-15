import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FabricatorContent from "@/data/subnautica-2/fully-functional-fabricator.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/fully-functional-fabricator`;

const pageTitle = "Subnautica 2 Fully Functional Fabricator Fix";
const pageDescription =
"Fix the Fully Functional Fabricator error in Subnautica 2: scan Habitat Builder fragments, build a powered base, place a real Fabricator, and unlock Processor progression.";

const articleImages = [
  `${siteUrl}/images/subnautica-2/subnautica-2-habitat-builder-scan.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-exterior.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-processor-scan-location.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-tadpole-deck-blocked-depth.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-fabricator-progression-flow.webp`,
];

const toc = [
  { id: "what-the-message-means", label: "What it means" },
  { id: "quick-route", label: "Quick route" },
  { id: "materials", label: "Materials" },
  { id: "power", label: "Power" },
  { id: "common-fixes", label: "Common fixes" },
  { id: "beacon-tip", label: "Beacon tip" },
  { id: "processor", label: "Processor" },
  { id: "moonpool", label: "Moonpool" },
  { id: "progression-chain", label: "Progression chain" },
  { id: "next", label: "What to do next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  { href: "/subnautica-2/first-base-setup", label: "First Base Setup" },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: articleImages[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Habitat Builder scan location for the fully functional Fabricator route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [articleImages[0]],
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
          name: "Fully Functional Fabricator",
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
        "Subnautica 2 Fully Functional Fabricator Fix: Habitat Builder, Powered Base, Processor, Moonpool and Tadpole Route",
      description:
        "A player-focused Subnautica 2 guide for fixing the Fully Functional Fabricator blocker. It explains why the Lifepod Fabricator is limited, how to scan both Habitat Builder fragments, what materials a starter powered base needs, how much Solar power to bring, why a Beacon helps, where the Processor fits into the crafting chain, and how this path leads into Moonpool, Tadpole Deck, Vehicle Fabricator and Tadpole progression.",
      image: articleImages,
      inLanguage: "en",
      datePublished: "2026-05-14",
      dateModified: "2026-05-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Fully Functional Fabricator" },
        { "@type": "Thing", name: "Habitat Builder" },
        { "@type": "Thing", name: "Fabricator" },
        { "@type": "Thing", name: "Processor" },
        { "@type": "Thing", name: "Moonpool" },
        { "@type": "Thing", name: "Tadpole Deck" },
        { "@type": "Thing", name: "Tadpole Submarine" },
        { "@type": "Thing", name: "Base Building" },
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
          name: "What does fully functional Fabricator mean in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It means the damaged Lifepod Fabricator is not enough for that recipe or progression chain. Build a powered base and place a proper Fabricator there.",
          },
        },
        {
          "@type": "Question",
          name: "How many Solar Panels do I need for a Fabricator base?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use one Solar Panel for a tiny shallow starter base. Add a second Solar Panel if repeated crafting, Scanner Station use, nighttime dips, or a larger base makes power unstable.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I place Solar Panels for the best early power?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Place Solar Panels outside on the top or upper exterior of a shallow base, with clear open water above and as little terrain obstruction as possible. Avoid cramped caves, shaded overhangs, and spots you plan to cover with future rooms.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Fabricator shared in co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A Fabricator placed inside a shared base should be treated as a team crafting station. In co-op, coordinate shared storage, scanning, and material use so one player does not spend materials another player needs for the next unlock.",
          },
        },
        {
          "@type": "Question",
          name: "Why are advanced materials still missing after I build a Fabricator?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably need the Processor. Scan it in the later habitat route, then use it for advanced material chains such as ingots, Strong Acid chains, and vehicle prep.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I place the Tadpole Deck?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Moonpool area is probably too shallow or blocked. Extend the base over deeper water and place the Moonpool on an outer edge with clear space below.",
          },
        },
        {
          "@type": "Question",
          name: "Should I put a Beacon on my first base?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Once Beacons or base markers are available, mark your first base immediately. It makes resource runs and Tadpole preparation much easier in a game where navigation depends heavily on landmarks and signals.",
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
          title="How to Fix the Fully Functional Fabricator Problem in Subnautica 2"
          description="A practical route for players stuck on recipes the Lifepod Fabricator cannot craft yet: scan both Habitat Builder fragments, build a tiny powered base, place a real Fabricator, then push toward Processor, Moonpool and Tadpole."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FabricatorContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}