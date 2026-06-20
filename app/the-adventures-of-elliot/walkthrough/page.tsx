import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WalkthroughContent from "@/data/the-adventures-of-elliot/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/walkthrough`;

const imageUrls = [
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-fay-revival.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-golden-bell.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-moon-mirror-western-marge.webp`,
];

const toc = [
{ id: "walkthrough", label: "Walkthrough" },
{ id: "full-story-route", label: "Full story route" },
{ id: "how-to-use-this-route", label: "How to use this route" },
{ id: "blocked-route-guide", label: "Blocked routes" },
{ id: "ending-save-points", label: "Ending save points" },
{ id: "boss-and-final-route-prep", label: "Boss prep" },
{ id: "side-quests-and-optional-routes", label: "Side quests" },
{ id: "hundred-percent-timing", label: "100% timing" },
{ id: "moon-mirror-and-three-sages", label: "Moon Mirror and Sages" },
{ id: "before-final-route", label: "Before final route" },
{ id: "true-ending-epilogue-cleanup", label: "True Ending cleanup" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "what-to-read-next", label: "What to read next" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/the-adventures-of-elliot",
label: "The Adventures of Elliot Guide Hub",
},
{
href: "/the-adventures-of-elliot/beginner-guide",
label: "The Adventures of Elliot Beginner Guide",
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
name: "Is this a step-by-step walkthrough for The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. This page is a Full Story and 100% Route Planner. Use it for story timing, ending saves, cleanup windows, blocked-route decisions, and point-of-no-return planning. Use the dedicated collectible guides for exact locations.",
},
},
{
"@type": "Question",
name: "What is the best route order in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"The route planner follows Southern Caves, Ignite, Heavy Hammer, Golden Bell, Doorway of Time, Moon Mirror, Three Sages, Tracing Needle, Northern Tower, Mystic Seal, Beast of Enmity, Cradle, Demise, and True Ending clear-save cleanup.",
},
},
{
"@type": "Question",
name: "Where should I save for endings?",
acceptedAnswer: {
"@type": "Answer",
text:
"Keep a clean save before the Northern Tower bottom route tied to The Sorcerer and the curse branch, and another clean save before the final True Ending route.",
},
},
{
"@type": "Question",
name: "When should I do 100% cleanup?",
acceptedAnswer: {
"@type": "Answer",
text:
"Track collectibles lightly from the start, but do major cleanup after more tools, spells, shortcuts, Monster Trails, and ages are available. Do final cleanup before the True Ending route, then epilogue-only cleanup after the clear save.",
},
},
{
"@type": "Question",
name: "Should I 100% every area the first time I visit?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Many chests, Shrines, and routes require later tools, spells, shortcuts, trails, or another age. Open reachable rewards, mark blocked ones, and return later.",
},
},
{
"@type": "Question",
name: "What should I use the map for?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the map to find unopened chest and Shrine markers. If a marker looks unreachable, use the relevant guide to solve the route requirement.",
},
},
{
"@type": "Question",
name: "Are Shards of Life missable?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Shards of Life are not permanently missable. Every 4 Shards gives one max HP increase, so collect reachable Shards early and clean up blocked ones later.",
},
},
{
"@type": "Question",
name: "When should I start cat cleanup?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start tracking cats after cat collecting is introduced, but save full 50-cat cleanup for later when more ages, routes, and Cat Needle access are available.",
},
},
{
"@type": "Question",
name: "When should I finish manuscripts?",
acceptedAnswer: {
"@type": "Answer",
text:
"Clean up most manuscripts before the final route. If you have 28 out of 31 before the True Ending final boss, the last three are epilogue diaries after the clear save.",
},
},
{
"@type": "Question",
name: "What is the Moon Mirror route?",
acceptedAnswer: {
"@type": "Answer",
text:
"Moon Mirror is a main-story route after the Golden Bell and time travel loop. It pushes the story toward the curse route and the Three Sages / Mystic Seal progression.",
},
},
{
"@type": "Question",
name: "What is the True Ending route?",
acceptedAnswer: {
"@type": "Answer",
text:
"The True Ending route continues after the curse route into Mew cooperation, Cradle the Phoenix, Mount Phoenix, and Demise.",
},
},
{
"@type": "Question",
name: "Why is this page shorter than a traditional walkthrough?",
acceptedAnswer: {
"@type": "Answer",
text:
"Because its job is different. It gives 100% timing, ending-save planning, blocked-route decisions, and final cleanup order instead of duplicating every collectible page.",
},
},
];

export const metadata: Metadata = {
title: "The Adventures of Elliot Walkthrough: 100% Route",
description:
"Plan The Adventures of Elliot full story route, 100% cleanup, ending saves, Moon Mirror, Three Sages, Northern Tower, Cradle and True Ending.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"The Adventures of Elliot Walkthrough: Full Story, 100% Route and Ending Saves",
description:
"Use this The Adventures of Elliot route planner for story timing, 100% cleanup windows, ending saves, Moon Mirror, Three Sages, Northern Tower, Mystic Seal, Cradle, Demise, True Ending clear save, cats, Shards, manuscripts, and final cleanup.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Faie saves Elliot near the start of The Adventures of Elliot.",
},
],
},
twitter: {
card: "summary_large_image",
title: "The Adventures of Elliot Walkthrough: 100% Route",
description:
"Plan full story timing, 100% cleanup, ending saves, Moon Mirror, Three Sages, Northern Tower, Cradle, Demise and True Ending.",
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
item: `${siteUrl}/the-adventures-of-elliot`,
},
{
"@type": "ListItem",
position: 3,
name: "Walkthrough",
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
"The Adventures of Elliot Walkthrough: Full Story Route, 100% Cleanup, Ending Saves and True Ending Planning",
description:
"A player-focused The Adventures of Elliot walkthrough and 100% route planner covering story timing from Southern Caves, Ignite, Heavy Hammer, Golden Bell and Doorway of Time into Moon Mirror, Three Sages, Tracing Needle, Northern Tower, The Sorcerer, Mystic Seal, Beast of Enmity, Cradle the Phoenix, Demise and True Ending clear-save cleanup. The guide explains when to push the main story, when to stop for cats, Shards of Life, manuscripts, Shrines, Magicite and achievements, how to use map markers for unopened chests and Shrine locations, when to keep ending saves, and how to handle final-route and epilogue cleanup without duplicating every collectible location page.",
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
name: "The Adventures of Elliot walkthrough",
},
{
"@type": "Thing",
name: "The Adventures of Elliot 100% route",
},
{
"@type": "Thing",
name: "The Adventures of Elliot full story route",
},
{
"@type": "Thing",
name: "The Adventures of Elliot ending saves",
},
{
"@type": "Thing",
name: "The Adventures of Elliot True Ending",
},
{
"@type": "Thing",
name: "The Adventures of Elliot Bad Ending",
},
{
"@type": "Thing",
name: "The Adventures of Elliot Good Ending",
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
name: "Heavy Hammer",
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
name: "Three Sages",
},
{
"@type": "Thing",
name: "Tracing Needle",
},
{
"@type": "Thing",
name: "Northern Tower",
},
{
"@type": "Thing",
name: "The Sorcerer",
},
{
"@type": "Thing",
name: "Mystic Seal",
},
{
"@type": "Thing",
name: "Beast of Enmity",
},
{
"@type": "Thing",
name: "Cradle the Phoenix",
},
{
"@type": "Thing",
name: "Demise",
},
{
"@type": "Thing",
name: "The Adventures of Elliot cats",
},
{
"@type": "Thing",
name: "The Adventures of Elliot Shards of Life",
},
{
"@type": "Thing",
name: "The Adventures of Elliot manuscripts",
},
{
"@type": "Thing",
name: "The Adventures of Elliot map markers",
},
{
"@type": "Thing",
name: "The Adventures of Elliot achievements",
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
       title="The Adventures of Elliot Walkthrough: 100% Route Planner"
       description="Plan the full story route, ending saves, blocked-route decisions, 100% cleanup windows, True Ending clear-save checks and final-route preparation."
       gameTitle="The Adventures of Elliot"
       gameHref="/the-adventures-of-elliot"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 20, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <WalkthroughContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
