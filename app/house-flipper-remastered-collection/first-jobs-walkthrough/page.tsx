import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FirstJobsWalkthroughContent from "@/data/house-flipper-remastered-collection/first-jobs-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/house-flipper-remastered-collection/first-jobs-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-first-job-radiator.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-cleaning-garage-job.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-uv-light.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-heated-argument-job.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-heated-argument-sink.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-art-in-every-corner.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-paint-electrical-outlet.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-princess-on-the-way.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-princess-room-furniture.webp`,
];

const toc = [
  { id: "first-jobs-walkthrough", label: "First jobs walkthrough" },
  { id: "tool-unlocks", label: "Tool unlocks" },
  { id: "ex-boyfriend-stole-the-radiator", label: "Ex-Boyfriend Stole the Radiator" },
  { id: "cleaning-the-garage", label: "Cleaning the Garage" },
  { id: "a-heated-argument", label: "A Heated Argument" },
  { id: "art-in-every-corner", label: "Art in Every Corner" },
  { id: "the-princess-on-the-way", label: "The Princess on the Way" },
  { id: "best-early-perks", label: "Best early perks" },
  { id: "job-rewards-and-achievements", label: "Job value and achievements" },
  { id: "why-your-job-is-not-complete", label: "Job not complete" },
  { id: "should-you-finish-100-percent", label: "Finish 100%?" },
  { id: "can-you-repeat-jobs", label: "Repeat jobs" },
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
    href: "/house-flipper-remastered-collection/money-guide",
    label: "House Flipper Remastered Money Guide",
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
  title: "House Flipper Remastered First Jobs Walkthrough",
  description:
    "Walk through the first House Flipper Remastered jobs: radiator, garage, sink, painting, outlets, nursery furniture, tool unlocks, UV light, and 100% fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "House Flipper Remastered Collection First Jobs Walkthrough: Tools, UV Light, Painting and 100% Fixes",
    description:
      "Complete the first House Flipper Remastered Collection jobs with steps for Ex-Boyfriend Stole the Radiator, Cleaning the Garage, A Heated Argument, Art in Every Corner, The Princess on the Way, tool unlocks, early perks, and stuck-below-100% fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "House Flipper Remastered Collection Ex-Boyfriend Stole the Radiator first job.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Flipper Remastered First Jobs Walkthrough",
    description:
      "Finish the first jobs, unlock key tools, use UV light, install sinks, repair outlets, place nursery furniture, and fix jobs stuck below 100%.",
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
          name: "First Jobs Walkthrough",
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
        "House Flipper Remastered Collection First Jobs Walkthrough: Ex-Boyfriend Stole the Radiator, Cleaning the Garage, A Heated Argument, Art in Every Corner and The Princess on the Way",
      description:
        "A player-focused first jobs walkthrough for House Flipper Remastered Collection. The guide explains the early North Levyville job route, how to complete Ex-Boyfriend Stole the Radiator, Cleaning the Garage, A Heated Argument, Art in Every Corner, and The Princess on the Way, how early tools and systems are introduced, how to use the tablet, radiator mounting, UV light, mountable sinks, painting, electrical outlet repair, baby room furniture, early perks, job value, achievement links, 100% completion habits, job replay notes, and troubleshooting for jobs stuck below 100%.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-05",
      dateModified: "2026-06-05",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "House Flipper Remastered Collection" },
        { "@type": "Thing", name: "House Flipper Remastered first jobs" },
        { "@type": "Thing", name: "House Flipper Remastered first jobs walkthrough" },
        { "@type": "Thing", name: "House Flipper Remastered Ex-Boyfriend Stole the Radiator" },
        { "@type": "Thing", name: "House Flipper Remastered Cleaning the Garage" },
        { "@type": "Thing", name: "House Flipper Remastered A Heated Argument" },
        { "@type": "Thing", name: "House Flipper Remastered Art in Every Corner" },
        { "@type": "Thing", name: "House Flipper Remastered The Princess on the Way" },
        { "@type": "Thing", name: "House Flipper Remastered tool unlocks" },
        { "@type": "Thing", name: "House Flipper Remastered tablet unlock" },
        { "@type": "Thing", name: "House Flipper Remastered UV light" },
        { "@type": "Thing", name: "House Flipper Remastered radiator mounting" },
        { "@type": "Thing", name: "House Flipper Remastered sink installation" },
        { "@type": "Thing", name: "House Flipper Remastered electrical outlet repair" },
        { "@type": "Thing", name: "House Flipper Remastered painting" },
        { "@type": "Thing", name: "House Flipper Remastered early perks" },
        { "@type": "Thing", name: "House Flipper Remastered job stuck below 100%" },
        { "@type": "Thing", name: "House Flipper Remastered Perfectionist" },
        { "@type": "Thing", name: "House Flipper Remastered Do it ASAP" },
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
          name: "What is the first job in House Flipper Remastered Collection?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The first job is Ex-Boyfriend Stole the Radiator. It teaches cleaning, trash removal, tablet buying, radiator placement, and fixture mounting.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I finish Ex-Boyfriend Stole the Radiator?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You are probably missing a small piece of trash, a stain, the radiator assembly step, or a second hidden objective from the task list. Check each room before completing the job.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock the tablet?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Complete Ex-Boyfriend Stole the Radiator. The job introduces the tablet when you need to buy the missing radiator.",
          },
        },
        {
          "@type": "Question",
          name: "How do I complete Cleaning the Garage?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Remove trash, clean dirt and grease, clean the window, and use the UV light if stains are hard to see. Do not waste time redesigning the garage.",
          },
        },
        {
          "@type": "Question",
          name: "What does the UV light do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The UV light helps expose stains that are hard to spot. Use it when a room looks clean but the dirt task is not complete.",
          },
        },
        {
          "@type": "Question",
          name: "What do I install in A Heated Argument?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A Heated Argument focuses on radiators, towel radiator, and sink installation. Buy mountable fixtures and finish the assembly steps.",
          },
        },
        {
          "@type": "Question",
          name: "What if I bought the wrong sink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the sell tool to remove the wrong item, then search the store again by the exact fixture type from the task list. Look for a mountable sink, not a decorative cabinet sink.",
          },
        },
        {
          "@type": "Question",
          name: "How do I repair electrical outlets?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Move furniture if it blocks the outlet, interact with the broken outlet, remove damaged parts, connect the wires, and finish the screws or cover steps.",
          },
        },
        {
          "@type": "Question",
          name: "How do I complete Art in Every Corner?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy the required paint, use the paint roller on the correct walls, repair any electrical outlets the task asks for, and check the task list before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "What furniture do I need in The Princess on the Way?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The job asks for nursery furniture such as a baby cot, bookcase, cabinet with changing table, and a poof or nursery seat. Match the Remastered task list wording as closely as possible.",
          },
        },
        {
          "@type": "Question",
          name: "Should I finish early jobs at 100%?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, especially while learning. Full completion teaches the task-list habits you need for later jobs, achievements, and house sales.",
          },
        },
        {
          "@type": "Question",
          name: "Can I repeat early jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the original House Flipper, completed jobs could be repeated from the job archive. In Remastered Collection, check the laptop job list or job archive after completing a job to confirm whether replay is available.",
          },
        },
        {
          "@type": "Question",
          name: "What guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Money Guide if you want to start selling houses for profit. Read the DLC Content Guide if you want to understand the region map.",
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
          title="How Do You Finish the First Jobs?"
          description="Follow the first House Flipper Remastered Collection jobs in order: clean the first house, mount the radiator, use UV light in the garage, install sinks, repair outlets, paint walls, and finish nursery furniture without getting stuck below 100%."
          gameTitle="House Flipper Remastered Collection"
          gameHref="/house-flipper-remastered-collection"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FirstJobsWalkthroughContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
