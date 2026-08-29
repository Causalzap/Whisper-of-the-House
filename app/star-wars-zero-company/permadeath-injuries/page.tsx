import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermadeathInjuriesContent from "@/data/star-wars-zero-company/permadeath-injuries.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/permadeath-injuries`;

const metadataTitle =
  "STAR WARS Zero Company Injuries, Permadeath & Aurelio";

const metadataDescription =
  "Learn how Zero Company injuries and Permadeath work, when to use the MedBay, what happens at 3 injuries, and whether Aurelio can be saved.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-permadeath-third-injury-kia.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-downed-operator-rally.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-medbay-standard-bed-800-credits.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-trick-first-down-no-injury.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-memorial-dead-operator.webp`,
];

const toc = [
  {
    id: "can-operators-die",
    label: "Can Operators die?",
  },
  {
    id: "can-you-save-aurelio",
    label: "Can you save Aurelio?",
  },
  {
    id: "when-to-heal-injuries",
    label: "When to heal injuries",
  },
  {
    id: "heal-injuries-medbay",
    label: "Using the MedBay",
  },
  {
    id: "bacta-tank",
    label: "When to use Bacta",
  },
  {
    id: "trick-first-down",
    label: "Trick's first Down",
  },
  {
    id: "permadeath-vs-beskar",
    label: "Permadeath vs Beskar",
  },
  {
    id: "permanent-operator-loss",
    label: "Permanent Operator loss",
  },
];

const relatedLinks = [
  {
    href: "/star-wars-zero-company",
    label: "STAR WARS Zero Company Guide Hub",
  },
  {
    href: "/star-wars-zero-company/difficulty-settings",
    label: "Best Difficulty & Beskar Mode",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Best Classes & Specializations",
  },
  {
    href: "/star-wars-zero-company/achievements-trophies",
    label: "Achievements & Trophies Guide",
  },
  {
    href: "/star-wars-zero-company/walkthrough",
    label: "Complete Walkthrough & Mission Order",
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
    title: metadataTitle,
    description:
      "See how Downed Operators become injured, when two injuries should send someone to the MedBay, why the third can kill them, and why Aurelio cannot be saved.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "STAR WARS Zero Company warning that a third injury kills an Operator when Permadeath is enabled",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "How injuries, Rally, MedBay treatment, Permadeath, Trick's first Down and Aurelio's tutorial death work in STAR WARS Zero Company.",
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
          name: "Injuries & Permadeath",
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
        "STAR WARS Zero Company Injuries, Permadeath and Aurelio Guide",
      description:
        "A player-focused STAR WARS Zero Company guide to Downed Operators, Rally, injuries, the three-injury permanent-death rule, Aurelio's unavoidable tutorial death, MedBay treatment, one-Cycle recovery, Bacta Tank use, Dangerous Operation injury risk, Trick's first-down protection, Permadeath, Beskar Mode, and permanent Operator loss.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
      dateModified: "2026-08-29",
      articleSection: "STAR WARS Zero Company Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "STAR WARS Zero Company",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company injuries",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Permadeath",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Operator death",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Aurelio",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company save Aurelio",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company tutorial death",
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
          name: "STAR WARS Zero Company Bacta Tank",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Trick",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company For My Brothers",
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
          title="How Injuries, Permadeath and Aurelio's Death Work"
          description="I treat one Injury as a scheduling problem, two as a reason to pull an Operator from danger, and the third as a permanent-loss risk. Aurelio is different: his tutorial death cannot be prevented."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 29, 2026"
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