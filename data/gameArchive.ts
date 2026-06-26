import {
    getActiveGuideHubs,
    getGameArchiveGroups,
    getGameCollectionCount,
    getFeaturedHubCount,
    getGuideEntryCount,
    type ActiveGuideHub,
    type ArchiveGuideGroup,
  } from "./guideSelectors";
  
  export type { ActiveGuideHub, ArchiveGuideGroup };
  
  export const activeGuideHubs = getActiveGuideHubs();
  export const guideGroups = getGameArchiveGroups();
  
  export const archiveStats = {
    guideEntryCount: getGuideEntryCount(),
    gameCollectionCount: getGameCollectionCount(),
    featuredHubCount: getFeaturedHubCount(),
  };