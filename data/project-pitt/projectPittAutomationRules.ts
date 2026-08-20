export type ProjectPittProduct = "duck" | "cash-register";

export type ProjectPittSymptom =
  | "overshoot"
  | "undershoot"
  | "jam"
  | "escape"
  | "tools-moving"
  | "chaotic"
  | "combo-breaks"
  | "hard-to-move";

export type RouteFeature =
  | "fans"
  | "walls"
  | "roof"
  | "catcher"
  | "sticky"
  | "slick"
  | "magnet"
  | "cushion";

export type UnlockState = "early" | "sticky" | "slick";

export type RecommendationConfidence = "supported" | "experimental";

export type AutomationRule = {
  id: string;
  product: ProjectPittProduct | "any";
  symptom: ProjectPittSymptom;
  requires?: RouteFeature[];
  excludes?: RouteFeature[];
  minUnlock?: UnlockState;
  maxUnlock?: UnlockState;
  score: number;
  diagnosis: string;
  why: string;
  primaryFix: string;
  nextSteps: string[];
  avoid?: string;
  confidence: RecommendationConfidence;
};

export const productOptions: Array<{
  id: ProjectPittProduct;
  label: string;
  status: "Well-supported" | "Experimental";
  description: string;
  guideHref: string;
  guideLabel: string;
}> = [
  {
    id: "duck",
    label: "Duck",
    status: "Well-supported",
    description:
      "Best fit for early straight lanes, staged airflow, containment, and catcher fixes.",
    guideHref: "/project-pitt/duck-automation",
    guideLabel: "Duck Automation guide",
  },
  {
    id: "cash-register",
    label: "Cash Register",
    status: "Experimental",
    description:
      "Useful for early transport diagnosis, especially bad transitions, friction, and local airflow bottlenecks.",
    guideHref: "/project-pitt/cash-register-automation",
    guideLabel: "Cash Register Automation guide",
  },
];

export const symptomOptions: Array<{
  id: ProjectPittSymptom;
  label: string;
  short: string;
}> = [
  {
    id: "overshoot",
    label: "Products overshoot the target",
    short: "Overshooting",
  },
  {
    id: "undershoot",
    label: "Products stop before the target",
    short: "Not reaching destination",
  },
  {
    id: "jam",
    label: "Products pile up or jam",
    short: "Getting stuck / jamming",
  },
  {
    id: "escape",
    label: "Products escape the route",
    short: "Escaping the route",
  },
  {
    id: "tools-moving",
    label: "Fans or panels will not stay put",
    short: "Tools moving",
  },
  {
    id: "chaotic",
    label: "The route works, but it is too chaotic",
    short: "Too chaotic",
  },
  {
    id: "combo-breaks",
    label: "The combo keeps breaking",
    short: "Combo keeps breaking",
  },
  {
    id: "hard-to-move",
    label: "The product is difficult to move reliably",
    short: "Hard to move",
  },
];

export const routeFeatureOptions: Array<{
  id: RouteFeature;
  label: string;
}> = [
  { id: "fans", label: "Fans" },
  { id: "walls", label: "Side walls / panels" },
  { id: "roof", label: "Roof / enclosed chute" },
  { id: "catcher", label: "Backboard / catcher" },
  { id: "sticky", label: "Sticky Tools in use" },
  { id: "slick", label: "Slick Panels in use" },
  { id: "magnet", label: "Magnet" },
  { id: "cushion", label: "Cushion Panels" },
];

export const unlockOptions: Array<{
  id: UnlockState;
  label: string;
  description: string;
}> = [
  {
    id: "early",
    label: "Early tools only",
    description: "Basic Fans and Panels; no Sticky or Slick yet.",
  },
  {
    id: "sticky",
    label: "Sticky Tools unlocked",
    description: "You can lock Fans and Panels to surfaces.",
  },
  {
    id: "slick",
    label: "Slick Panels unlocked",
    description: "Sticky Tools are available and low-friction transport is unlocked.",
  },
];

const unlockRank: Record<UnlockState, number> = {
  early: 0,
  sticky: 1,
  slick: 2,
};

