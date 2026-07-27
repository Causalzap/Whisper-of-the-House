import {
    mkdir,
    readFile,
    writeFile,
  } from "node:fs/promises";
  
  import path from "node:path";
  import {
    fileURLToPath,
  } from "node:url";
  
  const currentFilePath =
    fileURLToPath(import.meta.url);
  
  const currentDirectory =
    path.dirname(currentFilePath);
  
  const projectRoot = path.resolve(
    currentDirectory,
    "..",
  );
  
  const tokenCacheDirectory = path.join(
    projectRoot,
    ".cache",
  );
  
  const tokenCachePath = path.join(
    tokenCacheDirectory,
    "igdb-access-token.json",
  );
  
  const clientId =
    process.env.IGDB_CLIENT_ID;
  
  const clientSecret =
    process.env.IGDB_CLIENT_SECRET;
  
  const TOKEN_REFRESH_BUFFER_MS =
    24 * 60 * 60 * 1000;
  
  const SEARCH_LIMIT = 10;
  const REQUEST_INTERVAL_MS = 300;
  
  function assertEnvironmentVariable(
    name,
    value,
  ) {
    if (
      !value ||
      value.includes("替换") ||
      value.includes("生成")
    ) {
      throw new Error(
        `Missing ${name}. Check .env.local.`,
      );
    }
  }
  
  function escapeApicalypseString(
    value,
  ) {
    return value
      .replaceAll("\\", "\\\\")
      .replaceAll('"', '\\"');
  }
  
  function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
  
  function normalizeText(value) {
    return value
      .trim()
      .toLocaleLowerCase("en-US")
      .replaceAll(/[™®©]/g, "")
      .replaceAll(/[:\-–—_.']/g, " ")
      .replaceAll(/\s+/g, " ");
  }
  
  function normalizeReleaseDate(
    timestamp,
  ) {
    if (
      !timestamp ||
      !Number.isFinite(timestamp)
    ) {
      return null;
    }
  
    return new Date(timestamp * 1000)
      .toISOString()
      .slice(0, 10);
  }
  
  async function readCachedAccessToken() {
    try {
      const rawCache = await readFile(
        tokenCachePath,
        "utf8",
      );
  
      const cache = JSON.parse(rawCache);
  
      const isUsable =
        typeof cache.accessToken ===
          "string" &&
        typeof cache.expiresAt ===
          "number" &&
        cache.expiresAt >
          Date.now() +
            TOKEN_REFRESH_BUFFER_MS;
  
      if (!isUsable) {
        return null;
      }
  
      return cache.accessToken;
    } catch {
      return null;
    }
  }
  
  async function requestNewAccessToken() {
    const tokenBody =
      new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type:
          "client_credentials",
      });
  
    const response = await fetch(
      "https://id.twitch.tv/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: tokenBody,
      },
    );
  
    const responseText =
      await response.text();
  
    if (!response.ok) {
      throw new Error(
        [
          "Failed to obtain Twitch access token.",
          `HTTP status: ${response.status}`,
          `Response: ${responseText}`,
        ].join("\n"),
      );
    }
  
    const data = JSON.parse(responseText);
  
    if (
      !data.access_token ||
      !data.expires_in
    ) {
      throw new Error(
        "Twitch token response is missing required fields.",
      );
    }
  
    const expiresAt =
      Date.now() +
      data.expires_in * 1000;
  
    await mkdir(tokenCacheDirectory, {
      recursive: true,
    });
  
    await writeFile(
      tokenCachePath,
      JSON.stringify(
        {
          accessToken:
            data.access_token,
          expiresAt,
        },
        null,
        2,
      ),
      {
        encoding: "utf8",
        mode: 0o600,
      },
    );
  
    console.log(
      "✅ Generated and cached a new Twitch access token",
    );
  
    return data.access_token;
  }
  
  async function getAccessToken() {
    const cachedToken =
      await readCachedAccessToken();
  
    if (cachedToken) {
      console.log(
        "✅ Using cached Twitch access token",
      );
  
      return cachedToken;
    }
  
    return requestNewAccessToken();
  }
  
  async function searchIgdb(
    accessToken,
    title,
  ) {
    const escapedTitle =
      escapeApicalypseString(title);
  
    const query = `
      search "${escapedTitle}";
      fields
        id,
        name,
        slug,
        first_release_date,
        cover.image_id,
        platforms.name,
        game_modes.name,
        summary,
        url,
        version_parent;
      limit ${SEARCH_LIMIT};
    `;
  
    const response = await fetch(
      "https://api.igdb.com/v4/games",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": clientId,
          Authorization:
            `Bearer ${accessToken}`,
        },
        body: query,
      },
    );
  
    const responseText =
      await response.text();
  
    if (!response.ok) {
      throw new Error(
        [
          `IGDB search failed for "${title}".`,
          `HTTP status: ${response.status}`,
          `Response: ${responseText}`,
        ].join("\n"),
      );
    }
  
    const results =
      JSON.parse(responseText);
  
    if (!Array.isArray(results)) {
      throw new Error(
        `IGDB returned an invalid search response for "${title}".`,
      );
    }
  
    const normalizedTitle =
      normalizeText(title);
  
    return results
      .map((game) => ({
        id: game.id,
        name: game.name,
        slug:
          game.slug ?? null,
  
        exactNameMatch:
          normalizeText(
            game.name ?? "",
          ) === normalizedTitle,
  
        firstReleaseDate:
          normalizeReleaseDate(
            game.first_release_date,
          ),
  
        coverImageId:
          game.cover?.image_id ??
          null,
  
        platforms:
          game.platforms?.map(
            (platform) =>
              platform.name,
          ) ?? [],
  
        gameModes:
          game.game_modes?.map(
            (mode) => mode.name,
          ) ?? [],
  
        versionParent:
          game.version_parent ??
          null,
  
        igdbUrl:
          game.url ?? null,
  
        summary:
          game.summary ?? null,
      }))
      .sort((left, right) => {
        if (
          left.exactNameMatch !==
          right.exactNameMatch
        ) {
          return left.exactNameMatch
            ? -1
            : 1;
        }
  
        return left.id - right.id;
      });
  }
  
  function printCandidate(
    candidate,
    index,
  ) {
    console.log(
      `\n[${index + 1}] ${candidate.name}`,
    );
  
    console.log(
      `    IGDB ID: ${candidate.id}`,
    );
  
    console.log(
      `    Exact title match: ${
        candidate.exactNameMatch
          ? "yes"
          : "no"
      }`,
    );
  
    console.log(
      `    Slug: ${
        candidate.slug ?? "—"
      }`,
    );
  
    console.log(
      `    Release: ${
        candidate.firstReleaseDate ??
        "—"
      }`,
    );
  
    console.log(
      `    Version parent: ${
        candidate.versionParent ??
        "none"
      }`,
    );
  
    console.log(
      `    Platforms: ${
        candidate.platforms.length > 0
          ? candidate.platforms.join(", ")
          : "—"
      }`,
    );
  
    console.log(
      `    Modes: ${
        candidate.gameModes.length > 0
          ? candidate.gameModes.join(", ")
          : "—"
      }`,
    );
  
    console.log(
      `    Cover image ID: ${
        candidate.coverImageId ??
        "—"
      }`,
    );
  
    console.log(
      `    IGDB: ${
        candidate.igdbUrl ?? "—"
      }`,
    );
  
    if (candidate.summary) {
      const shortSummary =
        candidate.summary.length >
        220
          ? `${candidate.summary.slice(
              0,
              217,
            )}...`
          : candidate.summary;
  
      console.log(
        `    Summary: ${shortSummary}`,
      );
    }
  }
  
  async function main() {
    assertEnvironmentVariable(
      "IGDB_CLIENT_ID",
      clientId,
    );
  
    assertEnvironmentVariable(
      "IGDB_CLIENT_SECRET",
      clientSecret,
    );
  
    const titles =
      process.argv
        .slice(2)
        .map((value) =>
          value.trim(),
        )
        .filter(Boolean);
  
    if (titles.length === 0) {
      throw new Error(
        [
          "Provide at least one game title.",
          'Example: node --env-file=.env.local scripts/find-igdb-game.mjs "Funnel Runners"',
        ].join("\n"),
      );
    }
  
    const accessToken =
      await getAccessToken();
  
    for (
      let index = 0;
      index < titles.length;
      index += 1
    ) {
      const title =
        titles[index];
  
      if (index > 0) {
        await delay(
          REQUEST_INTERVAL_MS,
        );
      }
  
      console.log(
        "\n==================================================",
      );
  
      console.log(
        `Searching IGDB: ${title}`,
      );
  
      console.log(
        "==================================================",
      );
  
      const candidates =
        await searchIgdb(
          accessToken,
          title,
        );
  
      if (
        candidates.length === 0
      ) {
        console.log(
          "No candidates returned.",
        );
  
        continue;
      }
  
      candidates.forEach(
        printCandidate,
      );
    }
  }
  
  try {
    await main();
  } catch (error) {
    console.error(
      "\n❌ IGDB search failed",
    );
  
    if (
      error instanceof Error
    ) {
      console.error(
        "Message:",
        error.message,
      );
  
      console.error(
        "Cause:",
        error.cause,
      );
  
      console.error(
        "Stack:",
        error.stack,
      );
    } else {
      console.error(error);
    }
  
    process.exitCode = 1;
  }