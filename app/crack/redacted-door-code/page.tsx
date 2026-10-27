
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CrackRedactedDoorCodeContent from "@/data/crack/redacted-door-code.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crack`;
const pageUrl = `${hubUrl}/redacted-door-code`;

const metadataTitle =
  "CRACK Redacted Door Code: UV Flashlight & All 3 Clues";

const metadataDescription =
  "Find the UV Flashlight, reveal all three pairs of hidden digits, enter your randomized six-digit Redacted code, and explore the security room.";

const articleDescription =
  "Open the Redacted security door in CRACK using the UV Flashlight hidden inside an elevated ventilation duct. Find the three pairs of digits in the Breakroom Extension, Vehicle Bay, and above the keypad; place each digit in its marked position; then enter the randomized six-digit combination. Identify rejected-code mistakes and examine the security room after unlocking it.";

const imageUrls = [
  `${siteUrl}/images/crack/crack-redacted-vent-hatch.webp`,
  `${siteUrl}/images/crack/crack-redacted-uv-digits.webp`,
  `${siteUrl}/images/crack/crack-redacted-security-room.webp`,
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
      "Find the CRACK UV Flashlight, reveal the three hidden code clues, and arrange all six digits to open the Redacted Room.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        alt: "CRACK Redacted keypad with ultraviolet numbers showing their positions in the six-digit code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Solve CRACK's randomized Redacted door code with the UV Flashlight and three hidden number clues.",
    images: [imageUrls[1]],
  },
};

const toc = [
  {
    id: "uv-flashlight",
    label: "Where to Find the UV Flashlight",
  },
  {
    id: "three-clues",
    label: "All 3 Passcode Locations",
  },
  {
    id: "enter-code",
    label: "Enter the Six-Digit Code",
  },
  {
    id: "inside-redacted",
    label: "Inside the Redacted Room",
  },
];

const relatedLinks = [
  {
    href: "/crack/walkthrough",
    label: "CRACK Walkthrough: Work Orders & Scaffolding",
  },
  {
    href: "/crack/endings",
    label: "CRACK Endings: KEEP OUT Passage & Secret Exit",
  },
  {
    href: "/crack/achievements",
    label: "CRACK Hidden Achievements & 100% Checklist",
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
          name: "Redacted Door Code",
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
        "CRACK Redacted Door Code: Where to Find All Six Digits",
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
          name: "Redacted Room door and keypad",
        },
        {
          "@type": "Thing",
          name: "UV Flashlight location",
        },
        {
          "@type": "Thing",
          name: "Ventilation duct above the Break Room",
        },
        {
          "@type": "Thing",
          name: "Breakroom Extension and Vehicle Bay clues",
        },
        {
          "@type": "Thing",
          name: "Randomized six-digit passcode",
        },
        {
          "@type": "Thing",
          name: "Security and surveillance room",
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
          title="CRACK Redacted Door Code: Where to Find All Six Digits"
          description="Collect the UV Flashlight, read the three hidden number clues, and enter the randomized code in the correct order."
          gameTitle="CRACK"
          gameHref="/crack"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CrackRedactedDoorCodeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
