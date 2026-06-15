import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CollectiblesSecretsContent from "@/data/scale-the-depths/all-collectibles-secrets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scale-the-depths/all-collectibles-secrets`;

const imageUrls = [
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-100-complete.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-artifact-sputnik.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-golden-switch.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-sonar-receiver-artifact.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-spring-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-quetzalcoatl-statue.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-shark-tooth-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-huatulco-boat-decal.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-loaded-support-sphere.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-sewing-needle-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-boat-blueprint.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-bait-found.webp`,
];

const toc = [
{ id: "collectibles-overview", label: "Collectibles overview" },
{ id: "location-roadmap", label: "Location roadmap" },
{ id: "loch-ness-collectibles", label: "Loch Ness" },
{ id: "outer-banks-collectibles", label: "Outer Banks" },
{ id: "huatulco-collectibles", label: "Huatulco" },
{ id: "point-nemo-collectibles", label: "Point Nemo" },
{ id: "baits", label: "All bait cleanup" },
{ id: "boats-decals-cosmetics", label: "Boats, decals and cosmetics" },
{ id: "legendary-fish", label: "Legendary fish" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "final-cleanup-order", label: "Final cleanup order" },
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
title: "Scale the Depths 100% Collectibles & Secrets Guide",
description:
"Get 100% completion! Find every hidden artifact, bait, message, boat blueprint, and legendary fish across Loch Ness, Outer Banks, Huatulco & Point Nemo.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Scale the Depths Collectibles & Secrets Guide: Messages, Artifacts, Baits and Legendary Fish",
description:
"Track every Scale the Depths collectible across Loch Ness, Outer Banks, Huatulco and Point Nemo, including messages, artifacts, baits, switches and secrets.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Scale the Depths Loch Ness GPS screen showing complete customer and treasure progress.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Scale the Depths Collectibles & Secrets Guide",
description:
"Use a location checklist for every message, artifact, bait, boat item, cosmetic, switch, shortcut and legendary fish.",
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
name: "Collectibles and Secrets Guide",
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
"Scale the Depths Collectibles and Secrets Guide: Messages, Artifacts, Baits, Boat Items, Cosmetics, Switches and Legendary Fish",
description:
"A player-focused Scale the Depths collectibles and secrets guide covering all major cleanup categories across Loch Ness, Outer Banks, Huatulco and Point Nemo. The guide explains what counts as a collectible, how to track messages in bottles, artifacts, bait pickups, boat blueprints, boat decals, cosmetics, treasures, switches, shortcuts, puzzle routes and legendary fish, plus what to check first in each area when 100% completion is missing.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-01",
dateModified: "2026-06-01",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Scale the Depths" },
{ "@type": "Thing", name: "Scale the Depths collectibles" },
{ "@type": "Thing", name: "Scale the Depths secrets" },
{ "@type": "Thing", name: "Scale the Depths 100% completion" },
{ "@type": "Thing", name: "Messages in bottles" },
{ "@type": "Thing", name: "Artifacts" },
{ "@type": "Thing", name: "Baits" },
{ "@type": "Thing", name: "Boat blueprints" },
{ "@type": "Thing", name: "Boat decals" },
{ "@type": "Thing", name: "Cosmetics" },
{ "@type": "Thing", name: "Switches" },
{ "@type": "Thing", name: "Shortcuts" },
{ "@type": "Thing", name: "Puzzle routes" },
{ "@type": "Thing", name: "Legendary fish" },
{ "@type": "Thing", name: "Loch Ness collectibles" },
{ "@type": "Thing", name: "Sputnik 1" },
{ "@type": "Thing", name: "Nessie Plush" },
{ "@type": "Thing", name: "Golden switch route" },
{ "@type": "Thing", name: "Beithir" },
{ "@type": "Thing", name: "Outer Banks collectibles" },
{ "@type": "Thing", name: "Sonar Receiver" },
{ "@type": "Thing", name: "Compass bait" },
{ "@type": "Thing", name: "Spring bait" },
{ "@type": "Thing", name: "Lost Dimetrodon" },
{ "@type": "Thing", name: "Huatulco collectibles" },
{ "@type": "Thing", name: "Quetzalcoatl Statue" },
{ "@type": "Thing", name: "Shark Tooth bait" },
{ "@type": "Thing", name: "Pouch bait" },
{ "@type": "Thing", name: "Hoga" },
{ "@type": "Thing", name: "Point Nemo collectibles" },
{ "@type": "Thing", name: "Loaded Support Sphere" },
{ "@type": "Thing", name: "Sextant" },
{ "@type": "Thing", name: "Toy Submarine" },
{ "@type": "Thing", name: "Magnet bait" },
{ "@type": "Thing", name: "Sewing Needle bait" },
{ "@type": "Thing", name: "Apophis 99942" },
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
name: "What counts as a collectible in Scale the Depths?",
acceptedAnswer: {
"@type": "Answer",
text:
"Collectibles include messages, artifacts, baits, boat blueprints, decals, cosmetics, treasures and other recorded data. Switches, shortcuts and puzzle routes also matter because they often unlock collectibles.",
},
},
{
"@type": "Question",
name: "How do I know if a location is complete?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the GPS, CARP Manual and location records. Do not rely only on whether the next location has unlocked.",
},
},
{
"@type": "Question",
name: "What is the easiest collectible to miss?",
acceptedAnswer: {
"@type": "Answer",
text:
"Outer Banks Sonar Receiver is one of the easiest to miss because you need to clear the full bush pocket to reveal it.",
},
},
{
"@type": "Question",
name: "Do baits count toward completion?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Baits matter for Master of Bait and should be collected during each location route.",
},
},
{
"@type": "Question",
name: "Do cosmetics matter for achievements?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Cosmetics matter for Fashion Fan. They may look optional, but they are part of completion cleanup.",
},
},
{
"@type": "Question",
name: "Do boat blueprints matter?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Boat blueprints matter for Boat Collector, and boat decals matter for Decal Delighter.",
},
},
{
"@type": "Question",
name: "Where should I start collectible cleanup?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start with the area where your records are missing items. If you are not sure, begin with Loch Ness, then Outer Banks, Huatulco and Point Nemo.",
},
},
{
"@type": "Question",
name: "Why did I finish the story but still miss collectibles?",
acceptedAnswer: {
"@type": "Answer",
text:
"Story progress and 100% completion are separate. You probably missed messages, artifacts, baits, boat items, cosmetics, switches, shortcuts or legendary fish prep.",
},
},
{
"@type": "Question",
name: "What should I check first in Loch Ness?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check whether GPS shows 23 out of 23 customers and 7 out of 7 treasures, then check messages, Sputnik 1, Nessie Plush, the Loch Ness bait pickup, golden switch route and Beithir or Nessie progress.",
},
},
{
"@type": "Question",
name: "What should I check first in Outer Banks?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check Sonar Receiver first, then Spring bait, Spanish Doubloon, both cosmetics and the boat blueprint. Sonar Receiver is the most common miss because it requires clearing the full bush pocket.",
},
},
{
"@type": "Question",
name: "What should I check first in Huatulco?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the pressure-plate door routes first, then Shark Tooth, Pouch, the boat decal, cosmetics and Hoga prep. Huatulco misses usually come from puzzle-route items rather than normal fishing.",
},
},
{
"@type": "Question",
name: "What should I check first in Point Nemo?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the three-hint door puzzle route, all blue switches, both red switches, the yellow switch, Sextant, Sewing Needle, the boat blueprint, cosmetic and Apophis 99942 prep.",
},
},
{
"@type": "Question",
name: "What does this collectibles guide cover?",
acceptedAnswer: {
"@type": "Answer",
text:
"This guide covers collectible and secret cleanup: messages, artifacts, baits, boat blueprints, decals, cosmetics, switches, shortcuts, puzzle routes and legendary fish. For achievement order, perfect prep, customers, variants and shop upgrades, use the Achievement Guide.",
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
       title="Where Are All Collectibles and Secrets?"
       description="Use this checklist to track messages, artifacts, baits, boat items, cosmetics, switches, shortcuts and legendary fish in every area."
       gameTitle="Scale the Depths"
       gameHref="/scale-the-depths"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 1, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <CollectiblesSecretsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
