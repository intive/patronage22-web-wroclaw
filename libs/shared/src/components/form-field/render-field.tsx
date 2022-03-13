import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../types";

const DEFAULT_ROWS_NUMBER = 4;

export type FormTextFieldVariant = "standard" | "filled" | "outlined";

interface RenderFieldProps {
  type: FormFieldType;
  name: string;
  value: unknown;
  handleChange: (event: ChangeEvent) => void;
  variant?: FormTextFieldVariant;
  errors: UseFormStateReturn<FieldValues>["errors"];
  label?: string;
  rows?: number;
  placeholder?: string;
}

export const renderField = ({
  type,
  name,
  value,
  handleChange,
  variant = "outlined",
  errors,
  label,
  rows = DEFAULT_ROWS_NUMBER,
  placeholder
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
        placeholder={placeholder}
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
        placeholder={placeholder}
      />
    )
  };

  return field[type];
};
