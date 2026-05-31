import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BonesFarmingContent from "@/data/mina-the-hollower/bones-farming.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mina-the-hollower/bones-farming`;

const imageUrls = [
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-bone-stone.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-tutorial-bone-stone-chest.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-couples-quarters-bone-stone.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-strategy-center-bone-stone.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-big-nose-waterway-bone-stone.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-crypt-enemy-bones-farm.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-checkpoint-reset-bones-farm.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-underlab-rest-point.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-mourners-mile-knights-rest.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-frey-bell-of-grace.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-train-donation-box.webp`,
];

const toc = [
{ id: "best-early-bones-farming", label: "Best Bones farming" },
{ id: "bone-stones", label: "Bone Stones" },
{ id: "ossex-bone-stones", label: "Ossex Bone Stones" },
{ id: "crypt-enemy-farm", label: "Starter farm" },
{ id: "elizabeth-deboning-wand", label: "Elizabeth quest" },
{ id: "stolenoid-deboning-wand-build", label: "Deboning Wand build" },
{ id: "mourners-mile-farm", label: "Mourner's Mile farm" },
{ id: "spend-bones-first", label: "What to spend Bones on" },
{ id: "bone-up", label: "Bone Up" },
{ id: "avoid-losing-bones", label: "Avoid losing Bones" },
{ id: "bell-of-grace", label: "Bell of Grace" },
{ id: "save-for-train", label: "Train funding" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
    {
        href: "/mina-the-hollower/all-trinkets-guide",
        label: "All Trinkets Guide",
      },
{ href: "/mina-the-hollower", label: "Mina the Hollower Beginner Guide" },
{
href: "/mina-the-hollower/how-to-get-map",
label: "How to Get the Map in Mina the Hollower",
},
{
href: "/mina-the-hollower/where-to-go-first",
label: "Where to Go First in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-starting-weapon",
label: "Best Starting Weapon in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-early-trinkets",
label: "Best Early Trinkets in Mina the Hollower",
},
{
href: "/mina-the-hollower/fast-travel",
label: "How to Unlock Fast Travel in Mina the Hollower",
},
];

export const metadata: Metadata = {
title: "Mina the Hollower Bones Farming Guide",
description:
"Farm Bones fast in Mina the Hollower with early Bone Stones, Ossex loops, Elizabeth, Deboning Wand, Stolenoid and Mourner's Mile routes.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Mina the Hollower Bones Farming: Deboning Wand, Stolenoid and Mourner's Mile",
description:
"Learn how to get Bones early, protect Bone Stones, unlock Elizabeth's Deboning Wand quest, use Stolenoid and farm Mourner's Mile efficiently.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 901,
height: 455,
alt: "Mina the Hollower Bone Stone item prompt explaining that condensed Bones cannot be lost.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Mina the Hollower Bones Farming Guide",
description:
"Get Bones faster with early Bone Stones, Elizabeth's Deboning Wand quest, Stolenoid and the Mourner's Mile farming route.",
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
name: "Mina the Hollower Guide",
item: `${siteUrl}/mina-the-hollower`,
},
{
"@type": "ListItem",
position: 3,
name: "Bones Farming",
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
"Mina the Hollower Bones Farming Guide: Bone Stones, Elizabeth, Deboning Wand, Stolenoid and Mourner's Mile",
description:
"A player-focused Mina the Hollower Bones farming guide explaining how to get early Bones safely, how Bone Stones differ from Bone Up upgrades, where to find safe Bone Stone pickups around Ossex, how to use the starter enemy loop east of Ossex toward Queensbury Crypt, how to unlock Elizabeth's Deboning Wand quest after meeting Lionel and reaching Radiant Manor Foyer, how to pair Deboning Wand with Stolenoid from Belvedere in Queensbury Crypt, how to farm Mourner's Mile for larger Bones gains, what to spend Bones on first, how to avoid losing loose Bones, when Bell of Grace is worth buying, and when to save for train funding.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-30",
dateModified: "2026-05-30",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Mina the Hollower" },
{ "@type": "Thing", name: "Bones farming" },
{ "@type": "Thing", name: "Bone Stones" },
{ "@type": "Thing", name: "Bone Up" },
{ "@type": "Thing", name: "Ossex" },
{ "@type": "Thing", name: "Queensbury Crypt" },
{ "@type": "Thing", name: "Elizabeth" },
{ "@type": "Thing", name: "Lionel" },
{ "@type": "Thing", name: "Radiant Manor Foyer" },
{ "@type": "Thing", name: "Deboning Wand" },
{ "@type": "Thing", name: "Stolenoid" },
{ "@type": "Thing", name: "Belvedere" },
{ "@type": "Thing", name: "Mourner's Mile" },
{ "@type": "Thing", name: "Bell of Grace" },
{ "@type": "Thing", name: "Train funding" },
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
name: "How do you farm Bones fast in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"For small early needs, collect Bone Stones and use the enemy loop east of Ossex toward Queensbury Crypt. For serious farming, unlock Deboning Wand from Elizabeth, pair it with Stolenoid, then farm Mourner's Mile.",
},
},
{
"@type": "Question",
name: "What is the best early Bones farming route?",
acceptedAnswer: {
"@type": "Answer",
text:
"The best starter route is east of Ossex near the path toward Queensbury Crypt. It is close enough to a checkpoint that you can reset enemies without traveling far, but it is only meant for small top-ups.",
},
},
{
"@type": "Question",
name: "What is the best mid-game Bones farming route?",
acceptedAnswer: {
"@type": "Answer",
text:
"The best upgrade route is Mourner's Mile with Deboning Wand and Stolenoid equipped. A clean loop can earn around 1,400 Bones in about 2 minutes.",
},
},
{
"@type": "Question",
name: "How do I get Deboning Wand?",
acceptedAnswer: {
"@type": "Answer",
text:
"After meeting Lionel inside Ossex and reaching Radiant Manor Foyer, find Elizabeth in the upper-right grass path of the courtyard. Accept her 1,000-Bone loan, repay the debt by farming enemies around Mourner's Mile, then return to receive Deboning Wand.",
},
},
{
"@type": "Question",
name: "What does Deboning Wand do?",
acceptedAnswer: {
"@type": "Answer",
text:
"Deboning Wand makes enemies reward far more Bones, but the Bones bounce around. That is why it works best with Stolenoid.",
},
},
{
"@type": "Question",
name: "How do I get Stolenoid?",
acceptedAnswer: {
"@type": "Answer",
text:
"Buy Stolenoid from Belvedere in Queensbury Crypt / Statue Head Hall for 600 Bones. It pulls nearby pickups toward Mina.",
},
},
{
"@type": "Question",
name: "Why use Stolenoid with Deboning Wand?",
acceptedAnswer: {
"@type": "Answer",
text:
"Deboning Wand creates more Bones but makes them bounce around. Stolenoid pulls pickups toward you, which helps you collect the extra Bones instead of leaving them behind.",
},
},
{
"@type": "Question",
name: "Should I farm Bones before buying the map?",
acceptedAnswer: {
"@type": "Answer",
text:
"If you do not have 500 Bones, yes. Farm or collect enough to buy the Isle Map early. The map saves enough confusion to be worth the cost.",
},
},
{
"@type": "Question",
name: "What should I spend Bones on first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Buy the Isle Map first, then invest in Attack, Defense and survival upgrades. Avoid buying a new weapon immediately unless your starting weapon feels bad.",
},
},
{
"@type": "Question",
name: "What are Bone Stones?",
acceptedAnswer: {
"@type": "Answer",
text:
"Bone Stones are condensed Bones that cannot be lost the same way loose Bones can. They are separate from Bone Up upgrades and are mainly used to protect value.",
},
},
{
"@type": "Question",
name: "What is Bone Up?",
acceptedAnswer: {
"@type": "Answer",
text:
"Bone Up is the Underlab upgrade system where you spend Bones on stats or systems such as Attack, Defense, Sidearms and Bone Stones.",
},
},
{
"@type": "Question",
name: "Can you lose Bones when you die?",
acceptedAnswer: {
"@type": "Answer",
text:
"Loose Bones are risky when you die. That is why you should spend, protect or convert value before entering dangerous areas.",
},
},
{
"@type": "Question",
name: "Is Bell of Grace worth it?",
acceptedAnswer: {
"@type": "Answer",
text:
"Bell of Grace is worth it if deaths keep draining your Bones. It helps reduce loss, but it does not create income like Deboning Wand.",
},
},
{
"@type": "Question",
name: "Should I save Bones for the train?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, but not before your basics. Buy the map and stabilize your build first, then start saving toward train funding. If the cost feels too high, use the Mourner's Mile farming setup.",
},
},
{
"@type": "Question",
name: "Should I keep farming if enemies feel too strong?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. If the route feels too hard, return to Ossex, spend Bones on upgrades and come back later. Farming only helps if you can do it safely.",
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
       title="How Do You Farm Bones Fast?"
       description="Use safe Bone Stones for early purchases, then build into Elizabeth's Deboning Wand, Stolenoid and Mourner's Mile when you need thousands of Bones."
       gameTitle="Mina the Hollower"
       gameHref="/mina-the-hollower"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 30, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <BonesFarmingContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
