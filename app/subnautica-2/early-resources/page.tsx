import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EarlyResourcesContent from "@/data/subnautica-2/early-resources.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/early-resources`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-early-resource-route-map.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-lifepod-cave-copper-acidic-raion.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-quartz-coral-dome.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-huge-coral-lucifer-rotsack.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-silver-cave-green-flowers.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-digestion-adaptation-plant.webp`,
];

const toc = [
  { id: "pre-dive-checklist", label: "Checklist" },
  { id: "route-overview", label: "Route" },
  { id: "how-much-to-grab", label: "Amounts" },
  { id: "titanium-copper-battery", label: "Battery materials" },
  { id: "quartz-coral-domes", label: "Quartz" },
  { id: "fibrous-pulp-lucifer-rotsack", label: "Rubber & Fiber" },
  { id: "silver-standard-air-tank", label: "Silver" },
  { id: "digestion-salt-food", label: "Digestion" },
  { id: "if-you-get-lost", label: "Troubleshooting" },
  { id: "what-to-craft-next", label: "Craft next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  {
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  { href: "/subnautica-2/digestion-adaptation", label: "Digestion Adaptation" },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Early Resources: Silver, Quartz, Copper",
  description:
    "Follow a safe Subnautica 2 early resource route for Copper, Quartz, Rubber, Fiber, Silver, Salt and Digestion without wasting oxygen.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Early Resources: Silver, Quartz, Copper",
    description:
      "Use this Lifepod-based route to gather the early resources you actually need for tools, air, food, bases and the Tadpole path.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 early resource route map from Lifepod to Copper, Quartz, Rubber, Fiber and Silver.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Early Resources: Silver, Quartz, Copper",
    description:
      "A player-first route for the early Subnautica 2 resources that unlock Scanner, Fins, Air Tank, Fabricator progress and safer dives.",
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
          name: "Early Resources",
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
        "Subnautica 2 Early Resource Route: Silver, Copper, Quartz, Rubber, Fiber, Salt and Digestion",
      description:
        "A Subnautica 2 Early Access resource route for new players that starts at the Lifepod and explains where to gather Titanium, Copper, Acidic Raion Pouches, Quartz, Lucifer Rotsack, Fibrous Pulp, Silver, Salt, and early food support. The guide focuses on what each resource unlocks, when to stop farming one material and move to the next objective, how to avoid common oxygen mistakes, and how the route supports Scanner, Fins, Air Bladder, Standard Air Tank, Fabricator progression, Digestion, and the Tadpole path.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-14",
      dateModified: "2026-05-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Early Resources" },
        { "@type": "Thing", name: "Silver" },
        { "@type": "Thing", name: "Quartz" },
        { "@type": "Thing", name: "Copper" },
        { "@type": "Thing", name: "Rubber" },
        { "@type": "Thing", name: "Digestion Adaptation" },
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
          name: "Should I farm every resource I see in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. In the opening route, gather for the next unlock instead of filling your inventory with random materials. Prioritize Multitool, Scanner, Fins, Air Bladder, Standard Air Tank, Digestion, and the first base chain.",
          },
        },
        {
          "@type": "Question",
          name: "When should I stop farming Copper and look for Silver?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Once you have enough Copper and Acidic Raion Pouches for your first batteries and Scanner route, move toward Silver because the Standard Air Tank gives a major dive-time upgrade and opens safer deeper exploration.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Fins before going for Silver?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fins are not strictly required, but they make the Silver run safer because you swim faster and waste less oxygen. New players should make Fins before pushing into longer cave routes.",
          },
        },
        {
          "@type": "Question",
          name: "What does Digestion unlock in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Digestion lets your character safely use local cooked food as a reliable food source. Before that adaptation, some local food can cause digestive incompatibility or be inefficient for survival.",
          },
        },
        {
          "@type": "Question",
          name: "How should resources be split in Subnautica 2 co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not send the whole team into the same cave. Have one player handle Copper and Acidic Raion Pouches, another collect Quartz, Rubber and Fiber, and a safer player push toward Silver once oxygen tools are ready.",
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
          title="Subnautica 2 Early Resource Route: What to Grab First and When to Move On"
          description="A Lifepod-based route for the resources that actually unlock your first tools, more oxygen, safer food, starter base progress, and the Tadpole path."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EarlyResourcesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
