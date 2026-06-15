import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GoldenEggLocationsContent from "@/data/voidling-bound/golden-egg-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/voidling-bound/golden-egg-locations`;

const imageUrls = [
`${siteUrl}/images/voidling-bound/voidling-bound-centennial-bloom-golden-egg-cliff.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-secret-stronghold-antenna-building-golden-egg.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-search-and-rescue-left-path-golden-egg.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-subterranean-expedition-ice-door-golden-egg.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-navigate-the-maze-start-golden-egg.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-end-to-the-unknown-mountain-golden-egg.webp`,
];

const toc = [
{ id: "voidling-bound-golden-egg-locations", label: "Golden Egg guide" },
{ id: "all-golden-eggs-table", label: "All eggs table" },
{ id: "golden-egg-cleanup-rules", label: "Cleanup rules" },
{ id: "centennial-bloom-golden-egg", label: "Centennial Bloom" },
{ id: "secret-stronghold-golden-eggs", label: "Secret Stronghold" },
{ id: "search-and-rescue-golden-eggs", label: "Search and Rescue" },
{ id: "cleaning-the-eyrie-golden-eggs", label: "Cleaning the Eyrie" },
{ id: "subterranean-expedition-golden-egg", label: "Subterranean Expedition" },
{ id: "storm-breaker-golden-egg", label: "Storm Breaker" },
{ id: "navigate-the-maze-golden-eggs", label: "Navigate the Maze" },
{ id: "pull-the-plug-golden-eggs", label: "Pull the Plug" },
{ id: "end-to-the-unknown-golden-eggs", label: "End to the Unknown" },
{ id: "golden-egg-hatch-results", label: "Hatch results" },
{ id: "best-cleanup-route", label: "Cleanup route" },
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
href: "/voidling-bound/all-collectibles",
label: "All Collectibles Guide",
},
{
href: "/voidling-bound/evolution-breeding-splicing-guide",
label: "Evolution, Breeding, and Splicing Guide",
},
{
href: "/voidling-bound/beginner-guide",
label: "Voidling Bound Beginner Guide",
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
title: "Voidling Bound Golden Egg Locations & Hatch Results",
description:
"Find every Voidling Bound Golden Egg with route cues, hatch results like Qwebeck Kwipeck and Hellfire Packuran, return-to-ship tips, and cleanup advice.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Voidling Bound Golden Egg Locations and Hatch Results",
description:
"Find every Golden Egg in Voidling Bound with mission route cues, secret Voidling hatch results, return-to-ship cleanup advice, and reward details for Qwebeck Kwipeck, Experimental Gwigoon, Charcoal Kerapin, Hellfire Packuran, and more.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Voidling Bound Centennial Bloom Golden Egg location upper cliff route Qwebeck Kwipeck.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Voidling Bound Golden Egg Locations",
description:
"Use mission route cues, hatch results, and return-to-ship tips to collect every Golden Egg in Voidling Bound.",
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
name: "Voidling Bound Golden Egg Locations",
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
"Voidling Bound Golden Egg Locations and Hatch Results",
description:
"A player-focused Voidling Bound Golden Egg guide covering every known Golden Egg route, mission location cue, secret Voidling hatch result, return-to-ship cleanup advice, and Golden Egg reward from Centennial Bloom through End to the Unknown. Includes Qwebeck Kwipeck, Experimental Gwigoon, Telluric Gilick, Andromeda Gilick, Charcoal Kerapin, Arcing Gwigoon, Galvanic Ur-Sek, Transcendent Anami, Argon Anami, Golden Nugget Kwipeck, Hellfire Packuran, Chthonian Morfang, Heavenly Packuran, and Locust Packuran.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-10",
dateModified: "2026-06-10",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Voidling Bound" },
{ "@type": "Thing", name: "Voidling Bound Golden Egg locations" },
{ "@type": "Thing", name: "Voidling Bound Golden Egg hatch results" },
{ "@type": "Thing", name: "Voidling Bound secret Voidlings" },
{ "@type": "Thing", name: "Voidling Bound Centennial Bloom Golden Egg" },
{ "@type": "Thing", name: "Voidling Bound Secret Stronghold Golden Egg" },
{ "@type": "Thing", name: "Voidling Bound Search and Rescue Golden Egg" },
{ "@type": "Thing", name: "Voidling Bound Cleaning the Eyrie Golden Egg" },
{ "@type": "Thing", name: "Voidling Bound Subterranean Expedition Golden Egg" },
{ "@type": "Thing", name: "Voidling Bound Storm Breaker Golden Egg" },
{ "@type": "Thing", name: "Voidling Bound Navigate the Maze Golden Egg" },
{ "@type": "Thing", name: "Voidling Bound Pull the Plug Golden Egg" },
{ "@type": "Thing", name: "Voidling Bound End to the Unknown Golden Egg" },
{ "@type": "Thing", name: "Qwebeck Kwipeck" },
{ "@type": "Thing", name: "Experimental Gwigoon" },
{ "@type": "Thing", name: "Telluric Gilick" },
{ "@type": "Thing", name: "Andromeda Gilick" },
{ "@type": "Thing", name: "Charcoal Kerapin" },
{ "@type": "Thing", name: "Arcing Gwigoon" },
{ "@type": "Thing", name: "Galvanic Ur-Sek" },
{ "@type": "Thing", name: "Transcendent Anami" },
{ "@type": "Thing", name: "Argon Anami" },
{ "@type": "Thing", name: "Golden Nugget Kwipeck" },
{ "@type": "Thing", name: "Hellfire Packuran" },
{ "@type": "Thing", name: "Chthonian Morfang" },
{ "@type": "Thing", name: "Heavenly Packuran" },
{ "@type": "Thing", name: "Locust Packuran" },
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
name: "What do Golden Eggs do in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Golden Eggs hatch secret Voidlings outside the normal genetic tree. These variants can have rare Natures, unusual traits, unique looks, and future Splicing value.",
},
},
{
"@type": "Question",
name: "Can I return to the ship after grabbing a Golden Egg?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. If the Golden Egg is your only goal, grab it and return to the ship instead of forcing a full mission clear.",
},
},
{
"@type": "Question",
name: "Should I release Golden Egg Voidlings?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not immediately. Hatch them, inspect their Nature, stats, traits, and possible Splicing value first.",
},
},
{
"@type": "Question",
name: "What does the Centennial Bloom Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Centennial Bloom Golden Egg hatches Qwebeck Kwipeck.",
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
name: "What does the Search and Rescue Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"Search and Rescue has two Golden Eggs. They hatch Andromeda Gilick and Charcoal Kerapin.",
},
},
{
"@type": "Question",
name: "What does the Cleaning the Eyrie Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"Cleaning the Eyrie has two Golden Eggs. They hatch Arcing Gwigoon and Galvanic Ur-Sek.",
},
},
{
"@type": "Question",
name: "What does the Subterranean Expedition Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Subterranean Expedition Golden Egg hatches Transcendent Anami.",
},
},
{
"@type": "Question",
name: "What does the Storm Breaker Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Storm Breaker Golden Egg hatches Argon Anami.",
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
name: "What does the Pull the Plug Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pull the Plug has two Golden Eggs. They hatch Chthonian Morfang and Heavenly Packuran.",
},
},
{
"@type": "Question",
name: "What does the End to the Unknown Golden Egg hatch?",
acceptedAnswer: {
"@type": "Answer",
text:
"End to the Unknown has two Golden Eggs. They hatch Locust Packuran and Galvanic Ur-Sek.",
},
},
{
"@type": "Question",
name: "Should I collect Golden Eggs during timer runs?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually no. Golden Egg routes often pull you away from the fastest objective path, so it is better to separate timer runs from egg cleanup.",
},
},
{
"@type": "Question",
name: "What should I read next after the Golden Egg guide?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the All Collectibles Guide for Mutagens and Quackies, the Evolution, Breeding, and Splicing Guide for long-term build planning, or return to the Voidling Bound guide hub.",
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
       title="Find Every Golden Egg and Know What It Hatches"
       description="Use mission route cues, hatch results, and return-to-ship tips to collect every Voidling Bound Golden Egg without replaying blindly."
       gameTitle="Voidling Bound"
       gameHref="/voidling-bound"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 10, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <GoldenEggLocationsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
