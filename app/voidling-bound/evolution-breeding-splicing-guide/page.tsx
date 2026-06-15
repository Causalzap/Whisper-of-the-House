import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EvolutionBreedingSplicingGuideContent from "@/data/voidling-bound/evolution-breeding-splicing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/voidling-bound/evolution-breeding-splicing-guide`;

const imageUrls = [
`${siteUrl}/images/voidling-bound/voidling-bound-evolution-chamber-mutagen-path.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-first-voidling-attributes-kwipeck.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-cerebrum-enhancer-species-upgrades.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-pheromone-nest-breeding.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-splicing-station-mutated-perks.webp`,
`${siteUrl}/images/voidling-bound/voidling-bound-catalyzer-injector.webp`,
];

const toc = [
{
id: "voidling-bound-evolution-breeding-splicing-guide",
label: "System guide",
},
{ id: "system-overview", label: "System overview" },
{ id: "best-build-order", label: "Build order" },
{ id: "attributes-explained", label: "Attributes" },
{ id: "evolution-chamber", label: "Evolution Chamber" },
{ id: "cerebrum-enhancer", label: "Cerebrum Enhancer" },
{ id: "training-room", label: "Training Room" },
{ id: "breeding-and-pheromone-nest", label: "Breeding" },
{ id: "golden-egg-variants-and-future-genes", label: "Golden Egg variants" },
{ id: "splicing-station", label: "Splicing Station" },
{ id: "catalyzers", label: "Catalyzers" },
{ id: "which-system-fixes-your-problem", label: "Problem solver" },
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
href: "/voidling-bound/all-collectibles",
label: "All Collectibles Guide",
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
title: "Voidling Bound Evolution, Breeding, Splicing & Catalyzers",
description:
"Build better Voidlings with Evolution, Breeding, Splicing, Catalyzers, Dual Natures, Training Room tips, 5 Polychrome cost, and upgrade priority paths.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Voidling Bound Evolution, Breeding, Splicing and Catalyzers Guide",
description:
"Plan long-term Voidling progression with Attributes, Evolution Chamber, Cerebrum Enhancer, Training Room, Breeding, Dual Natures, Splicing costs, Polychrome Mutagens, Catalyzers, and endgame build tuning.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Voidling Bound Evolution Chamber Mutagen path and evolution build planning.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Voidling Bound Evolution, Breeding and Splicing Guide",
description:
"Build better Voidlings with Evolution, Breeding, Splicing, Catalyzers, Dual Natures, Training Room tips, and Polychrome Mutagen planning.",
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
name: "Voidling Bound Evolution, Breeding and Splicing Guide",
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
"Voidling Bound Evolution, Breeding, Splicing and Catalyzers Guide",
description:
"A player-focused Voidling Bound progression guide explaining how Attributes, Evolution Chamber, Cerebrum Enhancer, Training Room, Breeding, Splicing Station, and Catalyzers work together. Covers how to choose evolution nodes, when to spend Mutagens and research samples, why species-wide upgrades matter, how Training Room keeps backup Voidlings from falling behind, why Breeding matters for stronger parent lines and Dual Natures, why Splicing costs 5 Polychrome Mutagens, why spliced Voidlings can no longer breed, how Golden Egg variants can matter for future genes and perks, and when Catalyzers become useful for Void Strikes and Abyss endgame builds.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-10",
dateModified: "2026-06-10",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Voidling Bound" },
{ "@type": "Thing", name: "Voidling Bound evolution guide" },
{ "@type": "Thing", name: "Voidling Bound breeding guide" },
{ "@type": "Thing", name: "Voidling Bound splicing guide" },
{ "@type": "Thing", name: "Voidling Bound Catalyzers" },
{ "@type": "Thing", name: "Voidling Bound Catalyzer Injector" },
{ "@type": "Thing", name: "Voidling Bound Evolution Chamber" },
{ "@type": "Thing", name: "Voidling Bound Mutagens" },
{ "@type": "Thing", name: "Voidling Bound Polychrome Mutagen" },
{ "@type": "Thing", name: "Voidling Bound 5 Polychrome Mutagen cost" },
{ "@type": "Thing", name: "Voidling Bound Cerebrum Enhancer" },
{ "@type": "Thing", name: "Voidling Bound research samples" },
{ "@type": "Thing", name: "Voidling Bound Training Room" },
{ "@type": "Thing", name: "Voidling Bound Pheromone Nest" },
{ "@type": "Thing", name: "Voidling Bound Dual Natures" },
{ "@type": "Thing", name: "Voidling Bound Splicing Station" },
{ "@type": "Thing", name: "Voidling Bound mutated perks" },
{ "@type": "Thing", name: "Voidling Bound Golden Egg variants" },
{ "@type": "Thing", name: "Voidling Bound Void Strikes" },
{ "@type": "Thing", name: "Voidling Bound Abyss builds" },
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
name: "What should I upgrade first in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Upgrade the Voidling and species you actually use. Start with Attributes, Evolution Chamber nodes, and Cerebrum Enhancer upgrades before worrying about late-game systems.",
},
},
{
"@type": "Question",
name: "Is Evolution or Cerebrum Enhancer more important?",
acceptedAnswer: {
"@type": "Answer",
text:
"They do different jobs. Evolution changes one Voidling, while Cerebrum Enhancer upgrades a species and can help future candidates of the same species.",
},
},
{
"@type": "Question",
name: "What is the Training Room for in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Training Room lets backup Voidlings gain experience while you complete missions. Use it for alternate elements, breeding candidates, and new species you want to test later.",
},
},
{
"@type": "Question",
name: "What does Breeding do in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Breeding uses same-species parents to create offspring that can inherit useful traits, stronger stat lines, and Nature combinations.",
},
},
{
"@type": "Question",
name: "What are Dual Natures in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Dual Natures are stronger Nature combinations created through Breeding. Keep rare or useful Natures instead of releasing them too quickly.",
},
},
{
"@type": "Question",
name: "Can a spliced Voidling breed?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Spliced Voidlings can no longer breed, so parent planning should happen before a final Splicing decision.",
},
},
{
"@type": "Question",
name: "How much does Splicing cost in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Splicing costs 5 Polychrome Mutagens. Because that resource is rare, plan the genes, abilities, element, and mutated perks before committing.",
},
},
{
"@type": "Question",
name: "What does Splicing change?",
acceptedAnswer: {
"@type": "Answer",
text:
"Splicing can change genes, looks, abilities, elemental affinity, and mutated perks based on genes you have already discovered.",
},
},
{
"@type": "Question",
name: "Why do Golden Eggs matter for Splicing?",
acceptedAnswer: {
"@type": "Answer",
text:
"Golden Eggs can hatch secret variants with unique genes, perks, looks, or modules that may become useful for future Splicing plans.",
},
},
{
"@type": "Question",
name: "What are Catalyzers in Voidling Bound?",
acceptedAnswer: {
"@type": "Answer",
text:
"Catalyzers are endgame modifiers equipped through the Catalyzer Injector. They are mainly for Void Strikes, Abyss runs, and late build tuning.",
},
},
{
"@type": "Question",
name: "How many Catalyzers can a Voidling equip?",
acceptedAnswer: {
"@type": "Answer",
text:
"A Voidling can equip up to five Catalyzers at a time, and their order can matter.",
},
},
{
"@type": "Question",
name: "Should beginners worry about Catalyzers?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Beginners should focus on a reliable main Voidling, evolution choices, species upgrades, and basic resource management first.",
},
},
{
"@type": "Question",
name: "Which system should I use if my Voidling feels weak?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the system that matches the problem. Attributes and Evolution help one Voidling, Cerebrum Enhancer helps a species, Training Room helps backups, Breeding improves parent lines, Splicing customizes final builds, and Catalyzers tune endgame power.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the Beginner Guide for first-hour basics, the All Collectibles Guide for Mutagens and Golden Eggs, or return to the Voidling Bound guide hub.",
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
       title="Plan Evolution, Breeding, Splicing, and Catalyzers Without Wasting Rare Resources"
       description="Learn which Voidling Bound system fixes your current build problem, when to breed, why Splicing costs matter, and when Catalyzers become useful."
       gameTitle="Voidling Bound"
       gameHref="/voidling-bound"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 10, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <EvolutionBreedingSplicingGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
