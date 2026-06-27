import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DeltaruneChapter5FoxesSecretEggContent from "@/data/deltarune/chapter-5-foxes-secret-egg.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deltarune/chapter-5-foxes-secret-egg`;

const imageUrls = [
`${siteUrl}/images/deltarune/deltarune-chapter-5-fox-door-three-foxes.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-hidden-fox-plus-one.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-sun-fox-pink-coin.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-egg-wheat-gates.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-secret-egg-received.webp`,
];

export const metadata: Metadata = {
    title: "DELTARUNE Chapter 5 All Foxes, Secret Egg & Pink Coin Guide",
    description:
    "All Chapter 5 fox locations: pass Aqua with 3, find all 5 for the Pink Coin room, avoid the sun-style mix-up, then solve the wheat, dog flower and Egg route.",
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
name: "Chapter 5 Foxes and Secret Egg Guide",
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
"DELTARUNE Chapter 5 Foxes and Secret Egg Guide: 5 Foxes, Pink Coin Room, Wheat Field, Dog Flower Order, and Egg",
description:
"This DELTARUNE Chapter 5 foxes and Secret Egg guide explains the Second Diner fox route, why 3 foxes pass Aqua but 5 foxes open the nearby Pink Coin room, how to avoid confusing the sun-style Pink Coin check with the local five-fox list, and how to complete the Secret Egg route through the wheat field, balloon, dog flower order, watering can, and man behind the tree.",
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
name: "Chapter 5 Foxes",
},
{
"@type": "Thing",
name: "Aqua Fox Gate",
},
{
"@type": "Thing",
name: "Second Diner",
},
{
"@type": "Thing",
name: "Pink Coin Room",
},
{
"@type": "Thing",
name: "Sun Fox Pink Coin",
},
{
"@type": "Thing",
name: "Secret Egg",
},
{
"@type": "Thing",
name: "Wheat Field",
},
{
"@type": "Thing",
name: "Dog Flower Order",
},
{
"@type": "Thing",
name: "Watering Can",
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
name: "How many foxes do I need for Aqua in DELTARUNE Chapter 5?",
acceptedAnswer: {
"@type": "Answer",
text: "You need 3 foxes to pass Aqua's story gate in Chapter 5.",
},
},
{
"@type": "Question",
name: "How many foxes open the Chapter 5 secret room?",
acceptedAnswer: {
"@type": "Answer",
text: "You need all 5 foxes to open the nearby locked secret room and claim the Pink Coin inside.",
},
},
{
"@type": "Question",
name: "Are all five foxes spread across Chapter 5?",
acceptedAnswer: {
"@type": "Answer",
text: "No. The five foxes for this check are in the same Second Diner and fox-statue area inside Flower Castle.",
},
},
{
"@type": "Question",
name: "Where do I start the fox hunt?",
acceptedAnswer: {
"@type": "Answer",
text: "Reach the Second Diner, take the door to the left, and search the fox-statue and Terracotta room area.",
},
},
{
"@type": "Question",
name: "Is the sun or color-change room one of the five foxes?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Treat the sun or color-change style room as a separate Pink Coin cleanup check, not as one of the local five foxes.",
},
},
{
"@type": "Question",
name: "What does finding all five foxes unlock?",
acceptedAnswer: {
"@type": "Answer",
text: "Finding all five foxes opens a nearby secret room. The fox inside becomes a chest, and the chest gives a Pink Coin.",
},
},
{
"@type": "Question",
name: "Where does the Secret Egg route start?",
acceptedAnswer: {
"@type": "Answer",
text: "The Secret Egg route starts at the wheat field between two gates. Run through the wheat repeatedly until the route changes and a balloon appears.",
},
},
{
"@type": "Question",
name: "What do I do after the balloon appears?",
acceptedAnswer: {
"@type": "Answer",
text: "Follow the balloon left, enter the dog flower room, copy the order of flowers the dog visits, then take the watering can and continue to the man behind the tree.",
},
},
{
"@type": "Question",
name: "Does the Egg help in the Yellow and Blue trial?",
acceptedAnswer: {
"@type": "Answer",
text: "The Egg can appear as an evidence option, but it should be treated as a secret-state joke rather than the correct trial solution.",
},
},
{
"@type": "Question",
name: "Should I do foxes and Egg before Weird Route?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, if you want clean routing. Do foxes, Egg, Pink Coins, and Secret Boss cleanup on a normal or cleanup file, then keep Weird Route and Side B separate.",
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
title="DELTARUNE Chapter 5 Foxes and Secret Egg Guide"
description="Find 3 foxes for Aqua, all 5 foxes for the Pink Coin room, avoid confusing the sun-style Pink Coin check, and solve the wheat, dog flower order, watering can, and Egg route."
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
id: "fox-rule",
label: "Fox rule",
},
{
id: "all-five-foxes",
label: "All 5 foxes",
},
{
id: "three-or-five",
label: "3 or 5 foxes",
},
{
id: "pink-coin-reward",
label: "Pink Coin room",
},
{
id: "other-fox-like-checks",
label: "Sun-style check",
},
{
id: "secret-egg-route",
label: "Secret Egg route",
},
{
id: "dog-flower-puzzle",
label: "Dog flower order",
},
{
id: "egg-received",
label: "Receiving the Egg",
},
{
id: "egg-evidence",
label: "Egg evidence",
},
{
id: "cleanup-order",
label: "Cleanup order",
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
href: "/deltarune/chapter-5-secret-boss-pink-coins",
label: "Pink Coins and Mystery Key Guide",
},
{
href: "/deltarune/chapter-5-secret-boss-guide",
label: "Pink / Miumu Secret Boss Guide",
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
> <DeltaruneChapter5FoxesSecretEggContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
