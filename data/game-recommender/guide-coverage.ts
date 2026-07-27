// data/game-recommender/guide-coverage.ts
//
// Human-maintained mapping from the recommender's local game ID to the
// guide hub owned by one of the user's two guide sites.
//
// Keep keys aligned with game-seeds.ts and game-traits.ts.
// guideCount includes the hub/overview page plus all linked spoke guides.
//
// Coverage inventory generated from:
// - Whisper of the House: every kind: "game" GuideCluster, including active
//   and archive clusters. Event and collection records are excluded.
// - DQ7 Reimagined: every FeaturedGame entry.

export type GuideSiteId =
  | "whisper-of-the-house"
  | "dq7-reimagined";

export type GuideDestination = {
  siteId: GuideSiteId;
  siteName: string;
  url: string;
  isInternal: boolean;
  guideCount: number;
};

function whisperGuide(
  url: string,
  guideCount: number,
): GuideDestination {
  return {
    siteId: "whisper-of-the-house",
    siteName: "Whisper of the House",
    url,
    isInternal: true,
    guideCount,
  };
}

function dq7Guide(
  url: string,
  guideCount: number,
): GuideDestination {
  return {
    siteId: "dq7-reimagined",
    siteName: "DQ7 Reimagined",
    url,
    isInternal: false,
    guideCount,
  };
}

