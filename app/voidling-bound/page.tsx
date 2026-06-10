import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import VoidlingBoundContent from "@/data/voidling-bound/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/voidling-bound`;

const imageUrls = [
`${siteUrl}/images/voidling-bound/voidling-bound-first-voidling-attributes-kwipeck.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-evolution-chamber-mutagen-path.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-atlas-terminal-mission-replay.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-centennial-bloom-golden-egg-cliff.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-pheromone-nest-breeding.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-splicing-station-mutated-perks.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-catalyzer-injector.webp`,
];

const toc = [
{ id: "voidling-bound-guide", label: "Guide overview" },
{ id: "voidling-bound-guides", label: "Guide list" },
{ id: "what-to-do-first", label: "What to do first" },
{ id: "difficulty-and-first-stats", label: "Difficulty & stats" },
{ id: "core-progression-systems", label: "Core systems" },
{ id: "evolution-chamber", label: "Evolution Chamber" },
{ id: "cerebrum-enhancer", label: "Cerebrum Enhancer" },
{ id: "atlas-terminal", label: "Atlas Terminal" },
{ id: "resource-priority", label: "Resource priority" },
{
id: "golden-eggs-and-secret-voidlings",
label: "Golden Eggs",
},
{
id: "quackies-and-collectibles",
label: "Quackies & collectibles",
},
{
id: "breeding-and-pheromone-nest",
label: "Breeding",
},
{ id: "splicing", label: "Splicing" },
{
id: "builds-and-abyss-preview",
label: "Builds & Abyss",
},
{ id: "common-mistakes", label: "Mistakes" },
{ id: "what-will-expand-later", label: "Future guides" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/voidling-bound/beginner-guide",
label: "Voidling Bound Beginner Guide",
},
{
href: "/voidling-bound/evolution-breeding-splicing-guide",
label: "Evolution, Breeding, and Splicing Guide",
},
{
href: "/voidling-bound/mutagen-research-points-farm",
label: "Mutagen and Research Points Farm Guide",
},
{
href: "/voidling-bound/golden-egg-locations",
label: "Golden Egg Locations Guide",
},
{
href: "/voidling-bound/quackies-locations",
label: "Quackies Locations and Checklist",
},
{
href: "/voidling-bound/all-collectibles",
label: "All Collectibles Guide",
},
];

