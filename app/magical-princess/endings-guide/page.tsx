import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MagicalPrincessEndingsGuideContent from "@/data/magical-princess/endings-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/magical-princess/endings-guide`;

export const metadata: Metadata = {
  title: "Magical Princess Endings Guide",
  description:
    "Discover all the known endings in Magical Princess, including secret endings, career paths, partner routes, and more. Learn how to unlock each ending and plan your journey.",
  alternates: {
    canonical: pageUrl,
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
          name: "Magical Princess Endings Guide",
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
      headline: "Magical Princess Endings Guide",
      description:
        "This guide provides detailed information on all the possible endings in Magical Princess, including secret and career routes, and how to unlock them.",
      image: [
        `${siteUrl}/images/magical-princess/cornelia-queen-intro.webp`,
        `${siteUrl}/images/magical-princess/red-moon-protect-city-choice.webp`,
        `${siteUrl}/images/magical-princess/ng-plus-replay-blessings.webp`,
        `${siteUrl}/images/magical-princess/lord-ending-result.webp`,
        `${siteUrl}/images/magical-princess/cornelia-hangout-event.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-03",
      dateModified: "2026-05-03",
      about: [
        {
          "@type": "VideoGame",
          name: "Magical Princess",
        },
        {
          "@type": "Thing",
          name: "Magical Princess Endings Guide",
        },
        {
          "@type": "Thing",
          name: "Two Queens Ending",
        },
        {
          "@type": "Thing",
          name: "Career Endings",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How many endings are in Magical Princess?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Magical Princess has 50+ endings across career, partner, and secret routes.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best ending order in Magical Princess?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The clean order is: finish any first ending, do Two Queens in Loop 2 / first NG+, do Heir of the Stargazer in Loop 3 / second NG+ if the Inheritance Fragment is confirmed, then do Golden Ending and career / partner cleanup on separate saves.",
          },
        },
        {
          "@type": "Question",
          name: "Is Two Queens required for the true ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Two Queens gives the Inheritance Fragment, which is needed for the Heir of the Stargazer route.",
          },
        },
        {
          "@type": "Question",
          name: "Is Golden Ending the same as Heir of the Stargazer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Heir of the Stargazer is the true ending route. Golden Ending is a separate special route tied to Cornet's necklace, Forbidden Research, and the Labyrinth.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the Library only show Decipher Literature?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You have not unlocked Forbidden Research yet. The hidden Library route requires Cornet's necklace carried into NG+.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do romance endings before Two Queens?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not on the same serious route attempt. Partner endings can take priority and block Cornelia's final-day invitation.",
          },
        },
        {
          "@type": "Question",
          name: "Do career endings need Forbidden Research?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Forbidden Research is for the hidden Library / Labyrinth route, not normal career endings.",
          },
        },
        {
          "@type": "Question",
          name: "Why did I get the wrong career ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your highest stats, morality, reputation, activity focus, or final route priority likely pointed to a different result. Use the career endings guide for stat-specific cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Should I make backup saves?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Make backup saves before final-day route choices, before committing to Labyrinth routes, and before Golden Ending.",
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
          title="Magical Princess Endings Guide"
          description="Discover all the known endings in Magical Princess, including secret endings, career paths, partner routes, and more. Learn how to unlock each ending and plan your journey."
          gameTitle="Magical Princess"
          gameHref="/magical-princess/endings-guide"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "how-many-endings",
              label: "How Many Endings",
            },
            {
              id: "ending-types",
              label: "Ending Types",
            },
            {
              id: "recommended-ending-order",
              label: "Recommended Ending Order",
            },
            {
              id: "loop-order",
              label: "Loop Order",
            },
            {
              id: "secret-endings",
              label: "Secret Endings",
            },
            {
              id: "two-queens-and-true-ending",
              label: "Two Queens & Heir of the Stargazer",
            },
            {
              id: "forbidden-research-and-golden-ending",
              label: "Forbidden Research & Golden Ending",
            },
            {
              id: "known-endings-list",
              label: "Known Endings List",
            },
            {
              id: "partner-endings",
              label: "Partner Endings",
            },
            {
              id: "which-ending-did-you-get",
              label: "Which Ending Did You Get?",
            },
            {
              id: "why-you-got-the-wrong-ending",
              label: "Why You Got The Wrong Ending",
            },
            {
              id: "career-endings",
              label: "Career Endings",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/magical-princess/two-queens-ending-guide",
              label: "Two Queens Ending Guide",
            },
            {
              href: "/magical-princess/true-ending-heir-of-the-stargazer",
              label: "True Ending / Heir of the Stargazer Guide",
            },
            {
              href: "/magical-princess/forbidden-research-guide",
              label: "Forbidden Research Guide",
            },
            {
              href: "/magical-princess/golden-ending-guide",
              label: "Golden Ending Guide",
            },
            {
              href: "/magical-princess/career-endings-requirements",
              label: "Career Endings Requirements Guide",
            },
          ]}
        >
          <MagicalPrincessEndingsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}