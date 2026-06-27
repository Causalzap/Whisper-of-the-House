export type ChecklistRisk = "None" | "Low" | "Medium" | "High" | "Very High";

export type ChecklistItem = {
  id: string;
  name: string;
  requirement: string;
  category: string;
  steamRate?: string;
  timing?: string;
  risk?: ChecklistRisk;
  detailHref?: string;
  searchText?: string;
};