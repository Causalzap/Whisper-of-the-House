import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HubertWatchtowerSmallTankContent from "@/data/scrap-mechanic/hubert-watchtower-small-tank.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/scrap-mechanic`;
const pageUrl = `${hubUrl}/hubert-watchtower-small-tank`;

const metadataTitle =
  "Scrap Mechanic Small Tank Location & Hubert Watchtower";

const metadataDescription =
  "Find the Scrap Mechanic Small Tank inside the Warehouse, finish Hubert's Watchtower material list, and unlock the Fire Extinguisher reward.";

const imageUrls = [
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-warehouse-small-tank-pickup.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-hubert-watchtower-material-list.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-warehouse-small-tank-locked.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-hubert-watchtower-small-tank-installed.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-hubert-watchtower-fire-extinguisher-reward.webp`,
];

const toc = [
    {
      id: "why-small-tank-blocks-watchtower",
      label: "Why the Small Tank blocks the quest",
    },
    {
      id: "where-to-find-small-tank",
      label: "Where to find the Small Tank",
    },
    {
      id: "why-small-tank-cannot-be-picked-up",
      label: "Why the Small Tank is locked",
    },
    {
      id: "when-to-return-for-small-tank",
      label: "When to return for the Small Tank",
    },
    {
      id: "watchtower-materials",
      label: "Watchtower materials",
    },
    {
      id: "rebuild-watchtower",
      label: "How to rebuild the Watchtower",
    },
    {
      id: "watchtower-not-completing",
      label: "Watchtower not completing",
    },
    {
      id: "fire-extinguisher-reward",
      label: "Fire Extinguisher reward",
    },
    {
      id: "faq",
      label: "FAQ",
    },
  ];

  const relatedLinks = [
    {
      href: "/scrap-mechanic",
      label: "Scrap Mechanic 1.0 Guide Hub",
    },
    {
      href: "/scrap-mechanic/first-grow-lab-walkthrough",
      label: "First Grow Lab Walkthrough",
    },
    
    {
      href: "/scrap-mechanic/mining-guide",
      label: "Plasma Drill & Mining Guide",
    },
    {
      href: "/scrap-mechanic/ore-processing-guide",
      label: "Ore Processing, Ingots & Vault",
    },
    {
      href: "/scrap-mechanic/warehouse-key",
      label: "Warehouse Key Guide",
    },
    {
      href: "/scrap-mechanic/warehouse-walkthrough",
      label: "Warehouse Walkthrough",
    },
    {
      href: "/scrap-mechanic/achievements",
      label: "All 34 Achievements Guide",
    },
  ];

const faqEntities = [
  {
    question: "Where do you find the Small Tank in Scrap Mechanic?",
    answer:
      "The Small Tank used for Hubert's Watchtower is found as a physical object inside the Warehouse. It can be seen before the Warehouse security is disabled, but it cannot be collected until the Warehouse route is completed and removable objects are unlocked.",
  },
  {
    question:
      "Why can I see the Small Tank but not pick it up in Scrap Mechanic?",
    answer:
      "The Warehouse anti-theft restriction is still active. Continue the Warehouse objective and disable its security before returning to collect the Small Tank during the exit sequence.",
  },
  {
    question: "Can the Craftbot make the Small Tank?",
    answer:
      "The Small Tank needed for this quest is not treated as a normal Craftbot recipe in this route. Collect the physical Small Tank from inside the Warehouse instead of scanning more Schematic Boxes.",
  },
  {
    question:
      "What materials are required for Hubert's Watchtower in Scrap Mechanic?",
    answer:
      "The Watchtower requires 800 Wood Block 2, 520 Concrete Block 1, 90 Punched Steel Blocks, 17 Pipe Long pieces, 4 Shack Lights, 4 Shack Awnings, 3 Pipe Corners, 1 Air Conditioner, and 1 Small Tank.",
  },
  {
    question:
      "Should I take the Small Tank before leaving the Warehouse?",
    answer:
      "Yes. Collect the Small Tank after the Warehouse security restriction is removed and before leaving the completed Warehouse route. Do not depend on returning after the final Warehouse event.",
  },
  {
    question:
      "Where does the Small Tank go on Hubert's Watchtower?",
    answer:
      "Bring the Small Tank back to Hubert's Watchtower construction site and place it in the highlighted blueprint position. The quest does not finish while the tank remains in your inventory or vehicle storage.",
  },
  {
    question:
      "What reward do you get for rebuilding Hubert's Watchtower?",
    answer:
      "After the final Watchtower parts are placed and the construction objective completes, Hubert gives the Fire Extinguisher reward.",
  },
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
    title:
      "Scrap Mechanic Small Tank Location and Hubert Watchtower Guide",
    description:
      "Follow my route from Hubert's full Watchtower material list to the locked Small Tank inside the Warehouse, its pickup after security is disabled, final installation, and Fire Extinguisher reward.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Scrap Mechanic Small Tank being picked up inside the Warehouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find the Small Tank in the Warehouse, complete Hubert's material list, install the final part, and claim the Fire Extinguisher.",
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
          name: "Scrap Mechanic Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hubert Watchtower and Small Tank",
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
        "Scrap Mechanic Small Tank Location and Hubert Watchtower Guide",
      description:
        "A practical Scrap Mechanic 1.0 guide to rebuilding Hubert's Watchtower and finding the Small Tank that blocks the final construction step. The route covers the complete Watchtower material list, bulk Wood Block 2 and Concrete Block 1 preparation, Shack Lights, Shack Awnings, Punched Steel Blocks, Pipe pieces, the Air Conditioner, why additional Schematic Boxes do not solve the Small Tank requirement, where the tank appears inside the Warehouse, why it cannot initially be removed, when Warehouse security unlocks it, how to carry it back to Hubert, where to install it in the Watchtower blueprint, the final quest-completion check, and the Fire Extinguisher reward.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-28",
      dateModified: "2026-07-28",
      about: [
        {
          "@type": "VideoGame",
          name: "Scrap Mechanic",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Small Tank",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Small Tank location",
        },
        {
          "@type": "Thing",
          name: "Hubert's Watchtower",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Watchtower material list",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Fire Extinguisher",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Helpful builder achievement",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Found the Small Tank and Rebuilt Hubert's Watchtower"
          description="I prepare the full material list first, clear the Warehouse security that locks the Small Tank in place, bring it back to Hubert, and install the final part for the Fire Extinguisher reward."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HubertWatchtowerSmallTankContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}