export const GUIDE_COVERAGE = {
  // whisperofthehouse.com — active game guide clusters (27)
  "grim-dawn-fangs-of-asterkarn": whisperGuide(
    "/grim-dawn-fangs-of-asterkarn",
    5,
  ),
  "dirty-business": whisperGuide(
    "/dirty-business",
    6,
  ),
  "tears-of-metal": whisperGuide(
    "/tears-of-metal",
    6,
  ),
  "dragonsword-awakening": whisperGuide(
    "/dragonsword-awakening",
    6,
  ),
  "zerospace": whisperGuide(
    "/zerospace",
    5,
  ),
  "happys-humble-burger-cult": whisperGuide(
    "/happys-humble-burger-cult",
    4,
  ),
  "ore-factory-squad": whisperGuide(
    "/ore-factory-squad",
    9,
  ),
  "the-incident-at-galley-house": whisperGuide(
    "/the-incident-at-galley-house",
    6,
  ),
  "ascend-to-zero": whisperGuide(
    "/ascend-to-zero",
    4,
  ),
  "backyard-baseball": whisperGuide(
    "/backyard-baseball",
    5,
  ),
  "forest-escape-last-train": whisperGuide(
    "/forest-escape-last-train",
    5,
  ),
  "granblue-relink-endless-ragnarok": whisperGuide(
    "/granblue-relink-endless-ragnarok",
    6,
  ),
  "moonlight-peaks": whisperGuide(
    "/moonlight-peaks",
    6,
  ),
  "esports-manager-2026": whisperGuide(
    "/esports-manager-2026",
    6,
  ),
  "master-healer-kale": whisperGuide(
    "/master-healer-kale",
    4,
  ),
  "the-binding-of-isaac-rebirth": whisperGuide(
    "/the-binding-of-isaac-rebirth",
    6,
  ),
  "supermarket-chaos": whisperGuide(
    "/supermarket-chaos",
    5,
  ),
  "frostpunk-2-breach-of-trust": whisperGuide(
    "/frostpunk-2-breach-of-trust",
    5,
  ),
  "deltarune": whisperGuide(
    "/deltarune",
    6,
  ),
  "the-last-caretaker": whisperGuide(
    "/the-last-caretaker",
    4,
  ),
  "darktide": whisperGuide(
    "/darktide",
    4,
  ),
  "moldwasher": whisperGuide(
    "/moldwasher",
    4,
  ),
  "timberborn": whisperGuide(
    "/timberborn",
    4,
  ),
  "thank-you-for-your-application": whisperGuide(
    "/thank-you-for-your-application",
    4,
  ),
  "33-immortals": whisperGuide(
    "/33-immortals",
    4,
  ),
  "tales-of-seikyu": whisperGuide(
    "/tales-of-seikyu",
    4,
  ),
  "spacecraft": whisperGuide(
    "/spacecraft",
    4,
  ),

  // whisperofthehouse.com — archive game guide clusters (53)
  "iron-nest": whisperGuide(
    "/iron-nest",
    1,
  ),
  "dust-front-rts": whisperGuide(
    "/dust-front-rts",
    1,
  ),
  "bombanana": whisperGuide(
    "/bombanana",
    1,
  ),
  "casualties-unknown": whisperGuide(
    "/casualties-unknown",
    1,
  ),
  "the-adventures-of-elliot": whisperGuide(
    "/the-adventures-of-elliot",
    4,
  ),
  "fears-to-fathom-scratch-creek": whisperGuide(
    "/fears-to-fathom-scratch-creek",
    4,
  ),
  "burglin-gnomes": whisperGuide(
    "/burglin-gnomes",
    4,
  ),
  "voidling-bound": whisperGuide(
    "/voidling-bound",
    4,
  ),
  "solarpunk": whisperGuide(
    "/solarpunk",
    4,
  ),
  "gothic-1-remake": whisperGuide(
    "/gothic-1-remake",
    8,
  ),
  "house-flipper-remastered-collection": whisperGuide(
    "/house-flipper-remastered-collection",
    4,
  ),
  "realm-of-ink": whisperGuide(
    "/realm-of-ink",
    4,
  ),
  "fatekeeper": whisperGuide(
    "/fatekeeper",
    4,
  ),
  "scale-the-depths": whisperGuide(
    "/scale-the-depths/loch-ness-100-percent-guide",
    4,
  ),
  "mina-the-hollower": whisperGuide(
    "/mina-the-hollower",
    4,
  ),
  "cheap-car-repair": whisperGuide(
    "/cheap-car-repair",
    4,
  ),
  "starminer": whisperGuide(
    "/starminer",
    4,
  ),
  "romestead": whisperGuide(
    "/romestead",
    4,
  ),
  "paralives": whisperGuide(
    "/paralives",
    4,
  ),
  "zero-parades": whisperGuide(
    "/zero-parades",
    4,
  ),
  "lego-batman": whisperGuide(
    "/lego-batman",
    4,
  ),
  "dwarf-eats-mountain": whisperGuide(
    "/dwarf-eats-mountain",
    4,
  ),
  "oaken-tower": whisperGuide(
    "/oaken-tower",
    4,
  ),
  "subnautica-2": whisperGuide(
    "/subnautica-2",
    4,
  ),
  "the-spell-brigade": whisperGuide(
    "/the-spell-brigade",
    4,
  ),
  "everything-is-crab": whisperGuide(
    "/everything-is-crab",
    4,
  ),
  "outbound": whisperGuide(
    "/outbound",
    4,
  ),
  "directive-8020": whisperGuide(
    "/directive-8020",
    4,
  ),
  "road-to-vostok": whisperGuide(
    "/road-to-vostok/area-05-guide",
    4,
  ),
  "shapez-2": whisperGuide(
    "/shapez-2/manufacture-mode-guide",
    4,
  ),
  "moomintroll": whisperGuide(
    "/moomintroll",
    4,
  ),
  "gamble-with-your-friends": whisperGuide(
    "/gamble-with-your-friends",
    4,
  ),
  "magical-princess": whisperGuide(
    "/magical-princess/endings-guide",
    4,
  ),
  "olden-era": whisperGuide(
    "/olden-era",
    4,
  ),
  "farever": whisperGuide(
    "/farever",
    4,
  ),
  "far-far-west": whisperGuide(
    "/far-far-west/secret-missions",
    4,
  ),
  "librarian": whisperGuide(
    "/librarian",
    4,
  ),
  "fracture-field": whisperGuide(
    "/fracture-field",
    4,
  ),
  "airborne-empire": whisperGuide(
    "/airborne-empire/kingsfell-guide",
    4,
  ),
  "holovillage-our-cozy-days": whisperGuide(
    "/holovillage-our-cozy-days",
    4,
  ),
  "vampire-crawlers": whisperGuide(
    "/vampire-crawlers",
    4,
  ),
  "sol-cesto": whisperGuide(
    "/sol-cesto/all-characters-unlock-guide",
    4,
  ),
  "retro-rewind": whisperGuide(
    "/retro-rewind/custom-videos",
    4,
  ),
  "soulmask": whisperGuide(
    "/soulmask",
    4,
  ),
  "crystalfall": whisperGuide(
    "/crystalfall",
    4,
  ),
  "guides": whisperGuide(
    "/guides/hozy/cafe-layout-tips",
    4,
  ),
  "grime-2": whisperGuide(
    "/grime-2/blade-mammoth-boss-guide",
    4,
  ),
  "mouse-pi-for-hire": whisperGuide(
    "/mouse-pi-for-hire/collectibles-hub",
    4,
  ),
  "pragmata": whisperGuide(
    "/pragmata/pragmata-best-pc-settings",
    4,
  ),
  "the-occultist": whisperGuide(
    "/the-occultist",
    4,
  ),
  "sintopia": whisperGuide(
    "/sintopia/best-hell-layout-guide",
    4,
  ),
  "all-will-fall": whisperGuide(
    "/all-will-fall/oil-rig-guide/",
    4,
  ),
  "the-long-dark-episode-5": whisperGuide(
    "/the-long-dark-episode-5",
    4,
  ),

  // dq7reimagined.com — featured game guide hubs (32)
  "rubinite": dq7Guide(
    "https://dq7reimagined.com/rubinite/",
    4,
  ),
  "shift-at-midnight": dq7Guide(
    "https://dq7reimagined.com/shift-at-midnight/",
    5,
  ),
  "bookshop-simulator": dq7Guide(
    "https://dq7reimagined.com/bookshop-simulator/",
    5,
  ),
  "pathogenic": dq7Guide(
    "https://dq7reimagined.com/pathogenic/",
    6,
  ),
  "funnel-runners": dq7Guide(
    "https://dq7reimagined.com/funnel-runners/",
    5,
  ),
  "angels-fall-first": dq7Guide(
    "https://dq7reimagined.com/angels-fall-first/",
    5,
  ),
  "cat-mail-co": dq7Guide(
    "https://dq7reimagined.com/cat-mail-co/",
    5,
  ),
  "doom-the-dark-ages-revelations": dq7Guide(
    "https://dq7reimagined.com/doom-the-dark-ages-revelations/",
    6,
  ),
  "nuclear-epoch": dq7Guide(
    "https://dq7reimagined.com/nuclear-epoch/",
    4,
  ),
  "the-mound-omen-of-cthulhu": dq7Guide(
    "https://dq7reimagined.com/the-mound-omen-of-cthulhu/",
    4,
  ),
  "dimhaven-the-lost-source": dq7Guide(
    "https://dq7reimagined.com/dimhaven-the-lost-source/",
    6,
  ),
  "orb-of-creation": dq7Guide(
    "https://dq7reimagined.com/orb-of-creation/",
    5,
  ),
  "sand-raiders": dq7Guide(
    "https://dq7reimagined.com/sand-raiders/",
    6,
  ),
  "dave-the-diver-in-the-jungle": dq7Guide(
    "https://dq7reimagined.com/dave-the-diver-in-the-jungle/",
    6,
  ),
  "backrooms-lost-runners": dq7Guide(
    "https://dq7reimagined.com/backrooms-lost-runners/",
    5,
  ),
  "echoes-of-aincrad": dq7Guide(
    "https://dq7reimagined.com/echoes-of-aincrad/",
    5,
  ),
  "meccha-chameleon": dq7Guide(
    "https://dq7reimagined.com/meccha-chameleon/",
    5,
  ),
  "lost-castle-2": dq7Guide(
    "https://dq7reimagined.com/lost-castle-2/",
    7,
  ),
  "tabletop-tavern": dq7Guide(
    "https://dq7reimagined.com/tabletop-tavern/",
    7,
  ),
  "witchspire": dq7Guide(
    "https://dq7reimagined.com/witchspire/",
    6,
  ),
  "arms-of-god": dq7Guide(
    "https://dq7reimagined.com/arms-of-god/",
    6,
  ),
  "blasphemous-2-the-third-sin": dq7Guide(
    "https://dq7reimagined.com/blasphemous-2-the-third-sin/",
    7,
  ),
  "slots-and-diapers": dq7Guide(
    "https://dq7reimagined.com/slots-and-diapers/",
    6,
  ),
  "serpents-gaze": dq7Guide(
    "https://dq7reimagined.com/serpents-gaze/",
    7,
  ),
  "fortune-mill": dq7Guide(
    "https://dq7reimagined.com/fortune-mill/",
    7,
  ),
  "lumentale-memories-of-trey": dq7Guide(
    "https://dq7reimagined.com/lumentale-memories-of-trey/",
    6,
  ),
  "crashout-crew": dq7Guide(
    "https://dq7reimagined.com/crashout-crew/",
    5,
  ),
  "tower-of-babel": dq7Guide(
    "https://dq7reimagined.com/tower-of-babel/",
    5,
  ),
  "town-to-city": dq7Guide(
    "https://dq7reimagined.com/town-to-city/",
    7,
  ),
  "teamfight-manager-2": dq7Guide(
    "https://dq7reimagined.com/teamfight-manager-2/",
    8,
  ),
  "dq7-reimagined": dq7Guide(
    "https://dq7reimagined.com/dq7-reimagined/",
    3,
  ),
  "the-house-always-wins": dq7Guide(
    "https://dq7reimagined.com/the-house-always-wins/",
    7,
  ),
} satisfies Record<string, GuideDestination>;

export type GuideCoverageGameId = keyof typeof GUIDE_COVERAGE;

export function getGuideDestination(
  gameId: string,
): GuideDestination | null {
  return GUIDE_COVERAGE[
    gameId as GuideCoverageGameId
  ] ?? null;
}