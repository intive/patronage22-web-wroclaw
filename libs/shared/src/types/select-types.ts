import { LiHTMLAttributes } from "react";

export interface SelectItem {
  name: string;
  value: LiHTMLAttributes<unknown>["value"];
}
