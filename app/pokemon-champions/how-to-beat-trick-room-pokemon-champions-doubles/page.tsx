import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TrickRoomGuideContent from "@/data/pokemon-champions/how-to-beat-trick-room-pokemon-champions-doubles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/pokemon-champions/how-to-beat-trick-room-pokemon-champions-doubles`;

export const metadata: Metadata = {
  title:
    "How to Beat Trick Room in Pokemon Champions Doubles | Fake Out, Taunt, Imprison, and Counterplay",
  description:
    "Learn how to beat Trick Room in Pokemon Champions Doubles with practical counterplay, including Fake Out, Taunt, Imprison awareness, and how to stop a second Trick Room setup.",
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
          name: "Pokemon Champions",
          item: `${siteUrl}/pokemon-champions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Beat Trick Room in Pokemon Champions Doubles",
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
      headline: "How to Beat Trick Room in Pokemon Champions Doubles",
      description:
        "A practical counterplay guide for beating Trick Room in Pokemon Champions Doubles, including Fake Out, Taunt, Imprison awareness, anti-Trick Room positioning, and how to stop a second Trick Room setup.",
      image: [
        `${siteUrl}/images/pokemon-champions/pokemon-champions-trick-room-team-preview.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-trick-room-core.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-fake-out-vs-trick-room.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-kingambit-trick-room-endgame.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Pokemon Champions",
        },
        {
          "@type": "Thing",
          name: "Doubles",
        },
        {
          "@type": "Thing",
          name: "Trick Room",
        },
        {
          "@type": "Thing",
          name: "Fake Out",
        },
        {
          "@type": "Thing",
          name: "Taunt",
        },
        {
          "@type": "Thing",
          name: "Imprison",
        },
        {
          "@type": "Thing",
          name: "Kingambit",
        },
        {
          "@type": "Thing",
          name: "Farigiraf",
        },
        {
          "@type": "Thing",
          name: "Oranguru",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="How to Beat Trick Room in Pokemon Champions Doubles"
          description="Learn how to beat Trick Room in Pokemon Champions Doubles with Fake Out, Taunt, Imprison awareness, and the positioning habits that stop the first room turn and the second setup from taking over the game."
          gameTitle="Pokemon Champions"
          gameHref="/pokemon-champions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 15, 2026"
          toc={[
            {
              id: "why-trick-room-is-still-dangerous-in-pokemon-champions",
              label: "Why Trick Room is still dangerous",
            },
            {
              id: "the-trick-room-setters-you-should-expect",
              label: "The Trick Room setters to expect",
            },
            {
              id: "the-sweepers-that-actually-win-trick-room-games",
              label: "The sweepers that win Trick Room games",
            },
            {
              id: "how-to-stop-trick-room-from-going-up",
              label: "How to stop Trick Room from going up",
            },
            {
              id: "how-to-stall-out-trick-room-turns-without-losing-anyway",
              label: "How to stall out Trick Room turns",
            },
            {
              id: "why-kingambit-is-such-a-big-problem-in-this-matchup",
              label: "Why Kingambit is such a big problem",
            },
            {
              id: "common-mistakes-players-make-into-trick-room",
              label: "Common mistakes",
            },
            {
              id: "what-kinds-of-teams-handle-trick-room-best",
              label: "What teams handle Trick Room best",
            },
            {
              id: "final-thoughts",
              label: "Final thoughts",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/pokemon-champions/how-to-beat-tailwind-pokemon-champions-doubles/",
              label: "How to Beat Tailwind in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-counter-incineroar-pokemon-champions-doubles/",
              label: "How to Counter Incineroar in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-deal-with-sneasler-pokemon-champions-doubles/",
              label: "How to Deal With Sneasler in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions",
              label: "Pokemon Champions Doubles Speed Control Guide",
            },
          ]}
        >
          <TrickRoomGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}