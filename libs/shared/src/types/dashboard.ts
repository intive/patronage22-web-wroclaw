import { CardProps } from "@mui/material";

export interface Presentation {
  id: string;
  isPublic: boolean;
  title: string;
  description?: string;
  status: string;
}
export interface DashboardCardProps extends CardProps {
  isPublic: boolean;
}
