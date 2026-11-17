
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowTheyBuiltThePyramidsShabtiContent from "@/data/how-they-built-the-pyramids/shabti.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-they-built-the-pyramids`;
const pageUrl = `${hubUrl}/shabti`;

const metadataTitle =
  "How They Built the Pyramids Shabti Guide: Jobs & Traits";

const metadataDescription =
  "Learn how to hire Shabti, assign Work Post jobs, compare traits and Gold Shabti, and fix idle workers in How They Built the Pyramids.";

const articleTitle =
  "How They Built the Pyramids Shabti Guide: How Do You Hire and Assign Workers?";

const articleDescription =
  "Hire workers from the Shabti Market, compare Strength, Speed, Stamina, Skill, and individual traits, then assign Shabti to Work Posts or machine Crew seats. Fix No Job Yet, incorrect mud deliveries, and idle workers, check Work Post feeding, and compare Gold Shabti prices and abilities.";

const imageUrls = [
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-shabti-market-clay-worker-traits.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-gold-shabti-remsen-profile.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-gold-shabti-hemiunu-market.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-shabti-work-post-mold-feeding.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-shabti-no-job-work-post.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-rocker-cradle-worker-post-feeding.webp`,
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
      "Hire Shabti, compare Gold Shabti and worker traits, assign Work Posts, and get idle workers back to their jobs.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        alt: "Gold Shabti Remsen profile showing attributes, recruitment price, and worker traits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Compare Shabti traits, assign workers to Work Posts and machines, and fix No Job Yet problems.",
    images: [imageUrls[1]],
  },
};

const toc = [
  {
    id: "hire-shabti",
    label: "Hire Your First Shabti",
  },
  {
    id: "shabti-stats",
    label: "Stats & Best Jobs",
  },
  {
    id: "shabti-traits",
    label: "Shabti Traits",
  },
  {
    id: "gold-shabti",
    label: "Gold Shabti",
  },
  {
    id: "assign-work-post",
    label: "Assign a Work Post",
  },
  {
    id: "no-job-yet",
    label: "Fix No Job Yet",
  },
  {
    id: "mud-and-brick-jobs",
    label: "Mud vs Brick Hauling",
  },
  {
    id: "work-post-range",
    label: "Wrong Mold Targets",
  },
  {
    id: "work-post-feeding",
    label: "Confirm Work Post Feeding",
  },
  {
    id: "crew-seats",
    label: "Work Posts vs Crew Seats",
  },
  {
    id: "shabti-training-and-rest",
    label: "Training & Rest",
  },
  {
    id: "shabti-not-working",
    label: "Shabti Not Working",
  },
  {
    id: "when-to-hire-more",
    label: "When to Hire More Shabti",
  },
];

const relatedLinks = [
  {
    href: "/how-they-built-the-pyramids",
    label: "Beginner Guide: First Steps & Pyramid Progression",
  },
  {
    href: "/how-they-built-the-pyramids/automation",
    label: "Automation: Machines, Belts & Brick Transport",
  },
  {
    href: "/how-they-built-the-pyramids/achievements",
    label: "Achievements: Gold Shabti & All 18 Unlocks",
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
          name: "How They Built the Pyramids",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shabti",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-17",
      dateModified: "2026-11-17",
      about: [
        {
          "@type": "VideoGame",
          name: "How They Built the Pyramids",
        },
        {
          "@type": "Thing",
          name: "Shabti Market and worker recruitment",
        },
        {
          "@type": "Thing",
          name: "Shabti Strength, Speed, Stamina, and Skill",
        },
        {
          "@type": "Thing",
          name: "Shabti traits and work ratings",
        },
        {
          "@type": "Thing",
          name: "Gold Shabti recruitment",
        },
        {
          "@type": "Thing",
          name: "Work Post job assignments",
        },
        {
          "@type": "Thing",
          name: "Mud and brick hauling",
        },
        {
          "@type": "Thing",
          name: "Machine Crew seats",
        },
        {
          "@type": "Thing",
          name: "Shabti training, resting, and idle workers",
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
          title={articleTitle}
          description="Hire useful Shabti, compare worker traits, assign Work Posts and machine jobs, and find out why workers are idle."
          gameTitle="How They Built the Pyramids"
          gameHref="/how-they-built-the-pyramids"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowTheyBuiltThePyramidsShabtiContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
