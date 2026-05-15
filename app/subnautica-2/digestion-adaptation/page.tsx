import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DigestionAdaptationContent from "@/data/subnautica-2/digestion-adaptation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/digestion-adaptation`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-anita-digestion-plant.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-local-fish-after-digestion.webp`,
];

const toc = [
  { id: "why-digestion-matters", label: "Why it matters" },
  { id: "when-to-get-digestion", label: "When to get it" },
  { id: "where-to-find-digestion", label: "Where to find it" },
  { id: "what-to-bring", label: "What to bring" },
  { id: "step-by-step-route", label: "Step-by-step route" },
  { id: "early-food-values", label: "Food values" },
  { id: "what-to-do-after-unlock", label: "After unlock" },
  { id: "water-and-food-loop", label: "Food & water loop" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "next-progression", label: "Next steps" },
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
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  { href: "/subnautica-2/first-base-setup", label: "First Base Setup" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Digestion Adaptation: Angel Comb Location & Food Fix",
  description:
    "Find the Digestion Adaptation in Subnautica 2, follow Anita’s signal to the Angel Comb, use the black cable route, fix digestive incompatibility, and build a better early food loop.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Digestion Adaptation: Angel Comb Location & Food Fix",
    description:
      "A player-first Digestion guide for Subnautica 2: when to unlock it, where to find the Angel Comb, what to bring, and how food and water change after the adaptation.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Angel Comb Digestion Adaptation plant near Anita's signal.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Digestion Adaptation Guide",
    description:
      "Find the Angel Comb, unlock Digestion, fix digestive incompatibility, and turn local fish into a reliable early food source.",
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
          name: "Digestion Adaptation",
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
        "Subnautica 2 Digestion Adaptation Guide: Angel Comb Location, Black Cable Route, Food Values and Digestive Incompatibility Fix",
      description:
        "A practical Subnautica 2 Early Access guide that explains why Digestion matters, when to unlock it, where to find the Angel Comb near Anita's signal, how to use the black cable route, what the Angel Comb looks like, what to bring before going, how to avoid common mistakes, early food and water values, and what to do after unlocking Digestion.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-15",
      dateModified: "2026-05-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Digestion Adaptation" },
        { "@type": "Thing", name: "Angel Comb" },
        { "@type": "Thing", name: "Anita's Signal" },
        { "@type": "Thing", name: "Digestive Incompatibility" },
        { "@type": "Thing", name: "Water Slug" },
        { "@type": "Thing", name: "Nutrient Block" },
        { "@type": "Thing", name: "Early Food" },
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
          name: "Why can’t I eat local food in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You need Digestion Adaptation first. Until then, local cooked food may show digestive incompatibility instead of working like normal food.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Digestion Adaptation in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Digestion Adaptation is near Anita’s early signal route, roughly north-northeast from the Lifepod. Look for the massive glowing Angel Comb and interact with the central pink bulb at the base.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Angel Comb look like?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Angel Comb looks like a huge glowing pink-purple plant with spiky angel-wing shapes. The important interact point is the central pink bulb near the base.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an easier way to find the Angel Comb?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Follow Anita’s signal if it is active, and watch for the black cable running along the seafloor toward the Angel Comb area.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Digestion plant the same as Anita’s black box?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Anita’s black box is nearby progression content, but the food fix comes from interacting with the Angel Comb bulb. Do both before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "Should Digestion be my first objective in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not literally first. Craft basic tools first, then unlock Digestion early before longer resource runs.",
          },
        },
        {
          "@type": "Question",
          name: "What should I eat before Digestion?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Lifepod supplies, found food, and Nutrient Blocks. If you have the Processor route later, Biofuel Block plus Salt can also become an emergency Nutrient Block option.",
          },
        },
        {
          "@type": "Question",
          name: "Are Water Slugs food or water?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Treat Water Slugs as water materials. Turning them into bottled water is usually the better habit.",
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
          title="Subnautica 2 Digestion Adaptation Guide: Angel Comb Location and Food Fix"
          description="Unlock Digestion early, find the Angel Comb near Anita’s signal, follow the black cable route, fix digestive incompatibility, and turn local fish into a reliable early food source."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DigestionAdaptationContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}