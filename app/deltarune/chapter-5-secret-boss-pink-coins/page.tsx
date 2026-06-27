import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DeltaruneChapter5PinkCoinsContent from "@/data/deltarune/chapter-5-secret-boss-pink-coins.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deltarune/chapter-5-secret-boss-pink-coins`;

const imageUrls = [
`${siteUrl}/images/deltarune/deltarune-chapter-5-first-pink-coin.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-mystery-key-door.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-pink-secret-boss-intro.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-sun-fox-pink-coin.webp`,
];

export const metadata: Metadata = {
title: "DELTARUNE Chapter 5 All 19 Pink Coins & Mystery Key Guide",
description:
"All 19 Chapter 5 Pink Coin locations: get 10 for the Mystery Key, use extras for flower gear, check Petal Feather, Ferroll, Pink Door and Pink/Miumu.",
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
name: "DELTARUNE Guide",
item: `${siteUrl}/deltarune`,
},
{
"@type": "ListItem",
position: 3,
name: "Chapter 5 Pink Coins and Mystery Key Guide",
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
"DELTARUNE Chapter 5 All 19 Pink Coins Guide: Mystery Key, Pink Door, Flower Gear, Ferroll, and Pink/Miumu",
description:
"This DELTARUNE Chapter 5 Pink Coin guide explains all 19 Pink Coin locations, why 10 Pink Coins buy the Mystery Key, why the remaining 9 coins still matter for post-Pink flower gear, when to start cleanup after Petal Feather, how to use Ferroll's missed-coin help, where the Pink Door fits into the secret boss route, and how to keep Pink/Miumu cleanup separate from Flowery and Weird Route files.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-27",
dateModified: "2026-06-27",
about: [
{
"@type": "VideoGame",
name: "DELTARUNE",
},
{
"@type": "Thing",
name: "DELTARUNE Chapter 5",
},
{
"@type": "Thing",
name: "Pink Coins",
},
{
"@type": "Thing",
name: "All 19 Pink Coins",
},
{
"@type": "Thing",
name: "Mystery Key",
},
{
"@type": "Thing",
name: "Pink Door",
},
{
"@type": "Thing",
name: "Pink / Miumu Secret Boss",
},
{
"@type": "Thing",
name: "Petal Feather",
},
{
"@type": "Thing",
name: "Flower Gear",
},
{
"@type": "Thing",
name: "Ferroll",
},
{
"@type": "Thing",
name: "Five Foxes",
},
{
"@type": "Thing",
name: "Sun-style Pink Coin",
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
},
{
"@type": "FAQPage",
"@id": `${pageUrl}#faq`,
mainEntity: [
{
"@type": "Question",
name: "How many Pink Coins are in DELTARUNE Chapter 5?",
acceptedAnswer: {
"@type": "Answer",
text: "There are 19 Pink Coins in Chapter 5.",
},
},
{
"@type": "Question",
name: "How many Pink Coins do I need for the Mystery Key?",
acceptedAnswer: {
"@type": "Answer",
text: "You need 10 Pink Coins to buy the Mystery Key.",
},
},
{
"@type": "Question",
name: "Should I stop collecting after 10 Pink Coins?",
acceptedAnswer: {
"@type": "Answer",
text: "Only if you just want to unlock Pink quickly. If you care about post-Pink flower gear, collect more than 10.",
},
},
{
"@type": "Question",
name: "What are the extra 9 Pink Coins for?",
acceptedAnswer: {
"@type": "Answer",
text: "The remaining Pink Coins can be used after beating Pink to buy flower gear, so they are not useless cleanup currency.",
},
},
{
"@type": "Question",
name: "When should I start serious Pink Coin cleanup?",
acceptedAnswer: {
"@type": "Answer",
text: "Start serious cleanup after Aqua, Petal Feather, and more shortcuts are open. The best sweep is late Chapter 5 before Flowery.",
},
},
{
"@type": "Question",
name: "Do I need Petal Feather for Pink Coins?",
acceptedAnswer: {
"@type": "Answer",
text: "Many Pink Coin routes need Petal Feather-style movement and platforming access. If a coin seems unreachable early, continue the story and come back later.",
},
},
{
"@type": "Question",
name: "Where do I buy the Mystery Key?",
acceptedAnswer: {
"@type": "Answer",
text: "Buy the Mystery Key from Pink's shop in the Cliffs after collecting at least 10 Pink Coins.",
},
},
{
"@type": "Question",
name: "What if the Mystery Key does not show up?",
acceptedAnswer: {
"@type": "Answer",
text: "If you have enough coins but the shop state looks wrong, save, reload, and check again before re-hunting the entire chapter.",
},
},
{
"@type": "Question",
name: "Where is the Pink Door?",
acceptedAnswer: {
"@type": "Answer",
text: "The Pink Door is on the late Top of Castle or secret boss route near the final stretch before Flowery.",
},
},
{
"@type": "Question",
name: "Is the five-fox room required for a Pink Coin?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Finding all five local foxes near the Second Diner opens a secret room where a fox becomes a chest and gives a Pink Coin.",
},
},
{
"@type": "Question",
name: "Can Ferroll help with missed Pink Coins?",
acceptedAnswer: {
"@type": "Answer",
text: "After Pink, if Ferroll has been found in the Cliffs, Ferroll can appear in the Pink fight room and help point out missing Pink Coin counts by area for Flowery Dollars.",
},
},
{
"@type": "Question",
name: "Should I do Pink before Flowery?",
acceptedAnswer: {
"@type": "Answer",
text: "If you want secret boss and flower gear cleanup, do it before committing to Flowery. If you only want the normal ending, you can save Pink for a cleanup file.",
},
},
{
"@type": "Question",
name: "Should I do this on Weird Route?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Keep Pink Coin cleanup, Pink / Miumu, and post-Pink gear on a normal or cleanup file, and keep Weird Route or Side B separate.",
},
},
],
},
],
};

