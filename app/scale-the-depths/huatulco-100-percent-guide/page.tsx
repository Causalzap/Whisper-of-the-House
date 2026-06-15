import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HuatulcoContent from "@/data/scale-the-depths/huatulco-100-percent-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scale-the-depths/huatulco-100-percent-guide`;

const imageUrls = [
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-door-puzzle-sw-annotated.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-door-puzzle-se-annotated.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-door-puzzle-south-annotated.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-boat-blueprint.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-quetzalcoatl-statue.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-red-switch.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-aztec-sun-stone.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-shark-tooth-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-yellow-switch.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-cosmetic-2-annotated.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-pouch-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-boat-decal.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-hoga-location-annotated.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-hoga-prep.webp`,
];

const toc = [
{ id: "huatulco-100-route", label: "100% route" },
{ id: "door-puzzle", label: "Door puzzle" },
{ id: "opening-pickups", label: "Opening pickups" },
{ id: "artifacts-baits", label: "Artifacts and baits" },
{ id: "switches-shortcuts", label: "Switches" },
{ id: "cosmetic-2", label: "Cosmetic 2" },
{ id: "late-pickups", label: "Late pickups" },
{ id: "hoga-location", label: "Hoga location" },
{ id: "hoga", label: "How to catch Hoga" },
{ id: "hoga-prep", label: "Hoga prep" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "final-check", label: "Final check" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/scale-the-depths/artifacts-guide",
    label: "Scale the Depths Artifacts Guide",
  },
{
href: "/scale-the-depths",
label: "Scale the Depths Complete Guide",
},
{
href: "/scale-the-depths/achievement-guide",
label: "Scale the Depths Achievement Guide",
},
{
href: "/scale-the-depths/all-collectibles-secrets",
label: "All Collectibles and Secrets Guide",
},
{
href: "/scale-the-depths/point-nemo-100-percent-guide",
label: "Point Nemo 100% Guide",
},
{
href: "/scale-the-depths/outer-banks-100-percent-guide",
label: "Outer Banks 100% Guide",
},
{
href: "/scale-the-depths/loch-ness-100-percent-guide",
label: "Loch Ness 100% Guide",
},
];

export const metadata: Metadata = {
title: "Scale the Depths Huatulco 100% Guide",
description:
"Solve Huatulco door puzzles, find Shark Tooth, Pouch, Quetzalcoatl Statue, boat decal, cosmetics and catch Hoga in Scale the Depths.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Scale the Depths Huatulco 100% Guide: Door Puzzle, Hoga, Baits and Artifacts",
description:
"Clear Huatulco with the full pressure plate route, Quetzalcoatl Statue, Shark Tooth, Pouch, boat decal, cosmetics and Hoga prep.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Scale the Depths Huatulco door puzzle showing the block pushed to the southwest pressure plate.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Scale the Depths Huatulco 100% Guide",
description:
"Find every key Huatulco item, solve the pressure plate doors and catch Hoga without missing Shark Tooth, Pouch or the boat decal.",
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
name: "Scale the Depths Guide",
item: `${siteUrl}/scale-the-depths`,
},
{
"@type": "ListItem",
position: 3,
name: "Huatulco 100% Guide",
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
"Scale the Depths Huatulco 100% Guide: Door Puzzle, Hoga, Artifacts, Baits, Boat Decal and Cosmetics",
description:
"A player-focused Scale the Depths Huatulco guide explaining how to clear the 100% route, solve the pressure plate door puzzles, collect the boat blueprint, Quetzalcoatl Statue, Rubber Ball, Aztec Sun Stone, Coffee Cup, Shark Tooth bait, Pouch bait, boat decal, cosmetics, red switch, yellow switch and blue switches, find Hoga in the final deep route, catch the Huatulco legendary fish and prep Hoga carefully for completion.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-31",
dateModified: "2026-06-01",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Scale the Depths" },
{ "@type": "Thing", name: "Huatulco" },
{ "@type": "Thing", name: "Huatulco 100% completion" },
{ "@type": "Thing", name: "Huatulco door puzzle" },
{ "@type": "Thing", name: "Pressure plate puzzle" },
{ "@type": "Thing", name: "Quetzalcoatl Statue" },
{ "@type": "Thing", name: "Rubber Ball" },
{ "@type": "Thing", name: "Aztec Sun Stone" },
{ "@type": "Thing", name: "Coffee Cup" },
{ "@type": "Thing", name: "Shark Tooth bait" },
{ "@type": "Thing", name: "Pouch bait" },
{ "@type": "Thing", name: "Boat decal" },
{ "@type": "Thing", name: "Hoga" },
{ "@type": "Thing", name: "Legendary fish" },
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
name: "What should I do if the Huatulco door does not open?",
acceptedAnswer: {
"@type": "Answer",
text:
"First check whether the block is fully centered on the pressure plate. If it is only touching the edge, the door may not trigger. If it still does not open, check whether the room wants a different plate direction: southwest, southeast, straight south or west.",
},
},
{
"@type": "Question",
name: "Where is the Quetzalcoatl Statue?",
acceptedAnswer: {
"@type": "Answer",
text:
"Quetzalcoatl Statue is after the early pressure plate route, in the first major artifact pocket after the straight-south door step.",
},
},
{
"@type": "Question",
name: "Where is Shark Tooth bait?",
acceptedAnswer: {
"@type": "Answer",
text:
"Shark Tooth is in the dense middle route near the Aztec Sun Stone. If you find the Aztec Sun Stone, slow down and check the nearby path before moving to the Yellow Switch.",
},
},
{
"@type": "Question",
name: "Where is Pouch bait?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pouch is in the late route after the Coffee Cup artifact, before the boat decal and cloth chest. If you went straight to Hoga without collecting it, retrace the late collection route.",
},
},
{
"@type": "Question",
name: "Where is Cosmetic 2 in Huatulco?",
acceptedAnswer: {
"@type": "Answer",
text:
"Cosmetic 2 is after the Yellow Switch and before Blue Switch 1/2. Check the side pocket off the shortcut route before following the main path toward the blue switch chain.",
},
},
{
"@type": "Question",
name: "Where is Hoga?",
acceptedAnswer: {
"@type": "Answer",
text:
"Hoga is in the final deep Huatulco route after the pressure plate puzzle chain and late collection path. Clear Pouch, the boat decal and the cloth chest before treating Hoga as your final target.",
},
},
{
"@type": "Question",
name: "How do I catch Hoga?",
acceptedAnswer: {
"@type": "Answer",
text:
"Hoga moves in wider arcs than normal fish and is less forgiving if your hook or line is weak. Stay ahead of its movement path instead of chasing every turn, and upgrade hook or line if the fight takes too long.",
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
/> <GuideArticlePage
       title="How Do You 100% Huatulco?"
       description="Solve the pressure plate doors, grab Shark Tooth and Pouch, find the boat decal and cosmetics, then catch and prep Hoga without missing the late-route items."
       gameTitle="Scale the Depths"
       gameHref="/scale-the-depths"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 1, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <HuatulcoContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
