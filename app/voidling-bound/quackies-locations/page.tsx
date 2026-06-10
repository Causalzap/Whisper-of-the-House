import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import QuackiesLocationsContent from "@/data/voidling-bound/quackies-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/voidling-bound/quackies-locations`;

const imageUrls = [
    `${siteUrl}/images/voidling-bound/voidling-bound-faint-signal-canary-quacky-location.webp`,
    `${siteUrl}/images/voidling-bound/voidling-bound-centennial-bloom-red-quacky-location.webp`,
    `${siteUrl}/images/voidling-bound/voidling-bound-search-and-rescue-bronze-quacky-location.webp`,
    `${siteUrl}/images/voidling-bound/voidling-bound-subterranean-expedition-beige-quacky-location.webp`,
    `${siteUrl}/images/voidling-bound/voidling-bound-stay-on-track-mirage-quacky-location.webp`,
    `${siteUrl}/images/voidling-bound/voidling-bound-navigate-the-maze-quicky-quacky-location.webp`,
    `${siteUrl}/images/voidling-bound/voidling-bound-on-the-brink-of-ruin-fancy-quacky-location.webp`,
    `${siteUrl}/images/voidling-bound/voidling-bound-end-to-the-unknown-the-dark-entity-quacky-location.webp`,
];
    

const toc = [
{
id: "voidling-bound-quackies-mini-wiki",
label: "Quackies mini-wiki",
},
{ id: "how-quackies-work", label: "How Quackies work" },
{ id: "all-quackies-checklist", label: "All Quackies checklist" },
{ id: "vireo-quackies", label: "Vireo Quackies" },
{ id: "solum-quackies", label: "Solum Quackies" },
{ id: "aulis-quackies", label: "Aulis Quackies" },
{ id: "the-abyss-quacky", label: "The Abyss Quacky" },
{ id: "hardest-quackies-to-miss", label: "Hardest Quackies" },
{ id: "best-quacky-cleanup-route", label: "Cleanup route" },
{ id: "common-quacky-mistakes", label: "Mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/voidling-bound",
label: "Voidling Bound Guide Hub",
},
{
href: "/voidling-bound/all-collectibles",
label: "All Collectibles Guide",
},
{
href: "/voidling-bound/golden-egg-locations",
label: "Golden Egg Locations Guide",
},
{
href: "/voidling-bound/mutagen-research-points-farm",
label: "Mutagen and Research Points Farm Guide",
},
{
href: "/voidling-bound/evolution-breeding-splicing-guide",
label: "Evolution, Breeding, and Splicing Guide",
},
{
href: "/voidling-bound/beginner-guide",
label: "Voidling Bound Beginner Guide",
},
];

