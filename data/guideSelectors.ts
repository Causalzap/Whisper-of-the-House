import {
    guideClusters,
    type GuideCluster,
    type GuidePage,
    type HomeAccent,
    type HomeImageFields,
  } from "./guides";
  
  type CategoryKey =
    | "systems"
    | "combat"
    | "routes"
    | "discovery"
    | "archive";
  
  export type LatestStory = HomeImageFields & {
    title: string;
    href: string;
    game: string;
    type: string;
    excerpt: string;
    date: string;
    accent: HomeAccent;
    featured?: boolean;
  };
  
  export type SpotlightArticle = HomeImageFields & {
    title: string;
    href: string;
    game: string;
    type: string;
    description: string;
    meta: string;
  };
  
  export type SpotlightRailItem = {
    title: string;
    href: string;
    label: string;
    description: string;
  };
  
  export type SpotlightTheme = {
    title: string;
    href: string;
    eyebrow: string;
    description: string;
  };
  
  export type GuideHub = HomeImageFields & {
    title: string;
    href: string;
    eyebrow: string;
    label: string;
    description: string;
    coverage: string[];
    status: string;
    accent?: HomeAccent;
  };
  
  export type QuickLane = {
    title: string;
    description: string;
    href: string;
  };
  
  export type FooterGuideLink = {
    label: string;
    href: string;
  };
  
  export type LatestUpdateItem = {
    href: string;
    game: string;
    title: string;
    description: string;
    type: string;
    date?: string;
    tagClass: string;
    hoverBorderClass: string;
    hoverTitleClass: string;
  };
  
  export type ArchiveGuideGroup = {
    title: string;
    eyebrow: string;
    description: string;
    guides: {
      title: string;
      href: string;
    }[];
  };
  
  export type ActiveGuideHub = {
    title: string;
    href: string;
    label: string;
    description: string;
    coverage: string[];
  };
  
  const CATEGORY_META: Record<
    CategoryKey,
    {
      title: string;
      eyebrow: string;
      description: string;
    }
  > = {
    systems: {
      title: "Cozy, crafting, survival & systems",
      eyebrow: "Systems",
      description:
        "Games where progression, resources, crafting chains, base setup, colony pressure, and cleanup routes matter.",
    },
    combat: {
      title: "RPG, action, builds & combat",
      eyebrow: "Combat",
      description:
        "Guides focused on weapons, builds, bosses, character routes, class choices, combat pressure, and completion cleanup.",
    },
    routes: {
      title: "Story, endings, horror & route locks",
      eyebrow: "Routes",
      description:
        "Pages for endings, choices, route locks, story progress, horror objectives, and spoiler-light outcome help.",
    },
    discovery: {
      title: "Strategy, simulation, puzzle & discovery",
      eyebrow: "Discovery",
      description:
        "Guide hubs and archive entries for puzzle logic, strategy systems, simulation planning, and Steam discovery coverage.",
    },
    archive: {
      title: "Older archive",
      eyebrow: "Archive",
      description:
        "Earlier guides and smaller game collections kept available for readers looking for a specific older game, route, achievement, or puzzle answer.",
    },
  };
  
  const CATEGORY_ORDER: CategoryKey[] = [
    "systems",
    "combat",
    "routes",
    "discovery",
    "archive",
  ];
  
  const ACCENT_CLASS_MAP: Record<
    HomeAccent,
    {
      tagClass: string;
      hoverBorderClass: string;
      hoverTitleClass: string;
    }
  > = {
    purple: {
      tagClass: "text-purple-500",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    blue: {
      tagClass: "text-blue-500",
      hoverBorderClass: "hover:border-blue-300",
      hoverTitleClass: "group-hover:text-blue-700",
    },
    emerald: {
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    amber: {
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
    rose: {
      tagClass: "text-rose-500",
      hoverBorderClass: "hover:border-rose-300",
      hoverTitleClass: "group-hover:text-rose-700",
    },
    cyan: {
      tagClass: "text-cyan-500",
      hoverBorderClass: "hover:border-cyan-300",
      hoverTitleClass: "group-hover:text-cyan-700",
    },
  };
  
  function byNumber(a?: number, b?: number) {
    return (a ?? 999) - (b ?? 999);
  }
  
  function imageFields(item: HomeImageFields): HomeImageFields {
    return {
      image: item.image,
      imageFit: item.imageFit,
      imagePosition: item.imagePosition,
      imagePadding: item.imagePadding,
    };
  }
  
  function getCategory(cluster: GuideCluster): CategoryKey {
    if (cluster.archiveCategory === "Cozy, crafting, survival & systems") {
      return "systems";
    }
  
    if (cluster.archiveCategory === "RPG, action, builds & combat") {
      return "combat";
    }
  
    if (cluster.archiveCategory === "Story, endings, horror & route locks") {
      return "routes";
    }
  
    if (cluster.archiveCategory === "Strategy, simulation, puzzle & discovery") {
      return "discovery";
    }
  
    return "archive";
  }
  
  function isFeaturedHub(cluster: GuideCluster) {
    return cluster.home?.featuredHubOrder !== undefined;
  }
  
  function isSpotlightHub(cluster: GuideCluster) {
    return cluster.home?.featuredHubSpotlight === true;
  }
  
  function isLatestPage(page: GuidePage) {
    return page.home?.latestOrder !== undefined;
  }
  
  function isHiddenPage(page: GuidePage) {
    return page.archive?.showInCollections === false;
  }
  
  function getPageOrder(page: GuidePage, fallback = 999) {
    return page.archive?.order ?? fallback;
  }
  
  function getFeaturedClusters() {
    return guideClusters
      .filter(isFeaturedHub)
      .sort((a, b) =>
        byNumber(a.home?.featuredHubOrder, b.home?.featuredHubOrder)
      );
  }
  
  function getClusterHubPage(cluster: GuideCluster): GuidePage {
    return {
      title: `${cluster.title} Guide Hub`,
      href: cluster.href,
      type: "Guide Hub",
      description: cluster.description,
      archive: {
        showInCollections: true,
        order: 1,
      },
    };
  }
  
  function getVisiblePages(cluster: GuideCluster): GuidePage[] {
    const pages = (cluster.pages ?? []).filter((page) => !isHiddenPage(page));
    const hasHubPage = pages.some((page) => page.href === cluster.href);
  
    const normalizedPages = hasHubPage
      ? pages
      : [getClusterHubPage(cluster), ...pages];
  
    return normalizedPages.sort((a, b) => byNumber(getPageOrder(a), getPageOrder(b)));
  }
  
  function toGuideHub(cluster: GuideCluster): GuideHub {
    return {
      title: cluster.title,
      href: cluster.href,
      eyebrow: cluster.eyebrow ?? cluster.label,
      label: cluster.label,
      status: isSpotlightHub(cluster) ? "Spotlight hub" : "Guide hub",
      description: cluster.description,
      coverage: cluster.coverage,
      accent: cluster.accent,
      ...imageFields(cluster),
    };
  }
  
  function toActiveGuideHub(cluster: GuideCluster): ActiveGuideHub {
    return {
      title: cluster.title,
      href: cluster.href,
      label: cluster.label,
      description: cluster.description,
      coverage: cluster.coverage,
    };
  }
  
  function toLatestStory(cluster: GuideCluster, page: GuidePage): LatestStory {
    return {
      title: page.title,
      href: page.href,
      game: cluster.game,
      type: page.type,
      excerpt: page.description,
      date: page.date ?? "",
      accent: cluster.accent,
      featured: page.home?.latestFeatured,
      ...imageFields(page.image ? page : cluster),
    };
  }
  
  function toSpotlightArticle(
    cluster: GuideCluster,
    page: GuidePage
  ): SpotlightArticle {
    return {
      title: page.title,
      href: page.href,
      game: cluster.game,
      type: page.type,
      description: page.description,
      meta: page.home?.spotlightMeta ?? page.type,
      ...imageFields(page.image ? page : cluster),
    };
  }
  
  function toLatestUpdateItem(
    cluster: GuideCluster,
    page: GuidePage
  ): LatestUpdateItem {
    const accentClasses = ACCENT_CLASS_MAP[cluster.accent];
  
    return {
      href: page.href,
      game: cluster.game,
      title: page.title,
      description: page.description,
      type: page.type,
      date: page.date,
      tagClass: accentClasses.tagClass,
      hoverBorderClass: accentClasses.hoverBorderClass,
      hoverTitleClass: accentClasses.hoverTitleClass,
    };
  }
  
  /**
   * Homepage: Latest Stories
   *
   * Rule:
   * - page.home.latestOrder exists => show on homepage latest stories.
   * - No latestOrder => stays in archive / game collection only.
   */
  export function getLatestStories(): LatestStory[] {
    return guideClusters
      .flatMap((cluster) =>
        getVisiblePages(cluster)
          .filter(isLatestPage)
          .map((page) => ({
            cluster,
            page,
          }))
      )
      .sort((a, b) =>
        byNumber(a.page.home?.latestOrder, b.page.home?.latestOrder)
      )
      .map(({ cluster, page }) => toLatestStory(cluster, page));
  }
  
  /**
   * Homepage: Featured Game Hubs
   *
   * Rule:
   * - cluster.home.featuredHubOrder exists => show on homepage Featured Game Hubs.
   * - featuredHubSpotlight true => use as the large spotlight hub.
   */
  export function getFeaturedHomeHubs(): GuideHub[] {
    return getFeaturedClusters()
      .filter((cluster) => !isSpotlightHub(cluster))
      .map(toGuideHub);
  }
  
  export function getHomeSpotlightHub(): GuideHub {
    const cluster =
      guideClusters.find(isSpotlightHub) ??
      getFeaturedClusters()[0] ??
      guideClusters[0];
  
    return toGuideHub(cluster);
  }
  
  /**
   * Homepage / optional HomeSpotlight: main spotlight article.
   *
   * This uses the spotlight hub by default, so you do not need to maintain
   * a separate "spotlightMain" field.
   */
  export function getMainSpotlight(): SpotlightArticle {
    const cluster =
      guideClusters.find(isSpotlightHub) ??
      getFeaturedClusters()[0] ??
      guideClusters[0];
  
    return {
      title: cluster.title,
      href: cluster.href,
      game: cluster.game,
      type: "Guide Hub",
      description: cluster.description,
      meta: cluster.coverage.join(", "),
      ...imageFields(cluster),
    };
  }
  
  /**
   * Homepage / optional HomeSpotlight: feature articles.
   *
   * Rule:
   * - page.home.spotlightOrder exists => show in spotlight feature list.
   * - If none are set, fallback to latest stories.
   */
  export function getFeatureArticles(): SpotlightArticle[] {
    const explicitArticles = guideClusters
      .flatMap((cluster) =>
        getVisiblePages(cluster)
          .filter((page) => page.home?.spotlightOrder !== undefined)
          .map((page) => ({
            cluster,
            page,
          }))
      )
      .sort((a, b) =>
        byNumber(a.page.home?.spotlightOrder, b.page.home?.spotlightOrder)
      )
      .map(({ cluster, page }) => toSpotlightArticle(cluster, page));
  
    if (explicitArticles.length > 0) {
      return explicitArticles;
    }
  
    return getLatestStories()
      .filter((story) => !story.featured)
      .slice(0, 3)
      .map((story) => ({
        title: story.title,
        href: story.href,
        game: story.game,
        type: story.type,
        description: story.excerpt,
        meta: story.type,
        ...imageFields(story),
      }));
  }
  
  /**
   * Homepage / optional HomeSpotlight: rail items.
   *
   * Rule:
   * - page.home.spotlightRail true => show in rail.
   * - If none are set, fallback to featured hubs after the spotlight hub.
   */
  export function getRailItems(): SpotlightRailItem[] {
    const explicitRailItems = guideClusters
      .flatMap((cluster) =>
        getVisiblePages(cluster)
          .filter((page) => page.home?.spotlightRail)
          .map((page) => ({
            title: page.title,
            href: page.href,
            label: page.type,
            description: page.description,
          }))
      );
  
    if (explicitRailItems.length > 0) {
      return explicitRailItems;
    }
  
    return getFeaturedHomeHubs()
      .slice(0, 4)
      .map((hub) => ({
        title: hub.title,
        href: hub.href,
        label: hub.label,
        description: hub.description,
      }));
  }
  
  /**
   * /all-game-guides/: top Featured Guide Hubs section.
   *
   * Rule:
   * - Same source as homepage featured hubs.
   */
  export function getActiveGuideHubs(): ActiveGuideHub[] {
    return getFeaturedClusters().map(toActiveGuideHub);
  }
  
  /**
   * /all-game-guides/: Game Guide Collections section.
   *
   * Rule:
   * - All visible pages are included by default.
   * - page.hidden = true removes a page from collections.
   * - Hub page is generated automatically if missing.
   */
  export function getLatestUpdatePages(): LatestUpdateItem[] {
    return guideClusters.flatMap((cluster) =>
      getVisiblePages(cluster).map((page) => toLatestUpdateItem(cluster, page))
    );
  }
  
  /**
   * /all-game-guides/: Browse by Category section.
   *
   * Rule:
   * - Active guide hubs group is automatic from featured clusters.
   * - Other groups are automatic from cluster.category.
   */
  export function getGameArchiveGroups(): ArchiveGuideGroup[] {
    const groups: ArchiveGuideGroup[] = [];
  
    const featuredClusters = getFeaturedClusters();
  
    if (featuredClusters.length > 0) {
      groups.push({
        title: "Active guide hubs",
        eyebrow: "Current Coverage",
        description:
          "Current and recently expanded guide hubs with walkthroughs, systems, achievements, endings, builds, or collectibles.",
        guides: featuredClusters.map((cluster) => ({
          title: cluster.title,
          href: cluster.href,
        })),
      });
    }
  
    CATEGORY_ORDER.forEach((category) => {
      const clusters = guideClusters.filter(
        (cluster) => getCategory(cluster) === category
      );
  
      if (clusters.length === 0) {
        return;
      }
  
      const meta = CATEGORY_META[category];
  
      groups.push({
        title: meta.title,
        eyebrow: meta.eyebrow,
        description: meta.description,
        guides: clusters
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((cluster) => ({
            title: cluster.title,
            href: cluster.href,
          })),
      });
    });
  
    return groups;
  }
  
  /**
   * Footer: Featured Guides
   *
   * Rule:
   * - Footer automatically uses the first 6 homepage featured hubs.
   * - No separate footerFeatured field is needed.
   */
  export function getFooterFeaturedGuides(): FooterGuideLink[] {
    return getFeaturedClusters()
      .slice(0, 6)
      .map((cluster) => ({
        label: cluster.title,
        href: cluster.href,
      }));
  }
  
  /**
   * Homepage: fixed quick lanes.
   *
   * These are product/navigation copy, not content data.
   * They can stay here so homepage components do not maintain local arrays.
   */
  export function getQuickLanes(): QuickLane[] {
    return [
      {
        title: "Walkthrough hubs",
        description:
          "Story routes, mission flow, early walls, cleanup order, and where-to-go-next help.",
        href: "/all-game-guides",
      },
      {
        title: "Achievement guides",
        description:
          "Unlock notes, hidden triggers, route-specific requirements, and 100% cleanup pages.",
        href: "/all-game-guides",
      },
      {
        title: "Systems guides",
        description:
          "Automation, crafting chains, base setup, survival pressure, and progression planning.",
        href: "/all-game-guides",
      },
    ];
  }
  
  /**
   * Homepage: fixed spotlight themes.
   *
   * These are editorial navigation blocks, not per-game data.
   */
  export function getSpotlightThemes(): SpotlightTheme[] {
    return [
      {
        title: "Walkthroughs that route the first hour",
        href: "/all-game-guides",
        eyebrow: "Routes",
        description:
          "Start fast, avoid early mistakes, and understand which systems matter before the game opens up.",
      },
      {
        title: "Achievements without wiki overload",
        href: "/all-game-guides",
        eyebrow: "Completion",
        description:
          "Use practical unlock notes, missable warnings, cleanup order, and route-specific requirements.",
      },
      {
        title: "Systems guides for complex games",
        href: "/all-game-guides",
        eyebrow: "Systems",
        description:
          "Break down crafting, automation, base setup, resources, survival pressure, and progression walls.",
      },
    ];
  }
  
  /**
   * Small helpers for archive pages.
   */
  export function getGuideEntryCount() {
    const uniqueHrefs = new Set<string>();
  
    guideClusters.forEach((cluster) => {
      uniqueHrefs.add(cluster.href);
  
      getVisiblePages(cluster).forEach((page) => {
        uniqueHrefs.add(page.href);
      });
    });
  
    return uniqueHrefs.size;
  }
  
  export function getGameCollectionCount() {
    return guideClusters.length;
  }
  
  export function getFeaturedHubCount() {
    return getFeaturedClusters().length;
  }