export default function Page() {
return (
<> <Header /> <main>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
<GuideArticlePage
title="DELTARUNE Chapter 5 All 19 Pink Coins and Mystery Key Guide"
description="Find all 19 Pink Coins, get 10 for the Mystery Key, save extras for post-Pink flower gear, check Petal Feather timing, Ferroll help, the Pink Door, and Pink/Miumu prep."
gameTitle="DELTARUNE"
gameHref="/deltarune"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 27, 2026"
toc={[
{
id: "what-this-guide-covers",
label: "What this guide covers",
},
{
id: "pink-coin-rule",
label: "19 / 10 / 9 rule",
},
{
id: "petal-feather",
label: "Petal Feather",
},
{
id: "when-to-clean-up",
label: "When to clean up",
},
{
id: "all-pink-coins",
label: "All 19 Pink Coins",
},
{
id: "quick-10-route",
label: "Fast 10 route",
},
{
id: "coins-after-10",
label: "Coins after 10",
},
{
id: "buy-mystery-key",
label: "Mystery Key",
},
{
id: "before-pink-door",
label: "Before Pink Door",
},
{
id: "five-fox-pink-coin",
label: "Five-fox coin",
},
{
id: "sun-style-coin",
label: "Sun-style coin",
},
{
id: "point-of-no-return",
label: "Point of no return",
},
{
id: "weird-route-warning",
label: "Save file warning",
},
{
id: "common-mistakes",
label: "Common mistakes",
},
{
id: "faq",
label: "FAQ",
},
]}
relatedLinks={[
{
href: "/deltarune",
label: "DELTARUNE Guide Hub",
},
{
href: "/deltarune/chapter-5-secret-boss-guide",
label: "Pink / Miumu Secret Boss Guide",
},
{
href: "/deltarune/chapter-5-foxes-secret-egg",
label: "Foxes and Secret Egg Guide",
},
{
href: "/deltarune/chapter-5-final-boss-guide",
label: "Flowery Final Boss Guide",
},
{
href: "/deltarune/chapter-5-weird-route",
label: "Chapter 5 Weird Route Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <DeltaruneChapter5PinkCoinsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
