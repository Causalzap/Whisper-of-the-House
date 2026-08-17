import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LastRitesEndingExplainedContent from "@/data/ghost-recon-wildlands/last-rites-ending-explained.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ghost-recon-wildlands`;
const pageUrl = `${hubUrl}/last-rites-ending-explained`;

const metadataTitle =
  "Ghost Recon Wildlands Last Rites Ending Explained";

const metadataDescription =
  "Understand the Last Rites ending, who La Llorona really is, Ines Cortez's past, Emily Price's role, and why the final order changes to exfiltrate.";

const imageUrls = [
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-ines-cortez-price-asset.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-old-gold-mine-exfiltrate.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-ines-price-confrontation.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-ending-debrief.webp`,
];

const toc = [
  {
    id: "who-is-la-llorona",
    label: "Who La Llorona really is",
  },
  {
    id: "what-happened-to-ines",
    label: "What happened to Ines",
  },
  {
    id: "why-price-is-personally-involved",
    label: "Why Emily Price is involved",
  },
  {
    id: "why-terminate-changes-to-exfiltrate",
    label: "Why the order changes",
  },
  {
    id: "ines-confronts-price",
    label: "Ines confronts Price",
  },
  {
    id: "why-price-refuses-to-kill-ines",
    label: "Why Price keeps Ines alive",
  },
  {
    id: "what-la-llorona-is-dead-means",
    label: 'What "La Llorona is dead" means',
  },
  {
    id: "what-the-ending-means",
    label: "What the ending means",
  },
];

const relatedLinks = [
  {
    href: "/ghost-recon-wildlands",
    label: "Ghost Recon Wildlands Guide Hub",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-walkthrough",
    label: "Last Rites Walkthrough",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-intel-locations",
    label: "Last Rites Intel Locations",
  },
  {
    href: "/ghost-recon-wildlands/2026-update",
    label: "Ghost Recon Wildlands 2026 Update",
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
    title: "Ghost Recon Wildlands Last Rites Ending Explained",
    description:
      "Understand Ines Cortez, La Llorona, Emily Price, the switch from terminate to exfiltrate, and what the final Last Rites debrief actually means.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-17",
    modifiedTime: "2026-08-17",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Ines Cortez confronting Emily Price during the Ghost Recon Wildlands Last Rites ending",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Recon Wildlands Last Rites Ending Explained",
    description:
      "Who La Llorona really is, what happened to Ines Cortez, why Price changes the order, and why Ines survives the ending.",
    images: [imageUrls[2]],
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
          name: "Ghost Recon Wildlands Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Last Rites Ending Explained",
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
        "Ghost Recon Wildlands Last Rites Ending, La Llorona and Ines Cortez Explained",
      description:
        "A story-focused explanation of the Ghost Recon Wildlands Last Rites ending. It explains that Ines Cortez is the woman behind La Llorona, her past as one of Emily Price's intelligence assets, what happened after her cover was exposed, why Price changes the final mission from terminate to exfiltrate, why killing Ines would create a martyr for the Penitentes, and why the final debrief says La Llorona is dead while Ines Cortez remains alive but is no longer considered a threat.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
      articleSection: "Ghost Recon Wildlands Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tom Clancy's Ghost Recon Wildlands",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Last Rites ending",
        },
        {
          "@type": "Thing",
          name: "La Llorona",
        },
        {
          "@type": "Thing",
          name: "Ines Cortez",
        },
        {
          "@type": "Thing",
          name: "Emily Price",
        },
        {
          "@type": "Thing",
          name: "Penitentes",
        },
        {
          "@type": "Thing",
          name: "Last Rites exfiltration",
        },
        {
          "@type": "Thing",
          name: "Last Rites ending explained",
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
          title="What the Last Rites Ending Actually Means"
          description="The ending clicked for me once I stopped treating La Llorona and Ines Cortez as two separate targets. This is how Ines, Emily Price, the martyr problem, and the final exfiltration fit together."
          gameTitle="Ghost Recon Wildlands"
          gameHref="/ghost-recon-wildlands"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LastRitesEndingExplainedContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}