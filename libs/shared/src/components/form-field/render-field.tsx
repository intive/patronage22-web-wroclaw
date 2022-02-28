import { TextField } from "@mui/material";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FieldTypes } from "../../types";

const DEFAULT_ROWS_NUMBER = 4;

interface RenderFieldProps {
  type: FieldTypes;
  name: string;
  value: unknown;
  onChange: () => void;
  variant?: "standard" | "filled" | "outlined";
  errors: UseFormStateReturn<FieldValues>["errors"];
  label?: string;
  rows?: number;
}

export const renderField = ({
  type,
  name,
  value,
  onChange,
  variant = "outlined",
  errors,
  label,
  rows = DEFAULT_ROWS_NUMBER
}: RenderFieldProps) => {
  const field: Record<FieldTypes, JSX.Element> = {
    [FieldTypes.Text]: <TextField name={name} value={value} onChange={onChange} variant={variant} error={!!errors} label={label} />,
    [FieldTypes.Textarea]: (
      <TextField
        name={name}
        value={value}
        onChange={onChange}
        variant={variant}
        multiline
        error={!!errors}
        label={label}
        rows={rows}
      />
    )
  };

  return field[type];
};
