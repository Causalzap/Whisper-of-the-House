import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FirstBaseSetupContent from "@/data/subnautica-2/first-base-setup.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/first-base-setup`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-welcome-center-exterior.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-first-base-room-layout.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-base-power-hydroelectric-transmitter.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-tadpole-deck-depth-check.webp`,
];

const toc = [
  { id: "when-to-build-first-base", label: "When to build" },
  { id: "best-first-base-location", label: "Best location" },
  { id: "where-not-to-build", label: "Where not to build" },
  { id: "first-build-order", label: "Build order" },
  { id: "starter-layout", label: "Starter layout" },
  { id: "storage-setup", label: "Storage setup" },
  { id: "fabricator-layout", label: "Crafting layout" },
  { id: "power-setup", label: "Power setup" },
  { id: "habitat-beacon", label: "Habitat Beacon" },
  { id: "dismantle-move-base", label: "Move your base" },
  { id: "moonpool-planning", label: "Moonpool planning" },
  { id: "co-op-base", label: "Co-op base" },
  { id: "forward-outpost-guide", label: "Forward outposts" },
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
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 First Base Setup: Best Location, Build Order & Power",
  description:
    "Build your first Subnautica 2 base with the right location, Sparse Plains option, storage plan, Habitat Beacon, power setup, Moonpool space and forward outpost logic.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 First Base Setup: Best Location, Build Order & Power",
    description:
      "A player-first Subnautica 2 base guide covering when to leave the Lifepod, where to build, why Sparse Plains is a strong starter biome, and what to build first.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 Welcome Center exterior near the early Lifepod route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 First Base Setup Guide",
    description:
      "Where to build your first Subnautica 2 base, when to leave the Lifepod, and how to set up storage, power, Habitat Beacon and Moonpool space.",
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
          name: "First Base Setup",
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
        "Subnautica 2 First Base Setup Guide: Best Starter Locations, Sparse Plains, Storage, Power and Moonpool Planning",
      description:
        "A practical Subnautica 2 Early Access first base guide that explains when to leave the Lifepod, where to build your first base, why Sparse Plains is a strong low-threat starter biome, how to avoid Leviathan patrol routes, what to build first, how to set up Wall Lockers and Floor Lockers, when Solar power stops being enough, why Habitat Beacon matters, how to move a misplaced base, and when to build forward oxygen outposts.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-15",
      dateModified: "2026-05-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Subnautica 2",
        },
        { "@type": "Thing", name: "First Base" },
        { "@type": "Thing", name: "Base Building" },
        { "@type": "Thing", name: "Sparse Plains" },
        { "@type": "Thing", name: "Habitat Beacon" },
        { "@type": "Thing", name: "Hydroelectric Power" },
        { "@type": "Thing", name: "Moonpool" },
        { "@type": "Thing", name: "Tadpole Deck" },
        { "@type": "Thing", name: "Forward Outpost" },
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
          name: "When should I build my first base in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build your first base once the Lifepod starts feeling like a bottleneck: your inventory is constantly full, you are making repeated crafting trips, you need safer oxygen recovery, or you are preparing for Moonpool and Tadpole progression.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I build my first base in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Good first base choices include a safe spot near the Lifepod and Welcome Center route, an area around 60m east of the Lifepod near a strong current for future Hydroelectric power, or the Sparse Plains biome if you want open building space and lower threat density.",
          },
        },
        {
          "@type": "Question",
          name: "Is Sparse Plains a good first base biome in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Sparse Plains is one of the safest biome-style first base options because it has lower threat density and enough open space for rooms, storage, power links and later Moonpool planning. Players should still scout the edge and avoid Collector or Wakemaker Leviathan patrol activity.",
          },
        },
        {
          "@type": "Question",
          name: "What should I build first in my Subnautica 2 base?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with a basic room and hatch, then add power, a Fabricator or crafting area, storage containers, a Habitat Beacon, and an expansion side with enough depth for future Moonpool or Tadpole Deck placement.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a Habitat Beacon for my first base?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. A Habitat Beacon makes your first base much easier to find again, especially at night, during poor visibility, or after long resource runs away from the Lifepod.",
          },
        },
        {
          "@type": "Question",
          name: "What if I build my Subnautica 2 base in the wrong place?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can dismantle base pieces and recover the materials. Move important resources into temporary storage first, deconstruct the old base, then rebuild the same starter layout somewhere safer, deeper or closer to better power.",
          },
        },
        {
          "@type": "Question",
          name: "When should I build a forward outpost in Subnautica 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build a forward outpost when a resource route is far enough that you keep running out of oxygen, returning with full inventory, or risking death on the way home. A minimal outpost can be as simple as one room, a hatch, power and a beacon.",
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
          title="Subnautica 2 First Base Setup Guide: Where to Build, What to Build First, and How to Avoid Regret"
          description="Leave the Lifepod at the right time, pick a safe first base spot, use Sparse Plains correctly, avoid Leviathan patrol routes, set up storage and power, mark your base, and plan room for the Moonpool."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FirstBaseSetupContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}