export type GameDnaSharePlatform =
  | "x"
  | "bluesky"
  | "reddit";

export type BuildGameDnaResultUrlOptions = {
  origin: string;
  selectedGameIds: readonly string[];
  pathname?: string;
  reveal?: boolean;
};

export type ParsedGameDnaResult = {
  gameIds: string[];
  shouldReveal: boolean;
  isSharedResult: boolean;
};

export type BuildPlatformShareUrlOptions = {
  profileTitle: string;
  resultUrl: string;
};

const GAME_DNA_SHARE_VERSION = "1";

/**
 * 创建无需数据库即可恢复的结果 URL。
 *
 * 示例：
 * /game-dna?v=1&games=12,58,93,...&reveal=1
 */
export function buildGameDnaResultUrl({
  origin,
  selectedGameIds,
  pathname = "/game-dna",
  reveal = true,
}: BuildGameDnaResultUrlOptions): string {
  const normalizedIds =
    uniqueNonEmptyStrings(
      selectedGameIds
    );

  if (normalizedIds.length === 0) {
    throw new Error(
      "At least one game is required to build a Game DNA result URL."
    );
  }

  const url = new URL(
    pathname,
    normalizeOrigin(origin)
  );

  url.searchParams.set(
    "v",
    GAME_DNA_SHARE_VERSION
  );

  url.searchParams.set(
    "games",
    normalizedIds.join(",")
  );

  if (reveal) {
    url.searchParams.set(
      "reveal",
      "1"
    );
  }

  return url.toString();
}

/**
 * 从 URL 参数恢复九宫格和结果状态。
 *
 * 只有 URL 中显式存在 games 参数时，
 * isSharedResult 才为 true。
 */
export function parseGameDnaResultParams(
  input:
    | string
    | URLSearchParams,
  validGameIds: ReadonlySet<string>,
  requiredCount = 9
): ParsedGameDnaResult {
  const params =
    typeof input === "string"
      ? new URLSearchParams(
          input.startsWith("?")
            ? input.slice(1)
            : input
        )
      : input;

  const rawGames =
    params.get("games");

  if (!rawGames) {
    return {
      gameIds: [],
      shouldReveal: false,
      isSharedResult: false,
    };
  }

  const normalizedRequiredCount =
    Math.max(
      1,
      Math.floor(requiredCount)
    );

  const gameIds =
    uniqueNonEmptyStrings(
      rawGames.split(",")
    )
      .filter((gameId) =>
        validGameIds.has(gameId)
      )
      .slice(
        0,
        normalizedRequiredCount
      );

  const shouldReveal =
    params.get("reveal") === "1" &&
    gameIds.length >=
      normalizedRequiredCount;

  return {
    gameIds,
    shouldReveal,
    isSharedResult: true,
  };
}

export function buildGameDnaPlatformShareUrl(
  platform: GameDnaSharePlatform,
  {
    profileTitle,
    resultUrl,
  }: BuildPlatformShareUrlOptions
): string {
  const normalizedTitle =
    profileTitle.trim() ||
    "My Gaming DNA";

  switch (platform) {
    case "x":
      return buildXShareUrl(
        normalizedTitle,
        resultUrl
      );

    case "bluesky":
      return buildBlueskyShareUrl(
        normalizedTitle,
        resultUrl
      );

    case "reddit":
      return buildRedditShareUrl(
        normalizedTitle,
        resultUrl
      );

    default:
      return assertNever(platform);
  }
}

export function openGameDnaShareWindow(
  shareUrl: string,
  platform: GameDnaSharePlatform
) {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  const popupName =
    `game-dna-share-${platform}`;

  const popupFeatures = [
    "popup=yes",
    "noopener=yes",
    "noreferrer=yes",
    "width=760",
    "height=720",
  ].join(",");

  const popup = window.open(
    shareUrl,
    popupName,
    popupFeatures
  );

  /**
   * 某些浏览器会阻止弹窗。
   * 降级为当前标签打开，避免按钮无反应。
   */
  if (!popup) {
    window.location.assign(
      shareUrl
    );
  }
}

function buildXShareUrl(
    profileTitle: string,
    resultUrl: string
  ) {
    const url = new URL(
      "https://x.com/intent/tweet"
    );
  
    const text = [
      `My Gaming DNA: ${profileTitle} 🎮`,
      "",
      "Forged from 9 games I love. What's yours?",
    ].join("\n");
  
    url.searchParams.set(
      "text",
      text
    );
  
    url.searchParams.set(
      "url",
      resultUrl
    );
  
    return url.toString();
  }
  
  function buildBlueskyShareUrl(
    profileTitle: string,
    resultUrl: string
  ) {
    const url = new URL(
      "https://bsky.app/intent/compose"
    );
  
    const text = [
      `My Gaming DNA: ${profileTitle} 🎮`,
      "",
      "Forged from 9 games I love. What's yours?",
      "",
      resultUrl,
    ].join("\n");
  
    url.searchParams.set(
      "text",
      text
    );
  
    return url.toString();
  }

function buildRedditShareUrl(
  profileTitle: string,
  resultUrl: string
) {
  const url = new URL(
    "https://www.reddit.com/submit"
  );

  url.searchParams.set(
    "url",
    resultUrl
  );

  url.searchParams.set(
    "title",
    `My Gaming DNA: ${profileTitle} — What's yours?`
  );

  return url.toString();
}

function uniqueNonEmptyStrings(
  values: readonly string[]
) {
  return Array.from(
    new Set(
      values
        .map((value) =>
          value.trim()
        )
        .filter(Boolean)
    )
  );
}

function normalizeOrigin(
  origin: string
) {
  const normalized =
    origin.trim();

  if (!normalized) {
    throw new Error(
      "A valid origin is required to build a Game DNA result URL."
    );
  }

  return normalized.endsWith("/")
    ? normalized
    : `${normalized}/`;
}

function assertNever(
  value: never
): never {
  throw new Error(
    `Unsupported Game DNA share platform: ${String(
      value
    )}`
  );
}