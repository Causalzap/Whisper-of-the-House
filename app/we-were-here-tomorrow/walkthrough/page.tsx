
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WeWereHereTomorrowWalkthroughContent from "@/data/we-were-here-tomorrow/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/we-were-here-tomorrow`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "We Were Here Tomorrow Walkthrough: Puzzles to Gravity";

const metadataDescription =
  "Follow We Were Here Tomorrow from the opening consoles through resin, circuit, floppy disk, Cargo Elevator, laser crystals, six rings, and gravity rooms.";

const articleDescription =
  "Follow the co-op puzzle route from the Norček Industries opening and Wellness Check through canister transfer, shrinking and circuit matching, five-nozzle resin mixing, floppy disk direction puzzles, the 3D printer grid and Green Key Card, Hook Gun and Goop Gun interactions, Cargo Elevator Fuse and access cards, Particle Accelerator controls, Magnetic Stabilizer pressure plates, laser crystal calibration, Six Rings, and the connected gravity rooms.";

const imageUrls = [
  `${siteUrl}/images/we-were-here-tomorrow/circuit-component-matching.webp`,
  `${siteUrl}/images/we-were-here-tomorrow/resin-mixing-controls.webp`,
  `${siteUrl}/images/we-were-here-tomorrow/floppy-direction-dials.webp`,
  `${siteUrl}/images/we-were-here-tomorrow/cargo-elevator-hanging-fuse.webp`,
  `${siteUrl}/images/we-were-here-tomorrow/magnetic-stabilizer-pressure-plate.webp`,
  `${siteUrl}/images/we-were-here-tomorrow/laser-crystal-selection.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description:
      "Solve the Norček laboratory's two-player puzzles, including circuit matching, resin nozzles, the Cargo Elevator Fuse, laser crystal order, Six Rings, and gravity rooms.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[5],
        alt: "We Were Here Tomorrow crystal reference showing six specimens used in the laser calibration puzzle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Solve the co-op laboratory puzzles, find the Fuse and key cards, calibrate the crystal laser, and navigate the gravity rooms.",
    images: [imageUrls[5]],
  },
};

const toc = [
  {
    id: "wellness-check",
    label: "Opening & Wellness Check",
  },
  {
    id: "canister-transfer",
    label: "Canister Transfer",
  },
  {
    id: "shrinking-laboratory",
    label: "Shrinking Laboratory",
  },
  {
    id: "circuit-matching",
    label: "Circuit Matching",
  },
  {
    id: "resin-mixing",
    label: "3D Resin Mixing",
  },
  {
    id: "floppy-disk",
    label: "Floppy Disk Doors",
  },
  {
    id: "machine-calibration",
    label: "3D Printer Grid & Key Card",
  },
  {
    id: "prototype-guns",
    label: "Hook Gun & Goop Gun",
  },
  {
    id: "cargo-elevator",
    label: "Cargo Elevator: Fuse & Cards",
  },
  {
    id: "particle-accelerator",
    label: "Particle Accelerator",
  },
  {
    id: "magnetic-stabilizer",
    label: "Magnetic Stabilizer",
  },
  {
    id: "laser-calibration",
    label: "Laser Crystal Calibration",
  },
  {
    id: "six-rings",
    label: "Six Rings Puzzle",
  },
  {
    id: "gravity-rooms",
    label: "Gravity & Upside-down Rooms",
  },
];

const relatedLinks = [
  {
    href: "/we-were-here-tomorrow",
    label: "We Were Here Tomorrow Guide & Progression",
  },
];

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
          name: "We Were Here Tomorrow",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
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
        "We Were Here Tomorrow Walkthrough: Norček Laboratory, Co-op Puzzle Solutions, Laser Calibration, and Gravity Rooms",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-21",
      dateModified: "2026-10-21",
      about: [
        {
          "@type": "VideoGame",
          name: "We Were Here Tomorrow",
        },
        {
          "@type": "Thing",
          name: "Cooperative puzzle walkthrough",
        },
        {
          "@type": "Thing",
          name: "Norček Industries",
        },
        {
          "@type": "Thing",
          name: "3D resin mixing and circuit puzzles",
        },
        {
          "@type": "Thing",
          name: "Cargo Elevator Fuse and key cards",
        },
        {
          "@type": "Thing",
          name: "Laser crystal calibration",
        },
        {
          "@type": "Thing",
          name: "Six Rings puzzle",
        },
        {
          "@type": "Thing",
          name: "Gravity room puzzles",
        },
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
  ],
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="We Were Here Tomorrow Walkthrough: Co-op Puzzle Solutions"
          description="Solve the opening Norček puzzles, complete the shrinking laboratory and Cargo Elevator, calibrate the crystal laser, and navigate the gravity rooms."
          gameTitle="We Were Here Tomorrow"
          gameHref="/we-were-here-tomorrow"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WeWereHereTomorrowWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
