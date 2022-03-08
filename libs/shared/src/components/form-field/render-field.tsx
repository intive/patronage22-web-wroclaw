import { InputBase, InputBaseComponentProps, TextField } from "@mui/material";
import { ChangeEvent, MouseEvent } from "react";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../types";

const DEFAULT_ROWS_NUMBER = 4;

export type FormTextFieldVariant = "standard" | "filled" | "outlined";

interface RenderFieldProps {
  type: FormFieldType;
  name: string;
  value: unknown;
  handleChange?: (event: ChangeEvent) => void;
  handleClick?: (event: MouseEvent) => void;
  variant?: FormTextFieldVariant;
  errors: UseFormStateReturn<FieldValues>["errors"];
  label?: string;
  rows?: number;
  placeholder?: string;
  inputProps?: InputBaseComponentProps;
  readOnly?: boolean;
  autoFocus?: boolean;
}

export const renderField = ({
  type,
  name,
  value,
  handleChange,
  handleClick,
  variant = "outlined",
  errors,
  label,
  placeholder,
  inputProps,
  readOnly,
  autoFocus,
  rows = DEFAULT_ROWS_NUMBER
}: RenderFieldProps) => {
  const field: Record<FormFieldType, JSX.Element> = {
    [FormFieldType.Text]: (
      <TextField name={name} value={value} onChange={handleChange} variant={variant} error={!!errors} label={label} />
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
      />
    ),
    [FormFieldType.SearchInput]: (
      <InputBase
        placeholder={placeholder}
        inputProps={inputProps}
        onClick={handleClick}
        readOnly={readOnly}
        autoFocus={autoFocus}
      />
    )
  };

  return field[type];
};
