import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WalkthroughContent from "@/data/frostpunk-2-breach-of-trust/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/frostpunk-2-breach-of-trust/walkthrough`;

const imageUrls = [
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-route-choice.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-steam-output-tremor.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-emergency-shelter-coverage.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-aurora-negotiation.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-fishery-hub.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-evacuation-hub-airship.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-generator-core-extraction.webp`,
];

const toc = [
{
id: "walkthrough",
label: "Walkthrough",
},
{
id: "act-1-pause",
label: "Act 1 start",
},
{
id: "politics-vote-of-trust",
label: "Vote of Trust",
},
{
id: "tremor-vs-volcanic-night",
label: "Tremor vs Volcanic Night",
},
{
id: "steam-output",
label: "Steam output",
},
{
id: "emergency-shelters",
label: "Emergency Shelters",
},
{
id: "aurora-choice",
label: "Aurora choice",
},
{
id: "act-2-aurora",
label: "Act 2 Aurora",
},
{
id: "act-3-volcanic-night",
label: "Act 3 evacuation",
},
{
id: "generator-core",
label: "Generator Core",
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
href: "/frostpunk-2-breach-of-trust/",
label: "Frostpunk 2 Breach of Trust Guide Hub",
},
{
href: "/frostpunk-2-breach-of-trust/aurora-negotiation-fishery-hub-guide/",
label: "Aurora Negotiation and Fishery Hub Guide",
},
{
href: "/frostpunk-2-breach-of-trust/conquer-aurora-war-route-guide/",
label: "Conquer Aurora War Route Guide",
},
{
href: "/frostpunk-2-breach-of-trust/tremor-evacuation-guide/",
label: "Tremor and Evacuation Guide",
},
];

export const metadata: Metadata = {
title: "Frostpunk 2 Breach of Trust Walkthrough & Vote Guide",
description:
"Follow Breach of Trust with Vote of Trust, Aurora choices, steam output, Emergency Shelter Hubs, Fishery Hubs, evacuation and Generator Core timing.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Frostpunk 2 Breach of Trust Walkthrough: Vote of Trust, Aurora, Tremors and Evacuation",
description:
"Clear Frostpunk 2: Breach of Trust with a practical route for Vote of Trust pressure, Aurora negotiation or war, steam output, Emergency Shelter Hubs, Fishery Hubs, Volcanic Night, evacuation airships, and Generator Core timing.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Frostpunk 2 Breach of Trust opening route choice.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Frostpunk 2 Breach of Trust Walkthrough",
description:
"Plan the Vote of Trust, Aurora route, steam output, shelters, Fishery Hubs, evacuation airships, and Generator Core timing.",
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
name: "Frostpunk 2 Breach of Trust Walkthrough",
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
"Frostpunk 2 Breach of Trust Walkthrough: Vote of Trust, Aurora Routes, Tremors, Volcanic Night, Evacuation Hubs and Generator Core Timing",
description:
"A player-focused Frostpunk 2: Breach of Trust walkthrough for the DLC scenario covering the First Citizen opening, Vote of Trust pressure, faction promises, council timing, Aurora negotiation or war choices, steam output and seismic stress, Emergency Shelter Hub coverage, the difference between Tremors and Volcanic Night, Aurora Fishery Hubs, food transfer, evacuation airships, Generator Core extraction timing, and practical mistakes that can collapse New Edinburgh before the ending.",
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
name: "Breach of Trust walkthrough",
},
{
"@type": "Thing",
name: "Vote of Trust",
},
{
"@type": "Thing",
name: "Aurora negotiation",
},
{
"@type": "Thing",
name: "Conquer Aurora",
},
{
"@type": "Thing",
name: "Tremors",
},
{
"@type": "Thing",
name: "Volcanic Night",
},
{
"@type": "Thing",
name: "Emergency Shelter Hub",
},
{
"@type": "Thing",
name: "Fishery Hub",
},
{
"@type": "Thing",
name: "Evacuation Hub",
},
{
"@type": "Thing",
name: "Generator Core",
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
name: "How many factions are there in Breach of Trust?",
acceptedAnswer: {
"@type": "Answer",
text:
"Breach of Trust adds five new communities and factions overall. In the opening route covered here, the important early council groups are Brokers, Four-Fingers, and Founders, while later Aurora-side groups can appear as the scenario develops.",
},
},
{
"@type": "Question",
name: "What is the main mechanic in Breach of Trust?",
acceptedAnswer: {
"@type": "Answer",
text:
"The main mechanic is the link between survival and approval. Food, heat, trust, faction promises, Vote of Trust pressure, tremors, and Aurora decisions all affect whether the city accepts your rule.",
},
},
{
"@type": "Question",
name: "What should I do first after becoming First Citizen?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pause, check food, lower unnecessary steam output, inspect damaged districts, and decide whether your first route is negotiation or war. Do not spend prefabs before you know the tremor and shelter situation.",
},
},
{
"@type": "Question",
name: "How often can I pass laws?",
acceptedAnswer: {
"@type": "Answer",
text:
"Frostpunk 2 council timing is built around roughly 10-week law windows. In Breach of Trust, that matters because a badly timed vote can leave you unable to fix food, shelters, workers, or governance pressure right when a Vote of Trust is approaching.",
},
},
{
"@type": "Question",
name: "Is Vote of Trust important?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. You can lose politically even if your economy looks workable. Keep approval stable through food, warmth, fulfilled promises, and careful law timing.",
},
},
{
"@type": "Question",
name: "Should I use Guided Voting?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use it only when the law matters for survival or route progress. Guided Voting can help pass a law, but the political cost is not worth it for low-impact convenience choices.",
},
},
{
"@type": "Question",
name: "Should I negotiate or reclaim Aurora on the first run?",
acceptedAnswer: {
"@type": "Answer",
text:
"Negotiation is safer for a first clear. War is playable, but it adds Barracks, platoons, conquest timing, resistance, and occupation rebuilding.",
},
},
{
"@type": "Question",
name: "What is the difference between Tremors and Volcanic Night?",
acceptedAnswer: {
"@type": "Answer",
text:
"Tremors are recurring damage events that you manage with lower steam output, shelter coverage, and repairs. Volcanic Night is the later eruption phase where ash, squalor, crime, evacuation, and Aurora housing become the main problem.",
},
},
{
"@type": "Question",
name: "Why does steam output matter?",
acceptedAnswer: {
"@type": "Answer",
text:
"Steam output increases seismic pressure. Lowering it toward the 200 target buys time before tremors hit, but you still need enough heat to keep people stable.",
},
},
{
"@type": "Question",
name: "Why is food still a problem after reaching Aurora?",
acceptedAnswer: {
"@type": "Answer",
text:
"Aurora needs Fishery Hubs, heat, workers, and transfer capacity. One Fishery Hub is not enough, and food must still move back to New Edinburgh.",
},
},
{
"@type": "Question",
name: "How many Evacuation Hubs should I build?",
acceptedAnswer: {
"@type": "Answer",
text:
"More than one. Each airship saves only 1,000 people and needs 5,000 food, 5,000 coal, and 500 prefabs.",
},
},
{
"@type": "Question",
name: "When should I extract the Generator Core?",
acceptedAnswer: {
"@type": "Answer",
text:
"Extract it after the evacuation system is already moving and the 30-week core timer lines up with the eruption and airship cycles.",
},
},
{
"@type": "Question",
name: "Can I use this walkthrough for Pure Dead Brilliant?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use it to learn the route first. For Pure Dead Brilliant, replay with stricter shelter coverage, no starvation, no crime deaths, stable Aurora housing, and cleaner final evacuation timing.",
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
      title="Clear Breach of Trust Without Losing the Vote"
      description="Follow a practical route through Vote of Trust pressure, Aurora negotiation or war, tremors, Fishery Hubs, evacuation airships, and Generator Core timing."
      gameTitle="Frostpunk 2: Breach of Trust"
      gameHref="/frostpunk-2-breach-of-trust"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 28, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <WalkthroughContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
