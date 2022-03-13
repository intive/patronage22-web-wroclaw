import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../types";
import { FormFieldProps } from "./index";

const DEFAULT_ROWS_NUMBER = 4;

export type FormTextFieldVariant = "standard" | "filled" | "outlined";

interface RenderFieldProps extends Omit<FormFieldProps, "helperText" | "onChange"> {
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  errors: UseFormStateReturn<FieldValues>["errors"];
<<<<<<< HEAD
  label?: string;
  rows?: number;
  placeholder?: string;
=======
>>>>>>> develop
}

export const renderField = ({
  type,
  name,
  onChange,
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
        onChange={onChange}
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
        onChange={onChange}
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
