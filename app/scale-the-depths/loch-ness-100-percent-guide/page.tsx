import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LochNessContent from "@/data/scale-the-depths/loch-ness-100-percent-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scale-the-depths/loch-ness-100-percent-guide`;

const imageUrls = [
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-100-complete.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-equipment-shop.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-customer-preferences.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-artifact-sputnik.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-golden-switch.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-legendary-fish-warning.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-legendary-fish-caught.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-start.webp`,
];

const toc = [
{ id: "upgrades-first", label: "Upgrade order" },
{ id: "customers", label: "Customers" },
{ id: "treasures-secrets", label: "Treasures and secrets" },
{ id: "switches", label: "Switch routes" },
{ id: "beithir", label: "Beithir" },
{ id: "nessie", label: "Nessie" },
{ id: "troubleshooting", label: "Troubleshooting" },
{ id: "before-you-leave", label: "Before you leave" },
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
{
href: "/scale-the-depths/all-collectibles-secrets",
label: "All Collectibles and Secrets Guide",
},
{
href: "/scale-the-depths/achievement-guide",
label: "Scale the Depths Achievement Guide",
},
];

export const metadata: Metadata = {
title: "Scale the Depths 100% Collectibles & Secrets Guide",
description:
"Find every hidden artifact, bait, cosmetic, and legendary fish in Scale the Depths. Complete 100% guide for Loch Ness, Outer Banks, Huatulco & Point Nemo.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Scale the Depths Loch Ness 100% Guide: Beithir, Nessie, Customers and Treasures",
description:
"Finish Loch Ness with 23/23 customers, 7/7 treasures, Beithir, Nessie, artifacts, messages, switches and the right upgrade order.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Scale the Depths Loch Ness GPS screen showing 23 out of 23 customers and 7 out of 7 treasures.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Scale the Depths Loch Ness 100% Guide",
description:
"Clear Loch Ness with every customer, treasure, artifact, message, switch, Beithir catch and Nessie feed.",
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
name: "Loch Ness 100% Guide",
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
"Scale the Depths Loch Ness 100% Guide: Beithir, Nessie, Customers, Treasures, Messages, Artifacts and Upgrades",
description:
"A player-focused Scale the Depths Loch Ness 100% guide explaining how to reach 23/23 customers and 7/7 treasures, choose the right upgrade order, track customer fish preferences through the CARP Manual, find messages, artifacts and switch routes, catch the Beithir legendary fish, feed Nessie, troubleshoot stuck completion, and check what to do before leaving for Outer Banks because upgrades and money reset between locations.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-01",
dateModified: "2026-06-01",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Scale the Depths" },
{ "@type": "Thing", name: "Loch Ness" },
{ "@type": "Thing", name: "Loch Ness 100% completion" },
{ "@type": "Thing", name: "23 customers" },
{ "@type": "Thing", name: "7 treasures" },
{ "@type": "Thing", name: "GPS completion" },
{ "@type": "Thing", name: "CARP Manual" },
{ "@type": "Thing", name: "Customer preferences" },
{ "@type": "Thing", name: "Beithir" },
{ "@type": "Thing", name: "Nessie" },
{ "@type": "Thing", name: "Legendary fish" },
{ "@type": "Thing", name: "Golden switch" },
{ "@type": "Thing", name: "Sputnik artifact" },
{ "@type": "Thing", name: "Rod upgrades" },
{ "@type": "Thing", name: "Hook upgrades" },
{ "@type": "Thing", name: "Knife upgrades" },
{ "@type": "Thing", name: "Repellent" },
{ "@type": "Thing", name: "Outer Banks unlock" },
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
name: "What should I do if the Loch Ness door or switch does not work?",
acceptedAnswer: {
"@type": "Answer",
text:
"Hit the switch and then sweep the nearby branches before assuming nothing happened. Some switches open shortcuts or side paths in a different part of the area rather than immediately nearby.",
},
},
{
"@type": "Question",
name: "Where is the Beithir in Loch Ness?",
acceptedAnswer: {
"@type": "Answer",
text:
"Beithir spawns in deep water. You need maximum rod distance to reach its depth layer. If you have never seen it, upgrade your rod first because the fish is not accessible at shallow depths.",
},
},
{
"@type": "Question",
name: "How do I catch Beithir?",
acceptedAnswer: {
"@type": "Answer",
text:
"Upgrade hook damage before the attempt, equip repellent to keep your bag clear, reach the deep layer and stay ahead of Beithir's movement arc instead of chasing every turn. The fight takes longer than normal fish, so do not force it with weak gear.",
},
},
{
"@type": "Question",
name: "How do I feed Nessie?",
acceptedAnswer: {
"@type": "Answer",
text:
"Nessie appears after enough Loch Ness progress. She needs legendary-tier fish, specifically Beithir, to fill meaningfully. Do not waste Beithir on other customers.",
},
},
{
"@type": "Question",
name: "Why does the next location unlock before Loch Ness is complete?",
acceptedAnswer: {
"@type": "Answer",
text:
"The next location unlocks after enough main progress, not after 100% cleanup. You can still be missing customers, treasures, fish, messages or artifacts.",
},
},
{
"@type": "Question",
name: "How many customers are in Loch Ness?",
acceptedAnswer: {
"@type": "Answer",
text: "The GPS shows 23/23 when the customer cleanup is complete.",
},
},
{
"@type": "Question",
name: "How many treasures are in Loch Ness?",
acceptedAnswer: {
"@type": "Answer",
text: "The GPS shows 7/7 when the treasure cleanup is complete.",
},
},
{
"@type": "Question",
name: "What upgrades carry over to the next location?",
acceptedAnswer: {
"@type": "Answer",
text:
"Most upgrades reset when you move to Outer Banks. The game frames this as different waters needing different tools. Spend any remaining Loch Ness money before leaving because currency does not carry with you either.",
},
},
{
"@type": "Question",
name: "What is the best upgrade to buy first in Loch Ness?",
acceptedAnswer: {
"@type": "Answer",
text:
"Rod distance is the best first upgrade because it gates hidden routes, deeper fish, the Beithir spawn layer and most secret content.",
},
},
{
"@type": "Question",
name: "Why can I not find the last treasure?",
acceptedAnswer: {
"@type": "Answer",
text:
"Stop money fishing and make exploration-only runs. Clear every bush, check every switch branch and use line reels to reach any depth pockets you have not fully swept.",
},
},
{
"@type": "Question",
name: "Should I 100% Loch Ness before going to Outer Banks?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, especially if you want clean achievement progress. Returning later is possible but awkward, and upgrades reset, so you will need to rebuild gear from scratch when you do.",
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
       title="How Do You 100% Loch Ness?"
       description="Reach 23/23 customers and 7/7 treasures, catch Beithir for Nessie, clear the switch routes and check the CARP Manual before leaving."
       gameTitle="Scale the Depths"
       gameHref="/scale-the-depths"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 1, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <LochNessContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
