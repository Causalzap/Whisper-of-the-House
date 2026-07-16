"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import GameDnaResults from "@/components/game-dna/GameDnaResults";
import GamePickerModal from "@/components/game-dna/GamePickerModal";
import RecommendedGames from "@/components/game-dna/RecommendedGames";
import SelectedGameGrid from "@/components/game-dna/SelectedGameGrid";

import {
  buildGameDnaProfile,
  buildGuideRecommendations,
  calculateAverageTraits,
  type GameDnaGame,
} from "@/lib/game-dna/recommendations";

export {
  GAME_DNA_TRAIT_IDS,
} from "@/lib/game-dna/recommendations";

export type {
  GameDnaGame,
  GameDnaTraitId,
  GameDnaTraits,
} from "@/lib/game-dna/recommendations";

type GameDnaToolProps = {
  games: GameDnaGame[];
  requiredCount?: number;
  className?: string;
};

type GtagFunction = (
  command: "event",
  eventName: string,
  parameters?: Record<
    string,
    string | number | boolean
  >
) => void;

/**
 * 使用新的版本号，避免继续读取旧版测试数据。
 *
 * 后续数据结构不兼容时，可以继续升级为 v4、v5。
 */
const STORAGE_KEY =
  "whisper-game-dna-selected-games-v3";

