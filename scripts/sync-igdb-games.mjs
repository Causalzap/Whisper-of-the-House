import {
    mkdir,
    readFile,
    stat,
    writeFile,
  } from "node:fs/promises";
  
  import path from "node:path";
  import {
    fileURLToPath,
  } from "node:url";
  
  import {
    GAME_SEEDS,
  } from "../data/game-recommender/game-seeds.ts";
  
  const currentFilePath =
    fileURLToPath(import.meta.url);
  
  const currentDirectory =
    path.dirname(currentFilePath);
  
  const projectRoot = path.resolve(
    currentDirectory,
    "..",
  );
  
  const generatedDataPath = path.join(
    projectRoot,
    "data",
    "game-recommender",
    "igdb-games.generated.json",
  );
  
  const coverDirectory = path.join(
    projectRoot,
    "public",
    "images",
    "igdb",
    "covers",
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
  
  const forceDownload =
    process.argv.includes("--force");
  
  const TOKEN_REFRESH_BUFFER_MS =
    24 * 60 * 60 * 1000;
  
  const IGDB_BATCH_SIZE = 100;
  
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
  
  function validateSeeds() {
    if (!Array.isArray(GAME_SEEDS)) {
      throw new Error(
        "GAME_SEEDS must be an array.",
      );
    }
  
    if (GAME_SEEDS.length === 0) {
      throw new Error(
        "GAME_SEEDS is empty. Add at least one verified IGDB game.",
      );
    }
  
    const localIds = new Set();
    const igdbIds = new Set();
  
    for (const seed of GAME_SEEDS) {
      if (
        !seed.id ||
        typeof seed.id !== "string"
      ) {
        throw new Error(
          "Every game seed requires a string id.",
        );
      }
  
      if (
        !Number.isInteger(seed.igdbId) ||
        seed.igdbId <= 0
      ) {
        throw new Error(
          `Invalid igdbId for ${seed.id}.`,
        );
      }
  
      if (
        !seed.expectedName ||
        typeof seed.expectedName !==
          "string"
      ) {
        throw new Error(
          `Missing expectedName for ${seed.id}.`,
        );
      }
  
      if (localIds.has(seed.id)) {
        throw new Error(
          `Duplicate local game id: ${seed.id}`,
        );
      }
  
      if (igdbIds.has(seed.igdbId)) {
        throw new Error(
          `Duplicate IGDB ID: ${seed.igdbId}`,
        );
      }
  
      localIds.add(seed.id);
      igdbIds.add(seed.igdbId);
    }
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
  
  function splitIntoBatches(
    values,
    batchSize,
  ) {
    const batches = [];
  
    for (
      let index = 0;
      index < values.length;
      index += batchSize
    ) {
      batches.push(
        values.slice(
          index,
          index + batchSize,
        ),
      );
    }
  
    return batches;
  }
  
  async function requestIgdbGames(
    accessToken,
    igdbIds,
  ) {
    const query = `
      fields
        id,
        name,
        slug,
        cover.image_id,
        cover.width,
        cover.height,
        platforms.id,
        platforms.name,
        genres.id,
        genres.name,
        themes.id,
        themes.name,
        game_modes.id,
        game_modes.name,
        first_release_date,
        summary,
        url;
      where id = (${igdbIds.join(",")});
      limit ${Math.max(
        igdbIds.length,
        1,
      )};
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
          "IGDB games request failed.",
          `HTTP status: ${response.status}`,
          `Response: ${responseText}`,
        ].join("\n"),
      );
    }
  
    const games = JSON.parse(responseText);
  
    if (!Array.isArray(games)) {
      throw new Error(
        "IGDB returned an invalid games response.",
      );
    }
  
    return games;
  }
  
  async function fetchAllIgdbGames(
    accessToken,
  ) {
    const ids = GAME_SEEDS.map(
      (seed) => seed.igdbId,
    );
  
    const batches = splitIntoBatches(
      ids,
      IGDB_BATCH_SIZE,
    );
  
    const allGames = [];
  
    for (
      let index = 0;
      index < batches.length;
      index += 1
    ) {
      const batch = batches[index];
  
      console.log(
        `Fetching IGDB batch ${index + 1}/${batches.length}...`,
      );
  
      const batchGames =
        await requestIgdbGames(
          accessToken,
          batch,
        );
  
      allGames.push(...batchGames);
    }
  
    return allGames;
  }
  
  function normalizePlatforms(
    platforms = [],
  ) {
    const normalizedPlatforms =
      new Set();
  
    for (const platform of platforms) {
      const name =
        platform.name?.toLowerCase() ??
        "";
  
      if (
        name.includes("windows") ||
        name === "linux" ||
        name === "mac"
      ) {
        normalizedPlatforms.add("pc");
      }
  
      if (
        name.includes("playstation")
      ) {
        normalizedPlatforms.add(
          "playstation",
        );
      }
  
      if (name.includes("xbox")) {
        normalizedPlatforms.add(
          "xbox",
        );
      }
  
      if (
        name.includes(
          "nintendo switch",
        )
      ) {
        normalizedPlatforms.add(
          "switch",
        );
      }
    }
  
    return Array.from(
      normalizedPlatforms,
    );
  }
  
  function normalizePlayModes(
    gameModes = [],
  ) {
    const normalizedModes = new Set();
  
    for (const gameMode of gameModes) {
      const name =
        gameMode.name?.toLowerCase() ??
        "";
  
      if (name === "single player") {
        normalizedModes.add("solo");
      }
  
      if (
        name === "co-operative" ||
        name === "split screen"
      ) {
        normalizedModes.add("co-op");
      }
  
      if (
        name === "multiplayer" ||
        name.includes(
          "massively multiplayer",
        )
      ) {
        normalizedModes.add(
          "multiplayer",
        );
      }
    }
  
    return Array.from(normalizedModes);
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
  
  async function fileExists(filePath) {
    try {
      await stat(filePath);
      return true;
    } catch {
      return false;
    }
  }
  
  async function downloadCover({
    imageId,
    outputPath,
    gameName,
  }) {
    if (!imageId) {
      console.warn(
        `⚠️ No cover found for ${gameName}`,
      );
  
      return false;
    }
  
    if (
      !forceDownload &&
      (await fileExists(outputPath))
    ) {
      console.log(
        `↪ Cover already exists: ${gameName}`,
      );
  
      return true;
    }
  
    const coverUrl =
      `https://images.igdb.com/igdb/image/upload/` +
      `t_cover_big_2x/${imageId}.jpg`;
  
    const response = await fetch(coverUrl);
  
    if (!response.ok) {
      throw new Error(
        [
          `Failed to download cover for ${gameName}.`,
          `HTTP status: ${response.status}`,
          `URL: ${coverUrl}`,
        ].join("\n"),
      );
    }
  
    const imageBuffer = Buffer.from(
      await response.arrayBuffer(),
    );
  
    await writeFile(
      outputPath,
      imageBuffer,
    );
  
    console.log(
      `✅ Downloaded cover: ${gameName}`,
    );
  
    return true;
  }
  
  function createGeneratedGame({
    seed,
    igdbGame,
    coverPath,
  }) {
    return {
      localId: seed.id,
      igdbId: igdbGame.id,
      title: igdbGame.name,
      slug:
        igdbGame.slug ?? seed.id,
  
      cover: igdbGame.cover?.image_id
        ? coverPath
        : null,
  
      coverImageId:
        igdbGame.cover?.image_id ??
        null,
  
      coverWidth:
        igdbGame.cover?.width ?? null,
  
      coverHeight:
        igdbGame.cover?.height ?? null,
  
      platforms: normalizePlatforms(
        igdbGame.platforms,
      ),
  
      rawPlatforms:
        igdbGame.platforms?.map(
          (platform) => platform.name,
        ) ?? [],
  
      playModes: normalizePlayModes(
        igdbGame.game_modes,
      ),
  
      rawGameModes:
        igdbGame.game_modes?.map(
          (mode) => mode.name,
        ) ?? [],
  
      genres:
        igdbGame.genres?.map(
          (genre) => genre.name,
        ) ?? [],
  
      themes:
        igdbGame.themes?.map(
          (theme) => theme.name,
        ) ?? [],
  
      firstReleaseDate:
        normalizeReleaseDate(
          igdbGame.first_release_date,
        ),
  
      summary:
        igdbGame.summary ?? null,
  
      igdbUrl:
        igdbGame.url ?? null,
    };
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
  
    validateSeeds();
  
    await mkdir(coverDirectory, {
      recursive: true,
    });
  
    console.log(
      `Syncing ${GAME_SEEDS.length} IGDB game(s)...`,
    );
  
    const accessToken =
      await getAccessToken();
  
    const igdbGames =
      await fetchAllIgdbGames(
        accessToken,
      );
  
    const igdbGameMap = new Map(
      igdbGames.map((game) => [
        game.id,
        game,
      ]),
    );
  
    const generatedGames = {};
    const missingGameIds = [];
  
    for (const seed of GAME_SEEDS) {
      const igdbGame =
        igdbGameMap.get(seed.igdbId);
  
      if (!igdbGame) {
        missingGameIds.push(
          seed.igdbId,
        );
  
        console.warn(
          `⚠️ IGDB returned no game for ${seed.id} (${seed.igdbId})`,
        );
  
        continue;
      }
  
      if (
        igdbGame.name.toLowerCase() !==
        seed.expectedName.toLowerCase()
      ) {
        console.warn(
          [
            `⚠️ Name mismatch for ${seed.id}:`,
            `expected "${seed.expectedName}",`,
            `received "${igdbGame.name}".`,
          ].join(" "),
        );
      }
  
      const coverFileName =
        `${seed.igdbId}-${seed.id}.jpg`;
  
      const coverOutputPath =
        path.join(
          coverDirectory,
          coverFileName,
        );
  
      const publicCoverPath =
        `/images/igdb/covers/${coverFileName}`;
  
      await downloadCover({
        imageId:
          igdbGame.cover?.image_id,
        outputPath:
          coverOutputPath,
        gameName: igdbGame.name,
      });
  
      generatedGames[seed.id] =
        createGeneratedGame({
          seed,
          igdbGame,
          coverPath:
            publicCoverPath,
        });
    }
  
    const generatedData = {
      generatedAt:
        new Date().toISOString(),
      gameCount:
        Object.keys(
          generatedGames,
        ).length,
      games: generatedGames,
    };
  
    await writeFile(
      generatedDataPath,
      JSON.stringify(
        generatedData,
        null,
        2,
      ) + "\n",
      "utf8",
    );
  
    console.log(
      `\n✅ Generated data: ${generatedDataPath}`,
    );
  
    console.log(
      `✅ Covers directory: ${coverDirectory}`,
    );
  
    console.log(
      `✅ Synced ${generatedData.gameCount}/${GAME_SEEDS.length} game(s)`,
    );
  
    if (missingGameIds.length > 0) {
      console.warn(
        `⚠️ Missing IGDB IDs: ${missingGameIds.join(", ")}`,
      );
  
      process.exitCode = 1;
    }
  }
  
  try {
    await main();
  } catch (error) {
    console.error(
      "\n❌ IGDB synchronization failed",
    );
  
    if (error instanceof Error) {
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