export const metadata: Metadata = {
title: "Voidling Bound Guide: Beginner Tips, Mutagens & Eggs",
description:
"Start Voidling Bound with beginner tips, Kwipeck stats, Mutagens, Research Points, Evolution, Golden Eggs, Quackies, Breeding, Splicing, and Abyss prep.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Voidling Bound Guide: Beginner Tips, Mutagens, Golden Eggs and Quackies",
description:
"Use this Voidling Bound guide hub to start safely, understand Mutagens and Research Points, unlock Evolution, collect Golden Eggs and Quackies, and prepare for Breeding, Splicing, Catalyzers, and Abyss runs.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Voidling Bound Kwipeck first Voidling attributes screen.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Voidling Bound Guide Hub",
description:
"Start safely, upgrade Kwipeck, farm Mutagens and Research Points, collect Golden Eggs and Quackies, and prepare for later systems.",
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
"Voidling Bound Guide: Beginner Tips, Mutagens, Golden Eggs and Quackies",
description:
"A Voidling Bound guide hub covering beginner progression, Kwipeck, first stat choices, Mutagens, Research Points, the Evolution Chamber, the Cerebrum Enhancer, the Atlas Terminal, mission replay, Golden Eggs, secret Voidlings, Quackies, all collectibles, Breeding, the Pheromone Nest, Splicing, Catalyzers, Abyss preparation, common mistakes, and the best order to read deeper guide pages.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-10",
dateModified: "2026-06-10",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Voidling Bound" },
{ "@type": "Thing", name: "Voidling Bound beginner guide" },
{ "@type": "Thing", name: "Voidling Bound tips" },
{ "@type": "Thing", name: "Voidling Bound Kwipeck" },
{ "@type": "Thing", name: "Voidling Bound first stats" },
{ "@type": "Thing", name: "Voidling Bound Mutagens" },
{ "@type": "Thing", name: "Voidling Bound Research Points" },
{ "@type": "Thing", name: "Voidling Bound Evolution Chamber" },
{ "@type": "Thing", name: "Voidling Bound Cerebrum Enhancer" },
{ "@type": "Thing", name: "Voidling Bound Atlas Terminal" },
{ "@type": "Thing", name: "Voidling Bound mission replay" },
{ "@type": "Thing", name: "Voidling Bound Golden Eggs" },
{ "@type": "Thing", name: "Voidling Bound secret Voidlings" },
{ "@type": "Thing", name: "Voidling Bound Quackies" },
{ "@type": "Thing", name: "Voidling Bound collectibles" },
{ "@type": "Thing", name: "Voidling Bound Breeding" },
{ "@type": "Thing", name: "Voidling Bound Pheromone Nest" },
{ "@type": "Thing", name: "Voidling Bound Splicing" },
{ "@type": "Thing", name: "Voidling Bound Catalyzers" },
{ "@type": "Thing", name: "Voidling Bound Abyss" },
{ "@type": "Thing", name: "Voidling Bound Void Strikes" },
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
name: "What should I do first in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pick a comfortable difficulty, bind with Kwipeck, clear the first mission, use Mutagens at the Evolution Chamber, and spend Research Points at the Cerebrum Enhancer.",
},
},
{
"@type": "Question",
name: "Which difficulty should I pick first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pick the difficulty that lets you learn combat without getting punished every mission. Start easier if you mainly want creature collecting and completion. Go higher if you want more action pressure.",
},
},
{
"@type": "Question",
name: "What are Mutagens used for?",
acceptedAnswer: {
"@type": "Answer",
text:
"Mutagens are used in the Evolution Chamber to unlock new abilities, elements, body changes, and combat options for individual Voidlings.",
},
},
{
"@type": "Question",
name: "What are Research Points used for?",
acceptedAnswer: {
"@type": "Answer",
text:
"Research Points are used at the Cerebrum Enhancer for species-wide upgrades. These can help future Voidlings of the same species, so they are very valuable.",
},
},
{
"@type": "Question",
name: "Should I replay missions in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Replay missions to collect missing Mutagens, Golden Eggs, Quackies, time stars, eggs, resources, and training progress.",
},
},
{
"@type": "Question",
name: "Are Golden Eggs important in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Golden Eggs hatch into special Voidlings outside the normal genetic tree. They can matter for completion and later Splicing options.",
},
},
{
"@type": "Question",
name: "Can I collect a Golden Egg and leave?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. If you only need the Golden Egg, you can grab it and return to the ship instead of finishing the whole mission.",
},
},
{
"@type": "Question",
name: "Are Quackies power upgrades?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Quackies are completion collectibles. They are worth collecting for cleanup, but they do not replace Mutagens, Research Points, or Golden Eggs for progression.",
},
},
{
"@type": "Question",
name: "When does breeding matter?",
acceptedAnswer: {
"@type": "Answer",
text:
"Breeding matters after you unlock the Pheromone Nest and have useful same-species Voidlings to compare. Before that, focus on clearing missions and upgrading your main species.",
},
},
{
"@type": "Question",
name: "When should I care about Splicing?",
acceptedAnswer: {
"@type": "Answer",
text:
"Care about Splicing once the Splicing Station opens and you have enough discovered genes, Golden Egg variants, species, and mutated perks to make meaningful choices.",
},
},
{
"@type": "Question",
name: "What is the best Voidling?",
acceptedAnswer: {
"@type": "Answer",
text:
"Early on, the best Voidling is the one you can use safely. Reliable movement, steady damage, and a playstyle you understand matter more than an untested tier list.",
},
},
{
"@type": "Question",
name: "Should I make an Abyss build early?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. The Abyss and Void Strikes are later content. Build a strong progression Voidling first, then prepare for deeper runs once your upgrades and playstyle are stable.",
},
},
{
"@type": "Question",
name: "What should I read next after the Voidling Bound guide hub?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start with the Beginner Guide, then use the Evolution, Breeding, and Splicing Guide, Mutagen and Research Points Farm Guide, Golden Egg Locations Guide, Quackies Locations Guide, or All Collectibles Guide as you reach those systems.",
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
       title="Start Strong, Upgrade Smarter, and Choose the Right Next Guide"
       description="Use this Voidling Bound guide hub to learn the early route, pick safe upgrades, farm the right resources, and jump into the correct collectible or build guide."
       gameTitle="Voidling Bound"
       gameHref="/voidling-bound"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 10, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <VoidlingBoundContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
