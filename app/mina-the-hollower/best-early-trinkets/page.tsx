import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestEarlyTrinketsContent from "@/data/mina-the-hollower/best-early-trinkets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mina-the-hollower/best-early-trinkets`;

const imageUrls = [
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-proto-spark-duke.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-crypt-red-carpet-room-marked.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-proto-spark-vial-barrier.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-duke-escort-route.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-primed-vial-pouch-route-marked.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-primed-vial-pouch-reward.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-steady-soles-stairs-route.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-steady-soles-attic-entry.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-steady-soles-reward.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-frey-bell-of-grace.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-bell-of-grace-reward.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-chain-capacitor-building.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-chain-capacitor-car-minigame.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-chain-capacitor-reward.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-plasma-funnel-shop.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-seismic-belt-shop.webp`,
];

const toc = [
{ id: "best-early-trinkets", label: "Best early trinkets" },
{ id: "trinket-slots", label: "Trinket slots" },
{ id: "proto-spark", label: "Proto Spark" },
{ id: "boss-loadouts", label: "Boss loadouts" },
{ id: "primed-vial-pouch", label: "Primed Vial Pouch" },
{ id: "steady-soles", label: "Steady Soles" },
{ id: "bell-of-grace", label: "Bell of Grace" },
{ id: "chain-capacitor", label: "Chain Capacitor" },
{ id: "plasma-funnel-and-shop-trinkets", label: "Plasma Funnel" },
{ id: "quick-reference", label: "Quick reference" },
{ id: "what-next", label: "What to get next" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{ href: "/mina-the-hollower", label: "Mina the Hollower Beginner Guide" },
{
href: "/mina-the-hollower/where-to-go-first",
label: "Where to Go First in Mina the Hollower",
},
{
href: "/mina-the-hollower/how-to-get-map",
label: "How to Get the Map in Mina the Hollower",
},
{
href: "/mina-the-hollower/bones-farming",
label: "How to Farm Bones Fast in Mina the Hollower",
},
{
href: "/mina-the-hollower/fast-travel",
label: "How to Unlock Fast Travel in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-starting-weapon",
label: "Best Starting Weapon in Mina the Hollower",
},
];

export const metadata: Metadata = {
title: "Mina the Hollower Best Early Trinkets Guide",
description:
"Learn which early Mina the Hollower trinkets to get first, including Proto Spark, Primed Vial Pouch, Steady Soles and Bell of Grace.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Mina the Hollower Best Early Trinkets: Proto Spark, Primed Vial Pouch, Steady Soles and Bell of Grace",
description:
"Choose the best early trinkets in Mina the Hollower by problem: dying, low healing, rough terrain, Bone loss, boss attempts and interrupted vial use.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 456,
height: 342,
alt: "Mina the Hollower Proto Spark trinket reward from the Duke in Queensbury Crypt.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Mina the Hollower Best Early Trinkets Guide",
description:
"Find the best early trinkets for survival, healing, terrain, Bone loss and boss attempts in Mina the Hollower.",
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
name: "Best Early Trinkets",
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
"Mina the Hollower Best Early Trinkets Guide: Proto Spark, Primed Vial Pouch, Steady Soles, Bell of Grace, Chain Capacitor and Plasma Funnel",
description:
"A player-focused Mina the Hollower early trinkets guide explaining which trinkets to get first after Ossex and Queensbury Crypt. It covers Proto Spark in Queensbury Crypt, the Duke escort route, Primed Vial Pouch and its Ossex roof route, Steady Soles and its eastern Ossex attic route, Bell of Grace and Frey, Chain Capacitor and the timed car challenge, Plasma Funnel and early shop trinkets, how trinket slots and Trinket Bags work, first boss loadout choices, and when to move from early survival trinkets into mid-game hazard and damage trinkets.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-30",
dateModified: "2026-05-30",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Mina the Hollower" },
{ "@type": "Thing", name: "Best Early Trinkets" },
{ "@type": "Thing", name: "Proto Spark" },
{ "@type": "Thing", name: "Queensbury Crypt" },
{ "@type": "Thing", name: "Duke" },
{ "@type": "Thing", name: "Primed Vial Pouch" },
{ "@type": "Thing", name: "Steady Soles" },
{ "@type": "Thing", name: "Bell of Grace" },
{ "@type": "Thing", name: "Frey" },
{ "@type": "Thing", name: "Chain Capacitor" },
{ "@type": "Thing", name: "Plasma Funnel" },
{ "@type": "Thing", name: "Seismic Belt" },
{ "@type": "Thing", name: "Trinket Bags" },
{ "@type": "Thing", name: "Ossex" },
{ "@type": "Thing", name: "Bone loss" },
{ "@type": "Thing", name: "Plasma Vials" },
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
name: "What is the best early trinket in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"The best early trinket is Proto Spark because it saves Mina from death once. You get it through the Duke route in Queensbury Crypt.",
},
},
{
"@type": "Question",
name: "Where is Proto Spark in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"Proto Spark is in Queensbury Crypt. Take the left path in the red-carpet room before the Ancestral Chamber, spend two vials on the barrier, find the Duke and finish his escort route.",
},
},
{
"@type": "Question",
name: "Can I use Proto Spark before the first Queensbury Crypt boss?",
acceptedAnswer: {
"@type": "Answer",
text:
"No, unless you fully explore the crypt side route before triggering the boss. The Duke escort pays off after the boss room, so for most players Proto Spark becomes available on the way out of Queensbury Crypt, not before the first boss attempt.",
},
},
{
"@type": "Question",
name: "How do I equip more than one trinket in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"You need Trinket Bags to increase how many trinkets Mina can equip. One early Trinket Bag comes from beating Maxi after Queensbury Crypt.",
},
},
{
"@type": "Question",
name: "What should I equip if I only have one trinket slot?",
acceptedAnswer: {
"@type": "Answer",
text:
"Before Proto Spark, use Primed Vial Pouch if healing is your problem or Steady Soles if terrain is the problem. After Proto Spark, use Proto Spark for dangerous routes.",
},
},
{
"@type": "Question",
name: "Is Primed Vial Pouch worth it in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Primed Vial Pouch is one of the best early survival trinkets because it gives Mina 2 extra Plasma Vials and makes vial use restore some health.",
},
},
{
"@type": "Question",
name: "How do I get Primed Vial Pouch?",
acceptedAnswer: {
"@type": "Answer",
text:
"From the main gate of Ossex, head left, get past the two beam guards, then go down and right. Burrow into the marked roof spot, enter the building below and take the bottom-left stairs to the reward.",
},
},
{
"@type": "Question",
name: "What does Steady Soles do?",
acceptedAnswer: {
"@type": "Answer",
text:
"Steady Soles helps with movement on difficult terrain like water, grass, stairs and ice, while also helping resist knockback.",
},
},
{
"@type": "Question",
name: "How do I get Steady Soles?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start near the eastern exit of Ossex, take the stairs up, head left to the balcony, burrow into the attic route, cross the room and exit through the top-left stairs to reach Steady Soles.",
},
},
{
"@type": "Question",
name: "Is Bell of Grace worth 1,000 Bones?",
acceptedAnswer: {
"@type": "Answer",
text:
"Bell of Grace is worth it if deaths are costing you too many Bones. If you still need the Isle Map or core upgrades, buy those first.",
},
},
{
"@type": "Question",
name: "How do I get Bell of Grace?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start at the station underside west of Ossex, meet Frey, stop him when he later tries to steal your Bones, then return and pay 1,000 Bones to receive Bell of Grace.",
},
},
{
"@type": "Question",
name: "Is Chain Capacitor good?",
acceptedAnswer: {
"@type": "Answer",
text:
"Chain Capacitor is good if you can land consecutive hits without missing. It is weaker if you are still learning enemy movement and whiff often.",
},
},
{
"@type": "Question",
name: "How do I beat the Chain Capacitor car challenge?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the weapon you control best, stay close to the target and come back after an Attack upgrade if the timer feels too strict.",
},
},
{
"@type": "Question",
name: "Should I buy Plasma Funnel early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Buy Plasma Funnel early if healing keeps getting interrupted. It lets Mina drink Plasma Vials faster and prevents losing vials when hit.",
},
},
{
"@type": "Question",
name: "Is Seismic Belt worth buying early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Seismic Belt is optional. It is useful if you like burrow attacks, but most beginners should prioritize Proto Spark, Primed Vial Pouch or Plasma Funnel first.",
},
},
{
"@type": "Question",
name: "What trinkets should I look for after the early game?",
acceptedAnswer: {
"@type": "Answer",
text:
"After the early survival picks, watch for hazard and build trinkets such as Pit Preserver, Spike Spurs and Uranium Bracelet, then move into a full trinket locations guide.",
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
       title="Which Early Trinkets Should You Get First?"
       description="Stop guessing which trinket to equip. This guide shows when to use Proto Spark, Primed Vial Pouch, Steady Soles, Bell of Grace, Chain Capacitor and Plasma Funnel."
       gameTitle="Mina the Hollower"
       gameHref="/mina-the-hollower"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 30, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <BestEarlyTrinketsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
