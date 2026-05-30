import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HowToGetMapContent from "@/data/mina-the-hollower/how-to-get-map.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mina-the-hollower/how-to-get-map`;

const imageUrls = [
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-hollowers-guild-side-entry.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-muriel-rhene-drillhardt-missing.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-muriel-head-south-rhene.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-southern-rhene-route.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-rhene-rescue.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-drillhardt-map-purchase.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-underlab-rest-point.webp`,
];

const toc = [
{ id: "quick-route", label: "How to get the map" },
{ id: "find-guild", label: "Find the Guild" },
{ id: "go-south-for-rhene", label: "Find Rhene" },
{ id: "buy-map", label: "Buy the Isle Map" },
{ id: "how-map-works", label: "How the map works" },
{ id: "when-to-buy-map", label: "When to buy it" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "related-guides", label: "Related guides" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{ href: "/mina-the-hollower", label: "Mina the Hollower Beginner Guide" },
{
href: "/mina-the-hollower/where-to-go-first",
label: "Where to Go First in Mina the Hollower",
},
{
href: "/mina-the-hollower/bones-farming",
label: "How to Farm Bones Fast in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-starting-weapon",
label: "Best Starting Weapon in Mina the Hollower",
},
{
href: "/mina-the-hollower/fast-travel",
label: "How to Unlock Fast Travel in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-early-trinkets",
label: "Best Early Trinkets in Mina the Hollower",
},
];

export const metadata: Metadata = {
title: "Mina the Hollower Map Guide: Isle Map & Drillhardt",
description:
"Get the Isle Map in Mina the Hollower by rescuing Rhene, entering the Rebel Barracks, digging out Drillhardt and buying the map for 500 Bones.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Mina the Hollower Map Guide: Rhene, Rebel Barracks and Drillhardt",
description:
"Follow the Hollower's Guild route, rescue Rhene from the Rebel Barracks, dig out Drillhardt and buy the Isle Map for 500 Bones.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1149,
height: 643,
alt: "Mina the Hollower Hollower's Guild side entry around the blocked front door.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Mina the Hollower Map Guide",
description:
"Find the Hollower's Guild, rescue Rhene, reveal Drillhardt and buy the Isle Map for 500 Bones.",
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
name: "How to Get the Map",
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
"Mina the Hollower Isle Map Guide: Hollower's Guild, Rhene, Rebel Barracks, Drillhardt and Enhanced Map",
description:
"A player-focused Mina the Hollower Isle Map guide explaining how to reach the Hollower's Guild in Ossex, enter through the side route when the front is blocked, follow Muriel's lead south, find Rhene in the Rebel Barracks in the Southern Outskirts, use a Kear to open the barracks entrance, handle the spike switch and Plasma Vial door, escort Rhene back, reveal Drillhardt from the moving green patch inside the Guild, buy the Isle Map for 500 Bones, understand what the base Isle Map does and does not show, and know when to look for the later Enhanced Map upgrade for collectible tracking.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-30",
dateModified: "2026-05-30",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Mina the Hollower" },
{ "@type": "Thing", name: "Isle Map" },
{ "@type": "Thing", name: "Enhanced Map" },
{ "@type": "Thing", name: "Drillhardt" },
{ "@type": "Thing", name: "Rhene" },
{ "@type": "Thing", name: "Muriel" },
{ "@type": "Thing", name: "Hollower's Guild" },
{ "@type": "Thing", name: "Ossex" },
{ "@type": "Thing", name: "Southern Outskirts" },
{ "@type": "Thing", name: "Rebel Barracks" },
{ "@type": "Thing", name: "Kear" },
{ "@type": "Thing", name: "Plasma Vial" },
{ "@type": "Thing", name: "Underlab" },
{ "@type": "Thing", name: "Tenebrous Times" },
{ "@type": "Thing", name: "Eastern Heath" },
{ "@type": "Thing", name: "Queensbury Crypt" },
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
name: "Where is the map in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Isle Map is sold by Drillhardt in the Hollower's Guild after you rescue Rhene from the Rebel Barracks and dig Drillhardt out inside the Guild.",
},
},
{
"@type": "Question",
name: "How much does the Isle Map cost?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Isle Map costs 500 Bones. It is one of the best early purchases because it helps you understand where the generator routes are.",
},
},
{
"@type": "Question",
name: "How do I unlock Drillhardt?",
acceptedAnswer: {
"@type": "Answer",
text:
"Enter the Hollower's Guild, follow the Guild lead south for Rhene, rescue her from the Rebel Barracks, then return to the Guild. Look for the moving green patch on the left side of the Guild room, clear vines or debris if needed, burrow underneath it and dig Drillhardt out.",
},
},
{
"@type": "Question",
name: "Where is Rhene?",
acceptedAnswer: {
"@type": "Answer",
text:
"Rhene is held in the Rebel Barracks in the Southern Outskirts. Leave Ossex through the southern gate, follow the route left and upward, then work through the Kear entrance, spike switch and Plasma Vial door.",
},
},
{
"@type": "Question",
name: "Why can't I enter the Hollower's Guild?",
acceptedAnswer: {
"@type": "Answer",
text:
"The front entrance is blocked at first. Go around the side of the building, break through the crates and enter from the side route.",
},
},
{
"@type": "Question",
name: "Why can't I find Drillhardt after rescuing Rhene?",
acceptedAnswer: {
"@type": "Answer",
text:
"He is hidden under a moving green patch inside the Hollower's Guild. Clear vines or debris if they are blocking the spot, then burrow underneath the patch and dig him out before trying to buy the map.",
},
},
{
"@type": "Question",
name: "Does the Isle Map show every room?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. The Isle Map gives broad direction for the island and generator routes. It does not show every exact room, treasure chest or secret path.",
},
},
{
"@type": "Question",
name: "What is the Enhanced Map?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Enhanced Map is a later Drillhardt upgrade that helps with collectible tracking. The base Isle Map is mainly for route direction and does not track everything you missed.",
},
},
{
"@type": "Question",
name: "Where do I check the Isle Map?",
acceptedAnswer: {
"@type": "Answer",
text:
"You check the Isle Map from your Underlab. Treat Underlab stops as planning points before choosing your next route.",
},
},
{
"@type": "Question",
name: "Should I buy the map before upgrading?",
acceptedAnswer: {
"@type": "Answer",
text:
"For most players, yes. Buy the Isle Map early, then start putting Bones into Attack, Defense and survival upgrades.",
},
},
{
"@type": "Question",
name: "What should I do after buying the map?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the Tenebrous Times, spend or protect loose Bones, then use the Isle Map to aim toward Eastern Heath and Queensbury Crypt if you want the smoothest first major route.",
},
},
{
"@type": "Question",
name: "Can I miss the map?",
acceptedAnswer: {
"@type": "Answer",
text:
"You can delay buying it, but it is not a one-time pickup that disappears. If you skipped it, return to the Hollower's Guild after unlocking Drillhardt and buy it for 500 Bones.",
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
       title="How Do You Get the Isle Map?"
       description="Find the Hollower's Guild, rescue Rhene from the Rebel Barracks, dig out Drillhardt and buy the Isle Map before you get lost around Ossex."
       gameTitle="Mina the Hollower"
       gameHref="/mina-the-hollower"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 30, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <HowToGetMapContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
