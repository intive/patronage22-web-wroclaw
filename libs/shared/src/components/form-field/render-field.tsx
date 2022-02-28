import { TextField } from "@mui/material";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FieldTypes } from "../../types";

const DEFAULT_ROWS_NUMBER = 4;
interface Props {
  fieldType: FieldTypes;
  fieldName: string;
  value: any;
  onChange: (...event: any[]) => void;
  variant: "standard" | "filled" | "outlined" | undefined;
  error: UseFormStateReturn<FieldValues>["errors"];
  label: string | undefined;
  rows: number | undefined;
}

export const renderField = ({ fieldType, fieldName, value, onChange, variant, error, label, rows }: Props): JSX.Element => {
  const field: Record<FieldTypes, JSX.Element> = {
    [FieldTypes.Text]: (
      <TextField name={fieldName} value={value} onChange={onChange} variant={variant || "outlined"} error={!!error} label={label} />
    ),
    [FieldTypes.Textarea]: (
      <TextField
        name={fieldName}
        value={value}
        onChange={onChange}
        variant={variant || "outlined"}
        multiline
        error={!!error}
        label={label}
        rows={rows || DEFAULT_ROWS_NUMBER}
      />
    )
  };

  return field[fieldType];
};
