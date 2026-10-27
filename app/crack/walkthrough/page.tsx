
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CrackWalkthroughContent from "@/data/crack/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crack`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "CRACK Walkthrough: All Work Orders & Final Specimen";

const metadataDescription =
  "Complete every CRACK Work Order, unlock equipment catalogs, scan deposits, build scaffolding, break Containment Plating, and release the specimen.";

const articleDescription =
  "Complete CRACK's Work Orders from the first 30 Shell Chunks through the final specimen release. Unlock the Resource Depot, Vehicle Bay, catalogs, Deposit Scanner, Workbot Storage, and Scaffolding. Find Blight, Tissue, crystals, Artery Sacks, Calcite, and Bone; finish Eggsteroids and equipment assignments; then reach and break the Containment Plating.";

const imageUrls = [
  `${siteUrl}/images/crack/crack-shell-peeling.webp`,
  `${siteUrl}/images/crack/crack-scaffolding-construction-rules.webp`,
  `${siteUrl}/images/crack/crack-containment-plating-breach.webp`,
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
      "Follow every CRACK Work Order, unlock the next equipment tier, find required materials, and reach the specimen inside the egg.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "CRACK outer egg shell with cracked sections ready to peel using a Chisel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "From 30 Shell Chunks to Containment Plating: complete the Work Orders and reach the specimen in CRACK.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "first-crack",
    label: "First Crack & Resource Depot",
  },
  {
    id: "membrane",
    label: "Membrane & Vehicle Bay",
  },
  {
    id: "blight",
    label: "Blight Work Order",
  },
  {
    id: "golf-cart",
    label: "Golf Cart Tier 2",
  },
  {
    id: "deposit-scanner",
    label: "Deposit Scanner & Nodules",
  },
  {
    id: "eggsteroids",
    label: "Eggsteroids: 3,500 Points",
  },
  {
    id: "tissue",
    label: "Tissue & Workbot Storage",
  },
  {
    id: "scaffolding",
    label: "Build 10m Scaffolding",
  },
  {
    id: "scanner-upgrade",
    label: "Scanner Upgrade & Crystal",
  },
  {
    id: "artery-sack",
    label: "Burst an Artery Sack",
  },
  {
    id: "deep-excavation",
    label: "Calcite, Bone & Deep Layers",
  },
  {
    id: "containment-plating",
    label: "Break Containment Plating",
  },
  {
    id: "specimen",
    label: "Release the Specimen",
  },
];

const relatedLinks = [
  {
    href: "/crack",
    label: "CRACK Beginner Guide: Upgrades, Agitation & Shifts",
  },
  {
    href: "/crack/workbots",
    label: "CRACK Workbots: Collectors, Drones & Chalazite",
  },
  {
    href: "/crack/endings",
    label: "CRACK Endings: How to Get Both Endings",
  },
  {
    href: "/crack/achievements",
    label: "CRACK: All 40 Achievements & 100% Checklist",
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
          name: "CRACK",
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
        "CRACK Walkthrough: All Work Orders and How to Finish the Game",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-27",
      dateModified: "2026-10-27",
      about: [
        {
          "@type": "VideoGame",
          name: "CRACK",
        },
        {
          "@type": "Thing",
          name: "Work Orders and equipment catalogs",
        },
        {
          "@type": "Thing",
          name: "Shell, Membrane, Tissue, and deep egg excavation",
        },
        {
          "@type": "Thing",
          name: "Resource Depot and material deposits",
        },
        {
          "@type": "Thing",
          name: "Deposit Scanner and crystal locations",
        },
        {
          "@type": "Thing",
          name: "Scaffolding construction",
        },
        {
          "@type": "Thing",
          name: "Artery Sack and Containment Plating",
        },
        {
          "@type": "Thing",
          name: "Specimen release",
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
          title="CRACK Walkthrough: All Work Orders and How to Finish the Game"
          description="Clear the required assignments in order, unlock each new equipment tier, and break through the final containment layers."
          gameTitle="CRACK"
          gameHref="/crack"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CrackWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
