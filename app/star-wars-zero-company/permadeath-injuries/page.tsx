import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermadeathInjuriesContent from "@/data/star-wars-zero-company/permadeath-injuries.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/permadeath-injuries`;

const metadataTitle =
  "STAR WARS Zero Company Permadeath & Injuries Guide";

const metadataDescription =
  "Learn how Downed Operators, Rally, injuries, MedBay treatment, the third-injury death rule, Bacta recovery, Trick, and Permadeath work.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-permadeath-third-injury-kia.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-downed-operator-rally.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-medbay-standard-bed-800-credits.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-trick-first-down-no-injury.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-memorial-dead-operator.webp`,
];

const toc = [
  {
    id: "how-injuries-work",
    label: "How injuries work",
  },
  {
    id: "rally-vs-healing",
    label: "Rally vs healing",
  },
  {
    id: "operation-injuries",
    label: "Operation injury risk",
  },
  {
    id: "heal-injuries-medbay",
    label: "Heal injuries at the MedBay",
  },
  {
    id: "medbay-one-cycle",
    label: "Why treatment takes a Cycle",
  },
  {
    id: "bacta-tank",
    label: "When to use the Bacta Tank",
  },
  {
    id: "trick-injury-exception",
    label: "Trick's injury exception",
  },
  {
    id: "permadeath",
    label: "Permanent death",
  },
  {
    id: "a-natural-part-of-life",
    label: "A Natural Part of Life",
  },
];

const relatedLinks = [
  {
    href: "/star-wars-zero-company",
    label: "STAR WARS Zero Company Guide Hub",
  },
  {
    href: "/star-wars-zero-company/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/star-wars-zero-company/difficulty-settings",
    label: "Difficulty Settings, Expert & Beskar",
  },
  {
    href: "/star-wars-zero-company/achievements-trophies",
    label: "Achievements & Trophies Guide",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Classes & Specializations Guide",
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
    title: "STAR WARS Zero Company Permadeath & Injuries Guide",
    description:
      "Manage Downed Operators, Rally, MedBay treatment and permanent loss without letting stacked injuries destroy your roster.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "STAR WARS Zero Company showing that a third injury can kill an Operator with Permadeath enabled",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR WARS Zero Company Permadeath & Injuries Guide",
    description:
      "Learn when to Rally, when to use the MedBay, how the third injury becomes lethal, and when an Operator should stay out of the next Mission.",
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
          name: "STAR WARS Zero Company Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Permadeath & Injuries",
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
        "STAR WARS Zero Company Permadeath and Injuries Guide",
      description:
        "A player-focused guide to STAR WARS Zero Company's injury and permanent-death systems, including what happens when an Operator becomes Downed, how Rally works, how injuries stack, the third-injury death limit, Medical Bed treatment, one-Cycle recovery, Bacta Tank use, Trick's For My Brothers talent, the Memorial, and the A Natural Part of Life achievement.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
      dateModified: "2026-08-28",
      articleSection: "STAR WARS Zero Company Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "STAR WARS Zero Company",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Permadeath",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company injuries",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Downed Operator",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Rally",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company MedBay",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Medical Bed",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Bacta Tank",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Trick",
        },
        {
          "@type": "Thing",
          name: "A Natural Part of Life achievement",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Keep Injuries From Becoming Permanent Losses"
          description="I use Rally to finish the current fight, check injury count afterward, and send high-risk Operators to the MedBay before one more knockdown turns into a permanent roster loss."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PermadeathInjuriesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}