export const metadata: Metadata = {
title: "Voidling Bound Quackies: Locations, Names & Checklist",
description:
"Find all 26 Voidling Bound Quackies with mission checklist, names, colors, landmarks, hardest misses, and cleanup route for Vireo, Solum, Aulis, and Abyss.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Voidling Bound Quackies Locations, Names, Colors and Checklist",
description:
"Use this Voidling Bound Quackies mini-wiki to track all 26 hidden Quackies by system, mission, name, color cue, landmark, difficulty, and cleanup route.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Voidling Bound Canary Quacky location in Faint Signal.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Voidling Bound Quackies Checklist",
description:
"Track all 26 Quackies by mission, name, color, landmark, and cleanup difficulty.",
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
name: "Voidling Bound Guide",
item: `${siteUrl}/voidling-bound`,
},
{
"@type": "ListItem",
position: 3,
name: "Voidling Bound Quackies Locations, Names, and Checklist",
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
headline: "Voidling Bound Quackies Locations, Names, Colors and Checklist",
description:
"A mini-wiki style Voidling Bound Quackies guide covering all 26 hidden Quackies across Vireo, Solum, Aulis, and The Abyss. The guide lists every Quacky by system, mission, name, color cue, main landmark, cleanup difficulty, practical location cue, hardest misses, recommended cleanup order, and common mistakes, including Canary Quacky, Violet Quacky, Red Quacky, Bronze Quacky, Mirage Quacky, Quicky Quacky, Fancy Quacky, Oxblood Quacky, and The Dark Entity Quacky.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-10",
dateModified: "2026-06-10",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Voidling Bound" },
{ "@type": "Thing", name: "Voidling Bound Quackies" },
{ "@type": "Thing", name: "Voidling Bound Quacky locations" },
{ "@type": "Thing", name: "Voidling Bound Quacky checklist" },
{ "@type": "Thing", name: "Voidling Bound all Quackies" },
{ "@type": "Thing", name: "Voidling Bound Quacky names" },
{ "@type": "Thing", name: "Voidling Bound Quacky colors" },
{ "@type": "Thing", name: "Voidling Bound Vireo Quackies" },
{ "@type": "Thing", name: "Voidling Bound Solum Quackies" },
{ "@type": "Thing", name: "Voidling Bound Aulis Quackies" },
{ "@type": "Thing", name: "Voidling Bound The Abyss Quacky" },
{ "@type": "Thing", name: "Canary Quacky" },
{ "@type": "Thing", name: "Violet Quacky" },
{ "@type": "Thing", name: "Brown Quacky" },
{ "@type": "Thing", name: "Red Quacky" },
{ "@type": "Thing", name: "Blue Quacky" },
{ "@type": "Thing", name: "Dark Quacky" },
{ "@type": "Thing", name: "Cute Quacky" },
{ "@type": "Thing", name: "Pyro Quacky" },
{ "@type": "Thing", name: "Amber Quacky" },
{ "@type": "Thing", name: "Green Quacky" },
{ "@type": "Thing", name: "Bronze Quacky" },
{ "@type": "Thing", name: "White Quacky" },
{ "@type": "Thing", name: "Silver Quacky" },
{ "@type": "Thing", name: "Beige Quacky" },
{ "@type": "Thing", name: "Aquacky" },
{ "@type": "Thing", name: "Banana Quacky" },
{ "@type": "Thing", name: "Night Quacky" },
{ "@type": "Thing", name: "Cursed Quacky" },
{ "@type": "Thing", name: "Mirage Quacky" },
{ "@type": "Thing", name: "Toxic Quacky" },
{ "@type": "Thing", name: "Quicky Quacky" },
{ "@type": "Thing", name: "Deepwater Quacky" },
{ "@type": "Thing", name: "Poltergeist Quacky" },
{ "@type": "Thing", name: "Fancy Quacky" },
{ "@type": "Thing", name: "Oxblood Quacky" },
{ "@type": "Thing", name: "The Dark Entity Quacky" },
],
publisher: {
"@type": "Organization",
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
name: "How many Quackies are in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"There are 26 Quackies in this checklist: 10 in Vireo, 8 in Solum, 7 in Aulis, and 1 in The Abyss.",
},
},
{
"@type": "Question",
name: "What do Quackies do in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Quackies are hidden duck collectibles. After you collect them, they appear on your ship as part of your collection.",
},
},
{
"@type": "Question",
name: "Are Quackies power upgrades?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Quackies are completion collectibles. Farm Mutagens and Research Points first if your build still needs power.",
},
},
{
"@type": "Question",
name: "Does every mission have a Quacky?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use each mission as if it has one hidden Quacky. The checklist maps each mission to its Quacky name, look, and main landmark.",
},
},
{
"@type": "Question",
name: "What is the easiest Quacky to find first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Canary Quacky in Faint Signal is the best first target because the mission-end arena is a clear landmark.",
},
},
{
"@type": "Question",
name: "What is the easiest Vireo Quacky to miss?",
acceptedAnswer: {
"@type": "Answer",
text:
"Centennial Bloom's Red Quacky is easy to miss if you stay on the lower garden path and skip the high plant route.",
},
},
{
"@type": "Question",
name: "What is the easiest Solum Quacky to miss?",
acceptedAnswer: {
"@type": "Answer",
text:
"Subterranean Expedition's Beige Quacky is easy to miss because it blends into cave walls and pale terrain around the fire-crystal and ice-blockage route.",
},
},
{
"@type": "Question",
name: "What is the easiest Aulis Quacky to miss?",
acceptedAnswer: {
"@type": "Answer",
text:
"Navigate the Maze's Quicky Quacky is one of the easiest Aulis Quackies to miss because it sits away from the obvious path on a lower side platform.",
},
},
{
"@type": "Question",
name: "Where is Mirage Quacky?",
acceptedAnswer: {
"@type": "Answer",
text:
"Mirage Quacky is in Stay on Track. Check the cliff-side platform near the right rock wall and the large blue-green leaf cluster.",
},
},
{
"@type": "Question",
name: "Where is Toxic Quacky?",
acceptedAnswer: {
"@type": "Answer",
text:
"Toxic Quacky is in Storm Breaker. Check the red pond side area and nearby ledges after the upper route opens.",
},
},
{
"@type": "Question",
name: "Where is Poltergeist Quacky?",
acceptedAnswer: {
"@type": "Answer",
text:
"Poltergeist Quacky is in Machine Non Grata. Search machinery-side ledges, route edges, and platform corners.",
},
},
{
"@type": "Question",
name: "Where is The Dark Entity Quacky?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Dark Entity Quacky is in End to the Unknown. Search dark cave-like side floor spaces near large rock walls before leaving.",
},
},
{
"@type": "Question",
name: "Should I collect Quackies during timer routes?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually no. Timer routes reward speed, while Quacky cleanup requires slow side checks.",
},
},
{
"@type": "Question",
name: "What should I read next after the Quackies guide?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the All Collectibles Guide for full cleanup, the Golden Egg Locations Guide for secret Voidlings, or return to the Voidling Bound guide hub.",
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
       title="Track Every Quacky by Mission, Name, Color, and Landmark"
       description="Use this Voidling Bound Quackies mini-wiki to find all 26 hidden duck collectibles across Vireo, Solum, Aulis, and The Abyss."
       gameTitle="Voidling Bound"
       gameHref="/voidling-bound"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 10, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <QuackiesLocationsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
