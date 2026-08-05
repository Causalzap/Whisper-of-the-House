import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkBlueTowerTrainContent from "@/data/big-walk/blue-tower-train.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/blue-tower-train`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-blue-tower-beacon-route.png`,
  `${siteUrl}/images/big-walk/big-walk-blue-tower-head-receiver.png`,
  `${siteUrl}/images/big-walk/big-walk-blue-symbol-relay-rooms.png`,
  `${siteUrl}/images/big-walk/big-walk-blue-pot-height-code.png`,
  `${siteUrl}/images/big-walk/big-walk-blue-blindfold-course.png`,
  `${siteUrl}/images/big-walk/big-walk-blue-key-cutter-arrow.png`,
  `${siteUrl}/images/big-walk/big-walk-blue-key-cutter-under-rock.png`,
  `${siteUrl}/images/big-walk/big-walk-blue-train-activated.png`,
  `${siteUrl}/images/big-walk/big-walk-big-ride-moving-train.png`,
];

export const metadata: Metadata = {
  title: "Big Walk Blue Tower Guide: 5 Heads, Train & Big Ride",
  description:
    "Complete five Blue Tower Heads, solve the key-cutter route, find the hidden cutter, activate the Train, and unlock Big Ride in Big Walk.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Blue Tower and Train Guide",
    description:
      "Collect five Heads, finish all five Blue key cutters, activate the Train loop, and board a moving carriage to unlock Big Ride.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[7],
        width: 1090,
        height: 836,
        alt: "Big Walk Train moving after the Blue Tower key route is completed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Blue Tower and Train Guide",
    description:
      "Finish the five-Head Blue route, find every key cutter, start the Train, and unlock Big Ride.",
    images: [imageUrls[7]],
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
          name: "Big Walk Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Blue Tower and Train Guide",
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
        "Big Walk Blue Tower and Train Guide: Five Heads, Blue Key Cutters, Train Activation, and Big Ride",
      description:
        "This Big Walk Blue Tower walkthrough explains how to reach the Blue receiver, choose five practical Head challenges, solve the symbol relay, shape transfer, pose, pot-code, and blindfold puzzles, return five Heads, protect the blank Blue key through five cutters, find the easy-to-miss cutter near the rocks, activate the Train loop, and unlock Big Ride by boarding a moving carriage.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-05",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk Blue Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Train",
        },
        {
          "@type": "Thing",
          name: "Big Walk Blue key",
        },
        {
          "@type": "Thing",
          name: "Big Walk five Heads",
        },
        {
          "@type": "Thing",
          name: "Big Walk key cutters",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Ride achievement",
        },
        {
          "@type": "Thing",
          name: "Big Walk puzzle solutions",
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

const toc = [
  {
    id: "reach-blue-tower",
    label: "Reach the Blue Tower",
  },
  {
    id: "check-blue-receiver",
    label: "Check the Blue receiver",
  },
  {
    id: "choose-five-blue-puzzles",
    label: "Choose five Head puzzles",
  },
  {
    id: "blue-symbol-relay",
    label: "Symbol relay rooms",
  },
  {
    id: "five-shape-transfer",
    label: "Five-shape transfer",
  },
  {
    id: "blue-pose-room",
    label: "Pose-matching room",
  },
  {
    id: "blue-pot-code",
    label: "Pot and height code",
  },
  {
    id: "blue-blindfold-course",
    label: "Blindfold obstacle course",
  },
  {
    id: "return-blue-heads",
    label: "Return the Blue Heads",
  },
  {
    id: "get-blue-key",
    label: "Get the Blue key",
  },
  {
    id: "blue-key-cutters",
    label: "Follow all five cutters",
  },
  {
    id: "easy-miss-blue-cutter",
    label: "Find the hidden cutter",
  },
  {
    id: "activate-train",
    label: "Activate the Train",
  },
  {
    id: "unlock-big-ride",
    label: "Unlock Big Ride",
  },
  {
    id: "train-loop",
    label: "Use the Train loop",
  },
  {
    id: "blue-train-stuck",
    label: "Blue route fixes",
  },
  {
    id: "blue-train-faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/how-to-unlock-map",
    label: "Red Tower and Map Room Guide",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Green Key Guide",
  },
  {
    href: "/big-walk/yellow-tower-tunnel",
    label: "Yellow Tower and Tunnel Guide",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Big Walk Blue Tower and Train Guide"
          description="Collect five Heads, finish the Blue key-cutter route, find the hidden cutter, activate the Train loop, and board a moving carriage to unlock Big Ride."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkBlueTowerTrainContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
