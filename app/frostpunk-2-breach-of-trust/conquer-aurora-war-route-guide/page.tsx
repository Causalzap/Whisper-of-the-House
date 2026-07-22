import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ConquerAuroraWarRouteContent from "@/data/frostpunk-2-breach-of-trust/conquer-aurora-war-route-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/frostpunk-2-breach-of-trust/conquer-aurora-war-route-guide`;

const imageUrls = [
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-war-route-choice.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-barracks-platoons.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-heavy-weaponry-outpost-raid.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-conquered-aurora-victory.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-aurora-resistance-patrols.webp`,
];

const toc = [
{
id: "conquer-aurora-war-route",
label: "Conquer Aurora",
},
{
id: "opening-choice",
label: "Opening choice",
},
{
id: "barracks-soldiers",
label: "Barracks & soldiers",
},
{
id: "heavy-weaponry",
label: "Heavy Weaponry",
},
{
id: "attack-timing",
label: "Attack timing",
},
{
id: "after-conquest",
label: "After conquest",
},
{
id: "resistance",
label: "Resistance",
},
{
id: "post-war-laws",
label: "Post-war laws",
},
{
id: "achievements",
label: "Achievements",
},
{
id: "common-mistakes",
label: "Mistakes",
},
{
id: "faq",
label: "FAQ",
},
];

const relatedLinks = [
{
href: "/frostpunk-2-breach-of-trust",
label: "Frostpunk 2 Breach of Trust Guide Hub",
},
{
href: "/frostpunk-2-breach-of-trust/walkthrough",
label: "Breach of Trust Walkthrough",
},
{
href: "/frostpunk-2-breach-of-trust/aurora-negotiation-fishery-hub-guide",
label: "Aurora Negotiation and Fishery Hub Guide",
},
{
href: "/frostpunk-2-breach-of-trust/tremor-evacuation-guide",
label: "Tremor and Evacuation Guide",
},
];

export const metadata: Metadata = {
title: "Frostpunk 2 Breach of Trust Conquer Aurora Guide",
description:
"Conquer Aurora in Breach of Trust with Barracks, soldier hiring, conscription, Heavy Weaponry, attack timing, resistance and occupation recovery.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Frostpunk 2 Breach of Trust Conquer Aurora War Route Guide",
description:
"Follow the Breach of Trust war route with Barracks, hired soldiers, conscription, Heavy Weaponry, attack timing, Flawless Victory planning, Aurora resistance, and post-conquest recovery.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Frostpunk 2 Breach of Trust war route choice to reclaim Aurora.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Frostpunk 2 Breach of Trust Conquer Aurora Guide",
description:
"Use Barracks, soldiers, Heavy Weaponry, attack timing, resistance control and occupation laws to conquer Aurora.",
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
name: "Frostpunk 2 Breach of Trust Guide",
item: `${siteUrl}/frostpunk-2-breach-of-trust`,
},
{
"@type": "ListItem",
position: 3,
name: "Conquer Aurora War Route Guide",
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
"Frostpunk 2 Breach of Trust Conquer Aurora War Route Guide: Barracks, Soldiers, Heavy Weaponry, Attack Timing, Resistance, and Occupation Recovery",
description:
"A practical Frostpunk 2: Breach of Trust war route guide for conquering Aurora, covering the opening force choice, Barracks, hired soldiers, conscription, Heavy Weaponry as a military resource, outpost raids, attack timing, Flawless Victory planning, Aurora resistance, post-war laws such as Auroran Suffrage and Generator Relocation, and the recovery steps needed after conquest.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-28",
dateModified: "2026-06-28",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "Frostpunk 2",
},
{
"@type": "Thing",
name: "Frostpunk 2 Breach of Trust",
},
{
"@type": "Thing",
name: "Conquer Aurora",
},
{
"@type": "Thing",
name: "War route",
},
{
"@type": "Thing",
name: "Barracks",
},
{
"@type": "Thing",
name: "Platoons",
},
{
"@type": "Thing",
name: "Conscription",
},
{
"@type": "Thing",
name: "Heavy Weaponry",
},
{
"@type": "Thing",
name: "Aurora resistance",
},
{
"@type": "Thing",
name: "Flawless Victory",
},
{
"@type": "Thing",
name: "We're So Back",
},
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
name: "How do I start the war route?",
acceptedAnswer: {
"@type": "Answer",
text:
"Choose the force route at the opening council decision, then stabilize New Edinburgh enough to afford Barracks, soldiers, Heavy Weaponry, and later occupation control.",
},
},
{
"@type": "Question",
name: "Are platoons trained or conscripted?",
acceptedAnswer: {
"@type": "Answer",
text:
"Both can matter. In one run, soldiers could be hired with heat stamps and support capacity, while conscription required a governance law and political support. Hiring is faster but expensive; conscription can save money but costs trust and votes.",
},
},
{
"@type": "Question",
name: "What is Heavy Weaponry?",
acceptedAnswer: {
"@type": "Answer",
text:
"Heavy Weaponry is a military resource, not just a passive upgrade. You need it for some outpost raids, pressure actions, and later combat steps.",
},
},
{
"@type": "Question",
name: "Should I hire mercenaries or pass conscription?",
acceptedAnswer: {
"@type": "Answer",
text:
"Hire when you need speed and have heat stamps. Use conscription when you have enough political support and need to preserve money. Do not force conscription if the vote will damage trust at the wrong time.",
},
},
{
"@type": "Question",
name: "When should I attack Aurora?",
acceptedAnswer: {
"@type": "Answer",
text:
"Attack when the army advantage is strong, food is stable for the next few weeks, shelters are ready for tremors, and you have enough platoons and Heavy Weaponry for follow-up actions.",
},
},
{
"@type": "Question",
name: "What is Flawless Victory?",
acceptedAnswer: {
"@type": "Answer",
text:
"Flawless Victory is tied to conquering Aurora without losing a battle. If you are chasing it, wait for strong advantage instead of taking risky attacks.",
},
},
{
"@type": "Question",
name: "Does conquering Aurora solve food?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. It gives control of Aurora, but you still need Fishery Hubs, heat, housing, workers, and transfer capacity to feed New Edinburgh.",
},
},
{
"@type": "Question",
name: "What is We're So Back?",
acceptedAnswer: {
"@type": "Answer",
text:
"We're So Back is tied to regaining access to Aurora. In practice, watch for route states where Aurora access, food transfer, or post-war control becomes blocked by resistance or political instability.",
},
},
{
"@type": "Question",
name: "How do I reduce resistance after conquest?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use guards, patrols, stable food, housing, and reconciliation laws. Protect food, heat, housing, and transfer districts first.",
},
},
{
    "@type": "Question",
    name: "What happens if I fail the Auroran Suffrage vote?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Failing the Auroran Suffrage vote slows down post-war recovery because Aurora remains harder to integrate politically. Stabilize food, housing, heat, and resistance first, then bring the law back when trust and council support are stronger.",
    },
  },
{
"@type": "Question",
name: "Is the war route harder than negotiation?",
acceptedAnswer: {
"@type": "Answer",
text:
"For a first clear, yes. War adds soldier supply, Heavy Weaponry, attack timing, resistance, and occupation laws on top of the normal food, tremor, and evacuation problems.",
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
/>

    <GuideArticlePage
      title="Conquer Aurora Without Losing the City"
      description="Plan the war route with Barracks, hired soldiers, conscription, Heavy Weaponry, attack timing, resistance control, and post-conquest recovery."
      gameTitle="Frostpunk 2: Breach of Trust"
      gameHref="/frostpunk-2-breach-of-trust"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 28, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <ConquerAuroraWarRouteContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
