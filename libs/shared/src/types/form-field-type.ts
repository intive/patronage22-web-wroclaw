import { BaseTextFieldProps, StandardTextFieldProps } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";
import { UseControllerProps } from "react-hook-form";

import { SelectItem } from "./select-types";

export enum FormFieldType {
  Text = "text",
  Textarea = "textarea",
  RadioGroup = "radiogroup",
  Select = "select"
}

export type FormTextFieldVariant = "standard" | "filled" | "outlined";

export interface DynamicsInterface {
  name: string;
  fields: FormFieldProps[];
  addButtonText: string;
  maxAmount: number;
}

export interface FormFieldProps extends Pick<UseControllerProps, "name" | "defaultValue"> {
  type: FormFieldType;
  inputType?: BaseTextFieldProps["type"];
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
  dynamics?: DynamicsInterface;
  values?: Record<string, unknown>[];
}
