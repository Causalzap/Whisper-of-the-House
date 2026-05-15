import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TadpoleContent from "@/data/subnautica-2/tadpole-submarine.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/tadpole-submarine`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-tadpole-fragment-ruby-wreck.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-tadpole-fragment-cicada-outpost.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-tadpole-deck-blocked-depth.webp`,
];

const toc = [
  { id: "fragment-locations", label: "Fragments" },
  { id: "fragment-1-ruby", label: "Fragment #1" },
  { id: "fragment-2-cicada", label: "Fragment #2" },
  { id: "fragment-3-bunker", label: "Fragment #3" },
  { id: "materials", label: "Materials" },
  { id: "moonpool", label: "Moonpool" },
  { id: "portable-lockers", label: "Portable Lockers" },
  { id: "power-cell", label: "Power Cell" },
  { id: "repair-tool", label: "Repair Tool" },
  { id: "crush-depth", label: "Crush depth" },
  { id: "upgrades", label: "Upgrades" },
  { id: "how-to-use", label: "How to use it" },
  { id: "tadpole-pens", label: "After building" },
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
  { href: "/subnautica-2/co-op-guide", label: "Co-op Guide" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Tadpole Guide: Fragments, Materials & Upgrades",
  description:
    "Find Tadpole Fragments, craft the Tadpole, build through Moonpool, manage Power Cells, attach Portable Lockers and avoid crush depth.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Tadpole Guide: Fragments, Materials & Upgrades",
    description:
      "A practical Tadpole guide for Subnautica 2 covering fragment locations, materials, Moonpool setup, Portable Lockers, Power Cells, repairs and upgrades.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Tadpole Fragment near the Ruby black box route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Tadpole Guide: Fragments, Materials & Upgrades",
    description:
      "Unlock and use the Tadpole in Subnautica 2 with fragment routes, materials, Moonpool setup, storage tricks and depth safety.",
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
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Subnautica 2 Guide",
          item: `${siteUrl}/subnautica-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tadpole Submarine",
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
        "Subnautica 2 Tadpole Guide: Fragment Locations, Materials, Moonpool Setup, Portable Lockers, Power Cells and Upgrades",
      description:
        "A Subnautica 2 Early Access Tadpole guide that explains how many fragments are needed, where to look for Tadpole Fragments, what materials are required, why the Moonpool and vehicle construction chain matter, how to avoid Tadpole Deck placement problems, how to attach Portable Lockers, manage Power Cells, repair damage, respect crush depth, choose upgrades, and use the Tadpole as an oxygen relay and co-op logistics vehicle.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-14",
      dateModified: "2026-05-15",
      about: [
        { "@type": "VideoGame", name: "Subnautica 2" },
        { "@type": "Thing", name: "Tadpole" },
        { "@type": "Thing", name: "Tadpole Fragments" },
        { "@type": "Thing", name: "Moonpool" },
        { "@type": "Thing", name: "Power Cell" },
        { "@type": "Thing", name: "Portable Locker" },
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
          name: "How many Tadpole Fragments do I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need 3 Tadpole Fragment scans to unlock the Tadpole blueprint.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build the Tadpole without a Moonpool?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The Tadpole belongs to the vehicle construction chain, so you need the Moonpool or vehicle setup rather than only the Lifepod Fabricator.",
          },
        },
        {
          "@type": "Question",
          name: "What materials do I need for the Tadpole?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The current recipe is 2 Titanium Ingots, 1 Glass, 1 System Chip and 1 Power Cell.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attach storage to the Tadpole?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The Tadpole can support utility attachments such as Portable Lockers through rear attachment points when available.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if the Tadpole exceeds crush depth?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The vehicle can take pressure damage if it goes beyond its safe depth. Upgrade depth before treating the Tadpole as a deep-biome vehicle.",
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
          title="Subnautica 2 Tadpole Guide: Fragments, Materials, Moonpool and Upgrades"
          description="Find the fragments, craft the materials, avoid blocked placement, attach storage, manage power, and use the Tadpole as a real route tool."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TadpoleContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