export default function GameDnaTool({
  games,
  requiredCount = 9,
  className = "",
}: GameDnaToolProps) {
  const [selectedGameIds, setSelectedGameIds] =
    useState<string[]>([]);

  const [draggedGameId, setDraggedGameId] =
    useState<string | null>(null);

  const [hasLoadedStorage, setHasLoadedStorage] =
    useState(false);

  const [hasRevealed, setHasRevealed] =
    useState(false);

  const [isPickerOpen, setIsPickerOpen] =
    useState(false);

  const [
    targetSlotNumber,
    setTargetSlotNumber,
  ] = useState<number | null>(null);

  const resultsRef =
    useRef<HTMLDivElement>(null);

  const gridRef =
    useRef<HTMLDivElement>(null);

  const hasInitializedRef = useRef(false);

  const normalizedRequiredCount = Math.max(
    1,
    Math.floor(requiredCount)
  );

  const gameMap = useMemo(
    () =>
      new Map<string, GameDnaGame>(
        games.map((game) => [
          game.id,
          game,
        ])
      ),
    [games]
  );

  /**
   * 首次加载：
   *
   * 1. 读取 localStorage。
   * 2. 读取 ?game= 参数。
   * 3. Hub 传入的游戏优先排在第一位。
   * 4. 不自动展示结果，用户仍需主动点击 Reveal。
   */
  useEffect(() => {
    if (
      hasInitializedRef.current ||
      games.length === 0
    ) {
      return;
    }

    hasInitializedRef.current = true;

    const validGameIds = new Set(
      games.map((game) => game.id)
    );

    let savedGameIds: string[] = [];

    try {
      const storedValue =
        window.localStorage.getItem(
          STORAGE_KEY
        );

      if (storedValue) {
        const parsedValue: unknown =
          JSON.parse(storedValue);

        if (Array.isArray(parsedValue)) {
          savedGameIds = parsedValue.filter(
            (value): value is string =>
              typeof value === "string" &&
              validGameIds.has(value)
          );
        }
      }
    } catch {
      savedGameIds = [];
    }

    const queryParams =
      new URLSearchParams(
        window.location.search
      );

    const preselectedGameId =
      queryParams.get("game");

    let nextGameIds = uniqueValues(
      savedGameIds
    ).slice(0, normalizedRequiredCount);

    if (
      preselectedGameId &&
      validGameIds.has(preselectedGameId)
    ) {
      nextGameIds = [
        preselectedGameId,
        ...nextGameIds.filter(
          (gameId) =>
            gameId !== preselectedGameId
        ),
      ].slice(0, normalizedRequiredCount);

      const preselectedGame =
        gameMap.get(preselectedGameId);

      trackEvent(
        "game_dna_preselected",
        {
          game_id: preselectedGameId,
          game_title:
            preselectedGame?.title ??
            preselectedGameId,
          source: "query_parameter",
        }
      );
    }

    setSelectedGameIds(nextGameIds);
    setHasLoadedStorage(true);
  }, [
    gameMap,
    games,
    normalizedRequiredCount,
  ]);

  /**
   * 每次选择发生变化后保存到浏览器。
   *
   * hasLoadedStorage 用来防止首次渲染时，
   * 空数组覆盖浏览器中已有的数据。
   */
  useEffect(() => {
    if (!hasLoadedStorage) {
      return;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(selectedGameIds)
      );
    } catch {
      // localStorage 不可用时不阻断工具。
    }
  }, [
    hasLoadedStorage,
    selectedGameIds,
  ]);

  const selectedGames = useMemo(
    () =>
      selectedGameIds
        .map((gameId) =>
          gameMap.get(gameId)
        )
        .filter(
          (game): game is GameDnaGame =>
            Boolean(game)
        ),
    [gameMap, selectedGameIds]
  );

  const selectedGameIdSet = useMemo(
    () => new Set(selectedGameIds),
    [selectedGameIds]
  );

  const selectedCount =
    selectedGames.length;

  const isComplete =
    selectedCount >=
    normalizedRequiredCount;

  const averageTraits = useMemo(
    () =>
      calculateAverageTraits(
        selectedGames
      ),
    [selectedGames]
  );

  const profile = useMemo(() => {
    if (!isComplete || !hasRevealed) {
      return null;
    }

    return buildGameDnaProfile(
      averageTraits
    );
  }, [
    averageTraits,
    hasRevealed,
    isComplete,
  ]);

  const recommendations = useMemo(
    () =>
      buildGuideRecommendations({
        games,
        selectedGameIds:
          selectedGameIdSet,
        averageTraits,
        isComplete:
          isComplete && hasRevealed,
      }),
    [
      averageTraits,
      games,
      hasRevealed,
      isComplete,
      selectedGameIdSet,
    ]
  );

  /**
   * 九宫格发生任何变化后，
   * 当前结果都会失效。
   */
  const invalidateResults =
    useCallback(() => {
      setHasRevealed(false);
    }, []);

  /**
   * 打开游戏选择器。
   *
   * 当前数据结构使用连续数组，不允许九宫格中间留空，
   * 所以无论点击哪个空格，都会填入下一个可用位置。
   */
  const openGamePicker = useCallback(
    (_requestedSlotNumber?: number) => {
      if (
        selectedCount >=
        normalizedRequiredCount
      ) {
        return;
      }

      const nextAvailableSlot =
        selectedCount + 1;

      setTargetSlotNumber(
        nextAvailableSlot
      );

      setIsPickerOpen(true);

      trackEvent(
        "game_dna_picker_opened",
        {
          target_slot:
            nextAvailableSlot,
          selected_count: selectedCount,
        }
      );
    },
    [
      normalizedRequiredCount,
      selectedCount,
    ]
  );

  const closeGamePicker =
    useCallback(() => {
      setIsPickerOpen(false);
      setTargetSlotNumber(null);
    }, []);

  const addGame = useCallback(
    (gameId: string) => {
      const game = gameMap.get(gameId);

      if (!game) {
        return;
      }

      if (
        selectedGameIds.includes(gameId) ||
        selectedGameIds.length >=
          normalizedRequiredCount
      ) {
        return;
      }

      const nextSelectedCount =
        selectedGameIds.length + 1;

      setSelectedGameIds(
        (currentGameIds) => {
          if (
            currentGameIds.includes(
              gameId
            ) ||
            currentGameIds.length >=
              normalizedRequiredCount
          ) {
            return currentGameIds;
          }

          return [
            ...currentGameIds,
            gameId,
          ];
        }
      );

      invalidateResults();

      trackEvent(
        "game_dna_game_added",
        {
          game_id: game.id,
          game_title: game.title,
          selected_count:
            nextSelectedCount,
          target_slot:
            targetSlotNumber ??
            nextSelectedCount,
        }
      );

      if (
        nextSelectedCount ===
        normalizedRequiredCount
      ) {
        trackEvent(
          "game_dna_grid_completed",
          {
            selected_count:
              normalizedRequiredCount,
          }
        );
      }
    },
    [
      gameMap,
      invalidateResults,
      normalizedRequiredCount,
      selectedGameIds,
      targetSlotNumber,
    ]
  );

  const removeGame = useCallback(
    (gameId: string) => {
      const game = gameMap.get(gameId);

      setSelectedGameIds(
        (currentGameIds) =>
          currentGameIds.filter(
            (selectedGameId) =>
              selectedGameId !== gameId
          )
      );

      setDraggedGameId(
        (currentDraggedGameId) =>
          currentDraggedGameId === gameId
            ? null
            : currentDraggedGameId
      );

      invalidateResults();

      trackEvent(
        "game_dna_game_removed",
        {
          game_id: gameId,
          game_title:
            game?.title ?? gameId,
        }
      );
    },
    [gameMap, invalidateResults]
  );

  const moveGame = useCallback(
    (
      gameId: string,
      direction:
        | "previous"
        | "next"
    ) => {
      let didMove = false;

      setSelectedGameIds(
        (currentGameIds) => {
          const currentIndex =
            currentGameIds.indexOf(
              gameId
            );

          if (currentIndex === -1) {
            return currentGameIds;
          }

          const targetIndex =
            direction === "previous"
              ? currentIndex - 1
              : currentIndex + 1;

          if (
            targetIndex < 0 ||
            targetIndex >=
              currentGameIds.length
          ) {
            return currentGameIds;
          }

          const nextGameIds = [
            ...currentGameIds,
          ];

          [
            nextGameIds[currentIndex],
            nextGameIds[targetIndex],
          ] = [
            nextGameIds[targetIndex],
            nextGameIds[currentIndex],
          ];

          didMove = true;

          return nextGameIds;
        }
      );

      if (!didMove) {
        return;
      }

      invalidateResults();

      trackEvent(
        "game_dna_grid_reordered",
        {
          game_id: gameId,
          method: "arrow_controls",
          direction,
        }
      );
    },
    [invalidateResults]
  );

  const handleDrop = useCallback(
    (targetGameId: string) => {
      if (
        !draggedGameId ||
        draggedGameId === targetGameId
      ) {
        setDraggedGameId(null);
        return;
      }

      const sourceGameId =
        draggedGameId;

      let didMove = false;

      setSelectedGameIds(
        (currentGameIds) => {
          const sourceIndex =
            currentGameIds.indexOf(
              sourceGameId
            );

          const targetIndex =
            currentGameIds.indexOf(
              targetGameId
            );

          if (
            sourceIndex === -1 ||
            targetIndex === -1
          ) {
            return currentGameIds;
          }

          const nextGameIds = [
            ...currentGameIds,
          ];

          const [movedGameId] =
            nextGameIds.splice(
              sourceIndex,
              1
            );

          nextGameIds.splice(
            targetIndex,
            0,
            movedGameId
          );

          didMove = true;

          return nextGameIds;
        }
      );

      setDraggedGameId(null);

      if (!didMove) {
        return;
      }

      invalidateResults();

      trackEvent(
        "game_dna_grid_reordered",
        {
          game_id: sourceGameId,
          target_game_id:
            targetGameId,
          method: "drag_and_drop",
        }
      );
    },
    [
      draggedGameId,
      invalidateResults,
    ]
  );

  const revealGamingDna =
    useCallback(() => {
      if (!isComplete) {
        return;
      }

      setHasRevealed(true);

      trackEvent(
        "game_dna_revealed",
        {
          selected_count:
            selectedCount,
        }
      );

      window.requestAnimationFrame(
        () => {
          resultsRef.current?.scrollIntoView(
            {
              behavior: "smooth",
              block: "start",
            }
          );
        }
      );
    }, [
      isComplete,
      selectedCount,
    ]);

  const resetTool = useCallback(() => {
    setSelectedGameIds([]);
    setDraggedGameId(null);
    setHasRevealed(false);
    setIsPickerOpen(false);
    setTargetSlotNumber(null);

    try {
      window.localStorage.removeItem(
        STORAGE_KEY
      );
    } catch {
      // localStorage 不可用时忽略。
    }

    /**
     * 清除 Hub 自动预选参数，
     * 避免刷新页面后再次加入该游戏。
     */
    try {
      const url = new URL(
        window.location.href
      );

      url.searchParams.delete("game");

      const nextUrl = [
        url.pathname,
        url.search,
        url.hash,
      ].join("");

      window.history.replaceState(
        window.history.state,
        "",
        nextUrl
      );
    } catch {
      // URL 清理失败不影响重置。
    }

    trackEvent(
      "game_dna_reset",
      {
        source: "results",
      }
    );

    window.requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  return (
    <div
      ref={gridRef}
      className={[
        "scroll-mt-24",
        className,
      ].join(" ")}
    >
      <SelectedGameGrid
        selectedGames={selectedGames}
        requiredCount={
          normalizedRequiredCount
        }
        draggedGameId={draggedGameId}
        isRevealed={hasRevealed}
        onOpenGamePicker={
          openGamePicker
        }
        onReveal={revealGamingDna}
        onRemoveGame={removeGame}
        onMoveGame={moveGame}
        onDragStart={(gameId) =>
          setDraggedGameId(gameId)
        }
        onDragEnd={() =>
          setDraggedGameId(null)
        }
        onDropGame={handleDrop}
      />

      {hasRevealed && profile ? (
        <div
          ref={resultsRef}
          className="scroll-mt-24"
        >
          <div className="mt-6">
            <GameDnaResults
              profile={profile}
              selectedCount={
                selectedCount
              }
              requiredCount={
                normalizedRequiredCount
              }
              onReset={resetTool}
            />
          </div>

          <RecommendedGames
            recommendations={
              recommendations
            }
          />
        </div>
      ) : null}

      <GamePickerModal
        isOpen={isPickerOpen}
        games={games}
        selectedGameIds={
          selectedGameIds
        }
        selectedCount={selectedCount}
        requiredCount={
          normalizedRequiredCount
        }
        targetSlotNumber={
          targetSlotNumber
        }
        onAddGame={addGame}
        onClose={closeGamePicker}
      />
    </div>
  );
}

function uniqueValues(
  values: string[]
) {
  return Array.from(
    new Set(values)
  );
}

function trackEvent(
  eventName: string,
  parameters?: Record<
    string,
    string | number | boolean
  >
) {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  const gtag = (
    window as Window & {
      gtag?: GtagFunction;
    }
  ).gtag;

  gtag?.(
    "event",
    eventName,
    parameters
  );
}