import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllEndingsGuideContent from "@/data/gamble-with-your-friends/all-endings-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends/all-endings-guide`;

export const metadata: Metadata = {
    title: "Gamble With Your Friends: How to Get All 3 Endings",
    description:
      "Unlock all 3 Gamble With Your Friends endings from a single late-run save. Guide covers the payoff, coin flip RNG, and the Esc trick.",
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
          name: "Gamble With Your Friends Guide",
          item: `${siteUrl}/gamble-with-your-friends`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All Endings Guide",
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
      headline: "Gamble With Your Friends All Endings Guide",
      description:
        "This Gamble With Your Friends all endings guide explains how to get all three ending achievements from one late-run save, when to press Esc after achievement pop-ups, how the final double-or-nothing coin flip may repeat after reload, and how shop actions can change the ending RNG route.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-all-endings-guide.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-final-coin-flip.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-ending-route-state.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-ending-rng-shop-reroll.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
      about: [
        {
          "@type": "VideoGame",
          name: "Gamble With Your Friends",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends endings",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends all endings",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends ending achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Let It Ride",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends End of the Line",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends And They Lived Happily After",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends double or nothing",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends final coin flip",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends RNG seed",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends shop reroll",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends save scum",
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
          name: "How many endings are in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are three ending-style achievements: Let It Ride!, End of the Line, and ...And They Lived Happily After.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get all endings from one save in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if you preserve a late-run save before the final debt choice and quit immediately after each ending achievement pops.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best order to get all endings in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get ...And They Lived Happily After first by paying off the debt, then use double-or-nothing for one coin-flip ending, then change the RNG sequence and do double-or-nothing again for the final ending.",
          },
        },
        {
          "@type": "Question",
          name: "When should I press Esc during the endings route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Press Esc and quit immediately after the ending achievement pops. This helps avoid overwriting the late-run save you need for the other endings.",
          },
        },
        {
          "@type": "Question",
          name: "Does the final coin flip reroll when I reload in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. If you reload from the same final-day state and make the same choice, the same result may repeat.",
          },
        },
        {
          "@type": "Question",
          name: "How do I change the final coin flip result in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reload earlier, then use a shop action, buy an item, reroll the shop if available, or change your item route before choosing double-or-nothing again.",
          },
        },
        {
          "@type": "Question",
          name: "What achievement is tied to paying off the debt in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The safe payoff-style route is tied to ...And They Lived Happily After.",
          },
        },
        {
          "@type": "Question",
          name: "What achievements are tied to double-or-nothing in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The risky double-or-nothing route is tied to Let It Ride! and End of the Line, depending on whether the final gamble succeeds or fails.",
          },
        },
        {
          "@type": "Question",
          name: "Are ending achievements bugged in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not automatically. Hidden ending achievements need clean route confirmation. A repeated coin-flip result usually means the route state did not change.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use save scum for endings in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Ending routing is one of the best uses for save scum, but you need an early enough late-run save and clean route changes.",
          },
        },
        {
          "@type": "Question",
          name: "Should I chase endings before other achievements in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Finish normal achievements first, skip currently bugged achievements, then route endings as late-run targets.",
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
          title="Gamble With Your Friends All Endings Guide"
          description="Learn how to get all three endings from one late-run save, when to press Esc, how double-or-nothing coin flip RNG works, and how shop actions can change the final result."
          gameTitle="Gamble With Your Friends"
          gameHref="/gamble-with-your-friends"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 6, 2026"
          toc={[
            {
              id: "one-save-three-endings",
              label: "One-save route",
            },
            {
              id: "best-ending-order",
              label: "Best order",
            },
            {
              id: "final-coin-flip",
              label: "Final coin flip",
            },
            {
              id: "save-points",
              label: "Save points",
            },
            {
              id: "common-ending-mistakes",
              label: "Common mistakes",
            },
            {
              id: "ending-achievements-and-bugs",
              label: "Ending bugs",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/gamble-with-your-friends",
              label: "Gamble With Your Friends Guide Hub",
            },
            {
              href: "/gamble-with-your-friends/achievements",
              label: "Achievements Guide",
            },
            {
              href: "/gamble-with-your-friends/bugged-achievements",
              label: "Bugged Achievements Guide",
            },
            {
              href: "/gamble-with-your-friends/save-scum-guide",
              label: "Save Scum Guide",
            },
            {
              href: "/gamble-with-your-friends/quota-guide",
              label: "Quota Guide",
            },
            {
              href: "/gamble-with-your-friends/tickets-items-body-parts",
              label: "Tickets, Items, and Body Parts Guide",
            },
            {
              href: "/gamble-with-your-friends/best-item-combos",
              label: "Best Item Combos and Strategies",
            },
          ]}
        >
          <AllEndingsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}