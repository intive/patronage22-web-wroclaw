import { TextField } from "@mui/material";
import { ChangeEvent, MouseEvent } from "react";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../types";
import { FormFieldProps } from "./index";

const DEFAULT_ROWS_NUMBER = 4;

export type FormTextFieldVariant = "standard" | "filled" | "outlined";

interface RenderFieldProps {
  type: FormFieldType;
  name: string;
  value: unknown;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent) => void;
  variant?: FormTextFieldVariant;
  errors: UseFormStateReturn<FieldValues>["errors"];
  label?: string;
  rows?: number;
  placeholder?: string;
  inputConfig?: FormFieldProps["inputConfig"];
  autoFocus?: boolean;
  disabled?: boolean;
}

export const renderField = ({
  type,
  name,
  value,
  handleChange,
  onClick,
  variant = "outlined",
  errors,
  label,
  placeholder,
  inputConfig,
  autoFocus,
  disabled,
  rows = DEFAULT_ROWS_NUMBER
}: RenderFieldProps) => {
  const field: Record<FormFieldType, JSX.Element> = {
    [FormFieldType.Text]: (
      <TextField
        name={name}
        value={value}
        onChange={handleChange}
        variant={variant}
        error={!!errors}
        label={label}
        onClick={onClick}
        disabled={disabled}
        InputProps={inputConfig}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    ),
    [FormFieldType.Textarea]: (
      <TextField
        name={name}
        value={value}
        onChange={handleChange}
        variant={variant}
        multiline
        error={!!errors}
        label={label}
        rows={rows}
        onClick={onClick}
        disabled={disabled}
        InputProps={inputConfig}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    )
  };

  return field[type];
};
