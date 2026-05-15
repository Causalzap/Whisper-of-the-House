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
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  { href: "/subnautica-2/digestion-adaptation", label: "Digestion Adaptation" },
  { href: "/subnautica-2/first-base-setup", label: "First Base Setup" },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
  { href: "/subnautica-2/coop-guide", label: "Co-op Guide" },
  { href: "/subnautica-2/collector-leviathan", label: "Collector Leviathan" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Guide: What to Do First, Base, Food, Tadpole & More",
  description:
    "A player-first Subnautica 2 guide hub covering what to do first, Welcome Center, early Biomods, Digestion, resources, base setup, Tadpole, co-op, navigation and Leviathan survival.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Guide: What to Do First, Base, Food, Tadpole & More",
    description:
      "Start Subnautica 2 with a clear route: craft core tools, reach the Welcome Center, pick early Biomods, unlock Digestion, build a base, and prepare for the Tadpole.",
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
    title: "Subnautica 2 Guide",
    description:
      "A practical Subnautica 2 route hub for tools, Welcome Center, Biomods, Digestion, base setup, Tadpole and survival planning.",
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
        "Subnautica 2 Guide: What to Do First, Welcome Center, Early Biomods, Digestion, Base Setup, Tadpole and Survival Routes",
      description:
        "A practical Subnautica 2 Early Access guide hub that explains how to start the first hours, what not to do first, how to reach the Welcome Center southeast of the Lifepod, which early Biomods to choose, when to unlock Digestion, when to build a first base, how to use the guide cluster, and what to read next based on the problem blocking progression.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-15",
      dateModified: "2026-05-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Beginner Guide" },
        { "@type": "Thing", name: "What to Do First" },
        { "@type": "Thing", name: "Welcome Center" },
        { "@type": "Thing", name: "Biomods" },
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
              "The early game starts opening up once you have the Scanner, better oxygen, Digestion, Habitat Builder progress, and a small base. For most new players, the first couple of hours are about building a safe route rather than rushing deep.",
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
          name: "Which Subnautica 2 guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you are completely new, read What to Do First. If you are stuck on materials, use Early Resources. If hunger is the problem, use Digestion Adaptation. If storage and crafting are the problem, use First Base Setup.",
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
          description="Start with a clean route: craft the core tools, reach the Welcome Center southeast of the Lifepod, choose Dash and Oxygen Control, unlock Digestion, build a small base, and use this hub to solve the next problem blocking your run."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
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