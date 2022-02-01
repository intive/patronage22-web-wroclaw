import { ReactElement } from "react";

export interface NavbarSection {
  elements: ReactElement[];
  customStyles?: string;
}

export interface NavbarProps {
  color?: "default" | "inherit" | "primary" | "secondary" | "transparent";
  config: {
    start?: NavbarSection;
    center?: NavbarSection;
    end?: NavbarSection;
  };
}
