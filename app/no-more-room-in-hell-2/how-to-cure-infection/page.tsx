import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToCureInfectionContent from "@/data/no-more-room-in-hell-2/how-to-cure-infection.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/how-to-cure-infection`;

const metadataTitle =
  "No More Room in Hell 2 Infection Cure Guide";

const metadataDescription =
  "How to cure infection with Experimental Gene Therapy, use Phalanx Pills correctly, read infection symptoms, and avoid losing your Responder.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-experimental-gene-therapy.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-gene-therapy-synthesize-cure.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-infection-hallucination.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-infection-pills.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-use-infection-cure.webp`,
];

const toc = [
  {
    id: "how-to-cure-infection",
    label: "How to cure infection",
  },
  {
    id: "synthesize-cure",
    label: "Synthesize the cure",
  },
  {
    id: "infection-warning-signs",
    label: "Infection warning signs",
  },
  {
    id: "infection-pills",
    label: "Phalanx Pills",
  },
  {
    id: "when-to-use-gene-therapy",
    label: "When to use Gene Therapy",
  },
  {
    id: "use-finished-cure",
    label: "Use the finished cure",
  },
  {
    id: "when-to-carry-gene-therapy",
    label: "When to carry Gene Therapy",
  },
  {
    id: "infection-death",
    label: "What happens if you turn",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/early-extraction",
    label: "Early Extraction Guide",
  },
  {
    href: "/no-more-room-in-hell-2/combat-survival-guide",
    label: "Combat & Survival Guide",
  },
  {
    href: "/no-more-room-in-hell-2/achievements",
    label: "Achievements Guide",
  },
  {
    href: "/no-more-room-in-hell-2/beaulieu-hospital-walkthrough",
    label: "Beaulieu Hospital Walkthrough",
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
      "Learn what actually cures infection, what Phalanx Pills do, how to recognize worsening symptoms, and when Experimental Gene Therapy should take priority.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Experimental Gene Therapy infection cure in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Experimental Gene Therapy, Phalanx Pills, infection symptoms, cure timing, and how to avoid losing a Responder.",
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
          name: "How to Cure Infection",
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
        "No More Room in Hell 2 Infection Cure Guide",
      description:
        "A player-focused No More Room in Hell 2 infection guide explaining how Experimental Gene Therapy cures infection, how Phalanx Pills delay or reset infection progression without curing it, warning signs including coughing, visible veins and hallucinations, when to start and use the cure, and when Early Extraction becomes safer than risking a developed Responder.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-24",
      dateModified: "2026-08-24",
      articleSection: "No More Room in Hell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "No More Room in Hell 2",
          url: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 infection",
        },
        {
          "@type": "Thing",
          name: "Experimental Gene Therapy",
        },
        {
          "@type": "Thing",
          name: "Phalanx Pills",
        },
        {
          "@type": "Thing",
          name: "Infection cure",
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
          title="How to Cure Infection: Pills vs Gene Therapy"
          description="Phalanx Pills buy time, but they do not remove the infection. Experimental Gene Therapy is the cure I look for, and once symptoms start getting worse I stop treating infection as something I can safely postpone."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToCureInfectionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}