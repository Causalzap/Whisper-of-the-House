import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ArtifactsGuideContent from "@/data/scale-the-depths/artifacts-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scale-the-depths/artifacts-guide`;

const imageUrls = [
  `${siteUrl}/images/scale-the-depths/scale-the-depths-artifacts-almanac-tab.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-lochness-ship-lever.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-lochness-last-artifact-complete.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-english-shield-artifact.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-coffee-cup-artifact.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-pressure-plate-puzzle.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-sunstone-artifact.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-artifact-count.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-right-side-artifact.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-lower-route-artifact.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-boss-room-artifact.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-red-lever-secret.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-secret-chest-path.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-boss-artifact.webp`,
];

const toc = [
  { id: "scale-the-depths-artifacts-guide", label: "Artifacts guide" },
  { id: "artifact-vs-treasure", label: "Artifact vs treasure" },
  { id: "all-artifact-locations", label: "All artifact locations" },
  { id: "loch-ness-artifacts", label: "Loch Ness" },
  { id: "huatulco-artifacts", label: "Huatulco" },
  { id: "outer-banks-artifacts", label: "Outer Banks" },
  { id: "point-nemo-artifacts", label: "Point Nemo" },
  { id: "missing-artifact-fixes", label: "Missing artifact fixes" },
  { id: "printable-artifact-checklist", label: "Printable checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/scale-the-depths",
    label: "Scale the Depths Guide Hub",
  },
  {
    href: "/scale-the-depths/all-collectibles-secrets",
    label: "All Collectibles and Secrets Guide",
  },
  {
    href: "/scale-the-depths/achievement-guide",
    label: "Scale the Depths Achievement Guide",
  },
  {
    href: "/scale-the-depths/loch-ness-100-percent-guide",
    label: "Loch Ness 100% Guide",
  },
  {
    href: "/scale-the-depths/huatulco-100-percent-guide",
    label: "Huatulco 100% Guide",
  },
  {
    href: "/scale-the-depths/outer-banks-100-percent-guide",
    label: "Outer Banks 100% Guide",
  },
  {
    href: "/scale-the-depths/point-nemo-100-percent-guide",
    label: "Point Nemo 100% Guide",
  },
];

