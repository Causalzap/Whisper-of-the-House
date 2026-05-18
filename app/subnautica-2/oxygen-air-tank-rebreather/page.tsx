import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import OxygenAirTankRebreatherContent from "@/data/subnautica-2/oxygen-air-tank-rebreather.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/oxygen-air-tank-rebreather`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-high-capacity-air-tank-databox.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-high-capacity-air-tank-southwest-wreck.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-rebreather-sse-scrap-box.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-rebreather-hidden-room-southwest.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-rebreather-repair-door-window.webp`,
];

const toc = [
  { id: "oxygen-numbers", label: "Oxygen numbers" },
  { id: "oxygen-upgrade-order", label: "Upgrade order" },
  { id: "what-each-upgrade-does", label: "Upgrade roles" },
  { id: "high-capacity-air-tank", label: "High Capacity Tank" },
  { id: "high-capacity-crafting", label: "High Capacity recipe" },
  { id: "rebreather", label: "Rebreather" },
  { id: "rebreather-crafting", label: "Rebreather recipe" },
  { id: "portable-oxygen-generator", label: "Oxygen Generator" },
  { id: "oxygen-sources", label: "Natural oxygen" },
  { id: "when-to-use-rebreather", label: "Dive setups" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "route-order", label: "Route order" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  {
    href: "/subnautica-2/welcome-center-habitat-builder",
    label: "Welcome Center & Habitat Builder",
  },
  {
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
  {
    href: "/subnautica-2/sonic-resonator-guide",
    label: "Sonic Resonator Guide",
  },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Oxygen Guide: Air Tanks & Rebreather",
  description:
    "Upgrade oxygen in Subnautica 2 with the Standard Air Tank, High Capacity Air Tank, Rebreather, Air Bladder, Portable Oxygen Generator, and safe deep-dive routes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Oxygen Guide: Air Tanks & Rebreather",
    description:
      "A player-first oxygen progression guide covering tank oxygen numbers, High Capacity Air Tank data card routes, Rebreather fragments, depth penalties, and safer deep dives.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 High Capacity Air Tank data card unlock inside a colony ruin.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Oxygen Guide: Air Tanks & Rebreather",
    description:
      "Learn the best oxygen upgrade order, where to get the High Capacity Air Tank and Rebreather, and how to survive deeper Subnautica 2 routes.",
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
          name: "Oxygen, Air Tanks, and Rebreather",
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
        "Subnautica 2 Oxygen Guide: Air Tank Upgrades, High Capacity Tank, Rebreather, and Deep-Dive Routes",
      description:
        "A Subnautica 2 Early Access oxygen progression guide explaining the oxygen numbers that matter, when to craft the Standard Air Tank, how to find and craft the High Capacity Air Tank, where to scan the Rebreather, why depth penalties make deep dives dangerous, how the Portable Oxygen Generator fits into longer routes, and which oxygen setup to use for shallow caves, long wrecks, and deep exploration.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-18",
      dateModified: "2026-05-18",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "Oxygen" },
        { "@type": "Thing", name: "Air Tank" },
        { "@type": "Thing", name: "High Capacity Air Tank" },
        { "@type": "Thing", name: "Rebreather" },
        { "@type": "Thing", name: "Air Bladder" },
        { "@type": "Thing", name: "Portable Oxygen Generator" },
        { "@type": "Thing", name: "Plasteel Ingot" },
        { "@type": "Thing", name: "Lithium" },
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
          name: "What is the best first oxygen upgrade in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Standard Air Tank is the best first permanent oxygen upgrade because it raises your oxygen from the starting 45 range to the 75 range. Carry an Air Bladder as emergency support while you gather the Silver and Rubber needed for the tank.",
          },
        },
        {
          "@type": "Question",
          name: "How much oxygen do the tanks give in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The starting oxygen pool is 45 oxygen. The Standard Air Tank raises it to 75 oxygen, and the High Capacity Air Tank raises it to 120 oxygen.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the High Capacity Air Tank blueprint in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A close early route is the southwest or south-southwest colony-ruin data card route, roughly 250 to 290 meters from the Lifepod and around 90 meters deep. Some players may also find a later Research Center or Alien Ruins data card source, so treat that as an alternate if you are already following the later story route.",
          },
        },
        {
          "@type": "Question",
          name: "What do I need for Plasteel Ingot in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plasteel Ingot is made from 2 Titanium and 1 Lithium through the Processor. You need it to craft the High Capacity Air Tank after unlocking the data card and already having a Standard Air Tank.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Rebreather increase oxygen capacity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Rebreather does not add more oxygen to your tank. It prevents oxygen from draining faster at deep depth, making your existing tank last normally below 100 meters.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I get the Rebreather first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cleanest first Rebreather route is south or southeast of the Lifepod, roughly 320 to 330 meters out. Head between south and southeast, pass the rock columns, and check the ground-level scrap box for a fragment.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need multiple Rebreather fragments in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the current Early Access build, scanning one Rebreather fragment unlocks the recipe. Other Rebreather fragments are backup locations rather than required scans.",
          },
        },
        {
          "@type": "Question",
          name: "Should I get the High Capacity Air Tank or Rebreather first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get the High Capacity Air Tank first if your problem is total dive time in wrecks or colony ruins. Get the Rebreather first if your problem is deep-water oxygen drain below 100 meters. Most players should craft Standard Air Tank, then High Capacity Air Tank, then Rebreather.",
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
          title="Subnautica 2 Oxygen Guide: Air Tanks, Rebreather, and Safer Deep Dives"
          description="A practical oxygen progression route for Standard Air Tank, High Capacity Air Tank, Rebreather, Air Bladder, Portable Oxygen Generator, and natural oxygen resets."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OxygenAirTankRebreatherContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
