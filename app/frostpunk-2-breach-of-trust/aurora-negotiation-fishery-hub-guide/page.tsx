import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AuroraNegotiationFisheryContent from "@/data/frostpunk-2-breach-of-trust/aurora-negotiation-fishery-hub-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/frostpunk-2-breach-of-trust/aurora-negotiation-fishery-hub-guide/`;

const imageUrls = [
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-aurora-negotiation.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-deliver-promised-resources.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-negotiate-fishery-territory.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-fishery-hub.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-food-transfer-screen.webp`,
`${siteUrl}/images/frostpunk-2-breach-of-trust/frostpunk-2-breach-of-trust-skyways-food-transfer.webp`,
];

const toc = [
{
id: "aurora-negotiation-guide",
label: "Aurora negotiation",
},
{
id: "first-trade",
label: "First trade",
},
{
id: "strength-defiance",
label: "Strength & defiance",
},
{
id: "send-promised-resources",
label: "Send resources",
},
{
id: "counteroffers",
label: "Counteroffers",
},
{
id: "territory",
label: "Fishing territory",
},
{
id: "fishery-hub",
label: "Fishery Hubs",
},
{
id: "transfer-food",
label: "Food transfer",
},
{
id: "skyways-transfer",
label: "Skyways",
},
{
id: "when-not-to-buy-or-build",
label: "When to wait",
},
{
id: "common-mistakes",
label: "Mistakes",
},
{
id: "related-guides",
label: "Related guides",
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
href: "/frostpunk-2-breach-of-trust/walkthrough/",
label: "Breach of Trust Walkthrough",
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
title: "Frostpunk 2 Breach of Trust Aurora Negotiation Guide",
description:
"Negotiate with Aurora, send promised resources, build Fishery Hubs, transfer food, use Skyways, and fix New Edinburgh's food crisis.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Frostpunk 2 Breach of Trust Aurora Negotiation and Fishery Hub Guide",
description:
"Fix New Edinburgh's food crisis with Aurora negotiations, promised resource deliveries, Strength and Defiance checks, Fishery Hubs, food transfer, and Skyways.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Frostpunk 2 Breach of Trust Aurora negotiation screen.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Frostpunk 2 Breach of Trust Aurora Guide",
description:
"Handle Aurora negotiation, Fishery Hubs, food transfer, promised resources, and Skyways.",
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
item: `${siteUrl}/frostpunk-2-breach-of-trust/`,
},
{
"@type": "ListItem",
position: 3,
name: "Aurora Negotiation and Fishery Hub Guide",
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
"Frostpunk 2 Breach of Trust Aurora Negotiation and Fishery Hub Guide: Promised Resources, Strength, Defiance, Fishery Hubs, Food Transfer, and Skyways",
description:
"A practical Frostpunk 2: Breach of Trust guide for fixing New Edinburgh's food crisis through Aurora negotiations, coal-for-food trades, promised resource deliveries, Strength and Defiance decisions, territory deals, Aurora-side settlement control, Fishery Hub placement and output, food transfer back to New Edinburgh, Skyways, and common mistakes that leave food stuck outside the city.",
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
name: "Aurora negotiation",
},
{
"@type": "Thing",
name: "Promised resources",
},
{
"@type": "Thing",
name: "Strength and Defiance",
},
{
"@type": "Thing",
name: "Aurora-side settlement",
},
{
"@type": "Thing",
name: "Fishing grounds",
},
{
"@type": "Thing",
name: "Fishery Hub",
},
{
"@type": "Thing",
name: "Food transfer",
},
{
"@type": "Thing",
name: "Skyways",
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
name: "How do I negotiate with Aurora?",
acceptedAnswer: {
"@type": "Answer",
text:
"Open the Aurora negotiation screen, set what New Edinburgh wants on the demand side, then offer resources Aurora values. Coal is usually the easiest early offer because New Edinburgh starts with a large coal stockpile.",
},
},
{
"@type": "Question",
name: "Why did Aurora accept but my food did not arrive?",
acceptedAnswer: {
"@type": "Answer",
text:
"You probably still need to send the promised resources. After the deal is accepted, check the objective panel and use the delivery action.",
},
},
{
"@type": "Question",
name: "What do Strength and Defiance do?",
acceptedAnswer: {
"@type": "Answer",
text:
"Strength affects Aurora's leverage in negotiations, making deals more expensive when it is high. Defiance affects whether Aurora keeps talking or refuses you.",
},
},
{
"@type": "Question",
name: "Should I accept Aurora's counteroffer?",
acceptedAnswer: {
"@type": "Answer",
text:
"Accept only if food is urgent and you can deliver the requested resources on time. If the counteroffer empties your coal or materials without a recovery plan, it can create the next crisis.",
},
},
{
"@type": "Question",
name: "What is the Aurora-side settlement?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Aurora-side settlement is the territory New Edinburgh gains access to after progressing Aurora negotiations or territory control. Its exact name can depend on your run, so focus on the fishing-ground territory, Fishery Hubs, and transfer screen rather than a fixed settlement name.",
},
},
{
"@type": "Question",
name: "How do I get fishing grounds?",
acceptedAnswer: {
"@type": "Answer",
text:
"Progress Aurora negotiations or territory access until New Edinburgh gains control of land with fishing grounds. Be ready for extra heat, housing, and workforce demands after the deal.",
},
},
{
"@type": "Question",
name: "Why can I not build a normal Food District in Aurora?",
acceptedAnswer: {
"@type": "Answer",
text:
"Aurora's fishing grounds use Fishery Hubs. Frostbreak enough space, place the hub around the fishing ground, and provide heat and workers.",
},
},
{
"@type": "Question",
name: "Is one Fishery Hub enough?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually no. In the runs covered here, early Fishery Hub output appeared around 50 to 66 food, and one hub was not enough for both New Edinburgh and the Aurora-side settlement.",
},
},
{
"@type": "Question",
name: "How do I send food from Aurora to New Edinburgh?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the resource transfer screen and set food to move from the Aurora-side settlement back to New Edinburgh. If the route cannot move enough, research Skyways or add transfer capacity.",
},
},
{
"@type": "Question",
name: "When should I research Skyways?",
acceptedAnswer: {
"@type": "Answer",
text:
"Research Skyways when food exists on the Aurora side but New Edinburgh still cannot receive enough, or when the objective asks for sustained high food transfer.",
},
},
{
"@type": "Question",
name: "Does the war route still need Fishery Hubs?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Conquering Aurora changes the political problem, not the food math. You still need Fishery Hubs, heat, housing, transfer capacity, and resistance control.",
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
      title="Fix Food Through Aurora and Fishery Hubs"
      description="Negotiate with Aurora, deliver promised resources, build Fishery Hubs, move food back to New Edinburgh, and upgrade transfer capacity with Skyways."
      gameTitle="Frostpunk 2: Breach of Trust"
      gamehref="/frostpunk-2-breach-of-trust"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 28, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <AuroraNegotiationFisheryContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>
);
}
