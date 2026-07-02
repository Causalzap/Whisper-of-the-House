import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DeltaruneChapter5WeirdRouteContent from "@/data/deltarune/chapter-5-weird-route.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deltarune/chapter-5-weird-route`;

const imageUrls = [
`${siteUrl}/images/deltarune/deltarune-chapter-5-weird-route-bed.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-weird-festival-susie.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-noelle-grow-wings.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-side-b-complete.webp`,
];

export const metadata: Metadata = {
title: "DELTARUNE Chapter 5 Weird Route: Side B & Save File",
description:
"Follow the DELTARUNE Chapter 5 Weird Route with the Side B save-file requirement, Sans Bread step, lake Proceed timer, aborted route, Shattered Rose, and Thorn Ring / Twisted Sword notes.",
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
name: "Chapter 5 Weird Route and Side B Guide",
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
"DELTARUNE Chapter 5 Weird Route Guide: Sans Bread, Lake Proceed Timer, Aborted Route, Shattered Rose, and Side B",
description:
"This DELTARUNE Chapter 5 Weird Route guide explains the Chapter 4 Weird Route save requirement, how to force Kris out of bed, why Bread from Sans is required before the lake, how Stop and Proceed work, how the submerged lake timer and roughly 70 Proceed prompts lead to Insert Chapter 7 Side B, what happens in the Aborted Weird Route with Shattered Rose, and how to keep Weird Route separate from normal Flowery and Pink cleanup files.",
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
name: "Chapter 5 Weird Route",
},
{
"@type": "Thing",
name: "Side B",
},
{
"@type": "Thing",
name: "Insert Chapter 7 Side B",
},
{
"@type": "Thing",
name: "Kris",
},
{
"@type": "Thing",
name: "Noelle",
},
{
"@type": "Thing",
name: "Susie",
},
{
"@type": "Thing",
name: "Sans Bread",
},
{
"@type": "Thing",
name: "Lake Proceed Timer",
},
{
"@type": "Thing",
name: "Aborted Weird Route",
},
{
"@type": "Thing",
name: "Shattered Rose",
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
name: "Can I start Chapter 5 Weird Route from a normal save?",
acceptedAnswer: {
"@type": "Answer",
text: "No. You need a save file that already continued the Weird Route through Chapter 4.",
},
},
{
"@type": "Question",
name: "Does Chapter 5 Weird Route start at the beginning?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. If the save file qualifies, Chapter 5 starts differently immediately, with Kris refusing to get out of bed.",
},
},
{
"@type": "Question",
name: "How do I get Kris out of bed in Chapter 5 Weird Route?",
acceptedAnswer: {
"@type": "Answer",
text: "Mash directional inputs until Kris finally leaves the bed. It is intentional resistance, not a softlock.",
},
},
{
"@type": "Question",
name: "Do I need to talk to Sans in Chapter 5 Weird Route?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Go to Sans's ice cream stand outside his grocery store and get Bread before going to the lake.",
},
},
{
"@type": "Question",
name: "What is Bread for in Chapter 5 Weird Route?",
acceptedAnswer: {
"@type": "Answer",
text: "Bread is the required Light World item that lets the Weird Route progress toward Noelle at the lake.",
},
},
{
"@type": "Question",
name: "Can I go straight to the lake without Sans?",
acceptedAnswer: {
"@type": "Answer",
text: "No. If you try to go before handling the Sans and Bread step, Susie redirects you.",
},
},
{
"@type": "Question",
name: "Should I pick Stop or Proceed at the first lake prompts?",
acceptedAnswer: {
"@type": "Answer",
text: "The first prompts do not safely stop the route. Stop and Proceed both continue the scene, with Noelle forcing the direction forward.",
},
},
{
"@type": "Question",
name: "What do I do once Kris and Noelle are underwater?",
acceptedAnswer: {
"@type": "Answer",
text: "Select Proceed quickly through roughly 70 prompts. This part has a hidden timer.",
},
},
{
"@type": "Question",
name: "What happens if I am too slow during the lake Proceed sequence?",
acceptedAnswer: {
"@type": "Answer",
text: "The route aborts. The chapter continues in an altered state, and Kris can later carry the Shattered Rose title in the Dark World.",
},
},
{
"@type": "Question",
name: "What is the successful Chapter 5 Weird Route ending?",
acceptedAnswer: {
"@type": "Answer",
text: "The successful route ends with the CRT message Insert Chapter 7 Side B and returns to file select.",
},
},
{
"@type": "Question",
name: "Does Chapter 5 Weird Route have SAVE points?",
acceptedAnswer: {
"@type": "Answer",
text: "No normal SAVE points are available during this Chapter 5 Weird Route sequence. Use the correct carried save before starting.",
},
},
{
"@type": "Question",
name: "Should I do Chapter 5 Weird Route before Flowery?",
acceptedAnswer: {
"@type": "Answer",
text: "Only on a separate Weird Route file. For normal Flowery, Pink / Miumu, Pink Coins, foxes, and Secret Egg cleanup, use a normal or cleanup file.",
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
title="DELTARUNE Chapter 5 Weird Route and Side B Guide"
description="Start from the Chapter 4 Weird Route state, force Kris out of bed, get Bread from Sans, survive the lake Proceed timer, avoid the Aborted route, and reach Insert Chapter 7 Side B."
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
id: "hard-requirement",
label: "Hard requirement",
},
{
    id: "permanent-save-file",
    label: "Permanent save file?",
  },
{
id: "route-map",
label: "Route map",
},
{
id: "get-out-of-bed",
label: "Get out of bed",
},
{
id: "susie-and-festival",
label: "Susie and festival",
},
{
id: "sans-bread",
label: "Sans Bread",
},
{
id: "lake-start",
label: "Lake start",
},
{
id: "stop-proceed",
label: "Stop / Proceed",
},
{
id: "submerged-timer",
label: "Proceed timer",
},
{
id: "side-b-ending",
label: "Side B ending",
},
{
id: "aborted-route",
label: "Aborted route",
},
{
    id: "thorn-ring-twisted-sword",
    label: "Thorn Ring / Twisted Sword",
  },
{
id: "how-to-avoid-abort",
label: "Avoid aborting",
},
{
id: "when-to-turn-back",
label: "When to turn back",
},
{
id: "normal-vs-weird",
label: "Normal vs Weird",
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
href: "/deltarune/chapter-5-final-boss-guide",
label: "Flowery Final Boss Guide",
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
href: "/deltarune/chapter-5-foxes-secret-egg",
label: "Foxes and Secret Egg Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <DeltaruneChapter5WeirdRouteContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