export const automationRules: AutomationRule[] = [
  {
    id: "duck-overshoot-no-catcher",
    product: "duck",
    symptom: "overshoot",
    excludes: ["catcher"],
    score: 100,
    diagnosis: "The route has speed, but no real catch zone.",
    why:
      "Ducks that already reach the end do not need more propulsion. Without a backboard or catcher, extra airflow only turns a successful launch into an escape.",
    primaryFix:
      "Build a wider catcher or backboard opposite the final push before changing the rest of the lane.",
    nextSteps: [
      "Run a small batch and watch only the final approach.",
      "If Ducks still clear the catcher, move the last Fan back or reduce the final push.",
      "Add side walls only around the area where the misses actually happen.",
    ],
    avoid: "Do not add another final-stage Fan while Ducks are already overshooting.",
    confidence: "supported",
  },
  {
    id: "duck-overshoot-with-catcher",
    product: "duck",
    symptom: "overshoot",
    requires: ["catcher"],
    score: 95,
    diagnosis: "The final airflow is stronger than the catch zone can absorb.",
    why:
      "A catcher is already present, so repeated overshoot points to too much force or too little stopping distance at the end of the lane.",
    primaryFix:
      "Move the final Fan farther back or reduce the last propulsion stage.",
    nextSteps: [
      "Change only the final Fan first.",
      "If Ducks hit the backboard and rebound out, add Cushion at the impact point.",
      "If they escape upward, roof only the final catch section.",
    ],
    avoid: "Do not slow the entire route if the failure only happens at the last meter.",
    confidence: "supported",
  },
  {
    id: "duck-undershoot-basic",
    product: "duck",
    symptom: "undershoot",
    score: 90,
    diagnosis: "There is a dead zone between airflow stages.",
    why:
      "A clear Duck lane that repeatedly loses momentum in the same section usually needs local airflow, not a complete rebuild.",
    primaryFix:
      "Reposition the nearest Fan or add a staged Fan at the exact dead zone.",
    nextSteps: [
      "Clear loose Ducks before testing.",
      "Watch where the first clean Duck loses speed.",
      "Add force there instead of increasing every Fan in the route.",
    ],
    avoid: "Do not diagnose airflow while the chute is already packed with Ducks.",
    confidence: "supported",
  },
  {
    id: "duck-jam-roof",
    product: "duck",
    symptom: "jam",
    requires: ["roof"],
    score: 105,
    diagnosis: "The enclosed section may be too cramped or hiding the real obstruction.",
    why:
      "A low or tight roof can turn bouncing Ducks into a pile, and a full enclosure makes misplaced tools harder to see.",
    primaryFix:
      "Stop the source, clear the pile, and inspect the first choke point from inside the chute.",
    nextSteps: [
      "Check for a Fan or Panel snapped into the travel path.",
      "Raise or remove the roof only around the choke point.",
      "Restart with a few Ducks before adding more airflow.",
    ],
    avoid: "Do not add speed to a chute that is already physically blocked.",
    confidence: "supported",
  },
  {
    id: "duck-jam-general",
    product: "duck",
    symptom: "jam",
    score: 100,
    diagnosis: "The pile is hiding the first failure point.",
    why:
      "Once Ducks stack up, they block airflow and create new collisions. The visible pile is often a symptom, not the original cause.",
    primaryFix:
      "Turn off the source and clear the pile before changing the layout.",
    nextSteps: [
      "Run one Duck through the empty route.",
      "Inspect the exact first point where it stops or turns sideways.",
      "Fix geometry or a misplaced tool before buying another Fan.",
    ],
    avoid: "Do not use a fully clogged chute as evidence that you need more Fans.",
    confidence: "supported",
  },
  {
    id: "duck-escape-no-roof",
    product: "duck",
    symptom: "escape",
    excludes: ["roof"],
    score: 100,
    diagnosis: "The lane contains the sides, but not the vertical bounce.",
    why:
      "Ducks can bounce over walls even when the horizontal route is correct.",
    primaryFix:
      "Add a roof only over the section where Ducks are actually escaping upward.",
    nextSteps: [
      "Keep the rest of the route open while testing.",
      "If escapes are lateral instead, add a side wall at that location.",
      "If escapes happen only at the end, improve the catcher instead of roofing the whole chute.",
    ],
    avoid: "Do not roof the entire route before you know where the escape happens.",
    confidence: "supported",
  },
  {
    id: "duck-escape-with-roof",
    product: "duck",
    symptom: "escape",
    requires: ["roof"],
    score: 95,
    diagnosis: "The route is enclosed, but the escape is probably at a transition or the final catch.",
    why:
      "If a roof already exists, adding more ceiling usually does not fix a bad corner, open side, or overpowered exit.",
    primaryFix:
      "Watch the first escape and reinforce only that transition or catch zone.",
    nextSteps: [
      "Check for an open side at corners and merges.",
      "Reduce final force if the escape happens at the destination.",
      "Raise the roof locally if Ducks are being pinched and kicked upward.",
    ],
    avoid: "Do not keep adding panels to sections that are already containing Ducks.",
    confidence: "supported",
  },
  {
    id: "duck-tools-moving-early",
    product: "duck",
    symptom: "tools-moving",
    maxUnlock: "early",
    score: 85,
    diagnosis: "The layout is asking for more positional stability than early tools provide.",
    why:
      "Before Sticky Tools, Fans and Panels are much harder to keep in precise fixed positions.",
    primaryFix:
      "Keep the route simple and postpone the permanent rebuild until Sticky Tools unlock.",
    nextSteps: [
      "Use fewer suspended or precision-angled pieces.",
      "Favor straight floor-supported sections.",
      "Return to the layout after Sticky Tools become available.",
    ],
    avoid: "Do not spend a long session perfecting a fragile pre-Sticky structure.",
    confidence: "supported",
  },
  {
    id: "duck-tools-moving-sticky",
    product: "duck",
    symptom: "tools-moving",
    requires: ["sticky"],
    score: 100,
    diagnosis: "Sticky Tools are available, but the piece may not be contacting the surface you expect.",
    why:
      "Sticky Tools freeze tool positions on contact with surfaces. A piece that is merely close to a wall can still move.",
    primaryFix:
      "Reseat the Fan or Panel so it clearly contacts the surface before you test airflow again.",
    nextSteps: [
      "Lock the support pieces first.",
      "Then set the Fan angle.",
      "Run a small batch and confirm the hardware stays fixed before tuning throughput.",
    ],
    avoid: "Do not treat moving hardware as a product-speed problem.",
    confidence: "supported",
  },
  {
    id: "duck-chaotic",
    product: "duck",
    symptom: "chaotic",
    score: 95,
    diagnosis: "The route has too many corrections and too much uncontrolled force.",
    why:
      "Multiple Fans, bumpers, and hard-angle transitions make it difficult to tell which part is helping and which part is creating the next failure.",
    primaryFix:
      "Simplify back toward one straight transport direction and one obvious catch point.",
    nextSteps: [
      "Remove bonus bumpers until the base route works.",
      "Reduce overlapping Fan zones.",
      "Add containment only after the simplified line is readable.",
    ],
    avoid: "Do not optimize combo behavior before the basic transport is stable.",
    confidence: "supported",
  },
  {
    id: "duck-combo-breaks",
    product: "duck",
    symptom: "combo-breaks",
    score: 90,
    diagnosis: "The Duck stream is not continuous enough to bridge gaps between larger products.",
    why:
      "A simple steady Duck line is useful as a combo primer even after higher-value products become available.",
    primaryFix:
      "Favor a low-maintenance continuous Duck feed over a complicated high-variance combo route.",
    nextSteps: [
      "Remove bonus elements that create periodic jams.",
      "Keep the source running at a rate the lane can actually clear.",
      "Let later products provide the larger combo bursts.",
    ],
    avoid: "Do not sacrifice reliability just to make the Duck path more elaborate.",
    confidence: "supported",
  },
  {
    id: "duck-hard-to-move",
    product: "duck",
    symptom: "hard-to-move",
    score: 88,
    diagnosis: "The route needs a clearer direction, not a more complicated mechanism.",
    why:
      "Ducks are easiest to control when the source, airflow direction, containment, and catch point are visually obvious.",
    primaryFix:
      "Reduce the layout to a short straight lane with staged airflow and a catcher.",
    nextSteps: [
      "Test the shortest possible route first.",
      "Add walls only where Ducks leave the lane.",
      "Add a roof only after upward escapes actually happen.",
    ],
    avoid: "Do not start by reproducing a large late-game wind tunnel with early tools.",
    confidence: "supported",
  },

  {
    id: "cash-overshoot-no-cushion",
    product: "cash-register",
    symptom: "overshoot",
    excludes: ["cushion"],
    score: 100,
    diagnosis: "The Cash Register reaches the destination with too much impact energy.",
    why:
      "Cash Registers can lose value from damage, so a hard high-speed stop is more costly than it is for Ducks.",
    primaryFix:
      "Reduce the final push and add Cushion at the actual impact point.",
    nextSteps: [
      "Keep the transport section unchanged at first.",
      "Test whether the register now lands without a hard rebound.",
      "Widen the catch if the object still exits sideways.",
    ],
    avoid: "Do not line the whole route with Cushion when only the landing is the problem.",
    confidence: "experimental",
  },
  {
    id: "cash-overshoot-with-cushion",
    product: "cash-register",
    symptom: "overshoot",
    requires: ["cushion"],
    score: 95,
    diagnosis: "The landing is padded, but the final airflow is still too aggressive.",
    why:
      "Cushion softens the impact; it does not compensate for a register being launched beyond the catch zone.",
    primaryFix:
      "Move the final Fan back or lower the last-stage push.",
    nextSteps: [
      "Keep the Cushion where the register lands.",
      "Test a single register after each Fan change.",
      "Add side containment only if it exits laterally.",
    ],
    avoid: "Do not add a stronger Fan at the end of a route that already reaches the target.",
    confidence: "experimental",
  },
  {
    id: "cash-undershoot-slick-available",
    product: "cash-register",
    symptom: "undershoot",
    minUnlock: "slick",
    excludes: ["slick"],
    score: 102,
    diagnosis: "The route may be losing momentum to friction on a long transport section.",
    why:
      "Slick Panels provide a friction-free transport surface and are most useful when the register is already aligned but slows on the floor.",
    primaryFix:
      "Add Slick only to the section where the register visibly loses momentum.",
    nextSteps: [
      "Confirm the entry angle is clean before buying more Slick.",
      "Use local Fan support if the register still stops after the Slick section.",
      "Keep hard corners separate from the friction diagnosis.",
    ],
    avoid: "Do not use Slick to hide a bad transition or sharp corner.",
    confidence: "experimental",
  },
  {
    id: "cash-undershoot-with-slick",
    product: "cash-register",
    symptom: "undershoot",
    requires: ["slick"],
    score: 100,
    diagnosis: "Friction has already been reduced, so the remaining problem is probably local airflow or entry geometry.",
    why:
      "If a register is already on Slick and still stalls, extending more Slick is less useful than checking the handoff and the next propulsion stage.",
    primaryFix:
      "Watch the first point where the register loses speed and add local airflow only there.",
    nextSteps: [
      "Check whether the register enters the Slick section cleanly.",
      "Use a stronger Fan only at a repeatable stalled section.",
      "Retest with several registers, not just one.",
    ],
    avoid: "Do not cover more floor with Slick until you know the existing Slick section is being entered correctly.",
    confidence: "experimental",
  },
  {
    id: "cash-jam",
    product: "cash-register",
    symptom: "jam",
    score: 100,
    diagnosis: "The first transition or merge is too narrow for Cash Register geometry.",
    why:
      "Cash Registers are boxier than Ducks and are more likely to catch an edge or block each other at a hard-angle handoff.",
    primaryFix:
      "Widen and simplify the first repeatable choke point before adding more speed.",
    nextSteps: [
      "Clear the pile completely.",
      "Test the automatic source by itself.",
      "If that works, test the manual source separately before merging them.",
      "Only merge both streams after each entrance clears on its own.",
    ],
    avoid: "Do not copy a narrow Duck tunnel just because it worked for Ducks.",
    confidence: "experimental",
  },
  {
    id: "cash-escape",
    product: "cash-register",
    symptom: "escape",
    score: 92,
    diagnosis: "The high-speed section needs local containment, not a full sealed tunnel.",
    why:
      "Cash Registers can arrive at merges and catches with enough energy to bounce out, but enclosing the entire lane can create new jams.",
    primaryFix:
      "Cage the source, merge, or catch section where the escape actually occurs.",
    nextSteps: [
      "Start with side walls.",
      "Add height only if registers are leaving upward.",
      "Keep the top open elsewhere so you can still inspect jams.",
    ],
    avoid: "Do not seal the entire route by default.",
    confidence: "experimental",
  },
  {
    id: "cash-tools-moving",
    product: "cash-register",
    symptom: "tools-moving",
    score: 85,
    diagnosis: "The transport test is invalid while the hardware itself is moving.",
    why:
      "A Cash Register route is already sensitive to alignment; moving Fans or Panels make every test inconsistent.",
    primaryFix:
      "Stabilize the tools first, then retest the same register path.",
    nextSteps: [
      "Use Sticky Tools once available.",
      "Lock support Panels before tuning Fan angles.",
      "Avoid judging throughput until the hardware stays in place.",
    ],
    avoid: "Do not keep changing product geometry while the tools are still shifting.",
    confidence: "experimental",
  },
  {
    id: "cash-chaotic",
    product: "cash-register",
    symptom: "chaotic",
    score: 95,
    diagnosis: "The lane is trying to solve landing, transport, and catching with the same hardware.",
    why:
      "Cash Register routes become easier to tune when the landing, transfer, transport, and catch each have one clear job.",
    primaryFix:
      "Separate the route into a soft landing, a clean transfer, a straight transport section, and a final catch.",
    nextSteps: [
      "Fix the landing before the long lane.",
      "Fix the long lane before the final catcher.",
      "Test the automatic source before adding the manual source.",
    ],
    avoid: "Do not change every stage after one failed register.",
    confidence: "experimental",
  },
  {
    id: "cash-combo-breaks",
    product: "cash-register",
    symptom: "combo-breaks",
    score: 78,
    diagnosis: "Cash Registers are too bursty to be your only combo bridge.",
    why:
      "A steady Duck stream is usually better at keeping the timer alive while Cash Registers provide larger value bursts.",
    primaryFix:
      "Keep a simple Duck line running and optimize the Cash Register lane for reliability, not continuous combo timing.",
    nextSteps: [
      "Fix Cash Register jams first.",
      "Let Ducks bridge the gaps.",
      "Increase Cash Register throughput only after the lane clears consistently.",
    ],
    avoid: "Do not rebuild the Cash Register route around combo timing if transport is still unreliable.",
    confidence: "experimental",
  },
  {
    id: "cash-hard-to-move-slick",
    product: "cash-register",
    symptom: "hard-to-move",
    minUnlock: "slick",
    score: 96,
    diagnosis: "The product needs a cleaner handoff and lower-friction transport than the Duck route.",
    why:
      "Cash Registers catch edges easily. Slick helps once the register is already pointed down the lane, but it cannot fix a bad entry angle.",
    primaryFix:
      "Build a wider straight transfer into a Slick transport section, then add local Fan support where it actually stalls.",
    nextSteps: [
      "Test one clean register first.",
      "Use Cushion at the landing if impact is the problem.",
      "Use Slick only after the register enters the lane cleanly.",
    ],
    avoid: "Do not use the Magnet as the main long-distance transport plan.",
    confidence: "experimental",
  },
  {
    id: "cash-hard-to-move-early",
    product: "cash-register",
    symptom: "hard-to-move",
    score: 88,
    diagnosis: "The early Cash Register route needs simpler geometry more than advanced tools.",
    why:
      "Before Slick is available, the safest improvement is usually a wider, straighter lane with staged airflow rather than a compact Duck-style chute.",
    primaryFix:
      "Widen the route and reduce hard-angle transitions before spending on more force.",
    nextSteps: [
      "Give the register a clean landing.",
      "Use one obvious transport direction.",
      "Add a local Fan only where the clear route still stops.",
    ],
    avoid: "Do not force Cash Registers through a narrow Duck geometry.",
    confidence: "experimental",
  },

  {
    id: "any-magnet-primary",
    product: "any",
    symptom: "hard-to-move",
    requires: ["magnet"],
    score: 40,
    diagnosis: "The Magnet is better as recovery than as the main conveyor.",
    why:
      "It is useful for gathering escaped products, but relying on it for the normal route can create slow, hard-to-read clusters.",
    primaryFix:
      "Use Fans and route geometry for the normal flow; keep the Magnet for cleanup and recovery.",
    nextSteps: [
      "Move escaped products back to the source or lane.",
      "Then test the main transport without the Magnet doing the primary work.",
    ],
    avoid: "Do not build the entire early transport plan around the Magnet.",
    confidence: "supported",
  },
];

function satisfiesUnlock(
  minUnlock: UnlockState | undefined,
  maxUnlock: UnlockState | undefined,
  currentUnlock: UnlockState,
) {
  const currentRank = unlockRank[currentUnlock];

  if (minUnlock && currentRank < unlockRank[minUnlock]) return false;
  if (maxUnlock && currentRank > unlockRank[maxUnlock]) return false;

  return true;
}

export function getAutomationRecommendations(args: {
  product: ProjectPittProduct;
  symptom: ProjectPittSymptom;
  features: RouteFeature[];
  unlock: UnlockState;
}) {
  const featureSet = new Set(args.features);

  return automationRules
    .filter((rule) => {
      if (rule.product !== "any" && rule.product !== args.product) return false;
      if (rule.symptom !== args.symptom) return false;
      if (!satisfiesUnlock(rule.minUnlock, rule.maxUnlock, args.unlock)) {
        return false;
      }

      if (rule.requires?.some((feature) => !featureSet.has(feature))) {
        return false;
      }

      if (rule.excludes?.some((feature) => featureSet.has(feature))) {
        return false;
      }

      return true;
    })
    .sort((a, b) => b.score - a.score);
}
