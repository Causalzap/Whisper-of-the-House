import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementGuideContent from "@/data/scale-the-depths/achievement-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scale-the-depths/achievement-guide`;

const imageUrls = [
`${siteUrl}/images/scale-the-depths/scale-the-depths-steam-achievement-global-stats.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-fish-prep-phases.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-perfect-fish-prep.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-customer-preferences.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-bait-found.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-boat-blueprint.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-cosmetic.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-legendary-fish-warning.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-legendary-fish-caught.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-lost-dimetrodon-location.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-hoga-location-annotated.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-apophis-99942.webp`,
];

const toc = [
{ id: "achievement-roadmap", label: "Achievement roadmap" },
{ id: "easy-achievements", label: "Easy achievements" },
{ id: "perfect-prep", label: "Perfect prep" },
{ id: "customer-achievements", label: "Customers and variants" },
{ id: "completion-achievements", label: "100% achievements" },
{ id: "deep-pockets", label: "Deep Pockets" },
{
id: "boat-decal-cosmetic-achievements",
label: "Boats, decals and cosmetics",
},
{ id: "legendary-achievements", label: "Legendary achievements" },
{ id: "loch-ness-beithir", label: "Beithir and Nessie" },
{ id: "outer-banks-lost-dimetrodon", label: "Lost Dimetrodon" },
{ id: "huatulco-hoga", label: "Hoga" },
{ id: "point-nemo-apophis", label: "Apophis 99942" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "final-cleanup-order", label: "Final cleanup" },
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
href: "/scale-the-depths/all-collectibles-secrets",
label: "All Collectibles and Secrets Guide",
},
{
href: "/scale-the-depths/loch-ness-100-percent-guide",
label: "Loch Ness 100% Guide",
},
{
href: "/scale-the-depths/outer-banks-100-percent-guide",
label: "Outer Banks 100% Guide",
},
{
href: "/scale-the-depths/huatulco-100-percent-guide",
label: "Huatulco 100% Guide",
},
{
href: "/scale-the-depths/point-nemo-100-percent-guide",
label: "Point Nemo 100% Guide",
},
];

