import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WhereToGoFirstContent from "@/data/mina-the-hollower/where-to-go-first.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mina-the-hollower/where-to-go-first`;

const imageUrls = [
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-tenebrous-times-newspaper.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-drillhardt-map-purchase.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-eastern-heath-route.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-crypt-red-carpet-room-marked.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-proto-spark-duke.webp`,
];

const toc = [
{ id: "where-to-go-first", label: "Where to go first" },
{ id: "generator-order", label: "Dungeon order" },
{ id: "get-map-first", label: "Get the Isle Map" },
{ id: "head-east", label: "Queensbury Crypt first" },
{ id: "prepare-before-crypt", label: "Prepare first" },
{ id: "proto-spark", label: "Proto Spark" },
{ id: "after-queensbury-crypt", label: "After Queensbury Crypt" },
{ id: "what-if-wrong-way", label: "Wrong way?" },
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
href: "/mina-the-hollower/bones-farming",
label: "How to Farm Bones Fast in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-early-trinkets",
label: "Best Early Trinkets in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-starting-weapon",
label: "Best Starting Weapon in Mina the Hollower",
},
{
href: "/mina-the-hollower/fast-travel",
label: "How to Unlock Fast Travel in Mina the Hollower",
},
];

export const metadata: Metadata = {
title: "Mina the Hollower Where to Go First & Dungeon Order Guide",
description:
"Lost after Ossex? Learn where to go first in Mina the Hollower with the best dungeon order: Isle Map, Queensbury Crypt, Nox's Bayou and more.",

alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Mina the Hollower Where to Go First: Best Dungeon and Generator Order",
description:
"Learn where to go after Ossex, why Queensbury Crypt is the best first generator, and how to route toward Nox's Bayou, Septemburg, Sandfalls, Bone Beach and Astral Orrery.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1154,
height: 436,
alt: "Mina the Hollower Tenebrous Times newspaper giving early route hints.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Mina the Hollower Where to Go First",
description:
"Use this recommended dungeon order after Ossex: Isle Map first, then Queensbury Crypt, Nox's Bayou, Septemburg, Sandfalls and later routes.",
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
name: "Where to Go First",
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
"Mina the Hollower Where to Go First Guide: Recommended Dungeon and Generator Order After Ossex",
description:
"A player-focused Mina the Hollower route guide explaining where to go after Ossex and how to follow a smoother dungeon and generator order. It covers the Ossex setup, entering the Hollower's Guild, rescuing Rhene, digging out Drillhardt, buying the Isle Map, why Queensbury Crypt through Eastern Heath is the best first generator route for most players, how the first four generators are flexible, when to move toward Nox's Bayou, Kindlewood and Septemburg, Sandfalls, Bone Beach as a later route tied to Bone Beach access and Worm's Back or Stomach Caves progress, and Astral Orrery through mirror progression. It also explains what to prepare before the first generator, why Proto Spark matters in Queensbury Crypt, what to do after Queensbury Crypt, and how to recover if you went the wrong way.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-30",
dateModified: "2026-05-30",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Mina the Hollower" },
{ "@type": "Thing", name: "Where to go first" },
{ "@type": "Thing", name: "Dungeon order" },
{ "@type": "Thing", name: "Generator order" },
{ "@type": "Thing", name: "Ossex" },
{ "@type": "Thing", name: "Hollower's Guild" },
{ "@type": "Thing", name: "Rhene" },
{ "@type": "Thing", name: "Drillhardt" },
{ "@type": "Thing", name: "Isle Map" },
{ "@type": "Thing", name: "Eastern Heath" },
{ "@type": "Thing", name: "Queensbury Crypt" },
{ "@type": "Thing", name: "Proto Spark" },
{ "@type": "Thing", name: "Duke" },
{ "@type": "Thing", name: "Nox's Bayou" },
{ "@type": "Thing", name: "Backwaters" },
{ "@type": "Thing", name: "Kindlewood" },
{ "@type": "Thing", name: "Septemburg" },
{ "@type": "Thing", name: "Sandfalls" },
{ "@type": "Thing", name: "Bone Beach" },
{ "@type": "Thing", name: "Worm's Back" },
{ "@type": "Thing", name: "Stomach Caves" },
{ "@type": "Thing", name: "Astral Orrery" },
{ "@type": "Thing", name: "Mirror progress" },
{ "@type": "Thing", name: "Tenebrous Times" },
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
name: "Where should I go first after Ossex in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"First finish the Ossex setup: enter the Hollower's Guild, rescue Rhene, dig out Drillhardt and buy the Isle Map. After that, head east through Eastern Heath toward Queensbury Crypt.",
},
},
{
"@type": "Question",
name: "What is the recommended dungeon order in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"The recommended order is Ossex setup, Queensbury Crypt, Nox's Bayou, Kindlewood / Septemburg, Sandfalls, Bone Beach and Astral Orrery.",
},
},
{
"@type": "Question",
name: "Can I do the generators in any order?",
acceptedAnswer: {
"@type": "Answer",
text:
"The first four generator routes are flexible, but Queensbury Crypt is the safest first recommendation for most players because it is easier to route from Ossex and leads to Proto Spark.",
},
},
{
"@type": "Question",
name: "Why should I do Queensbury Crypt first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Queensbury Crypt has a smoother early difficulty curve and gives access to Proto Spark through the Duke side route, which makes later deaths less punishing.",
},
},
{
"@type": "Question",
name: "How do I reach Queensbury Crypt first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Leave Ossex through the eastern exit, follow the route into Eastern Heath, then keep moving toward Queensbury Crypt.",
},
},
{
"@type": "Question",
name: "Where do I go after Queensbury Crypt?",
acceptedAnswer: {
"@type": "Answer",
text:
"Return to Ossex first, spend or protect your Bones, check the Tenebrous Times, then move toward Nox's Bayou through the western Backwaters route.",
},
},
{
"@type": "Question",
name: "Should I buy the Isle Map before the first generator?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. The Isle Map only costs 500 Bones and gives enough direction to make your first generator route much easier to understand.",
},
},
{
"@type": "Question",
name: "What if I went the wrong way?",
acceptedAnswer: {
"@type": "Answer",
text:
"Back out, return to Ossex, spend or protect your Bones, upgrade if needed and choose another route from the Isle Map. Going the wrong way does not ruin your save.",
},
},
{
"@type": "Question",
name: "Is Bone Beach an early route?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Bone Beach is better treated as a later route because its access is more specific and tied to later Bone Beach access, travel routing and regional progression.",
},
},
{
"@type": "Question",
name: "How do I unlock Astral Orrery?",
acceptedAnswer: {
"@type": "Answer",
text:
"Astral Orrery is tied to mirror progress. Find and activate mirror routes across major regions, then use the large Ossex mirror when the path is ready.",
},
},
{
"@type": "Question",
name: "Should I get Proto Spark before leaving Queensbury Crypt?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, if you can. Proto Spark is one of the best early safety tools because it saves Mina from death once.",
},
},
{
"@type": "Question",
name: "Do I need fast travel for the full route order?",
acceptedAnswer: {
"@type": "Answer",
text:
"Eventually, yes. Train stations and mirror progress become more important as the island opens up, especially for later areas such as Bone Beach, Coltrane Peak and Astral Orrery.",
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
       title="Where Should You Go After Ossex?"
       description="Start with the Isle Map, then take the smoother Queensbury Crypt route before moving into Nox's Bayou, Septemburg, Sandfalls and later mirror routes."
       gameTitle="Mina the Hollower"
       gameHref="/mina-the-hollower"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 30, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <WhereToGoFirstContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
