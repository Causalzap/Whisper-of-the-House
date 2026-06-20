import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GuideHubContent from "@/data/the-adventures-of-elliot/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot`;

const imageUrls = [
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-fay-revival.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-guidepost-southern-caves.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-ignite-magic-trial.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-golden-bell.webp`,
];

const toc = [
{ id: "the-adventures-of-elliot-guide", label: "Guide hub" },
{ id: "which-guide-to-use", label: "Which guide to use" },
{ id: "what-to-do-first", label: "What to do first" },
{ id: "beginner-route", label: "Beginner route" },
{ id: "blocked-paths-and-map-markers", label: "Blocked paths" },
{ id: "systems-to-understand", label: "Core systems" },
{ id: "cats-shards-and-manuscripts", label: "Cats, Shards, Manuscripts" },
{ id: "time-travel-and-ages", label: "Time travel and ages" },
{ id: "completion-roadmap", label: "Completion roadmap" },
{
id: "walkthrough-and-100-percent-route",
label: "Walkthrough and 100%",
},
{ id: "which-guide-next", label: "Which guide next" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/the-adventures-of-elliot/beginner-guide",
label: "The Adventures of Elliot Beginner Guide",
},
{
href: "/the-adventures-of-elliot/walkthrough",
label: "The Adventures of Elliot Walkthrough",
},
{
href: "/the-adventures-of-elliot/cat-locations",
label: "The Adventures of Elliot Cat Locations",
},
{
href: "/the-adventures-of-elliot/shards-of-life-locations",
label: "The Adventures of Elliot Shards of Life Locations",
},
{
href: "/the-adventures-of-elliot/manuscript-locations",
label: "The Adventures of Elliot Manuscript Locations",
},
{
href: "/the-adventures-of-elliot/achievements-guide",
label: "The Adventures of Elliot Achievements Guide",
},
];

const faqEntities = [
{
"@type": "Question",
name: "What should I do first in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"Follow the story until Faie joins you, meet Hurick, head toward Southern Caves, touch guideposts, unlock Ignite, and return to the village route. Do not waste too much time forcing blocked chests before you have more tools.",
},
},
{
"@type": "Question",
name: "Which The Adventures of Elliot guide should I read first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Beginner Guide first if you are still in the opening hours. Read the Walkthrough if you already understand the basics and want full story route timing and 100% cleanup planning.",
},
},
{
"@type": "Question",
name: "Is the walkthrough a step-by-step room guide?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. The walkthrough is a Full Story and 100% Route Planner. It explains story timing, cleanup windows, ending saves, and when to use dedicated location guides.",
},
},
{
"@type": "Question",
name: "Are cats important in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Cats are tied to rewards and completion. Bring found cats to the Ailurophilic Traveler in the Kingdom of Huther, listen for meows while exploring, and use Cat Needle for cleanup after it unlocks.",
},
},
{
"@type": "Question",
name: "What are Shards of Life?",
acceptedAnswer: {
"@type": "Answer",
text:
"Shards of Life are HP fragments. Every 4 Shards of Life gives Elliot one max HP increase.",
},
},
{
"@type": "Question",
name: "Are Shards of Life missable?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Shards of Life are not permanently missable. Use the map for unopened chest and Shrine markers, then return later when the route requirement is available.",
},
},
{
"@type": "Question",
name: "Are Shards of Life and Shrines of Life the same thing?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Shards are HP fragments. Shrines of Life are challenge locations that can reward Shards.",
},
},
{
"@type": "Question",
name: "What are manuscripts for?",
acceptedAnswer: {
"@type": "Answer",
text:
"Manuscripts are lore collectibles tracked on the orphanage bookshelf. Collecting all 31 unlocks History's Tapestry.",
},
},
{
"@type": "Question",
name: "Why does my map say Hucarea instead of Fields of Flon?",
acceptedAnswer: {
"@type": "Answer",
text:
"Eastern Fields of Flon and Western Fields of Flon may appear earlier as Eastern Hucarea and Western Hucarea before the area renaming. Use the east or west position to match the route.",
},
},
{
"@type": "Question",
name: "Should I make a final Magicite build early?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Collect Magicite and test weapon effects first. A real final build depends on your weapon preference, available Magicite, and boss comfort.",
},
},
{
"@type": "Question",
name: "Are PS5, Switch, Xbox, and PC routes different?",
acceptedAnswer: {
"@type": "Answer",
text:
"Treat the route and collectibles as the same unless a platform-specific issue is confirmed. Platform differences are mostly performance, controls, display clarity, and save behavior.",
},
},
{
"@type": "Question",
name: "What should I read next after this guide hub?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Beginner Guide if you are still learning the opening route, or the Walkthrough if you want full story and 100% timing. Use Cat Locations, Shards of Life Locations, Manuscript Locations, and Achievements Guide for exact cleanup topics.",
},
},
];

export const metadata: Metadata = {
title: "The Adventures of Elliot Guide: Walkthrough, Cats, Shards",
description:
"Start The Adventures of Elliot with beginner tips, walkthrough route, cats, Shards, manuscripts, map markers, Magicite, endings and achievements.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"The Adventures of Elliot Guide Hub: Walkthrough, Cats, Shards, Manuscripts and Achievements",
description:
"Use this The Adventures of Elliot guide hub to choose the right guide for beginner tips, full story route timing, cats, Shards of Life, manuscripts, map markers, blocked paths, time travel, Magicite, endings, and achievements.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Faie revives Elliot near the start of The Adventures of Elliot.",
},
],
},
twitter: {
card: "summary_large_image",
title: "The Adventures of Elliot Guide Hub",
description:
"Choose the right guide for walkthrough timing, cats, Shards, manuscripts, Magicite, endings and achievements.",
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
name: "The Adventures of Elliot Guide",
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
"The Adventures of Elliot Guide Hub: Beginner Guide, Walkthrough, Cats, Shards, Manuscripts and Achievements",
description:
"A player-focused guide hub for The Adventures of Elliot: The Millennium Tales that helps players choose the right guide for the opening route, beginner systems, full story and 100% route timing, cats, Shards of Life, manuscripts, map markers, blocked paths, time travel, Magicite, endings, and achievements. The hub explains what to do first after Faie joins Elliot, when to follow Southern Caves, how Ignite and route-opening tools affect exploration, when to use the walkthrough route planner, and which dedicated guide to use for all 50 cats, all 60 Shards of Life, all 31 manuscripts, and completion planning.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-18",
dateModified: "2026-06-20",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "The Adventures of Elliot: The Millennium Tales",
},
{
"@type": "Thing",
name: "The Adventures of Elliot guide",
},
{
"@type": "Thing",
name: "The Adventures of Elliot guide hub",
},
{
"@type": "Thing",
name: "The Adventures of Elliot beginner guide",
},
{
"@type": "Thing",
name: "The Adventures of Elliot walkthrough",
},
{
"@type": "Thing",
name: "The Adventures of Elliot 100% route",
},
{
"@type": "Thing",
name: "The Adventures of Elliot cats",
},
{
"@type": "Thing",
name: "The Adventures of Elliot Cat Needle",
},
{
"@type": "Thing",
name: "The Adventures of Elliot Shards of Life",
},
{
"@type": "Thing",
name: "The Adventures of Elliot Shards of Life locations",
},
{
"@type": "Thing",
name: "The Adventures of Elliot manuscripts",
},
{
"@type": "Thing",
name: "The Adventures of Elliot manuscript locations",
},
{
"@type": "Thing",
name: "The Adventures of Elliot achievements",
},
{
"@type": "Thing",
name: "The Adventures of Elliot map markers",
},
{
"@type": "Thing",
name: "The Adventures of Elliot blocked paths",
},
{
"@type": "Thing",
name: "The Adventures of Elliot Magicite",
},
{
"@type": "Thing",
name: "The Adventures of Elliot endings",
},
{
"@type": "Thing",
name: "Faie",
},
{
"@type": "Thing",
name: "Southern Caves",
},
{
"@type": "Thing",
name: "Ignite",
},
{
"@type": "Thing",
name: "Golden Bell",
},
{
"@type": "Thing",
name: "Doorway of Time",
},
{
"@type": "Thing",
name: "Moon Mirror",
},
{
"@type": "Thing",
name: "Eastern Hucarea",
},
{
"@type": "Thing",
name: "Western Hucarea",
},
{
"@type": "Thing",
name: "Eastern Fields of Flon",
},
{
"@type": "Thing",
name: "Western Fields of Flon",
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
mainEntity: faqEntities,
},
],
};

export default function Page() {
return (
<> <Header /> <main>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/> <GuideArticlePage
       title="The Adventures of Elliot Guide Hub"
       description="Choose the right guide for beginner tips, full story route timing, cats, Shards of Life, manuscripts, map markers, Magicite, endings and achievements."
       gameTitle="The Adventures of Elliot"
       gameHref="/the-adventures-of-elliot"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 20, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <GuideHubContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
