import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ClassesSpecializationsContent from "@/data/star-wars-zero-company/classes-specializations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/classes-specializations`;

const metadataTitle =
  "STAR WARS Zero Company Classes & Specializations Guide";

const metadataDescription =
  "Compare all 8 specializations, choose the best starting class for Hawks, pair weapons by range and AP, and build with talents and Cross Training.";

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
    label: "Best starting class",
  },
  {
    id: "specialization-not-permanent",
    label: "Changing specialization",
  },
  {
    id: "gunslinger",
    label: "Gunslinger",
  },
  {
    id: "assault",
    label: "Assault",
  },
  {
    id: "soldier",
    label: "Soldier",
  },
  {
    id: "scout",
    label: "Scout",
  },
  {
    id: "scoundrel",
    label: "Scoundrel",
  },
  {
    id: "heavy",
    label: "Heavy",
  },
  {
    id: "medic",
    label: "Medic",
  },
  {
    id: "sharpshooter",
    label: "Sharpshooter",
  },
  {
    id: "weapon-class",
    label: "Weapon classes",
  },
  {
    id: "locked-talents",
    label: "Locked talents",
  },
  {
    id: "cross-training",
    label: "Cross Training",
  },
  {
    id: "my-first-run-picks",
    label: "My first-run picks",
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
    href: "/star-wars-zero-company/walkthrough",
    label: "Complete Walkthrough & Mission Order",
  },
  {
    href: "/star-wars-zero-company/achievements-trophies",
    label: "Achievements & Trophies Guide",
  },
  {
    href: "/star-wars-zero-company/smugglers-den-walkthrough",
    label: "Smuggler's Den & Tel-Rea Guide",
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
    title: "STAR WARS Zero Company Classes & Specializations Guide",
    description:
      "Compare all eight specializations, choose a starting Hawks role, match weapons to range and Action Points, and shape builds with talents and Cross Training.",
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
    title: "STAR WARS Zero Company Classes & Specializations Guide",
    description:
      "Choose between Gunslinger, Assault, Medic, Heavy and the other specializations without getting trapped by your opening class choice.",
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
          name: "Classes & Specializations",
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
        "STAR WARS Zero Company Classes & Specializations Guide: Best Starting Class and Hawks Builds",
      description:
        "A player-focused STAR WARS Zero Company classes and specializations guide covering all eight starting roles for Hawks: Assault, Gunslinger, Heavy, Medic, Soldier, Sharpshooter, Scout, and Scoundrel. It explains why I prefer Gunslinger with a Blaster Rifle or Assault on a first campaign, when I change specialization, how weapon class and specialization are chosen separately, why pistol range and Action Point costs affect real combat performance, which roles I want elsewhere in the squad, how locked Operator talents shape long-term builds, and how I use permanent Cross Training bonuses to reinforce the job each Operator already performs.",
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
          name: "STAR WARS Zero Company classes",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company specializations",
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
          name: "STAR WARS Zero Company Gunslinger",
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
          name: "STAR WARS Zero Company Scout",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Scoundrel",
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
          name: "STAR WARS Zero Company Sharpshooter",
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
          title="Choose a Specialization Around How You Actually Fight"
          description="I start Hawks with Gunslinger and a Blaster Rifle for flexible ranged pressure, or Assault when I expect to keep moving, then change roles when the abilities stop matching the turns I actually take."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
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