export const metadata: Metadata = {
  title: "Scale the Depths Artifacts Guide | All Locations",
  description:
    "Find every artifact in Scale the Depths, including Loch Ness, Huatulco, Outer Banks and Point Nemo names, slots, routes and missing fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Scale the Depths Artifacts Guide: All Locations and Missing Fixes",
    description:
      "Find every artifact in Scale the Depths with artifact names, region slot counts, almanac checks, hidden routes, pressure plates, red levers, boss-route cleanup, and missing artifact fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1286,
        height: 870,
        alt: "Scale the Depths artifact tab showing missing artifact slots in the almanac.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale the Depths Artifacts Guide",
    description:
      "Find every artifact by region, including Loch Ness, Huatulco, Outer Banks, Point Nemo, hidden routes, and missing-slot fixes.",
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
          name: "Scale the Depths Guide",
          item: `${siteUrl}/scale-the-depths`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Scale the Depths Artifacts Guide",
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
        "Scale the Depths Artifacts Guide: All Artifact Locations, Names, Slots, and Missing Fixes",
      description:
        "A player-focused Scale the Depths artifacts guide covering artifact names, artifact counts, almanac slot checks, and missing artifact fixes for Loch Ness, Huatulco, Outer Banks, and Point Nemo. Includes Nessie Plush, Sputnik 1, English Shield, Quetzalcoatl Statue, Rubber Ball, Aztec Sun Stone, Coffee Cup, Rat King Plush, Bio-Specimen Containment Unit, Sonar Receiver, Jar of Dirt, Canned Bread, Spanish Doubloon, Asteroid Fragment, Loaded Support Sphere, Sextant, Toy Submarine, red lever secrets, pressure plate routes, lower-route artifacts, and boss-route cleanup.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-15",
      dateModified: "2026-06-15",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Scale the Depths" },
        { "@type": "Thing", name: "Scale the Depths artifacts" },
        { "@type": "Thing", name: "Scale the Depths artifact locations" },
        { "@type": "Thing", name: "Scale the Depths all artifacts" },
        { "@type": "Thing", name: "Scale the Depths missing artifact" },
        { "@type": "Thing", name: "Scale the Depths almanac" },
        { "@type": "Thing", name: "Loch Ness artifacts" },
        { "@type": "Thing", name: "Nessie Plush" },
        { "@type": "Thing", name: "Sputnik 1" },
        { "@type": "Thing", name: "English Shield" },
        { "@type": "Thing", name: "Huatulco artifacts" },
        { "@type": "Thing", name: "Quetzalcoatl Statue" },
        { "@type": "Thing", name: "Rubber Ball" },
        { "@type": "Thing", name: "Aztec Sun Stone" },
        { "@type": "Thing", name: "Coffee Cup" },
        { "@type": "Thing", name: "Outer Banks artifacts" },
        { "@type": "Thing", name: "Rat King Plush" },
        { "@type": "Thing", name: "Bio-Specimen Containment Unit" },
        { "@type": "Thing", name: "Sonar Receiver" },
        { "@type": "Thing", name: "Jar of Dirt" },
        { "@type": "Thing", name: "Canned Bread" },
        { "@type": "Thing", name: "Spanish Doubloon" },
        { "@type": "Thing", name: "Point Nemo artifacts" },
        { "@type": "Thing", name: "Asteroid Fragment" },
        { "@type": "Thing", name: "Loaded Support Sphere" },
        { "@type": "Thing", name: "Sextant" },
        { "@type": "Thing", name: "Toy Submarine" },
        { "@type": "Thing", name: "Point Nemo red lever" },
        { "@type": "Thing", name: "boss route artifact" },
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
          name: "How many artifacts are in Scale the Depths?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Track artifacts by region in the almanac. This guide covers 3 Loch Ness slots, 4 Huatulco artifacts, 7 Outer Banks slots, and 5 Point Nemo slots.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between artifacts and treasures in Scale the Depths?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Artifacts fill the Artifacts tab and can trigger an Artifact Discovered popup. Treasures, messages, bait, cosmetics, chests, boats, decals, and knives can count elsewhere, so always check the exact almanac tab.",
          },
        },
        {
          "@type": "Question",
          name: "How many artifacts are in Loch Ness?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Loch Ness has 3 artifacts: Nessie Plush, Sputnik 1, and English Shield. Confirm all three before leaving the region.",
          },
        },
        {
          "@type": "Question",
          name: "How many artifacts are in Huatulco?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Huatulco has 4 named artifacts to track: Quetzalcoatl Statue, Rubber Ball, Aztec Sun Stone, and Coffee Cup.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Huatulco Aztec Sun Stone artifact?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Aztec Sun Stone is behind the Huatulco pressure-plate and box route. Push the box onto the plate, wait for the door to open, then enter the opened room before retracting.",
          },
        },
        {
          "@type": "Question",
          name: "How many artifacts are in Outer Banks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Outer Banks has 7 artifact slots. Start with Rat King Plush, Bio-Specimen Containment Unit, Sonar Receiver, Jar of Dirt, Canned Bread, Spanish Doubloon, then check the boss-route artifact slot.",
          },
        },
        {
          "@type": "Question",
          name: "Is Soda Can an Outer Banks artifact?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not use Soda Can as the artifact name unless your own Artifacts tab shows that exact name. If you only saw an Artifact Discovered popup on the lower route, treat it as a lower-route artifact and confirm the actual item name in the almanac.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common Outer Banks artifact miss?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sonar Receiver is one of the easiest misses because it sits in a hidden bush pocket. If your Outer Banks artifact count is short, clear the full bush pocket instead of only passing through it.",
          },
        },
        {
          "@type": "Question",
          name: "How many artifacts are in Point Nemo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Point Nemo has 5 artifact slots: Asteroid Fragment, Loaded Support Sphere, Sextant, Toy Submarine, and a final boss-route artifact.",
          },
        },
        {
          "@type": "Question",
          name: "Why am I missing one Point Nemo artifact?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably missed the red lever secret, Toy Submarine route, or the final boss-route Artifact Discovered popup. Point Nemo mixes artifacts with messages, baits, switches, and legendary fish cleanup, so check the artifact tab directly.",
          },
        },
        {
          "@type": "Question",
          name: "Is Toy Submarine the final Point Nemo artifact?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Toy Submarine is one of the key Point Nemo artifacts and a common miss, but your almanac may still show another artifact slot afterward. Confirm the final boss-route popup before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "Can I return later for missed artifacts?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. You can return later, but finishing artifact slots before moving on is cleaner because it is easy to forget whether the missing route was a lever, pressure plate, switch, hidden wall, or boss-route cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Do artifacts count toward 100% completion?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Region completion depends on more than fish. You also need customers, messages, artifacts, knives, and other collectibles depending on the area.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use this page or the All Collectibles guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use this page when the missing item is specifically in the Artifacts tab. Use the All Collectibles and Secrets Guide when you are missing messages, bait, cosmetics, switches, boats, decals, or a mixed completion count.",
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
          title="Scale the Depths Artifacts Guide"
          description="Find every artifact by region, confirm almanac slots, fix missing items, and track Loch Ness, Huatulco, Outer Banks, and Point Nemo routes."
          gameTitle="Scale the Depths"
          gameHref="/scale-the-depths"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ArtifactsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

