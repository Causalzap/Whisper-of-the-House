import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Subnautica2Content from "@/data/subnautica-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-lifepod-fabricator.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-exterior.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-biolab-biomods.webp`,
];

const guideUrls = [
  `${siteUrl}/subnautica-2/what-to-do-first`,
  `${siteUrl}/subnautica-2/early-resources`,
  `${siteUrl}/subnautica-2/welcome-center-habitat-builder`,
  `${siteUrl}/subnautica-2/oxygen-air-tank-rebreather`,
  `${siteUrl}/subnautica-2/biomods-guide`,
  `${siteUrl}/subnautica-2/sonic-resonator-guide`,
  `${siteUrl}/subnautica-2/fully-functional-fabricator`,
  `${siteUrl}/subnautica-2/navigation-guide`,
  `${siteUrl}/subnautica-2/digestion-adaptation`,
  `${siteUrl}/subnautica-2/first-base-setup`,
  `${siteUrl}/subnautica-2/tadpole-submarine`,
  `${siteUrl}/subnautica-2/co-op-guide`,
  `${siteUrl}/subnautica-2/collector-leviathan`,
];

const toc = [
  { id: "start-here", label: "Start here" },
  { id: "what-not-to-do-first", label: "What not to do" },
  { id: "first-hour-checklist", label: "First hour checklist" },
  { id: "which-guide-next", label: "Which guide next" },
  { id: "common-beginner-mistakes", label: "Beginner mistakes" },
  { id: "early-access-note", label: "Early Access note" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  {
    href: "/subnautica-2/welcome-center-habitat-builder",
    label: "Welcome Center / Habitat Builder",
  },
  {
    href: "/subnautica-2/oxygen-air-tank-rebreather",
    label: "Oxygen / Air Tank / Rebreather",
  },
  { href: "/subnautica-2/biomods-guide", label: "Biomods Guide" },
  {
    href: "/subnautica-2/sonic-resonator-guide",
    label: "Sonic Resonator Guide",
  },
  {
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  { href: "/subnautica-2/digestion-adaptation", label: "Digestion Adaptation" },
  { href: "/subnautica-2/first-base-setup", label: "First Base Setup" },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
  { href: "/subnautica-2/co-op-guide", label: "Co-op Guide" },
  { href: "/subnautica-2/collector-leviathan", label: "Collector Leviathan" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Guide Hub: What to Do First, Oxygen, Base & Tools",
  description:
    "Start Subnautica 2 with a clear route for first steps, oxygen upgrades, Rebreather, Welcome Center, Habitat Builder, Biomods, base setup and key tools.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Guide Hub: What to Do First, Oxygen, Base & Tools",
    description:
      "Start Subnautica 2 with a clear route: craft core tools, solve oxygen, reach the Welcome Center, unlock Habitat Builder and Biomods, build a base, and use Sonic Resonator when routes become tool-gated.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Lifepod Fabricator early game crafting screen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Guide Hub",
    description:
      "A practical Subnautica 2 route hub for tools, oxygen, Welcome Center, Habitat Builder, Biomods, Sonic Resonator, Digestion, bases and survival planning.",
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
        "Subnautica 2 Guide Hub: What to Do First, Oxygen, Welcome Center, Biomods, Sonic Resonator, Base Setup and Survival Routes",
      description:
        "A practical Subnautica 2 Early Access guide hub that explains how to start the first hours, solve oxygen and food problems, reach the Welcome Center, unlock Habitat Builder progress, choose early Biomods, build a first base, use Sonic Resonator for tool-gated routes, and choose the next guide based on what is blocking progression.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-15",
      dateModified: "2026-05-18",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Beginner Guide" },
        { "@type": "Thing", name: "What to Do First" },
        { "@type": "Thing", name: "Oxygen" },
        { "@type": "Thing", name: "Air Tank" },
        { "@type": "Thing", name: "Rebreather" },
        { "@type": "Thing", name: "Welcome Center" },
        { "@type": "Thing", name: "Habitat Builder" },
        { "@type": "Thing", name: "Biomods" },
        { "@type": "Thing", name: "Bioscanner" },
        { "@type": "Thing", name: "Sonic Resonator" },
        { "@type": "Thing", name: "Digestion Adaptation" },
        { "@type": "Thing", name: "Base Building" },
        { "@type": "Thing", name: "Tadpole" },
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
      hasPart: guideUrls.map((url) => ({
        "@type": "WebPage",
        "@id": url,
        url,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "Subnautica 2 guide cluster",
      itemListElement: guideUrls.map((url, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I play Subnautica 2 without playing the first game?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. You will understand the survival loop faster if you played earlier Subnautica games, but this guide assumes you are starting fresh and focuses on what to do in the first hours.",
          },
        },
        {
          "@type": "Question",
          name: "How long is the early game before it opens up?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The early game starts opening up once you have the Scanner, better oxygen, Digestion, Habitat Builder progress, a small base, and the route confidence to leave the Lifepod for longer trips.",
          },
        },
        {
          "@type": "Question",
          name: "Should I follow signals immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow signals when you have the tools and oxygen to survive the trip. Early signals are important, but swimming toward every marker with no Scanner, no oxygen backup, and a full inventory can create avoidable death runs.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Welcome Center required?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Welcome Center is not just a landmark. It is your first major unlock hub because it gives Habitat Builder progress, Biolab access, oxygen safety, and useful scannables.",
          },
        },
        {
          "@type": "Question",
          name: "When should I open the Oxygen guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the Oxygen, Air Tank and Rebreather guide when you have the Scanner but dives still fail because of depth, distance, or panic ascents. It explains Air Bladder, Standard Air Tank, High Capacity Air Tank, Rebreather, Portable Oxygen Generator, and oxygen reset points.",
          },
        },
        {
          "@type": "Question",
          name: "When should I care about Biomods?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use starter Biomods after powering the first Biolab, then return to the Biomods guide later when you unlock the Bioscanner and want stronger active and passive survival options.",
          },
        },
        {
          "@type": "Question",
          name: "When do I need the Sonic Resonator?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Craft the Sonic Resonator when large mineral deposits, biofilm, Bloom routes, or blocked passages start appearing in your progression path. It is a mid-game tool-gate, not just a mining upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "Which Subnautica 2 guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you are completely new, read What to Do First. If oxygen is the problem, use Oxygen, Air Tank and Rebreather. If you need the Habitat Builder, use Welcome Center and Habitat Builder. If you need advanced survival tools, use Biomods Guide. If routes are blocked by deposits or biofilm, use Sonic Resonator Guide.",
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
          title="Subnautica 2 Guide: What to Do First, What Not to Do, and Which Guide to Open Next"
          description="Start with a clean route: craft the core tools, solve oxygen, reach the Welcome Center southeast of the Lifepod, unlock Habitat Builder progress, choose early Biomods, build a small base, and use this hub to solve the next problem blocking your run."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Subnautica2Content />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
