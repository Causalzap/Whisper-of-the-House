export type DolocTownSeason = "1" | "2" | "3" | "4" | "5";
export type DolocTownCropCategory = "Ordinary" | "Shrub" | "Vine" | "Fungal";
export type DolocTownGeneLevel = 0 | 1 | 2 | 3;

export type DolocTownCropMetrics = {
  growthDays: number;
  regrowDays: number;
  harvests: number;
  directRevenue: number;
  processedRevenue: number;
  directProfitPerDay: number;
  processedProfitPerDay: number;
};

export type DolocTownCropGeneCase = {
  level: DolocTownGeneLevel;
  seasons: Partial<Record<DolocTownSeason, DolocTownCropMetrics>>;
};

export type DolocTownCrop = {
  id: string;
  name: string;
  category: DolocTownCropCategory;
  seedCost: number;
  footprint: string;
  cells: number;
  repeatHarvest: boolean;
  geneCases: DolocTownCropGeneCase[];
};

/**
 * Generated from the user-provided Doloc Town data.js.
 *
 * Notes:
 * - Source case 0/1/2/3 is exposed as 0/1/2/3-gene progression.
 * - Season 5 is used as the Indoor / Greenhouse comparison.
 * - Processed values use the strongest processing path recorded in the source data.
 * - Toadstool is intentionally excluded because the source marks it as an unobtainable test item.
 */
