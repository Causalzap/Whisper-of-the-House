import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ClassesSpecializationsContent from "@/data/star-wars-zero-company/classes-specializations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/classes-specializations`;

const metadataTitle =
  "STAR WARS Zero Company Best Classes & Specializations";

const metadataDescription =
  "Best Zero Company classes and specializations for Hawks, Kabb, Trick and Jay, plus respecs, weapons, Scout, Medic, Heavy and Cross Training.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-eight-starting-specializations.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-change-specialization-free-respec.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-specialization-weapon-class-separate.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-medic-free-medpack-combat-stim.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-cross-training-kabb-hawks.webp`,
];

const toc = [
  {
    id: "best-starting-specialization",
    label: "Best class for Hawks",
  },
  {
    id: "can-you-change-specialization",
    label: "Changing specialization",
  },
  {
    id: "best-operator-specializations",
    label: "Best Operator roles",
  },
  {
    id: "gunslinger",
    label: "Gunslinger Hawks",
  },
  {
    id: "scoundrel",
    label: "Scoundrel",
  },
  {
    id: "assault-soldier-sharpshooter",
    label: "Assault, Soldier & Sharpshooter",
  },
  {
    id: "weapon-class",
    label: "Best weapon class",
  },
  {
    id: "locked-talents",
    label: "Unique talents",
  },
  {
    id: "cross-training",
    label: "Cross Training",
  },
  {
    id: "best-first-run-squad",
    label: "First-run squad roles",
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
    label: "Difficulty Settings & Beskar Mode",
  },
  {
    href: "/star-wars-zero-company/permadeath-injuries",
    label: "Permadeath & Injuries Guide",
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
      "Choose the best specialization for Hawks and build Kabb, Trick and Jay around their real combat roles, unique talents and Cross Training.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Eight starting specializations available for Hawks in STAR WARS Zero Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Best Hawks specialization, Operator class pairings, respecs, weapon choices and Cross Training in STAR WARS Zero Company.",
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
          name: "Best Classes & Specializations",
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
        "STAR WARS Zero Company Best Classes & Specializations Guide",
      description:
        "A player-focused STAR WARS Zero Company class and specialization guide covering all eight specializations, the best Hawks roles, when specialization changes are worth making, and practical Operator builds for Kabb, Trick and Jay. It explains why Scout is a strong long-term Hawks choice, when Gunslinger or Assault fits better, why Kabb works naturally as a Heavy, why Trick can make an unusually safe Medic, how Scoundrel and Sharpshooter fit Jay, how weapon range and Action Point costs affect builds, and how unique talents, Bonds and Cross Training shape long-term squad roles.",
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
          name: "STAR WARS Zero Company best classes",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company specializations",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company best specialization",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company best starting class",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Hawks build",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Scout",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Gunslinger",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Scoundrel",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Assault",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Soldier",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Sharpshooter",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Heavy",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Medic",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Kabb build",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Trick build",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Jay build",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company weapon classes",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Cross Training",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Focus Points",
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
          title="Best Classes and Specializations for Hawks and Your Squad"
          description="I use Scout when I want Hawks feeding Advantage and setting up the squad, then build Kabb, Trick and Jay around the jobs their unique talents already make them good at."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ClassesSpecializationsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}