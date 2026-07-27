const clientId = process.env.IGDB_CLIENT_ID;
const clientSecret = process.env.IGDB_CLIENT_SECRET;

function assertEnvironmentVariable(name, value) {
  if (!value || value.includes("替换") || value.includes("生成")) {
    throw new Error(
      `Missing ${name}. Please check your .env.local file.`,
    );
  }
}

assertEnvironmentVariable("IGDB_CLIENT_ID", clientId);
assertEnvironmentVariable("IGDB_CLIENT_SECRET", clientSecret);

async function getAccessToken() {
  const tokenUrl = new URL(
    "https://id.twitch.tv/oauth2/token",
  );

  tokenUrl.searchParams.set("client_id", clientId);
  tokenUrl.searchParams.set(
    "client_secret",
    clientSecret,
  );
  tokenUrl.searchParams.set(
    "grant_type",
    "client_credentials",
  );

  const response = await fetch(tokenUrl, {
    method: "POST",
  });

  const responseText = await response.text();

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

  if (!data.access_token) {
    throw new Error(
      "Twitch response did not contain an access token.",
    );
  }

  console.log("✅ Twitch authentication succeeded");
  console.log(
    `   Token expires in approximately ${Math.round(
      data.expires_in / 86400,
    )} days`,
  );

  return data.access_token;
}

async function testIgdbRequest(accessToken) {
  const query = `
    search "Stardew Valley";
    fields
      id,
      name,
      slug,
      cover.image_id,
      cover.width,
      cover.height,
      platforms.id,
      platforms.name,
      game_modes.id,
      game_modes.name,
      first_release_date,
      summary,
      url,
      version_parent;
    where version_parent = null;
    limit 5;
  `;

  const response = await fetch(
    "https://api.igdb.com/v4/games",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": clientId,
        Authorization: `Bearer ${accessToken}`,
      },
      body: query,
    },
  );

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(
      [
        "IGDB API request failed.",
        `HTTP status: ${response.status}`,
        `Response: ${responseText}`,
      ].join("\n"),
    );
  }

  const games = JSON.parse(responseText);

  if (!Array.isArray(games) || games.length === 0) {
    throw new Error(
      "IGDB returned no games for the test query.",
    );
  }

  console.log(
    `✅ IGDB query succeeded: ${games.length} result(s)`,
  );

  const safeOutput = games.map((game) => ({
    id: game.id,
    name: game.name,
    slug: game.slug,
    coverImageId: game.cover?.image_id ?? null,
    platforms:
      game.platforms?.map(
        (platform) => platform.name,
      ) ?? [],
    gameModes:
      game.game_modes?.map(
        (mode) => mode.name,
      ) ?? [],
    igdbUrl: game.url ?? null,
  }));

  console.dir(safeOutput, {
    depth: null,
  });

  const firstGameWithCover = games.find(
    (game) => game.cover?.image_id,
  );

  if (firstGameWithCover) {
    const coverUrl =
      `https://images.igdb.com/igdb/image/upload/` +
      `t_cover_big_2x/${firstGameWithCover.cover.image_id}.jpg`;

    console.log("✅ Cover image ID received");
    console.log(`   Test cover URL: ${coverUrl}`);
  } else {
    console.log(
      "⚠️ The returned games did not include a cover image.",
    );
  }
}

async function main() {
  try {
    console.log("Testing Twitch authentication...");
    const accessToken = await getAccessToken();

    console.log("\nTesting IGDB API...");
    await testIgdbRequest(accessToken);

    console.log(
      "\n🎉 IGDB connection test completed successfully.",
    );
} catch (error) {
    console.error("\n❌ IGDB connection test failed");
  
    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error("Cause:", error.cause);
      console.error("Stack:", error.stack);
    } else {
      console.error(error);
    }
  
    process.exitCode = 1;
  }
}

await main();