import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllCollectiblesGuideContent from "@/data/voidling-bound/all-collectibles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/voidling-bound/all-collectibles`;

const imageUrls = [
`${siteUrl}/images/voidling-bound/voidling-bound-centennial-bloom-mutagen-cleanup.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-atlas-terminal-mission-replay.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-centennial-bloom-golden-egg-cliff.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-secret-stronghold-mutagen-route.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-navigate-the-maze-mutagen-cleanup.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-centennial-bloom-quacky.webp`,
];

const toc = [
{ id: "voidling-bound-all-collectibles-guide", label: "All collectibles" },
{ id: "collectible-types", label: "Collectible types" },
{ id: "mutagen-type-lookup", label: "Mutagen lookup" },
{ id: "calculate-mutagen-gap", label: "Mutagen gap" },
{ id: "atlas-terminal-cleanup", label: "Atlas replay" },
{ id: "vireo-collectibles", label: "Vireo checklist" },
{ id: "solum-collectibles", label: "Solum checklist" },
{ id: "aulis-collectibles", label: "Aulis checklist" },
{ id: "end-to-the-unknown-collectibles", label: "End to Unknown" },
{ id: "golden-egg-hatch-results", label: "Egg hatch results" },
{ id: "quacky-rewards", label: "Quacky rewards" },
{ id: "recommended-cleanup-route", label: "Cleanup route" },
{ id: "common-mistakes", label: "Mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/voidling-bound",
label: "Voidling Bound Guide Hub",
},
{
  href: "/voidling-bound/breeding-guide",
  label: "Voidling Bound Breeding Guide",
},
{
href: "/voidling-bound/beginner-guide",
label: "Voidling Bound Beginner Guide",
},
{
href: "/voidling-bound/evolution-breeding-splicing-guide",
label: "Evolution, Breeding, and Splicing Guide",
},
{
href: "/voidling-bound/golden-egg-locations",
label: "Golden Egg Locations Guide",
},
{
href: "/voidling-bound/quackies-locations",
label: "Quacky Locations Guide",
},
{
href: "/voidling-bound/mutagen-research-points-farm",
label: "Mutagen and Research Points Farm",
},
];

