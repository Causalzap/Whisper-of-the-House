
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CrackGuideContent from "@/data/crack/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/crack`;

const metadataTitle =
  "CRACK Beginner Guide: Best Upgrades, Agitation & Shifts";

const metadataDescription =
  "Choose essential CRACK upgrades, manage egg agitation and sedation, make smarter Work Order purchases, and use shifts and Dream Bonus effectively.";

const articleDescription =
  "Start CRACK by following Hatch Corp's Work Orders, choosing excavation tools before optional purchases, and improving transport when long trips become the bottleneck. Manage the specimen's Agitation with limited Sedation doses, respond to laboratory reactions, understand end-of-shift earnings and Dream Bonus, and decide when vehicles, Workbots, pills, and arcade spending are worth the cost.";

const imageUrls = [
  `${siteUrl}/images/crack/crack-agitation-sedation.webp`,
  `${siteUrl}/images/crack/crack-dream-bonus.webp`,
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
      "Choose what to buy first in CRACK, control egg Agitation, manage Sedation, and earn more from each work cycle.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "CRACK labCONTAINMENT signal-matching puzzle for reducing egg Agitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Make better equipment purchases, manage specimen reactions, and understand shifts and Dream Bonus in CRACK.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "getting-started",
    label: "What to Do First",
  },
  {
    id: "money-and-upgrades",
    label: "Best Upgrades & Purchases",
  },
  {
    id: "agitation",
    label: "Agitation & Sedation",
  },
  {
    id: "work-cycle",
    label: "Shifts, Sleep & Dream Bonus",
  },
  {
    id: "optional-spending",
    label: "Pills, Gambling & Equipment",
  },
  {
    id: "finishing",
    label: "The Specimen & Final Choices",
  },
];

const relatedLinks = [
  {
    href: "/crack/walkthrough",
    label: "CRACK Walkthrough: All Work Orders & Final Specimen",
  },
  {
    href: "/crack/workbots",
    label: "CRACK Workbots: Collectors, Drones, Repairs & Upgrades",
  },
  {
    href: "/crack/redacted-door-code",
    label: "CRACK Redacted Door Code: UV Flashlight & All 3 Clues",
  },
  {
    href: "/crack/endings",
    label: "CRACK Endings: Both Endings & Secret Exit",
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
        "CRACK Beginner Guide: What to Buy First and How to Progress",
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
          name: "Hatch Corp Work Orders and progression",
        },
        {
          "@type": "Thing",
          name: "Excavation equipment and purchasing decisions",
        },
        {
          "@type": "Thing",
          name: "Specimen Agitation and Sedation",
        },
        {
          "@type": "Thing",
          name: "Laboratory reactions and containment",
        },
        {
          "@type": "Thing",
          name: "Work shifts, sleep, and Dream Bonus",
        },
        {
          "@type": "Thing",
          name: "Vehicles, Workbots, and optional equipment",
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
          title="CRACK Beginner Guide: What to Buy First and How to Progress"
          description="Prioritize the right tools, control egg Agitation, and make each work cycle pay off before digging deeper."
          gameTitle="CRACK"
          gameHref="/crack"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CrackGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
