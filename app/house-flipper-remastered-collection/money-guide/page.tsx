import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoneyGuideContent from "@/data/house-flipper-remastered-collection/money-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/house-flipper-remastered-collection/money-guide`;

const imageUrls = [
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-oceanside-villa-dolan-trusk-sale.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-oceanside-villa-buyer-offers.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-oceanside-villa-office-setup.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-oceanside-villa-profit-summary.webp`,
];

const toc = [
  { id: "money-guide", label: "Money guide" },
  { id: "what-raises-sale-price", label: "Sale price drivers" },
  { id: "room-requirements", label: "Room requirements" },
  { id: "sauna-rooms", label: "Sauna rooms" },
  { id: "confirmed-buyer-feedback", label: "Confirmed buyer feedback" },
  { id: "legacy-buyer-logic", label: "Legacy buyer logic" },
  { id: "oceanside-villa-sale-example", label: "Oceanside Villa example" },
  { id: "how-to-use-negotiation", label: "Negotiation" },
  { id: "how-to-control-renovation-cost", label: "Cost control" },
  { id: "common-profit-mistakes", label: "Profit mistakes" },
  { id: "which-house-should-you-flip-first", label: "First house to flip" },
  { id: "early-money-vs-late-money", label: "Early vs late money" },
  { id: "best-money-route-summary", label: "Money route summary" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/house-flipper-remastered-collection",
    label: "House Flipper Remastered Collection Guide Hub",
  },
  {
    href: "/house-flipper-remastered-collection/beginner-guide",
    label: "House Flipper Remastered Beginner Guide",
  },
  {
    href: "/house-flipper-remastered-collection/first-jobs-walkthrough",
    label: "House Flipper Remastered First Jobs Walkthrough",
  },
  {
    href: "/house-flipper-remastered-collection/achievements-guide",
    label: "House Flipper Remastered Achievements Guide",
  },
  {
    href: "/house-flipper-remastered-collection/dlc-content-guide",
    label: "House Flipper Remastered DLC Content Guide",
  },
];

export const metadata: Metadata = {
  title: "House Flipper Remastered Money Guide: Buyers & Profit",
  description:
    "Make more money in House Flipper Remastered with buyer-targeted flips, room labels, Dolan Trusk, Oceanside Villa profit, negotiation, and cost-control tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "House Flipper Remastered Collection Money Guide: Buyers, Room Labels, Negotiation and Profit",
    description:
      "Learn how to make money in House Flipper Remastered Collection with jobs, buyer-targeted flips, room requirements, sauna-room notes, Dolan Trusk, Oceanside Villa profit, and Negotiator planning.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "House Flipper Remastered Collection Oceanside Villa sale result with Dolan Trusk and profit summary.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Flipper Remastered Money Guide",
    description:
      "Buyer-targeted flips, room labels, Dolan Trusk, Oceanside Villa profit, negotiation timing, and common profit mistakes.",
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
          name: "House Flipper Remastered Collection Guide",
          item: `${siteUrl}/house-flipper-remastered-collection`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Money Guide",
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
        "House Flipper Remastered Collection Money Guide: Buyer-Targeted Flips, Room Labels, Oceanside Villa Profit and Negotiation",
      description:
        "A player-focused House Flipper Remastered Collection money guide explaining how to make profit from early jobs, buyer-targeted renovations, room labels, sale price drivers, confirmed Oceanside Villa buyer feedback, Dolan Trusk, Jack Tarinton, Smoth Family, Jantart Family, legacy buyer logic to verify in Remastered, sauna-room profit notes, renovation cost control, first-house selection, and negotiation timing for higher-value sales and the Negotiator achievement.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-05",
      dateModified: "2026-06-05",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "House Flipper Remastered Collection" },
        { "@type": "Thing", name: "House Flipper Remastered money guide" },
        { "@type": "Thing", name: "House Flipper Remastered make money" },
        { "@type": "Thing", name: "House Flipper Remastered profit" },
        { "@type": "Thing", name: "House Flipper Remastered buyers" },
        { "@type": "Thing", name: "House Flipper Remastered room labels" },
        { "@type": "Thing", name: "House Flipper Remastered room requirements" },
        { "@type": "Thing", name: "House Flipper Remastered Dolan Trusk" },
        { "@type": "Thing", name: "House Flipper Remastered Jack Tarinton" },
        { "@type": "Thing", name: "House Flipper Remastered Smoth Family" },
        { "@type": "Thing", name: "House Flipper Remastered Jantart Family" },
        { "@type": "Thing", name: "House Flipper Remastered Oceanside Villa" },
        { "@type": "Thing", name: "House Flipper Remastered negotiation" },
        { "@type": "Thing", name: "House Flipper Remastered Negotiator achievement" },
        { "@type": "Thing", name: "House Flipper Remastered sauna room" },
        { "@type": "Thing", name: "House Flipper Remastered buyer feedback" },
        { "@type": "Thing", name: "House Flipper Remastered first house to flip" },
        { "@type": "Thing", name: "House Flipper Remastered renovation cost" },
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best way to make money early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do jobs first. Early jobs pay you while unlocking cleaning, mounting, painting, and task-list skills that make house sales easier later.",
          },
        },
        {
          "@type": "Question",
          name: "Should I buy a house right away?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Buy a house after the basic toolkit feels comfortable. If cleaning, mounting, painting, and item placement still feel slow, keep doing jobs first.",
          },
        },
        {
          "@type": "Question",
          name: "What raises house sale price the most?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clean condition, functional room labels, buyer-targeted renovation, and controlled furniture spending matter more than random expensive decoration.",
          },
        },
        {
          "@type": "Question",
          name: "What are room labels?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Room labels are the game logic that makes a room count as a bedroom, bathroom, office, kitchen, or another useful room. A bedroom usually needs a bed. A bathroom needs core bathroom fixtures. An office needs office-style furniture.",
          },
        },
        {
          "@type": "Question",
          name: "Are sauna rooms good for money?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sauna rooms were a strong profit tactic in the original House Flipper. In Remastered, test sauna items, room recognition, and buyer feedback in your build before relying on it as a guaranteed money method.",
          },
        },
        {
          "@type": "Question",
          name: "Which buyer preferences are confirmed in this guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The confirmed feedback in this guide comes from the Oceanside Villa sale example: Dolan Trusk, Jack Tarinton, Smoth Family, and Jantart Family. Other buyer rules are treated as legacy House Flipper logic that should be verified in Remastered.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use old House Flipper buyer guides?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but use them as starting points, not guaranteed Remastered rules. Confirm buyer reactions with the live buyer feedback panel before spending heavily.",
          },
        },
        {
          "@type": "Question",
          name: "Who is a good buyer for practical profit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Dolan Trusk and Jack Tarinton are good examples of practical-value buyers in the Oceanside Villa example. They respond better to useful layouts than emotional family comfort.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock the Negotiator achievement?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a valuable property, make the top buyer clearly like the house, then negotiate from a strong offer. Do not chase Negotiator on a tiny starter house.",
          },
        },
        {
          "@type": "Question",
          name: "When should I negotiate?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Negotiate when the highest offer is clearly ahead, the buyer feedback is mostly satisfied, and the house value is high enough for a large gain to matter.",
          },
        },
        {
          "@type": "Question",
          name: "Why did my profit stay low?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably overspent on furniture, decorated without a buyer target, ignored room labels, or sold before cleaning and fixing obvious problems.",
          },
        },
        {
          "@type": "Question",
          name: "Is Free Play good for money testing?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Free Play is useful for testing room layouts, buyer reactions, and sale setups without committing your normal progression save.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the First Jobs Walkthrough if you are still unlocking tools. Read the Achievements Guide if you want Negotiator, Millionaire, and buyer achievements.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="How Do You Make More Money From House Sales?"
          description="Use early jobs for tools, then make profit with room labels, buyer-targeted renovations, confirmed Oceanside Villa feedback, Dolan Trusk, negotiation timing, and cost control."
          gameTitle="House Flipper Remastered Collection"
          gameHref="/house-flipper-remastered-collection"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MoneyGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
