import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../../types";
import { FormFieldProps } from "./index";

const DEFAULT_ROWS_NUMBER = 4;

export type FormTextFieldVariant = "standard" | "filled" | "outlined";

interface RenderFieldProps extends Omit<FormFieldProps, "helperText" | "onChange" | "description" | "appendix" | "hideEditIcon"> {
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  errors: UseFormStateReturn<FieldValues>["errors"];
  value?: unknown;
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
  rows = DEFAULT_ROWS_NUMBER,
  selectItems,
  size,
  value
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
    ),
    [FormFieldType.Select]: (
      <TextField select name={name} onChange={onChange} value={value} size={size} label={label}>
        {selectItems &&
          selectItems.map(({ value: itemValue, name: itemName }) => (
            <MenuItem key={itemName} value={itemValue}>
              {itemName}
            </MenuItem>
          ))}
      </TextField>
    )
  };

  return field[type];
};
