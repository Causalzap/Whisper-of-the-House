import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BreachOfTrustContent from "@/data/frostpunk-2-breach-of-trust/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/frostpunk-2-breach-of-trust/`;

const imageUrls = [
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-route-choice.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-steam-output-tremor.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-aurora-negotiation.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-emergency-shelter-coverage.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-fishery-hub.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-evacuation-hub-airship.webp`,
];

const toc = [
{
id: "frostpunk-2-breach-of-trust-guide",
label: "Guide overview",
},
{
id: "before-you-buy-or-start",
label: "Before you start",
},
{
id: "first-moves",
label: "First moves",
},
{
id: "vote-of-trust",
label: "Vote of Trust",
},
{
id: "steam-output-tremors",
label: "Steam & tremors",
},
{
id: "aurora-negotiation",
label: "Aurora negotiation",
},
{
id: "war-route",
label: "War route",
},
{
id: "emergency-shelter-hub",
label: "Emergency Shelter Hub",
},
{
id: "fishery-hubs-transfer",
label: "Fishery Hubs",
},
{
id: "volcanic-night-evacuation",
label: "Volcanic Night",
},
{
id: "which-guide-next",
label: "Guide routes",
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
href: "/frostpunk-2-breach-of-trust/walkthrough/",
label: "Breach of Trust Walkthrough",
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
title: "Frostpunk 2 Breach of Trust Guide & Walkthrough",
description:
"Start Breach of Trust with Vote of Trust, Aurora negotiation or war, Fishery Hubs, tremor safety, Volcanic Night, evacuation and Generator Core timing.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Frostpunk 2 Breach of Trust Guide and Walkthrough",
description:
"Plan Frostpunk 2: Breach of Trust with Vote of Trust pressure, Aurora routes, Fishery Hubs, Emergency Shelter Hubs, Volcanic Night, evacuation launches, and Generator Core timing.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Frostpunk 2 Breach of Trust route choice between negotiation and force.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Frostpunk 2 Breach of Trust Guide & Walkthrough",
description:
"Handle Vote of Trust, Aurora routes, Fishery Hubs, tremors, Volcanic Night, evacuation and Generator Core timing.",
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
"Frostpunk 2 Breach of Trust Guide: Vote of Trust, Aurora Negotiation, Conquer Aurora, Fishery Hubs, Tremors, Volcanic Night, Evacuation, and Generator Core Timing",
description:
"A practical Frostpunk 2: Breach of Trust guide hub for planning the DLC scenario from the opening Vote of Trust pressure through Aurora negotiation or conquest, promised resource delivery, Fishery Hubs, Aurora-side food transfer, Emergency Shelter Hubs, steam output and tremor safety, Volcanic Night preparation, evacuation airship launches, and Generator Core timing.",
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
name: "Frostpunk 2: Breach of Trust",
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
name: "Fishery Hub",
},
{
"@type": "Thing",
name: "Aurora-side settlement",
},
{
"@type": "Thing",
name: "Emergency Shelter Hub",
},
{
"@type": "Thing",
name: "Volcanic Night",
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
name: "What is Frostpunk 2: Breach of Trust?",
acceptedAnswer: {
"@type": "Answer",
text:
"Breach of Trust is a paid Frostpunk 2 DLC scenario set in New Edinburgh, where Aurora cuts off food while the city deals with political distrust, tremors, Volcanic Night, and evacuation planning.",
},
},
{
"@type": "Question",
name: "Do I need Frostpunk 2 to play Breach of Trust?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Breach of Trust is DLC and requires the base game Frostpunk 2.",
},
},
{
"@type": "Question",
name: "When did Breach of Trust release?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Steam listing launched Breach of Trust on June 23, 2026. Store availability, discounts, and regional pricing can change.",
},
},
{
"@type": "Question",
name: "What should I do first in Breach of Trust?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pause, check Vote of Trust pressure, food, damaged districts, prefabs, steam output, and the next tremor timer. New Edinburgh needs enough stability to survive until Aurora can actually help.",
},
},
{
"@type": "Question",
name: "What is Vote of Trust?",
acceptedAnswer: {
"@type": "Answer",
text:
"Vote of Trust is the political pressure that makes approval and council support central to the DLC. It means decisions cannot be judged only by economic efficiency; promises, law timing, and trust collapse also matter.",
},
},
{
"@type": "Question",
name: "Can I lose even with a good economy?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Breach of Trust can punish political instability even when the economy looks recoverable. If approval collapses, promises fail, or key laws become impossible to pass, the run can fall apart before the food route or evacuation plan pays off.",
},
},
{
"@type": "Question",
name: "Should I negotiate with Aurora or conquer Aurora?",
acceptedAnswer: {
"@type": "Answer",
text:
"For a first clear, negotiation is usually safer. It still has food and transfer problems, but it avoids the extra pressure of Barracks, soldiers, Heavy Weaponry, resistance, and occupation laws. Conquest is viable when the city can afford the war and recovery afterward.",
},
},
{
"@type": "Question",
name: "Why did my Aurora deal not give me food?",
acceptedAnswer: {
"@type": "Answer",
text:
"After Aurora accepts a deal, you still need to send the promised resources from the objective panel. If you miss that delivery action, the trade can stall even though the negotiation succeeded.",
},
},
{
"@type": "Question",
name: "How do I reduce tremor danger?",
acceptedAnswer: {
"@type": "Answer",
text:
"Lower excess steam output, especially geothermal pressure, while keeping enough heat for housing and key workplaces. Then cover housing with Emergency Shelter Hubs and keep prefabs for repairs.",
},
},
{
"@type": "Question",
name: "What does Emergency Shelter Hub do?",
acceptedAnswer: {
"@type": "Answer",
text:
"Emergency Shelter Hub reduces the risk of deaths from tremor damage around covered districts. It does not make districts immune to all damage, so repairs and prefab reserves still matter.",
},
},
{
"@type": "Question",
name: "What are Fishery Hubs?",
acceptedAnswer: {
"@type": "Answer",
text:
"Fishery Hubs are the main food buildings for Aurora-side fishing territory. They need heat, space, workers, and materials, then their food has to be transferred back to New Edinburgh.",
},
},
{
"@type": "Question",
name: "What is the Aurora-side settlement?",
acceptedAnswer: {
"@type": "Answer",
text:
"It is the territory New Edinburgh gains access to after progressing Aurora negotiations or control. The exact settlement name can depend on your run, so focus on fishing grounds, Fishery Hubs, and the transfer screen rather than a fixed name.",
},
},
{
"@type": "Question",
name: "Does conquering Aurora solve food?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Conquering Aurora gives control, but the food system still needs Fishery Hubs, heat, workers, transfer capacity, and resistance control.",
},
},
{
"@type": "Question",
name: "What is Heavy Weaponry used for?",
acceptedAnswer: {
"@type": "Answer",
text:
"Heavy Weaponry is a military resource used for war-route pressure, raids, outposts, and later combat steps. Do not treat it as only a passive technology.",
},
},
{
"@type": "Question",
name: "When should I prepare for Volcanic Night?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start before the eruption timer feels urgent. Build the food route, store coal and prefabs, prepare evacuation launches, and make sure the Aurora-side route can support people and resources.",
},
},
{
"@type": "Question",
name: "When should I extract the Generator Core?",
acceptedAnswer: {
"@type": "Answer",
text:
"Extract the Generator Core after evacuation is already functioning and the timer lines up with the final eruption window. Starting it too early can weaken the city before airships are ready.",
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
      title="Plan Breach of Trust Without Losing the City"
      description="Use this route hub to handle Vote of Trust pressure, Aurora negotiation or conquest, Fishery Hubs, tremor safety, Volcanic Night, evacuation, and Generator Core timing."
      gameTitle="Frostpunk 2: Breach of Trust"
      gameHref="/frostpunk-2-breach-of-trust"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 28, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <BreachOfTrustContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>
);
}
