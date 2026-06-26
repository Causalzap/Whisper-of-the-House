import { getLatestUpdatePages, type LatestUpdateItem } from "./guideSelectors";

export type { LatestUpdateItem };

export const latestUpdates: LatestUpdateItem[] = getLatestUpdatePages();