export const DOLOC_TOWN_CROPS: DolocTownCrop[] = [

  {
    id: "seed_endyam",
    name: "Endyam",
    category: "Ordinary",
    seedCost: 20,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 40, processedRevenue: 130, directProfitPerDay: 10.0, processedProfitPerDay: 55.0 },
          "2": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 40, processedRevenue: 130, directProfitPerDay: 10.0, processedProfitPerDay: 55.0 },
          "5": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 40, processedRevenue: 130, directProfitPerDay: 10.0, processedProfitPerDay: 55.0 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 60, processedRevenue: 195, directProfitPerDay: 20.0, processedProfitPerDay: 87.5 },
          "2": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 60, processedRevenue: 195, directProfitPerDay: 20.0, processedProfitPerDay: 87.5 },
          "5": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 60, processedRevenue: 195, directProfitPerDay: 20.0, processedProfitPerDay: 87.5 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 2.9, regrowDays: 1.0, harvests: 3, directRevenue: 180, processedRevenue: 585, directProfitPerDay: 33.6, processedProfitPerDay: 118.7 },
          "2": { growthDays: 2.9, regrowDays: 1.0, harvests: 3, directRevenue: 180, processedRevenue: 585, directProfitPerDay: 33.6, processedProfitPerDay: 118.7 },
          "5": { growthDays: 2.9, regrowDays: 1.0, harvests: 3, directRevenue: 180, processedRevenue: 585, directProfitPerDay: 33.6, processedProfitPerDay: 118.7 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 2.0, regrowDays: 0.7, harvests: 3, directRevenue: 180, processedRevenue: 585, directProfitPerDay: 48.0, processedProfitPerDay: 169.5 },
          "2": { growthDays: 2.0, regrowDays: 0.7, harvests: 3, directRevenue: 180, processedRevenue: 585, directProfitPerDay: 48.0, processedProfitPerDay: 169.5 },
          "5": { growthDays: 2.0, regrowDays: 0.7, harvests: 3, directRevenue: 180, processedRevenue: 585, directProfitPerDay: 48.0, processedProfitPerDay: 169.5 },
        },
      },
    ],
  },
  {
    id: "seed_thunder_grass",
    name: "Thundergrass",
    category: "Ordinary",
    seedCost: 30,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 70, processedRevenue: 190, directProfitPerDay: 10.0, processedProfitPerDay: 40.0 },
          "2": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 70, processedRevenue: 190, directProfitPerDay: 10.0, processedProfitPerDay: 40.0 },
          "5": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 70, processedRevenue: 190, directProfitPerDay: 10.0, processedProfitPerDay: 40.0 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 98, processedRevenue: 266, directProfitPerDay: 17.0, processedProfitPerDay: 59.0 },
          "2": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 98, processedRevenue: 266, directProfitPerDay: 17.0, processedProfitPerDay: 59.0 },
          "5": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 98, processedRevenue: 266, directProfitPerDay: 17.0, processedProfitPerDay: 59.0 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 210, processedRevenue: 570, directProfitPerDay: 27.0, processedProfitPerDay: 81.0 },
          "2": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 210, processedRevenue: 570, directProfitPerDay: 27.0, processedProfitPerDay: 81.0 },
          "5": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 210, processedRevenue: 570, directProfitPerDay: 27.0, processedProfitPerDay: 81.0 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 294, processedRevenue: 798, directProfitPerDay: 39.6, processedProfitPerDay: 115.2 },
          "2": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 294, processedRevenue: 798, directProfitPerDay: 39.6, processedProfitPerDay: 115.2 },
          "5": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 294, processedRevenue: 798, directProfitPerDay: 39.6, processedProfitPerDay: 115.2 },
        },
      },
    ],
  },
  {
    id: "seed_paddy",
    name: "Paddy",
    category: "Ordinary",
    seedCost: 60,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 5.0, regrowDays: 0.0, harvests: 1, directRevenue: 150, processedRevenue: 220, directProfitPerDay: 18.0, processedProfitPerDay: 32.0 },
          "2": { growthDays: 5.0, regrowDays: 0.0, harvests: 1, directRevenue: 150, processedRevenue: 220, directProfitPerDay: 18.0, processedProfitPerDay: 32.0 },
          "5": { growthDays: 5.0, regrowDays: 0.0, harvests: 1, directRevenue: 150, processedRevenue: 220, directProfitPerDay: 18.0, processedProfitPerDay: 32.0 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 7.1, regrowDays: 1.8, harvests: 3, directRevenue: 450, processedRevenue: 660, directProfitPerDay: 36.4, processedProfitPerDay: 56.0 },
          "2": { growthDays: 7.1, regrowDays: 1.8, harvests: 3, directRevenue: 450, processedRevenue: 660, directProfitPerDay: 36.4, processedProfitPerDay: 56.0 },
          "5": { growthDays: 7.1, regrowDays: 1.8, harvests: 3, directRevenue: 450, processedRevenue: 660, directProfitPerDay: 36.4, processedProfitPerDay: 56.0 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 7.1, regrowDays: 1.8, harvests: 3, directRevenue: 630, processedRevenue: 924, directProfitPerDay: 53.2, processedProfitPerDay: 80.6 },
          "2": { growthDays: 7.1, regrowDays: 1.8, harvests: 3, directRevenue: 630, processedRevenue: 924, directProfitPerDay: 53.2, processedProfitPerDay: 80.6 },
          "5": { growthDays: 7.1, regrowDays: 1.8, harvests: 3, directRevenue: 630, processedRevenue: 924, directProfitPerDay: 53.2, processedProfitPerDay: 80.6 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 5.0, regrowDays: 1.2, harvests: 3, directRevenue: 630, processedRevenue: 924, directProfitPerDay: 76.0, processedProfitPerDay: 115.2 },
          "2": { growthDays: 5.0, regrowDays: 1.2, harvests: 3, directRevenue: 630, processedRevenue: 924, directProfitPerDay: 76.0, processedProfitPerDay: 115.2 },
          "5": { growthDays: 5.0, regrowDays: 1.2, harvests: 3, directRevenue: 630, processedRevenue: 924, directProfitPerDay: 76.0, processedProfitPerDay: 115.2 },
        },
      },
    ],
  },
  {
    id: "seed_chinese_cabbage",
    name: "Chinese Cabbage",
    category: "Ordinary",
    seedCost: 40,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 130, processedRevenue: 245, directProfitPerDay: 15.0, processedProfitPerDay: 34.2 },
          "2": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 130, processedRevenue: 245, directProfitPerDay: 15.0, processedProfitPerDay: 34.2 },
          "5": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 130, processedRevenue: 245, directProfitPerDay: 15.0, processedProfitPerDay: 34.2 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 195, processedRevenue: 368, directProfitPerDay: 25.8, processedProfitPerDay: 54.6 },
          "2": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 195, processedRevenue: 368, directProfitPerDay: 25.8, processedProfitPerDay: 54.6 },
          "5": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 195, processedRevenue: 368, directProfitPerDay: 25.8, processedProfitPerDay: 54.6 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 8.6, regrowDays: 2.1, harvests: 3, directRevenue: 585, processedRevenue: 1102, directProfitPerDay: 42.4, processedProfitPerDay: 82.6 },
          "2": { growthDays: 8.6, regrowDays: 2.1, harvests: 3, directRevenue: 585, processedRevenue: 1102, directProfitPerDay: 42.4, processedProfitPerDay: 82.6 },
          "5": { growthDays: 8.6, regrowDays: 2.1, harvests: 3, directRevenue: 585, processedRevenue: 1102, directProfitPerDay: 42.4, processedProfitPerDay: 82.6 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 585, processedRevenue: 1102, directProfitPerDay: 60.6, processedProfitPerDay: 118.1 },
          "2": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 585, processedRevenue: 1102, directProfitPerDay: 60.6, processedProfitPerDay: 118.1 },
          "5": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 585, processedRevenue: 1102, directProfitPerDay: 60.6, processedProfitPerDay: 118.1 },
        },
      },
    ],
  },
  {
    id: "seed_scallion",
    name: "Scallion",
    category: "Ordinary",
    seedCost: 35,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 130, processedRevenue: 320, directProfitPerDay: 15.8, processedProfitPerDay: 47.5 },
          "2": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 130, processedRevenue: 320, directProfitPerDay: 15.8, processedProfitPerDay: 47.5 },
          "5": { growthDays: 6.0, regrowDays: 0.0, harvests: 1, directRevenue: 130, processedRevenue: 320, directProfitPerDay: 15.8, processedProfitPerDay: 47.5 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 8.6, regrowDays: 2.1, harvests: 3, directRevenue: 390, processedRevenue: 960, directProfitPerDay: 27.6, processedProfitPerDay: 71.9 },
          "2": { growthDays: 8.6, regrowDays: 2.1, harvests: 3, directRevenue: 390, processedRevenue: 960, directProfitPerDay: 27.6, processedProfitPerDay: 71.9 },
          "5": { growthDays: 8.6, regrowDays: 2.1, harvests: 3, directRevenue: 390, processedRevenue: 960, directProfitPerDay: 27.6, processedProfitPerDay: 71.9 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 390, processedRevenue: 960, directProfitPerDay: 39.4, processedProfitPerDay: 102.8 },
          "2": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 390, processedRevenue: 960, directProfitPerDay: 39.4, processedProfitPerDay: 102.8 },
          "5": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 390, processedRevenue: 960, directProfitPerDay: 39.4, processedProfitPerDay: 102.8 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 546, processedRevenue: 1344, directProfitPerDay: 56.8, processedProfitPerDay: 145.4 },
          "2": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 546, processedRevenue: 1344, directProfitPerDay: 56.8, processedProfitPerDay: 145.4 },
          "5": { growthDays: 6.0, regrowDays: 1.5, harvests: 3, directRevenue: 546, processedRevenue: 1344, directProfitPerDay: 56.8, processedProfitPerDay: 145.4 },
        },
      },
    ],
  },
  {
    id: "seed_pumpkin",
    name: "Pumpkin",
    category: "Ordinary",
    seedCost: 100,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 9.0, regrowDays: 0.0, harvests: 1, directRevenue: 360, processedRevenue: 405, directProfitPerDay: 28.9, processedProfitPerDay: 33.9 },
          "2": { growthDays: 9.0, regrowDays: 0.0, harvests: 1, directRevenue: 360, processedRevenue: 405, directProfitPerDay: 28.9, processedProfitPerDay: 33.9 },
          "5": { growthDays: 9.0, regrowDays: 0.0, harvests: 1, directRevenue: 360, processedRevenue: 405, directProfitPerDay: 28.9, processedProfitPerDay: 33.9 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 12.9, regrowDays: 2.1, harvests: 3, directRevenue: 1080, processedRevenue: 1215, directProfitPerDay: 57.2, processedProfitPerDay: 65.0 },
          "2": { growthDays: 12.9, regrowDays: 2.1, harvests: 3, directRevenue: 1080, processedRevenue: 1215, directProfitPerDay: 57.2, processedProfitPerDay: 65.0 },
          "5": { growthDays: 12.9, regrowDays: 2.1, harvests: 3, directRevenue: 1080, processedRevenue: 1215, directProfitPerDay: 57.2, processedProfitPerDay: 65.0 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 12.9, regrowDays: 2.1, harvests: 3, directRevenue: 1620, processedRevenue: 1822, directProfitPerDay: 88.7, processedProfitPerDay: 100.5 },
          "2": { growthDays: 12.9, regrowDays: 2.1, harvests: 3, directRevenue: 1620, processedRevenue: 1822, directProfitPerDay: 88.7, processedProfitPerDay: 100.5 },
          "5": { growthDays: 12.9, regrowDays: 2.1, harvests: 3, directRevenue: 1620, processedRevenue: 1822, directProfitPerDay: 88.7, processedProfitPerDay: 100.5 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 9.0, regrowDays: 1.5, harvests: 3, directRevenue: 1620, processedRevenue: 1822, directProfitPerDay: 126.7, processedProfitPerDay: 143.5 },
          "2": { growthDays: 9.0, regrowDays: 1.5, harvests: 3, directRevenue: 1620, processedRevenue: 1822, directProfitPerDay: 126.7, processedProfitPerDay: 143.5 },
          "5": { growthDays: 9.0, regrowDays: 1.5, harvests: 3, directRevenue: 1620, processedRevenue: 1822, directProfitPerDay: 126.7, processedProfitPerDay: 143.5 },
        },
      },
    ],
  },
  {
    id: "seed_turnip",
    name: "Turnip",
    category: "Ordinary",
    seedCost: 80,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 7.0, regrowDays: 0.0, harvests: 1, directRevenue: 240, processedRevenue: 410, directProfitPerDay: 22.9, processedProfitPerDay: 47.1 },
          "2": { growthDays: 7.0, regrowDays: 0.0, harvests: 1, directRevenue: 240, processedRevenue: 410, directProfitPerDay: 22.9, processedProfitPerDay: 47.1 },
          "5": { growthDays: 7.0, regrowDays: 0.0, harvests: 1, directRevenue: 240, processedRevenue: 410, directProfitPerDay: 22.9, processedProfitPerDay: 47.1 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 7.0, regrowDays: 0.0, harvests: 1, directRevenue: 360, processedRevenue: 615, directProfitPerDay: 40.0, processedProfitPerDay: 76.4 },
          "2": { growthDays: 7.0, regrowDays: 0.0, harvests: 1, directRevenue: 360, processedRevenue: 615, directProfitPerDay: 40.0, processedProfitPerDay: 76.4 },
          "5": { growthDays: 7.0, regrowDays: 0.0, harvests: 1, directRevenue: 360, processedRevenue: 615, directProfitPerDay: 40.0, processedProfitPerDay: 76.4 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 10.0, regrowDays: 3.3, harvests: 3, directRevenue: 1080, processedRevenue: 1845, directProfitPerDay: 60.0, processedProfitPerDay: 105.9 },
          "2": { growthDays: 10.0, regrowDays: 3.3, harvests: 3, directRevenue: 1080, processedRevenue: 1845, directProfitPerDay: 60.0, processedProfitPerDay: 105.9 },
          "5": { growthDays: 10.0, regrowDays: 3.3, harvests: 3, directRevenue: 1080, processedRevenue: 1845, directProfitPerDay: 60.0, processedProfitPerDay: 105.9 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 7.0, regrowDays: 2.3, harvests: 3, directRevenue: 1080, processedRevenue: 1845, directProfitPerDay: 85.7, processedProfitPerDay: 151.3 },
          "2": { growthDays: 7.0, regrowDays: 2.3, harvests: 3, directRevenue: 1080, processedRevenue: 1845, directProfitPerDay: 85.7, processedProfitPerDay: 151.3 },
          "5": { growthDays: 7.0, regrowDays: 2.3, harvests: 3, directRevenue: 1080, processedRevenue: 1845, directProfitPerDay: 85.7, processedProfitPerDay: 151.3 },
        },
      },
    ],
  },
  {
    id: "seed_mint",
    name: "Mint",
    category: "Ordinary",
    seedCost: 65,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 3.0, harvests: 8, directRevenue: 640, processedRevenue: 1600, directProfitPerDay: 21.3, processedProfitPerDay: 56.9 },
          "2": { growthDays: 6.0, regrowDays: 3.0, harvests: 8, directRevenue: 640, processedRevenue: 1600, directProfitPerDay: 21.3, processedProfitPerDay: 56.9 },
          "5": { growthDays: 6.0, regrowDays: 3.0, harvests: 8, directRevenue: 640, processedRevenue: 1600, directProfitPerDay: 21.3, processedProfitPerDay: 56.9 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 3.0, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 30.8, processedProfitPerDay: 80.6 },
          "2": { growthDays: 6.0, regrowDays: 3.0, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 30.8, processedProfitPerDay: 80.6 },
          "5": { growthDays: 6.0, regrowDays: 3.0, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 30.8, processedProfitPerDay: 80.6 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 4.6, regrowDays: 2.3, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 40.0, processedProfitPerDay: 104.7 },
          "2": { growthDays: 4.6, regrowDays: 2.3, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 40.0, processedProfitPerDay: 104.7 },
          "5": { growthDays: 4.6, regrowDays: 2.3, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 40.0, processedProfitPerDay: 104.7 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 4.6, regrowDays: 1.8, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 47.9, processedProfitPerDay: 125.4 },
          "2": { growthDays: 4.6, regrowDays: 1.8, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 47.9, processedProfitPerDay: 125.4 },
          "5": { growthDays: 4.6, regrowDays: 1.8, harvests: 8, directRevenue: 896, processedRevenue: 2240, directProfitPerDay: 47.9, processedProfitPerDay: 125.4 },
        },
      },
    ],
  },
  {
    id: "seed_strawberry",
    name: "Strawberry",
    category: "Ordinary",
    seedCost: 150,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 8.0, regrowDays: 5.0, harvests: 5, directRevenue: 1275, processedRevenue: 2700, directProfitPerDay: 40.2, processedProfitPerDay: 91.1 },
          "2": { growthDays: 8.0, regrowDays: 5.0, harvests: 5, directRevenue: 1275, processedRevenue: 2700, directProfitPerDay: 40.2, processedProfitPerDay: 91.1 },
          "5": { growthDays: 8.0, regrowDays: 5.0, harvests: 5, directRevenue: 1275, processedRevenue: 2700, directProfitPerDay: 40.2, processedProfitPerDay: 91.1 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 8.0, regrowDays: 5.0, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 58.4, processedProfitPerDay: 129.6 },
          "2": { growthDays: 8.0, regrowDays: 5.0, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 58.4, processedProfitPerDay: 129.6 },
          "5": { growthDays: 8.0, regrowDays: 5.0, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 58.4, processedProfitPerDay: 129.6 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 6.2, regrowDays: 3.8, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 75.9, processedProfitPerDay: 168.5 },
          "2": { growthDays: 6.2, regrowDays: 3.8, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 75.9, processedProfitPerDay: 168.5 },
          "5": { growthDays: 6.2, regrowDays: 3.8, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 75.9, processedProfitPerDay: 168.5 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 6.2, regrowDays: 3.0, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 89.5, processedProfitPerDay: 198.6 },
          "2": { growthDays: 6.2, regrowDays: 3.0, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 89.5, processedProfitPerDay: 198.6 },
          "5": { growthDays: 6.2, regrowDays: 3.0, harvests: 5, directRevenue: 1785, processedRevenue: 3780, directProfitPerDay: 89.5, processedProfitPerDay: 198.6 },
        },
      },
    ],
  },
  {
    id: "seed_alfalfa",
    name: "Alfalfa",
    category: "Ordinary",
    seedCost: 50,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 4.0, regrowDays: 2.5, harvests: 5, directRevenue: 150, processedRevenue: 325, directProfitPerDay: 7.1, processedProfitPerDay: 19.6 },
          "2": { growthDays: 4.0, regrowDays: 2.5, harvests: 5, directRevenue: 150, processedRevenue: 325, directProfitPerDay: 7.1, processedProfitPerDay: 19.6 },
          "5": { growthDays: 4.0, regrowDays: 2.5, harvests: 5, directRevenue: 150, processedRevenue: 325, directProfitPerDay: 7.1, processedProfitPerDay: 19.6 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 4.0, regrowDays: 2.5, harvests: 5, directRevenue: 225, processedRevenue: 488, directProfitPerDay: 12.5, processedProfitPerDay: 31.2 },
          "2": { growthDays: 4.0, regrowDays: 2.5, harvests: 5, directRevenue: 225, processedRevenue: 488, directProfitPerDay: 12.5, processedProfitPerDay: 31.2 },
          "5": { growthDays: 4.0, regrowDays: 2.5, harvests: 5, directRevenue: 225, processedRevenue: 488, directProfitPerDay: 12.5, processedProfitPerDay: 31.2 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 3.1, regrowDays: 1.9, harvests: 5, directRevenue: 225, processedRevenue: 488, directProfitPerDay: 16.2, processedProfitPerDay: 40.6 },
          "2": { growthDays: 3.1, regrowDays: 1.9, harvests: 5, directRevenue: 225, processedRevenue: 488, directProfitPerDay: 16.2, processedProfitPerDay: 40.6 },
          "5": { growthDays: 3.1, regrowDays: 1.9, harvests: 5, directRevenue: 225, processedRevenue: 488, directProfitPerDay: 16.2, processedProfitPerDay: 40.6 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 3.1, regrowDays: 1.9, harvests: 5, directRevenue: 285, processedRevenue: 618, directProfitPerDay: 21.8, processedProfitPerDay: 52.7 },
          "2": { growthDays: 3.1, regrowDays: 1.9, harvests: 5, directRevenue: 285, processedRevenue: 618, directProfitPerDay: 21.8, processedProfitPerDay: 52.7 },
          "5": { growthDays: 3.1, regrowDays: 1.9, harvests: 5, directRevenue: 285, processedRevenue: 618, directProfitPerDay: 21.8, processedProfitPerDay: 52.7 },
        },
      },
    ],
  },
  {
    id: "seed_succulent",
    name: "Succulent",
    category: "Ordinary",
    seedCost: 25,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "3": { growthDays: 2.1, regrowDays: 0.0, harvests: 1, directRevenue: 60, processedRevenue: 120, directProfitPerDay: 16.7, processedProfitPerDay: 45.2 },
          "4": { growthDays: 2.1, regrowDays: 0.0, harvests: 1, directRevenue: 60, processedRevenue: 120, directProfitPerDay: 16.7, processedProfitPerDay: 45.2 },
          "5": { growthDays: 2.1, regrowDays: 0.0, harvests: 1, directRevenue: 60, processedRevenue: 120, directProfitPerDay: 16.7, processedProfitPerDay: 45.2 },
        },
      },
      {
        level: 1,
        seasons: {
          "3": { growthDays: 2.1, regrowDays: 0.0, harvests: 1, directRevenue: 90, processedRevenue: 180, directProfitPerDay: 30.9, processedProfitPerDay: 73.8 },
          "4": { growthDays: 2.1, regrowDays: 0.0, harvests: 1, directRevenue: 90, processedRevenue: 180, directProfitPerDay: 30.9, processedProfitPerDay: 73.8 },
          "5": { growthDays: 2.1, regrowDays: 0.0, harvests: 1, directRevenue: 90, processedRevenue: 180, directProfitPerDay: 30.9, processedProfitPerDay: 73.8 },
        },
      },
      {
        level: 2,
        seasons: {
          "3": { growthDays: 3.0, regrowDays: 1.0, harvests: 3, directRevenue: 270, processedRevenue: 540, directProfitPerDay: 49.0, processedProfitPerDay: 102.9 },
          "4": { growthDays: 3.0, regrowDays: 1.0, harvests: 3, directRevenue: 270, processedRevenue: 540, directProfitPerDay: 49.0, processedProfitPerDay: 102.9 },
          "5": { growthDays: 3.0, regrowDays: 1.0, harvests: 3, directRevenue: 270, processedRevenue: 540, directProfitPerDay: 49.0, processedProfitPerDay: 102.9 },
        },
      },
      {
        level: 3,
        seasons: {
          "3": { growthDays: 2.1, regrowDays: 0.7, harvests: 3, directRevenue: 270, processedRevenue: 540, directProfitPerDay: 69.9, processedProfitPerDay: 147.0 },
          "4": { growthDays: 2.1, regrowDays: 0.7, harvests: 3, directRevenue: 270, processedRevenue: 540, directProfitPerDay: 69.9, processedProfitPerDay: 147.0 },
          "5": { growthDays: 2.1, regrowDays: 0.7, harvests: 3, directRevenue: 270, processedRevenue: 540, directProfitPerDay: 69.9, processedProfitPerDay: 147.0 },
        },
      },
    ],
  },
  {
    id: "seed_wheat",
    name: "Wheat",
    category: "Ordinary",
    seedCost: 75,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "3": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 165, processedRevenue: 270, directProfitPerDay: 22.5, processedProfitPerDay: 48.8 },
          "4": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 165, processedRevenue: 270, directProfitPerDay: 22.5, processedProfitPerDay: 48.8 },
          "5": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 165, processedRevenue: 270, directProfitPerDay: 22.5, processedProfitPerDay: 48.8 },
        },
      },
      {
        level: 1,
        seasons: {
          "3": { growthDays: 5.7, regrowDays: 1.4, harvests: 3, directRevenue: 495, processedRevenue: 810, directProfitPerDay: 49.0, processedProfitPerDay: 85.8 },
          "4": { growthDays: 5.7, regrowDays: 1.4, harvests: 3, directRevenue: 495, processedRevenue: 810, directProfitPerDay: 49.0, processedProfitPerDay: 85.8 },
          "5": { growthDays: 5.7, regrowDays: 1.4, harvests: 3, directRevenue: 495, processedRevenue: 810, directProfitPerDay: 49.0, processedProfitPerDay: 85.8 },
        },
      },
      {
        level: 2,
        seasons: {
          "3": { growthDays: 5.7, regrowDays: 1.4, harvests: 3, directRevenue: 693, processedRevenue: 1134, directProfitPerDay: 72.1, processedProfitPerDay: 123.5 },
          "4": { growthDays: 5.7, regrowDays: 1.4, harvests: 3, directRevenue: 693, processedRevenue: 1134, directProfitPerDay: 72.1, processedProfitPerDay: 123.5 },
          "5": { growthDays: 5.7, regrowDays: 1.4, harvests: 3, directRevenue: 693, processedRevenue: 1134, directProfitPerDay: 72.1, processedProfitPerDay: 123.5 },
        },
      },
      {
        level: 3,
        seasons: {
          "3": { growthDays: 4.0, regrowDays: 1.0, harvests: 3, directRevenue: 693, processedRevenue: 1134, directProfitPerDay: 103.0, processedProfitPerDay: 176.5 },
          "4": { growthDays: 4.0, regrowDays: 1.0, harvests: 3, directRevenue: 693, processedRevenue: 1134, directProfitPerDay: 103.0, processedProfitPerDay: 176.5 },
          "5": { growthDays: 4.0, regrowDays: 1.0, harvests: 3, directRevenue: 693, processedRevenue: 1134, directProfitPerDay: 103.0, processedProfitPerDay: 176.5 },
        },
      },
    ],
  },
  {
    id: "seed_potato",
    name: "Potato",
    category: "Ordinary",
    seedCost: 30,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "3": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 90, processedRevenue: 360, directProfitPerDay: 15.0, processedProfitPerDay: 82.5 },
          "4": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 90, processedRevenue: 360, directProfitPerDay: 15.0, processedProfitPerDay: 82.5 },
          "5": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 90, processedRevenue: 360, directProfitPerDay: 15.0, processedProfitPerDay: 82.5 },
        },
      },
      {
        level: 1,
        seasons: {
          "3": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 126, processedRevenue: 504, directProfitPerDay: 24.0, processedProfitPerDay: 118.5 },
          "4": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 126, processedRevenue: 504, directProfitPerDay: 24.0, processedProfitPerDay: 118.5 },
          "5": { growthDays: 4.0, regrowDays: 0.0, harvests: 1, directRevenue: 126, processedRevenue: 504, directProfitPerDay: 24.0, processedProfitPerDay: 118.5 },
        },
      },
      {
        level: 2,
        seasons: {
          "3": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 270, processedRevenue: 1080, directProfitPerDay: 36.0, processedProfitPerDay: 157.5 },
          "4": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 270, processedRevenue: 1080, directProfitPerDay: 36.0, processedProfitPerDay: 157.5 },
          "5": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 270, processedRevenue: 1080, directProfitPerDay: 36.0, processedProfitPerDay: 157.5 },
        },
      },
      {
        level: 3,
        seasons: {
          "3": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 378, processedRevenue: 1512, directProfitPerDay: 52.2, processedProfitPerDay: 222.3 },
          "4": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 378, processedRevenue: 1512, directProfitPerDay: 52.2, processedProfitPerDay: 222.3 },
          "5": { growthDays: 4.0, regrowDays: 1.3, harvests: 3, directRevenue: 378, processedRevenue: 1512, directProfitPerDay: 52.2, processedProfitPerDay: 222.3 },
        },
      },
    ],
  },
  {
    id: "seed_corn",
    name: "Corn",
    category: "Ordinary",
    seedCost: 55,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "3": { growthDays: 8.0, regrowDays: 0.0, harvests: 1, directRevenue: 220, processedRevenue: 340, directProfitPerDay: 20.6, processedProfitPerDay: 35.6 },
          "4": { growthDays: 8.0, regrowDays: 0.0, harvests: 1, directRevenue: 220, processedRevenue: 340, directProfitPerDay: 20.6, processedProfitPerDay: 35.6 },
          "5": { growthDays: 8.0, regrowDays: 0.0, harvests: 1, directRevenue: 220, processedRevenue: 340, directProfitPerDay: 20.6, processedProfitPerDay: 35.6 },
        },
      },
      {
        level: 1,
        seasons: {
          "3": { growthDays: 11.4, regrowDays: 2.3, harvests: 3, directRevenue: 660, processedRevenue: 1020, directProfitPerDay: 37.8, processedProfitPerDay: 60.3 },
          "4": { growthDays: 11.4, regrowDays: 2.3, harvests: 3, directRevenue: 660, processedRevenue: 1020, directProfitPerDay: 37.8, processedProfitPerDay: 60.3 },
          "5": { growthDays: 11.4, regrowDays: 2.3, harvests: 3, directRevenue: 660, processedRevenue: 1020, directProfitPerDay: 37.8, processedProfitPerDay: 60.3 },
        },
      },
      {
        level: 2,
        seasons: {
          "3": { growthDays: 8.0, regrowDays: 1.6, harvests: 3, directRevenue: 660, processedRevenue: 1020, directProfitPerDay: 54.0, processedProfitPerDay: 86.2 },
          "4": { growthDays: 8.0, regrowDays: 1.6, harvests: 3, directRevenue: 660, processedRevenue: 1020, directProfitPerDay: 54.0, processedProfitPerDay: 86.2 },
          "5": { growthDays: 8.0, regrowDays: 1.6, harvests: 3, directRevenue: 660, processedRevenue: 1020, directProfitPerDay: 54.0, processedProfitPerDay: 86.2 },
        },
      },
      {
        level: 3,
        seasons: {
          "3": { growthDays: 8.0, regrowDays: 1.6, harvests: 3, directRevenue: 924, processedRevenue: 1428, directProfitPerDay: 77.6, processedProfitPerDay: 122.6 },
          "4": { growthDays: 8.0, regrowDays: 1.6, harvests: 3, directRevenue: 924, processedRevenue: 1428, directProfitPerDay: 77.6, processedProfitPerDay: 122.6 },
          "5": { growthDays: 8.0, regrowDays: 1.6, harvests: 3, directRevenue: 924, processedRevenue: 1428, directProfitPerDay: 77.6, processedProfitPerDay: 122.6 },
        },
      },
    ],
  },
  {
    id: "seed_watermelon",
    name: "Watermelon",
    category: "Ordinary",
    seedCost: 115,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "3": { growthDays: 10.0, regrowDays: 0.0, harvests: 1, directRevenue: 420, processedRevenue: 680, directProfitPerDay: 30.5, processedProfitPerDay: 56.5 },
          "4": { growthDays: 10.0, regrowDays: 0.0, harvests: 1, directRevenue: 420, processedRevenue: 680, directProfitPerDay: 30.5, processedProfitPerDay: 56.5 },
          "5": { growthDays: 10.0, regrowDays: 0.0, harvests: 1, directRevenue: 420, processedRevenue: 680, directProfitPerDay: 30.5, processedProfitPerDay: 56.5 },
        },
      },
      {
        level: 1,
        seasons: {
          "3": { growthDays: 14.3, regrowDays: 2.9, harvests: 3, directRevenue: 1260, processedRevenue: 2040, directProfitPerDay: 57.2, processedProfitPerDay: 96.2 },
          "4": { growthDays: 14.3, regrowDays: 2.9, harvests: 3, directRevenue: 1260, processedRevenue: 2040, directProfitPerDay: 57.2, processedProfitPerDay: 96.2 },
          "5": { growthDays: 14.3, regrowDays: 2.9, harvests: 3, directRevenue: 1260, processedRevenue: 2040, directProfitPerDay: 57.2, processedProfitPerDay: 96.2 },
        },
      },
      {
        level: 2,
        seasons: {
          "3": { growthDays: 14.3, regrowDays: 2.9, harvests: 3, directRevenue: 1890, processedRevenue: 3060, directProfitPerDay: 88.8, processedProfitPerDay: 147.2 },
          "4": { growthDays: 14.3, regrowDays: 2.9, harvests: 3, directRevenue: 1890, processedRevenue: 3060, directProfitPerDay: 88.8, processedProfitPerDay: 147.2 },
          "5": { growthDays: 14.3, regrowDays: 2.9, harvests: 3, directRevenue: 1890, processedRevenue: 3060, directProfitPerDay: 88.8, processedProfitPerDay: 147.2 },
        },
      },
      {
        level: 3,
        seasons: {
          "3": { growthDays: 10.0, regrowDays: 2.0, harvests: 3, directRevenue: 1890, processedRevenue: 3060, directProfitPerDay: 126.8, processedProfitPerDay: 210.4 },
          "4": { growthDays: 10.0, regrowDays: 2.0, harvests: 3, directRevenue: 1890, processedRevenue: 3060, directProfitPerDay: 126.8, processedProfitPerDay: 210.4 },
          "5": { growthDays: 10.0, regrowDays: 2.0, harvests: 3, directRevenue: 1890, processedRevenue: 3060, directProfitPerDay: 126.8, processedProfitPerDay: 210.4 },
        },
      },
    ],
  },
  {
    id: "seed_tomato",
    name: "Tomato",
    category: "Ordinary",
    seedCost: 120,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "3": { growthDays: 7.0, regrowDays: 4.0, harvests: 4, directRevenue: 780, processedRevenue: 1920, directProfitPerDay: 34.7, processedProfitPerDay: 94.7 },
          "4": { growthDays: 7.0, regrowDays: 4.0, harvests: 4, directRevenue: 780, processedRevenue: 1920, directProfitPerDay: 34.7, processedProfitPerDay: 94.7 },
          "5": { growthDays: 7.0, regrowDays: 4.0, harvests: 4, directRevenue: 780, processedRevenue: 1920, directProfitPerDay: 34.7, processedProfitPerDay: 94.7 },
        },
      },
      {
        level: 1,
        seasons: {
          "3": { growthDays: 7.0, regrowDays: 4.0, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 51.2, processedProfitPerDay: 135.2 },
          "4": { growthDays: 7.0, regrowDays: 4.0, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 51.2, processedProfitPerDay: 135.2 },
          "5": { growthDays: 7.0, regrowDays: 4.0, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 51.2, processedProfitPerDay: 135.2 },
        },
      },
      {
        level: 2,
        seasons: {
          "3": { growthDays: 5.4, regrowDays: 3.1, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 66.5, processedProfitPerDay: 175.7 },
          "4": { growthDays: 5.4, regrowDays: 3.1, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 66.5, processedProfitPerDay: 175.7 },
          "5": { growthDays: 5.4, regrowDays: 3.1, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 66.5, processedProfitPerDay: 175.7 },
        },
      },
      {
        level: 3,
        seasons: {
          "3": { growthDays: 5.4, regrowDays: 2.4, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 76.8, processedProfitPerDay: 202.9 },
          "4": { growthDays: 5.4, regrowDays: 2.4, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 76.8, processedProfitPerDay: 202.9 },
          "5": { growthDays: 5.4, regrowDays: 2.4, harvests: 4, directRevenue: 1092, processedRevenue: 2688, directProfitPerDay: 76.8, processedProfitPerDay: 202.9 },
        },
      },
    ],
  },
  {
    id: "seed_pepper",
    name: "Pepper",
    category: "Ordinary",
    seedCost: 80,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "3": { growthDays: 4.0, regrowDays: 2.0, harvests: 7, directRevenue: 560, processedRevenue: 1400, directProfitPerDay: 30.0, processedProfitPerDay: 82.5 },
          "4": { growthDays: 4.0, regrowDays: 2.0, harvests: 7, directRevenue: 560, processedRevenue: 1400, directProfitPerDay: 30.0, processedProfitPerDay: 82.5 },
          "5": { growthDays: 4.0, regrowDays: 2.0, harvests: 7, directRevenue: 560, processedRevenue: 1400, directProfitPerDay: 30.0, processedProfitPerDay: 82.5 },
        },
      },
      {
        level: 1,
        seasons: {
          "3": { growthDays: 4.0, regrowDays: 2.0, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 44.0, processedProfitPerDay: 117.5 },
          "4": { growthDays: 4.0, regrowDays: 2.0, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 44.0, processedProfitPerDay: 117.5 },
          "5": { growthDays: 4.0, regrowDays: 2.0, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 44.0, processedProfitPerDay: 117.5 },
        },
      },
      {
        level: 2,
        seasons: {
          "3": { growthDays: 3.1, regrowDays: 1.5, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 57.2, processedProfitPerDay: 152.8 },
          "4": { growthDays: 3.1, regrowDays: 1.5, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 57.2, processedProfitPerDay: 152.8 },
          "5": { growthDays: 3.1, regrowDays: 1.5, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 57.2, processedProfitPerDay: 152.8 },
        },
      },
      {
        level: 3,
        seasons: {
          "3": { growthDays: 3.1, regrowDays: 1.2, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 68.0, processedProfitPerDay: 181.6 },
          "4": { growthDays: 3.1, regrowDays: 1.2, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 68.0, processedProfitPerDay: 181.6 },
          "5": { growthDays: 3.1, regrowDays: 1.2, harvests: 7, directRevenue: 784, processedRevenue: 1960, directProfitPerDay: 68.0, processedProfitPerDay: 181.6 },
        },
      },
    ],
  },
  {
    id: "seed_appletree",
    name: "Wax Apple",
    category: "Shrub",
    seedCost: 200,
    footprint: "3×2",
    cells: 6,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 2500, processedRevenue: 6250, directProfitPerDay: 28.4, processedProfitPerDay: 74.7 },
          "2": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 2500, processedRevenue: 6250, directProfitPerDay: 28.4, processedProfitPerDay: 74.7 },
          "3": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 2500, processedRevenue: 6250, directProfitPerDay: 28.4, processedProfitPerDay: 74.7 },
          "5": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 2500, processedRevenue: 6250, directProfitPerDay: 28.4, processedProfitPerDay: 74.7 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 3850, processedRevenue: 9625, directProfitPerDay: 45.1, processedProfitPerDay: 116.4 },
          "2": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 3850, processedRevenue: 9625, directProfitPerDay: 45.1, processedProfitPerDay: 116.4 },
          "3": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 3850, processedRevenue: 9625, directProfitPerDay: 45.1, processedProfitPerDay: 116.4 },
          "5": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 3850, processedRevenue: 9625, directProfitPerDay: 45.1, processedProfitPerDay: 116.4 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 4850, processedRevenue: 12125, directProfitPerDay: 57.4, processedProfitPerDay: 147.2 },
          "2": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 4850, processedRevenue: 12125, directProfitPerDay: 57.4, processedProfitPerDay: 147.2 },
          "3": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 4850, processedRevenue: 12125, directProfitPerDay: 57.4, processedProfitPerDay: 147.2 },
          "5": { growthDays: 9.0, regrowDays: 3.0, harvests: 25, directRevenue: 4850, processedRevenue: 12125, directProfitPerDay: 57.4, processedProfitPerDay: 147.2 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 9.0, regrowDays: 2.2, harvests: 25, directRevenue: 4450, processedRevenue: 11125, directProfitPerDay: 68.2, processedProfitPerDay: 175.3 },
          "2": { growthDays: 9.0, regrowDays: 2.2, harvests: 25, directRevenue: 4450, processedRevenue: 11125, directProfitPerDay: 68.2, processedProfitPerDay: 175.3 },
          "3": { growthDays: 9.0, regrowDays: 2.2, harvests: 25, directRevenue: 4450, processedRevenue: 11125, directProfitPerDay: 68.2, processedProfitPerDay: 175.3 },
          "5": { growthDays: 9.0, regrowDays: 2.2, harvests: 25, directRevenue: 4450, processedRevenue: 11125, directProfitPerDay: 68.2, processedProfitPerDay: 175.3 },
        },
      },
    ],
  },
  {
    id: "seed_coffee",
    name: "Coffee",
    category: "Shrub",
    seedCost: 450,
    footprint: "3×2",
    cells: 6,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 4750, processedRevenue: 9000, directProfitPerDay: 51.2, processedProfitPerDay: 101.8 },
          "2": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 4750, processedRevenue: 9000, directProfitPerDay: 51.2, processedProfitPerDay: 101.8 },
          "3": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 4750, processedRevenue: 9000, directProfitPerDay: 51.2, processedProfitPerDay: 101.8 },
          "5": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 4750, processedRevenue: 9000, directProfitPerDay: 51.2, processedProfitPerDay: 101.8 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 7600, processedRevenue: 14400, directProfitPerDay: 85.1, processedProfitPerDay: 166.1 },
          "2": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 7600, processedRevenue: 14400, directProfitPerDay: 85.1, processedProfitPerDay: 166.1 },
          "3": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 7600, processedRevenue: 14400, directProfitPerDay: 85.1, processedProfitPerDay: 166.1 },
          "5": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 7600, processedRevenue: 14400, directProfitPerDay: 85.1, processedProfitPerDay: 166.1 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 9500, processedRevenue: 18000, directProfitPerDay: 107.7, processedProfitPerDay: 208.9 },
          "2": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 9500, processedRevenue: 18000, directProfitPerDay: 107.7, processedProfitPerDay: 208.9 },
          "3": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 9500, processedRevenue: 18000, directProfitPerDay: 107.7, processedProfitPerDay: 208.9 },
          "5": { growthDays: 12.0, regrowDays: 3.0, harvests: 25, directRevenue: 9500, processedRevenue: 18000, directProfitPerDay: 107.7, processedProfitPerDay: 208.9 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 12.0, regrowDays: 2.2, harvests: 25, directRevenue: 8740, processedRevenue: 16560, directProfitPerDay: 126.9, processedProfitPerDay: 246.6 },
          "2": { growthDays: 12.0, regrowDays: 2.2, harvests: 25, directRevenue: 8740, processedRevenue: 16560, directProfitPerDay: 126.9, processedProfitPerDay: 246.6 },
          "3": { growthDays: 12.0, regrowDays: 2.2, harvests: 25, directRevenue: 8740, processedRevenue: 16560, directProfitPerDay: 126.9, processedProfitPerDay: 246.6 },
          "5": { growthDays: 12.0, regrowDays: 2.2, harvests: 25, directRevenue: 8740, processedRevenue: 16560, directProfitPerDay: 126.9, processedProfitPerDay: 246.6 },
        },
      },
    ],
  },
  {
    id: "seed_tea",
    name: "Tea Tree",
    category: "Shrub",
    seedCost: 400,
    footprint: "3×2",
    cells: 6,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 4250, processedRevenue: 7750, directProfitPerDay: 47.0, processedProfitPerDay: 89.6 },
          "2": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 4250, processedRevenue: 7750, directProfitPerDay: 47.0, processedProfitPerDay: 89.6 },
          "3": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 4250, processedRevenue: 7750, directProfitPerDay: 47.0, processedProfitPerDay: 89.6 },
          "5": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 4250, processedRevenue: 7750, directProfitPerDay: 47.0, processedProfitPerDay: 89.6 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 6630, processedRevenue: 12090, directProfitPerDay: 76.0, processedProfitPerDay: 142.6 },
          "2": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 6630, processedRevenue: 12090, directProfitPerDay: 76.0, processedProfitPerDay: 142.6 },
          "3": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 6630, processedRevenue: 12090, directProfitPerDay: 76.0, processedProfitPerDay: 142.6 },
          "5": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 6630, processedRevenue: 12090, directProfitPerDay: 76.0, processedProfitPerDay: 142.6 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 8330, processedRevenue: 15190, directProfitPerDay: 96.7, processedProfitPerDay: 180.4 },
          "2": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 8330, processedRevenue: 15190, directProfitPerDay: 96.7, processedProfitPerDay: 180.4 },
          "3": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 8330, processedRevenue: 15190, directProfitPerDay: 96.7, processedProfitPerDay: 180.4 },
          "5": { growthDays: 10.0, regrowDays: 3.0, harvests: 25, directRevenue: 8330, processedRevenue: 15190, directProfitPerDay: 96.7, processedProfitPerDay: 180.4 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 7.7, regrowDays: 2.3, harvests: 25, directRevenue: 7650, processedRevenue: 13950, directProfitPerDay: 114.9, processedProfitPerDay: 214.8 },
          "2": { growthDays: 7.7, regrowDays: 2.3, harvests: 25, directRevenue: 7650, processedRevenue: 13950, directProfitPerDay: 114.9, processedProfitPerDay: 214.8 },
          "3": { growthDays: 7.7, regrowDays: 2.3, harvests: 25, directRevenue: 7650, processedRevenue: 13950, directProfitPerDay: 114.9, processedProfitPerDay: 214.8 },
          "5": { growthDays: 7.7, regrowDays: 2.3, harvests: 25, directRevenue: 7650, processedRevenue: 13950, directProfitPerDay: 114.9, processedProfitPerDay: 214.8 },
        },
      },
    ],
  },
  {
    id: "seed_agave",
    name: "Agave",
    category: "Shrub",
    seedCost: 400,
    footprint: "3×2",
    cells: 6,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "3": { growthDays: 20.0, regrowDays: 0.0, harvests: 1, directRevenue: 1000, processedRevenue: 2500, directProfitPerDay: 30.0, processedProfitPerDay: 105.0 },
          "4": { growthDays: 20.0, regrowDays: 0.0, harvests: 1, directRevenue: 1000, processedRevenue: 2500, directProfitPerDay: 30.0, processedProfitPerDay: 105.0 },
          "5": { growthDays: 20.0, regrowDays: 0.0, harvests: 1, directRevenue: 1000, processedRevenue: 2500, directProfitPerDay: 30.0, processedProfitPerDay: 105.0 },
        },
      },
      {
        level: 1,
        seasons: {
          "3": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 3000, processedRevenue: 7500, directProfitPerDay: 65.0, processedProfitPerDay: 177.5 },
          "4": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 3000, processedRevenue: 7500, directProfitPerDay: 65.0, processedProfitPerDay: 177.5 },
          "5": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 3000, processedRevenue: 7500, directProfitPerDay: 65.0, processedProfitPerDay: 177.5 },
        },
      },
      {
        level: 2,
        seasons: {
          "3": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 6000, processedRevenue: 15000, directProfitPerDay: 140.0, processedProfitPerDay: 365.0 },
          "4": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 6000, processedRevenue: 15000, directProfitPerDay: 140.0, processedProfitPerDay: 365.0 },
          "5": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 6000, processedRevenue: 15000, directProfitPerDay: 140.0, processedProfitPerDay: 365.0 },
        },
      },
      {
        level: 3,
        seasons: {
          "3": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 7500, processedRevenue: 18750, directProfitPerDay: 177.5, processedProfitPerDay: 458.8 },
          "4": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 7500, processedRevenue: 18750, directProfitPerDay: 177.5, processedProfitPerDay: 458.8 },
          "5": { growthDays: 28.6, regrowDays: 5.7, harvests: 3, directRevenue: 7500, processedRevenue: 18750, directProfitPerDay: 177.5, processedProfitPerDay: 458.8 },
        },
      },
    ],
  },
  {
    id: "seed_grape",
    name: "Grape",
    category: "Vine",
    seedCost: 200,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 10.0, regrowDays: 5.0, harvests: 8, directRevenue: 2000, processedRevenue: 8000, directProfitPerDay: 40.0, processedProfitPerDay: 173.3 },
          "3": { growthDays: 10.0, regrowDays: 5.0, harvests: 8, directRevenue: 2000, processedRevenue: 8000, directProfitPerDay: 40.0, processedProfitPerDay: 173.3 },
          "5": { growthDays: 10.0, regrowDays: 5.0, harvests: 8, directRevenue: 2000, processedRevenue: 8000, directProfitPerDay: 40.0, processedProfitPerDay: 173.3 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 10.0, regrowDays: 5.0, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 57.8, processedProfitPerDay: 244.4 },
          "3": { growthDays: 10.0, regrowDays: 5.0, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 57.8, processedProfitPerDay: 244.4 },
          "5": { growthDays: 10.0, regrowDays: 5.0, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 57.8, processedProfitPerDay: 244.4 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 7.7, regrowDays: 3.8, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 75.1, processedProfitPerDay: 317.8 },
          "3": { growthDays: 7.7, regrowDays: 3.8, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 75.1, processedProfitPerDay: 317.8 },
          "5": { growthDays: 7.7, regrowDays: 3.8, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 75.1, processedProfitPerDay: 317.8 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 7.7, regrowDays: 3.0, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 90.0, processedProfitPerDay: 380.6 },
          "3": { growthDays: 7.7, regrowDays: 3.0, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 90.0, processedProfitPerDay: 380.6 },
          "5": { growthDays: 7.7, regrowDays: 3.0, harvests: 8, directRevenue: 2800, processedRevenue: 11200, directProfitPerDay: 90.0, processedProfitPerDay: 380.6 },
        },
      },
    ],
  },
  {
    id: "seed_beer_flower",
    name: "Hops",
    category: "Vine",
    seedCost: 150,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 1500, processedRevenue: 6000, directProfitPerDay: 30.0, processedProfitPerDay: 130.0 },
          "3": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 1500, processedRevenue: 6000, directProfitPerDay: 30.0, processedProfitPerDay: 130.0 },
          "5": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 1500, processedRevenue: 6000, directProfitPerDay: 30.0, processedProfitPerDay: 130.0 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 2250, processedRevenue: 9000, directProfitPerDay: 46.7, processedProfitPerDay: 196.7 },
          "3": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 2250, processedRevenue: 9000, directProfitPerDay: 46.7, processedProfitPerDay: 196.7 },
          "5": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 2250, processedRevenue: 9000, directProfitPerDay: 46.7, processedProfitPerDay: 196.7 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 2925, processedRevenue: 11700, directProfitPerDay: 61.7, processedProfitPerDay: 256.7 },
          "3": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 2925, processedRevenue: 11700, directProfitPerDay: 61.7, processedProfitPerDay: 256.7 },
          "5": { growthDays: 7.0, regrowDays: 2.0, harvests: 20, directRevenue: 2925, processedRevenue: 11700, directProfitPerDay: 61.7, processedProfitPerDay: 256.7 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 5.4, regrowDays: 1.5, harvests: 20, directRevenue: 2850, processedRevenue: 11400, directProfitPerDay: 78.0, processedProfitPerDay: 325.0 },
          "3": { growthDays: 5.4, regrowDays: 1.5, harvests: 20, directRevenue: 2850, processedRevenue: 11400, directProfitPerDay: 78.0, processedProfitPerDay: 325.0 },
          "5": { growthDays: 5.4, regrowDays: 1.5, harvests: 20, directRevenue: 2850, processedRevenue: 11400, directProfitPerDay: 78.0, processedProfitPerDay: 325.0 },
        },
      },
    ],
  },
  {
    id: "seed_cucumber",
    name: "Cucumber",
    category: "Vine",
    seedCost: 160,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 8.0, regrowDays: 4.0, harvests: 10, directRevenue: 1750, processedRevenue: 3250, directProfitPerDay: 36.1, processedProfitPerDay: 70.2 },
          "3": { growthDays: 8.0, regrowDays: 4.0, harvests: 10, directRevenue: 1750, processedRevenue: 3250, directProfitPerDay: 36.1, processedProfitPerDay: 70.2 },
          "5": { growthDays: 8.0, regrowDays: 4.0, harvests: 10, directRevenue: 1750, processedRevenue: 3250, directProfitPerDay: 36.1, processedProfitPerDay: 70.2 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 8.0, regrowDays: 4.0, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 52.0, processedProfitPerDay: 99.8 },
          "3": { growthDays: 8.0, regrowDays: 4.0, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 52.0, processedProfitPerDay: 99.8 },
          "5": { growthDays: 8.0, regrowDays: 4.0, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 52.0, processedProfitPerDay: 99.8 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 6.2, regrowDays: 3.1, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 67.7, processedProfitPerDay: 129.7 },
          "3": { growthDays: 6.2, regrowDays: 3.1, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 67.7, processedProfitPerDay: 129.7 },
          "5": { growthDays: 6.2, regrowDays: 3.1, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 67.7, processedProfitPerDay: 129.7 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 6.2, regrowDays: 2.4, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 81.9, processedProfitPerDay: 156.9 },
          "3": { growthDays: 6.2, regrowDays: 2.4, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 81.9, processedProfitPerDay: 156.9 },
          "5": { growthDays: 6.2, regrowDays: 2.4, harvests: 10, directRevenue: 2450, processedRevenue: 4550, directProfitPerDay: 81.9, processedProfitPerDay: 156.9 },
        },
      },
    ],
  },
  {
    id: "seed_crawlrus",
    name: "Crawlrus",
    category: "Vine",
    seedCost: 180,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 3.0, harvests: 12, directRevenue: 1680, processedRevenue: 3720, directProfitPerDay: 38.5, processedProfitPerDay: 90.8 },
          "3": { growthDays: 6.0, regrowDays: 3.0, harvests: 12, directRevenue: 1680, processedRevenue: 3720, directProfitPerDay: 38.5, processedProfitPerDay: 90.8 },
          "5": { growthDays: 6.0, regrowDays: 3.0, harvests: 12, directRevenue: 1680, processedRevenue: 3720, directProfitPerDay: 38.5, processedProfitPerDay: 90.8 },
        },
      },
      {
        level: 1,
        seasons: {
          "1": { growthDays: 6.0, regrowDays: 3.0, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 55.7, processedProfitPerDay: 128.9 },
          "3": { growthDays: 6.0, regrowDays: 3.0, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 55.7, processedProfitPerDay: 128.9 },
          "5": { growthDays: 6.0, regrowDays: 3.0, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 55.7, processedProfitPerDay: 128.9 },
        },
      },
      {
        level: 2,
        seasons: {
          "1": { growthDays: 4.6, regrowDays: 2.3, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 72.4, processedProfitPerDay: 167.6 },
          "3": { growthDays: 4.6, regrowDays: 2.3, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 72.4, processedProfitPerDay: 167.6 },
          "5": { growthDays: 4.6, regrowDays: 2.3, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 72.4, processedProfitPerDay: 167.6 },
        },
      },
      {
        level: 3,
        seasons: {
          "1": { growthDays: 4.6, regrowDays: 1.8, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 88.2, processedProfitPerDay: 204.3 },
          "3": { growthDays: 4.6, regrowDays: 1.8, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 88.2, processedProfitPerDay: 204.3 },
          "5": { growthDays: 4.6, regrowDays: 1.8, harvests: 12, directRevenue: 2352, processedRevenue: 5208, directProfitPerDay: 88.2, processedProfitPerDay: 204.3 },
        },
      },
    ],
  },
  {
    id: "seed_crimson_ascomyceter",
    name: "Crimson Ascomycete",
    category: "Fungal",
    seedCost: 10,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "2": { growthDays: 1.0, regrowDays: 0.0, harvests: 1, directRevenue: 30, processedRevenue: 180, directProfitPerDay: 20.0, processedProfitPerDay: 170.0 },
          "5": { growthDays: 1.0, regrowDays: 0.0, harvests: 1, directRevenue: 30, processedRevenue: 180, directProfitPerDay: 20.0, processedProfitPerDay: 170.0 },
        },
      },
      {
        level: 1,
        seasons: {
          "2": { growthDays: 1.0, regrowDays: 0.0, harvests: 1, directRevenue: 42, processedRevenue: 252, directProfitPerDay: 32.0, processedProfitPerDay: 242.0 },
          "5": { growthDays: 1.0, regrowDays: 0.0, harvests: 1, directRevenue: 42, processedRevenue: 252, directProfitPerDay: 32.0, processedProfitPerDay: 242.0 },
        },
      },
      {
        level: 2,
        seasons: {
          "2": { growthDays: 1.0, regrowDays: 0.3, harvests: 3, directRevenue: 90, processedRevenue: 540, directProfitPerDay: 48.0, processedProfitPerDay: 318.0 },
          "5": { growthDays: 1.0, regrowDays: 0.3, harvests: 3, directRevenue: 90, processedRevenue: 540, directProfitPerDay: 48.0, processedProfitPerDay: 318.0 },
        },
      },
      {
        level: 3,
        seasons: {
          "2": { growthDays: 1.0, regrowDays: 0.3, harvests: 3, directRevenue: 126, processedRevenue: 756, directProfitPerDay: 69.6, processedProfitPerDay: 447.6 },
          "5": { growthDays: 1.0, regrowDays: 0.3, harvests: 3, directRevenue: 126, processedRevenue: 756, directProfitPerDay: 69.6, processedProfitPerDay: 447.6 },
        },
      },
    ],
  },
  {
    id: "seed_chanterelle",
    name: "Chanterelle",
    category: "Fungal",
    seedCost: 20,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "2": { growthDays: 1.0, regrowDays: 0.0, harvests: 1, directRevenue: 50, processedRevenue: 230, directProfitPerDay: 30.0, processedProfitPerDay: 210.0 },
          "5": { growthDays: 1.0, regrowDays: 0.0, harvests: 1, directRevenue: 50, processedRevenue: 230, directProfitPerDay: 30.0, processedProfitPerDay: 210.0 },
        },
      },
      {
        level: 1,
        seasons: {
          "2": { growthDays: 1.0, regrowDays: 0.0, harvests: 1, directRevenue: 70, processedRevenue: 322, directProfitPerDay: 50.0, processedProfitPerDay: 302.0 },
          "5": { growthDays: 1.0, regrowDays: 0.0, harvests: 1, directRevenue: 70, processedRevenue: 322, directProfitPerDay: 50.0, processedProfitPerDay: 302.0 },
        },
      },
      {
        level: 2,
        seasons: {
          "2": { growthDays: 1.0, regrowDays: 0.3, harvests: 3, directRevenue: 150, processedRevenue: 690, directProfitPerDay: 78.0, processedProfitPerDay: 402.0 },
          "5": { growthDays: 1.0, regrowDays: 0.3, harvests: 3, directRevenue: 150, processedRevenue: 690, directProfitPerDay: 78.0, processedProfitPerDay: 402.0 },
        },
      },
      {
        level: 3,
        seasons: {
          "2": { growthDays: 1.0, regrowDays: 0.3, harvests: 3, directRevenue: 210, processedRevenue: 966, directProfitPerDay: 114.0, processedProfitPerDay: 567.6 },
          "5": { growthDays: 1.0, regrowDays: 0.3, harvests: 3, directRevenue: 210, processedRevenue: 966, directProfitPerDay: 114.0, processedProfitPerDay: 567.6 },
        },
      },
    ],
  },
  {
    id: "seed_mushroom",
    name: "Mushroom",
    category: "Fungal",
    seedCost: 50,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: false,
    geneCases: [
      {
        level: 0,
        seasons: {
          "2": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 150, processedRevenue: 330, directProfitPerDay: 50.0, processedProfitPerDay: 140.0 },
          "5": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 150, processedRevenue: 330, directProfitPerDay: 50.0, processedProfitPerDay: 140.0 },
        },
      },
      {
        level: 1,
        seasons: {
          "2": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 210, processedRevenue: 462, directProfitPerDay: 80.0, processedProfitPerDay: 206.0 },
          "5": { growthDays: 2.0, regrowDays: 0.0, harvests: 1, directRevenue: 210, processedRevenue: 462, directProfitPerDay: 80.0, processedProfitPerDay: 206.0 },
        },
      },
      {
        level: 2,
        seasons: {
          "2": { growthDays: 2.0, regrowDays: 0.7, harvests: 3, directRevenue: 450, processedRevenue: 990, directProfitPerDay: 120.0, processedProfitPerDay: 282.0 },
          "5": { growthDays: 2.0, regrowDays: 0.7, harvests: 3, directRevenue: 450, processedRevenue: 990, directProfitPerDay: 120.0, processedProfitPerDay: 282.0 },
        },
      },
      {
        level: 3,
        seasons: {
          "2": { growthDays: 2.0, regrowDays: 0.7, harvests: 3, directRevenue: 630, processedRevenue: 1386, directProfitPerDay: 174.0, processedProfitPerDay: 400.8 },
          "5": { growthDays: 2.0, regrowDays: 0.7, harvests: 3, directRevenue: 630, processedRevenue: 1386, directProfitPerDay: 174.0, processedProfitPerDay: 400.8 },
        },
      },
    ],
  },
  {
    id: "seed_eden_flower",
    name: "Eden Fruit",
    category: "Ordinary",
    seedCost: 500,
    footprint: "2×2",
    cells: 4,
    repeatHarvest: true,
    geneCases: [
      {
        level: 0,
        seasons: {
          "5": { growthDays: 7.0, regrowDays: 3.0, harvests: 3, directRevenue: 2400, processedRevenue: 4800, directProfitPerDay: 146.2, processedProfitPerDay: 330.8 },
        },
      },
      {
        level: 1,
        seasons: {
          "5": { growthDays: 7.0, regrowDays: 3.0, harvests: 3, directRevenue: 3600, processedRevenue: 7200, directProfitPerDay: 238.5, processedProfitPerDay: 515.4 },
        },
      },
      {
        level: 2,
        seasons: {
          "5": { growthDays: 5.4, regrowDays: 2.3, harvests: 3, directRevenue: 3600, processedRevenue: 7200, directProfitPerDay: 310.0, processedProfitPerDay: 670.0 },
        },
      },
      {
        level: 3,
        seasons: {
          "5": { growthDays: 5.4, regrowDays: 2.3, harvests: 3, directRevenue: 4560, processedRevenue: 9120, directProfitPerDay: 406.0, processedProfitPerDay: 862.0 },
        },
      },
    ],
  },
];
