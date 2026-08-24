import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BeaulieuHospitalWalkthroughContent from "@/data/no-more-room-in-hell-2/beaulieu-hospital-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/beaulieu-hospital-walkthrough`;

const metadataTitle =
  "No More Room in Hell 2 Beaulieu Hospital Walkthrough";

const metadataDescription =
  "Beaulieu Hospital walkthrough for Patient Files, changing codes, tissue samples, ventilation, 0/2 lockdown, lab scanner, and Morgue Wing Roof.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hospital-record-offices.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hospital-patient-file-terminal.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hospital-tissue-samples.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hospital-ventilation-truck.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hospital-security-lockdown.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hospital-laboratory-holdout.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hospital-rooftop-extraction.webp`,
];

const toc = [
  {
    id: "hospital-route",
    label: "Hospital route",
  },
  {
    id: "patient-files",
    label: "Patient Files",
  },
  {
    id: "patient-record-code",
    label: "Patient Record codes",
  },
  {
    id: "tissue-samples",
    label: "Tissue Samples",
  },
  {
    id: "quarantine-ventilation",
    label: "Quarantine ventilation",
  },
  {
    id: "security-lockdown",
    label: "Security Lockdown",
  },
  {
    id: "avoid-contaminated-route",
    label: "Avoid contaminated routes",
  },
  {
    id: "morgue-shortcut",
    label: "Morgue shortcuts",
  },
  {
    id: "laboratory",
    label: "Laboratory Bio Scanner",
  },
  {
    id: "morgue-wing-extraction",
    label: "Morgue Wing extraction",
  },
  {
    id: "hospital-stuck",
    label: "If Hospital is stuck",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/combat-survival-guide",
    label: "Combat & Survival Guide",
  },
  {
    href: "/no-more-room-in-hell-2/broadway-walkthrough",
    label: "Broadway Walkthrough",
  },
  {
    href: "/no-more-room-in-hell-2/raven-rock-walkthrough",
    label: "Raven Rock Walkthrough",
  },
  {
    href: "/no-more-room-in-hell-2/how-to-cure-infection",
    label: "How to Cure Infection",
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
      "Follow Beaulieu Hospital from the three Patient Files through changing record codes, Tissue Samples, Quarantine ventilation, the 0/2 Security Lockdown, Laboratory Bio Scanner, and Morgue Wing Roof.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Beaulieu Hospital Patient Files objective in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Beaulieu Hospital route for Patient Files, changing codes, Tissue Samples, ventilation, Security Lockdown, Laboratory, and Morgue Wing Roof.",
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
          name: "No More Room in Hell 2 Guide",
          item: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beaulieu Hospital Walkthrough",
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
        "No More Room in Hell 2 Beaulieu Hospital Walkthrough",
      description:
        "A player-focused Beaulieu Hospital walkthrough for No More Room in Hell 2 covering the three Patient Files, run-specific Patient Record codes, Tissue Samples, Courtyard ventilation, the second-floor End Security Lockdown 0/2 objective, Laboratory Bio Scanner defense, Morgue shortcuts, and the Morgue Wing Roof extraction route.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-24",
      dateModified: "2026-08-24",
      articleSection: "No More Room in Hell 2 Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "No More Room in Hell 2",
          url: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "Thing",
          name: "Beaulieu Hospital",
        },
        {
          "@type": "Thing",
          name: "Beaulieu Hospital Patient Files",
        },
        {
          "@type": "Thing",
          name: "Beaulieu Hospital Patient Record codes",
        },
        {
          "@type": "Thing",
          name: "Beaulieu Hospital Tissue Samples",
        },
        {
          "@type": "Thing",
          name: "Beaulieu Hospital Quarantine ventilation",
        },
        {
          "@type": "Thing",
          name: "Beaulieu Hospital Security Lockdown",
        },
        {
          "@type": "Thing",
          name: "Beaulieu Hospital Laboratory Bio Scanner",
        },
        {
          "@type": "Thing",
          name: "Beaulieu Hospital Morgue Wing Roof",
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
          title="Beaulieu Hospital Walkthrough: Files, Lockdown & Lab"
          description="Hospital is built around progression gates, not one straight route. This is how I move from the three Patient Files and changing codes through Tissue Samples, Quarantine ventilation, the 0/2 Security Lockdown, Laboratory Bio Scanner, and Morgue Wing Roof extraction."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeaulieuHospitalWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}