export const metadata: Metadata = {
title: "Scale the Depths Achievements Guide",
description:
"Unlock all Scale the Depths achievements with the best 100% route, rarest achievements, legendary fish, Prep Expert and Deep Pockets.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Scale the Depths Achievements Guide: 100% Route, Rare Achievements and Legendary Fish",
description:
"Finish every Scale the Depths achievement with the best route for Prep Expert, True Fisherbot, customer variants, Deep Pockets and legendary fish.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Scale the Depths Steam global achievement stats showing unlock rates for all 25 achievements.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Scale the Depths Achievements Guide",
description:
"Get all achievements with a 100% cleanup route for fish, prep, customers, variants, baits, boats, cosmetics, upgrades and legendary fish.",
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
name: "Achievement Guide",
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
"Scale the Depths Achievements Guide: All Achievements, 100% Route, Legendary Fish, Prep Expert, True Fisherbot and Deep Pockets",
description:
"A player-focused Scale the Depths achievement guide explaining the best route to unlock all 25 achievements, including estimated 100% completion time, Steam global unlock-rate context, First Catch, Perfection, Tip Obtained, A Favorite Found, A Bait and Switch, New Boat New You, Crowning Achievement, True Fisherbot, Prep Expert, Customer Connoisseur, Elusive Customer Entertainer, Elite Explorer, Deep Pockets, Master of Bait, Boat Collector, Decal Delighter, Fashion Fan, every regional legendary fish achievement, every legendary customer achievement, Loch Ness Beithir and Nessie, Outer Banks Lost Dimetrodon, Huatulco Hoga, Point Nemo Apophis 99942, customer variants, shop upgrades and the final 100% cleanup checklist.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-01",
dateModified: "2026-06-01",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Scale the Depths" },
{ "@type": "Thing", name: "Scale the Depths achievements" },
{ "@type": "Thing", name: "Scale the Depths 100% completion" },
{ "@type": "Thing", name: "Steam global achievement stats" },
{ "@type": "Thing", name: "How long to beat Scale the Depths 100%" },
{ "@type": "Thing", name: "First Catch!" },
{ "@type": "Thing", name: "Perfection!" },
{ "@type": "Thing", name: "Tip Obtained!" },
{ "@type": "Thing", name: "A Favorite Found!" },
{ "@type": "Thing", name: "A Bait and Switch" },
{ "@type": "Thing", name: "New Boat! New You!" },
{ "@type": "Thing", name: "Crowning Achievement!" },
{ "@type": "Thing", name: "True Fisherbot" },
{ "@type": "Thing", name: "Prep Expert" },
{ "@type": "Thing", name: "Customer Connoisseur" },
{ "@type": "Thing", name: "Elusive Customer Entertainer" },
{ "@type": "Thing", name: "Customer variants" },
{ "@type": "Thing", name: "Elite Explorer" },
{ "@type": "Thing", name: "Deep Pockets" },
{ "@type": "Thing", name: "Master of Bait" },
{ "@type": "Thing", name: "Boat Collector" },
{ "@type": "Thing", name: "Decal Delighter" },
{ "@type": "Thing", name: "Fashion Fan" },
{ "@type": "Thing", name: "Legendary fish" },
{ "@type": "Thing", name: "Legendary customer achievements" },
{ "@type": "Thing", name: "Beithir" },
{ "@type": "Thing", name: "Nessie" },
{ "@type": "Thing", name: "Lost Dimetrodon" },
{ "@type": "Thing", name: "Hoga" },
{ "@type": "Thing", name: "Apophis 99942" },
{ "@type": "Thing", name: "Loch Ness 100% Guide" },
{ "@type": "Thing", name: "Outer Banks 100% Guide" },
{ "@type": "Thing", name: "Huatulco 100% Guide" },
{ "@type": "Thing", name: "Point Nemo 100% Guide" },
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
name: "How long does it take to 100% Scale the Depths?",
acceptedAnswer: {
"@type": "Answer",
text:
"The main route usually takes around 8 to 12 hours. Full achievement cleanup is closer to 20 to 30 hours, depending on how much you track during each location.",
},
},
{
"@type": "Question",
name: "What are the hardest achievements in Scale the Depths?",
acceptedAnswer: {
"@type": "Answer",
text:
"The hardest achievements are usually Prep Expert, True Fisherbot, Fashion Fan, Decal Delighter, Elusive Customer Entertainer, Master of Bait, Boat Collector, Deep Pockets, Elite Explorer and the later legendary fish and customer achievements.",
},
},
{
"@type": "Question",
name: "How do I unlock True Fisherbot?",
acceptedAnswer: {
"@type": "Answer",
text:
"Catch every fish in the game. Use each location guide and do not leave an area if fish entries are still missing.",
},
},
{
"@type": "Question",
name: "How do I unlock Prep Expert?",
acceptedAnswer: {
"@type": "Answer",
text:
"Perfectly prep every fish in the game. Prep new species carefully as you find them instead of saving all perfect prep for the end.",
},
},
{
"@type": "Question",
name: "How do I unlock Customer Connoisseur?",
acceptedAnswer: {
"@type": "Answer",
text:
"Feed every customer in the game. Keep checking location customer counts and do not stop feeding just because the next location unlocks.",
},
},
{
"@type": "Question",
name: "What are customer variants?",
acceptedAnswer: {
"@type": "Answer",
text:
"Customer variants are alternate or special versions of customers. They count separately for Elusive Customer Entertainer, so finish normal customers first, then cycle customers again and feed any variant appearances you have not handled.",
},
},
{
"@type": "Question",
name: "How do I unlock Master of Bait?",
acceptedAnswer: {
"@type": "Answer",
text:
"Obtain every bait in the game. Track bait pickups inside each location route.",
},
},
{
"@type": "Question",
name: "How do I unlock Boat Collector?",
acceptedAnswer: {
"@type": "Answer",
text:
"Collect every boat in the game. Pick up every boat blueprint during location cleanup.",
},
},
{
"@type": "Question",
name: "How do I unlock Decal Delighter?",
acceptedAnswer: {
"@type": "Answer",
text:
"Get every decal in the game. Do not skip boat decal pickups while cleaning messages and artifacts.",
},
},
{
"@type": "Question",
name: "How do I unlock Fashion Fan?",
acceptedAnswer: {
"@type": "Answer",
text:
"Get every character cosmetic. Cosmetics look optional, but they count toward achievement cleanup.",
},
},
{
"@type": "Question",
name: "How do I unlock Elite Explorer?",
acceptedAnswer: {
"@type": "Answer",
text:
"Get all data in every level. That means cleaning up every location's messages, artifacts, treasures, secrets and other tracked data.",
},
},
{
"@type": "Question",
name: "How do I unlock Deep Pockets?",
acceptedAnswer: {
"@type": "Answer",
text:
"Buy every shop upgrade in the game. Treat it as a late cleanup achievement: buy route-enabling upgrades first, then finish the full shop buyout when location cleanup is nearly done.",
},
},
{
"@type": "Question",
name: "Do I need legendary fish for 100%?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Each region has a legendary fish achievement, and each also has a legendary customer achievement.",
},
},
{
"@type": "Question",
name: "Should I catch legendary fish as soon as I find them?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually no. Treat legendary fish as final route targets. Open shortcuts, clear nearby collectibles and upgrade hook or line first, then catch and prep them in a clean run.",
},
},
{
"@type": "Question",
name: "Why did I finish the story but still miss achievements?",
acceptedAnswer: {
"@type": "Answer",
text:
"The story can finish before 100% completion. You probably still need location data, fish, perfect prep, customers, variants, baits, boats, decals, cosmetics or shop upgrades.",
},
},
{
"@type": "Question",
name: "What should I do first after finishing the main game?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start with location cleanup. Finish Loch Ness, Outer Banks, Huatulco and Point Nemo 100% first, because that also progresses Elite Explorer, Master of Bait, Boat Collector, Fashion Fan, Decal Delighter, True Fisherbot and legendary achievements.",
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
       title="How Do You Get Every Achievement?"
       description="Use this route to finish every achievement, from rare perfect-prep and collection unlocks to legendary fish, customer variants and Deep Pockets."
       gameTitle="Scale the Depths"
       gameHref="/scale-the-depths"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 1, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <AchievementGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
