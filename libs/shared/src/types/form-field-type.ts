import { StandardTextFieldProps } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";
import { UseControllerProps } from "react-hook-form";

import { SelectItem } from "./select-types";

export enum FormFieldType {
  Text = "text",
  Textarea = "textarea",
  Select = "select"
}

export type FormTextFieldVariant = "standard" | "filled" | "outlined";

export interface FormFieldProps extends Pick<UseControllerProps, "name" | "defaultValue"> {
  type: FormFieldType;
  variant?: FormTextFieldVariant;
  rows?: number;
  label?: string;
  helperText?: string;
  onChange?: () => void;
  onFieldChange?: () => void;
  description?: string;
  placeholder?: string;
  inputConfig?: StandardTextFieldProps["InputProps"];
  autoFocus?: boolean;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  selectItems?: SelectItem[];
  appendix?: ReactNode;
  hideEditIcon?: boolean;
  values?: Record<string, unknown>[];
}
