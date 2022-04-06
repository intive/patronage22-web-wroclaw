import { CardProps } from "@mui/material";

export enum PresentationStatus {
  Done = "DONE",
  Draft = "DRAFT",
  Shared = "SHARED"
}
export interface Presentation {
  id: string;
  isPublic: boolean;
  title: string;
  description?: string;
  status: PresentationStatus;
}
export interface DashboardCardProps extends CardProps {
  isPublic: boolean;
}
