import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TicketsItemsBodyPartsContent from "@/data/gamble-with-your-friends/tickets-items-body-parts.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends/tickets-items-body-parts`;

export const metadata: Metadata = {
  title: "Gamble With Your Friends Items Guide: Tickets & Body Parts",
  description:
    "Learn how tickets, items, and body parts work in Gamble With Your Friends, including item prices, Golden Chip, Holy Statue, Taser, Quota Gun, and how to use items.",
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
          name: "Tickets, Items, and Body Parts Guide",
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
        "Gamble With Your Friends Tickets, Items, and Body Parts Guide",
      description:
        "This Gamble With Your Friends items guide explains how tickets work, what items cost, which items to buy first, how to pick up and use items, and how body parts and the Quota Gun work.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-lobby-items.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-buy-retrieve-items.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-tickets-body-parts.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-02",
      dateModified: "2026-05-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Gamble With Your Friends",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends tickets",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends items",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends body parts",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends item prices",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Golden Chip",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Holy Statue",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Taser",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Quota Gun",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Time Machine",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Mystery Box",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends how to use items",
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
          name: "How do you get tickets in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can earn tickets by hitting quota, completing challenges, overshooting goals, and selling or losing body parts. Bonus Draw can also get ticket on profit.",
          },
        },
        {
          "@type": "Question",
          name: "What should I buy first with tickets in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most beginner groups, the best first buys are Holy Statue, Golden Chip, Taser, Microphone, Drink, Insurance, or Quota Gun.",
          },
        },
        {
          "@type": "Question",
          name: "How much do items cost in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Confirmed prices include Angel’s Reel for 3 tickets, Devil’s Reel for 3 tickets, Mystery Box for 4, Golden Chip for 4, Taser for 4, Quota Gun for 5, Drink for 5, Camera for 6, Stake Holder for 6, Microphone for 6, Holy Statue for 7, Insurance for 7, and Bonus Draw for 8. Time Machine’s price was not captured.",
          },
        },
        {
          "@type": "Question",
          name: "Are cosmetics worth buying in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not early. Cosmetics are fun, but your first tickets should usually go toward items that help the team survive the next casino day.",
          },
        },
        {
          "@type": "Question",
          name: "Are mystery boxes worth it in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sometimes, but not as a first priority. Mystery Box costs 4 tickets and gives a random item, so buy it only after your team already has a useful item plan or extra tickets.",
          },
        },
        {
          "@type": "Question",
          name: "How do you pick up items in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shop screenshots show an E Pick Up prompt. After buying, make sure one player actually picks up the item before entering the casino.",
          },
        },
        {
          "@type": "Question",
          name: "How do you use items after buying them in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pick up the item first, carry it to the right place, then follow the held item’s on-screen prompt. Some items affect nearby players, while others must be used on a specific target, such as Taser on a keypad or Quota Gun on a body part.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my item not working in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The item may not have been picked up, the wrong player may be holding it, the holder may be too far from the target, the item may need a specific table, keypad, or body part, or the team may be using it outside its active window.",
          },
        },
        {
          "@type": "Question",
          name: "What does Holy Statue do in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Holy Statue costs 7 tickets and prevents all loss nearby while active.",
          },
        },
        {
          "@type": "Question",
          name: "What does Golden Chip do in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Golden Chip costs 4 tickets and gives a single free all-in.",
          },
        },
        {
          "@type": "Question",
          name: "What does Taser do in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Taser costs 4 tickets and is used on a keypad to increase maximum bet.",
          },
        },
        {
          "@type": "Question",
          name: "What does Time Machine do in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Time Machine rolls back time. Its effect is confirmed, but its ticket price was not captured.",
          },
        },
        {
          "@type": "Question",
          name: "What does Quota Gun do in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quota Gun costs 5 tickets and pays 33% of quota for each body part it shoots off.",
          },
        },
        {
          "@type": "Question",
          name: "Should you sell or shoot off body parts in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only when the value saves the run or enables a key purchase. Do not trade body parts casually, because the penalty can affect voice, vision, movement, or interaction.",
          },
        },
        {
          "@type": "Question",
          name: "Which body part is safest to lose in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no universally safe body part. Eye loss can hurt vision, mouth loss can hurt communication, and body loss can hurt movement. Choose based on the player’s role.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest ticket mistake in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is spending tickets before the team agrees on a plan. A random purchase can block a stronger item or body recovery.",
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
          title="Gamble With Your Friends Tickets, Items, and Body Parts Guide"
          description="Follow this Gamble With Your Friends items guide to learn how tickets work, what each item costs, which items to buy first, how to use items, and when body parts are worth trading."
          gameTitle="Gamble With Your Friends"
          gameHref="/gamble-with-your-friends"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 2, 2026"
          toc={[
            {
              id: "source-note",
              label: "Source note",
            },
            {
              id: "how-tickets-work",
              label: "How tickets work",
            },
            {
              id: "best-items-first",
              label: "Best items first",
            },
            {
              id: "ticket-costs",
              label: "Ticket costs",
            },
            {
              id: "how-to-buy-pick-up-use-items",
              label: "How to use items",
            },
            {
              id: "item-effects-table",
              label: "Item effects table",
            },
            {
              id: "high-priority-items",
              label: "High-priority items",
            },
            {
              id: "item-combos-preview",
              label: "Item combos preview",
            },
            {
              id: "body-parts-explained",
              label: "Body parts",
            },
            {
              id: "gun-and-body-part-value",
              label: "Quota Gun value",
            },
            {
              id: "common-ticket-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-shopping-rules",
              label: "Shopping rules",
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
              href: "/gamble-with-your-friends/beginner-guide",
              label: "Beginner Guide",
            },
            {
              href: "/gamble-with-your-friends/best-games",
              label: "Best Games to Play",
            },
            {
              href: "/gamble-with-your-friends/best-item-combos",
              label: "Best Item Combos and Strategies",
            },
            {
              href: "/gamble-with-your-friends/craps-cheese-guide",
              label: "Craps Cheese Guide",
            },
            {
              href: "/gamble-with-your-friends/achievements",
              label: "Achievements Guide",
            },
          ]}
        >
          <TicketsItemsBodyPartsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}