export const metadata: Metadata = {
title: "Voidling Bound Collectibles: Mutagens, Eggs & Quackies",
description:
"Find every Mutagen, Golden Egg, and Quacky in Voidling Bound with element lookup, hatch results, Vireo/Solum/Aulis route cues, and replay cleanup tips.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Voidling Bound All Collectibles Guide: Mutagens, Golden Eggs, Quackies and Hatch Results",
description:
"Clean up Voidling Bound collectibles with Mutagen type lookup, Golden Egg hatch results, Quacky collection notes, Atlas Terminal replay advice, and mission-by-mission route cues for Vireo, Solum, Aulis, and End to the Unknown.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Voidling Bound Centennial Bloom Organic Pyro Cryo Mutagen locations and cleanup route.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Voidling Bound All Collectibles Guide",
description:
"Use Mutagen element lookup, Golden Egg hatch results, Quacky rewards, and mission route cues to clean up Voidling Bound collectibles.",
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
name: "Voidling Bound All Collectibles Guide",
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
"Voidling Bound All Collectibles Guide: Mutagen Types, Golden Egg Hatch Results, Quackies and Mission Cleanup",
description:
"A player-focused Voidling Bound all collectibles guide covering how to prioritize Mutagens, Golden Eggs, Quackies, and time stars; how to use the Evolution Chamber to identify your Mutagen gap; where to farm Organic, Pyro, Cryo, Cyber, and Plasma Mutagens; why Navigate the Maze is the best mixed-element cleanup mission; how to use the Atlas Terminal for replay; where to look in Vireo, Solum, Aulis, and End to the Unknown; what Golden Eggs hatch into; and when Quackies are worth collecting for completion and ship-side display.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-10",
dateModified: "2026-06-10",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Voidling Bound" },
{ "@type": "Thing", name: "Voidling Bound all collectibles" },
{ "@type": "Thing", name: "Voidling Bound Mutagen locations" },
{ "@type": "Thing", name: "Voidling Bound Organic Mutagen" },
{ "@type": "Thing", name: "Voidling Bound Pyro Mutagen" },
{ "@type": "Thing", name: "Voidling Bound Cryo Mutagen" },
{ "@type": "Thing", name: "Voidling Bound Cyber Mutagen" },
{ "@type": "Thing", name: "Voidling Bound Plasma Mutagen" },
{ "@type": "Thing", name: "Voidling Bound Golden Egg locations" },
{ "@type": "Thing", name: "Voidling Bound Golden Egg hatch results" },
{ "@type": "Thing", name: "Voidling Bound Quackies" },
{ "@type": "Thing", name: "Voidling Bound Quacky locations" },
{ "@type": "Thing", name: "Voidling Bound Atlas Terminal replay" },
{ "@type": "Thing", name: "Voidling Bound Evolution Chamber" },
{ "@type": "Thing", name: "Voidling Bound Vireo collectibles" },
{ "@type": "Thing", name: "Voidling Bound Solum collectibles" },
{ "@type": "Thing", name: "Voidling Bound Aulis collectibles" },
{ "@type": "Thing", name: "Voidling Bound Navigate the Maze Mutagens" },
{ "@type": "Thing", name: "Qwebeck Kwipeck" },
{ "@type": "Thing", name: "Experimental Gwigoon" },
{ "@type": "Thing", name: "Telluric Gilick" },
{ "@type": "Thing", name: "Charcoal Kerapin" },
{ "@type": "Thing", name: "Galvanic Ur-Sek" },
{ "@type": "Thing", name: "Hellfire Packuran" },
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
name: "What collectible should I prioritize first in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Prioritize Mutagens first if your next evolution node is blocked. Then collect Golden Eggs for secret Voidlings, and save Quackies for completion cleanup.",
},
},
{
"@type": "Question",
name: "Where should I farm Organic Mutagens in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start with Centennial Bloom, Cleaning the Eyrie, and Navigate the Maze. Use the Mutagen type lookup table on this page for route cues.",
},
},
{
"@type": "Question",
name: "Where should I farm Pyro Mutagens in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check Centennial Bloom, Storm Breaker, and Navigate the Maze first. Use the Mutagen type lookup table for route cues by element.",
},
},
{
"@type": "Question",
name: "Where should I farm Cryo Mutagens in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Secret Stronghold, Subterranean Expedition, and Navigate the Maze are the best missions to check first.",
},
},
{
"@type": "Question",
name: "Where should I farm Cyber Mutagens in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start with Secret Stronghold, Navigate the Maze, and Pull the Plug. Check stronghold structures, machinery routes, antenna areas, and electric-looking Elemental Rifts.",
},
},
{
"@type": "Question",
name: "Where should I farm Plasma Mutagens in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Navigate the Maze, Pull the Plug, and End to the Unknown are the best late-game checks for Plasma-focused cleanup.",
},
},
{
"@type": "Question",
name: "How do I know which Mutagen I need?",
acceptedAnswer: {
"@type": "Answer",
text:
"Open the Evolution Chamber, choose the Voidling you are building, and check the next locked evolution node. Farm the element required by that node.",
},
},
{
"@type": "Question",
name: "Is Navigate the Maze good for Mutagen farming?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Navigate the Maze is the best mixed-element cleanup mission because it can cover all five Mutagen types in one replay route, but it is better after your build is stable.",
},
},
{
"@type": "Question",
name: "Are Golden Eggs worth collecting early in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Golden Eggs hatch secret Voidlings, and some variants may become useful later for traits, perks, or Splicing plans.",
},
},
{
"@type": "Question",
name: "What does the Centennial Bloom Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Centennial Bloom Golden Egg hatches Qwebeck Kwipeck, one of the earliest secret Voidlings you can collect.",
},
},
{
"@type": "Question",
name: "What does the Secret Stronghold Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"Secret Stronghold has two Golden Eggs. They hatch Experimental Gwigoon and Telluric Gilick.",
},
},
{
"@type": "Question",
name: "What does the Navigate the Maze Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"Navigate the Maze has two Golden Eggs. They hatch Golden Nugget Kwipeck and Hellfire Packuran.",
},
},
{
"@type": "Question",
name: "Are Quackies useful for builds?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Quackies are mainly for completion and ship-side collection display. They are worth collecting, but they do not replace Mutagens for power progression.",
},
},
{
"@type": "Question",
name: "Should I collect everything during a time-star run?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually no. Hidden collectible routes and timer routes often conflict. Do the time star separately after you know the mission layout.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the Golden Egg Locations Guide for secret Voidlings, the Quacky Locations Guide for hidden ducks, or return to the Voidling Bound guide hub.",
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
       title="Find Mutagens, Golden Eggs, and Quackies Without Blind Replays"
       description="Use element lookup, hatch results, mission route cues, and replay priorities to clean up Voidling Bound collectibles faster."
       gameTitle="Voidling Bound"
       gameHref="/voidling-bound"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 10, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <AllCollectiblesGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
