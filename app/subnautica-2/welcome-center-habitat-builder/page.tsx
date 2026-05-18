import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WelcomeCenterHabitatBuilderContent from "@/data/subnautica-2/welcome-center-habitat-builder.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/welcome-center-habitat-builder`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-exterior.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-habitat-builder-crafting-recipe.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-battery-outlet.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-biolab-biomods.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-room-blueprint-station.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-first-base-room-hatch.webp`,
];

const toc = [
  { id: "route-overview", label: "Route" },
  { id: "before-you-leave", label: "Checklist" },
  { id: "habitat-builder-fragment-locations", label: "Fragments" },
  { id: "crafting-recipe", label: "Recipe" },
  { id: "welcome-center-power", label: "Welcome Center" },
  { id: "room-blueprint", label: "Room blueprint" },
  { id: "build-first-base", label: "First base" },
  { id: "where-to-build", label: "Base location" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "what-to-do-next", label: "Next steps" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  { href: "/subnautica-2/biomods-guide", label: "Biomods Guide" },
  { href: "/subnautica-2/first-base-setup", label: "First Base Setup" },
  {
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Welcome Center and Habitat Builder Guide",
  description:
    "Find the Welcome Center, scan both Habitat Builder fragments, craft the Habitat Builder, power the Bio Lab, unlock the Room blueprint, and build your first base in Subnautica 2.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Welcome Center and Habitat Builder Guide",
    description:
      "A player-first route for the Welcome Center, Habitat Builder fragments, Room blueprint, Bio Lab, and first functional base in Subnautica 2.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Welcome Center exterior southeast of the Lifepod.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Welcome Center and Habitat Builder Guide",
    description:
      "Scan both Habitat Builder fragments at the Welcome Center, craft the tool, power the Bio Lab, unlock the Room blueprint, and start your first base.",
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
          name: "Welcome Center and Habitat Builder",
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
      headline: "Subnautica 2 Welcome Center and Habitat Builder Guide",
      description:
        "A Subnautica 2 Early Access guide explaining how to reach the Welcome Center from the Lifepod, scan both Habitat Builder fragments, craft the Habitat Builder at the Lifepod Fabricator, power the Welcome Center with a Basic Battery, use the Bio Lab, unlock the Room blueprint through the Old Habitat Processor route, and build a first functional base with power, oxygen, storage, and room to expand.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-18",
      dateModified: "2026-05-18",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Welcome Center" },
        { "@type": "Thing", name: "Habitat Builder" },
        { "@type": "Thing", name: "Base Building" },
        { "@type": "Thing", name: "Room Blueprint" },
        { "@type": "Thing", name: "Bio Lab" },
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
          name: "Where is the Welcome Center in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Welcome Center is roughly 80 to 90 meters southeast or south-southeast of the Lifepod. Bring a Scanner and enough oxygen to check the lower floor section safely.",
          },
        },
        {
          "@type": "Question",
          name: "Where are the two Habitat Builder fragments in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The fastest pair is at the Welcome Center. One Habitat Builder fragment is in an open crate near the entrance sign, and the second is in a lower crate reached through the floor hole inside the building.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Habitat Builder recipe in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Habitat Builder recipe is 2 Titanium, 1 Glass, 1 Basic Battery, and 1 Copper Wire. Craft it at the Lifepod Fabricator after scanning two Habitat Builder fragments.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a base Fabricator to craft the Habitat Builder?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The Habitat Builder itself is crafted at the Lifepod Fabricator. You build a base Fabricator later after you have a habitat.",
          },
        },
        {
          "@type": "Question",
          name: "Why can I only build corridors with the Habitat Builder?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably have the Habitat Builder but not the Room blueprint yet. For this route, unlock the Room by scanning the Processor at the Old Habitat north or north-northwest of the Lifepod. A Room recipe data card is another valid unlock source elsewhere, but the Old Habitat Processor is the cleaner first-base route.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build my first base at the Welcome Center?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can build near the Welcome Center if the terrain has space, nearby resources, and safe power options. Otherwise, treat the Welcome Center as a progression checkpoint and build closer to your main early resource route.",
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
          title="Subnautica 2 Welcome Center and Habitat Builder Guide"
          description="A clean early route for finding both Habitat Builder fragments, powering the Welcome Center, unlocking the Room blueprint, and building your first functional base."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WelcomeCenterHabitatBuilderContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
