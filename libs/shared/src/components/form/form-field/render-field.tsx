import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../../types";
import { FormFieldProps } from "./index";

const DEFAULT_ROWS_NUMBER = 4;

export type FormTextFieldVariant = "standard" | "filled" | "outlined";

interface RenderFieldProps extends Omit<FormFieldProps, "helperText" | "onChange" | "description" | "appendix" | "hideEditIcon"> {
  name: string;
  onChange?: (event: any) => void;
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
      <FormControl fullWidth>
        <InputLabel id={`${label}-label`}>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          size={size}
          variant={variant}
          label={label}
          labelId={`${label}-label`}
          onChange={onChange}
        >
          {selectItems &&
            selectItems.map(({ value: itemValue, name: itemName }) => (
              <MenuItem key={itemName} value={itemValue}>
                {itemName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    )
  };

  return field[type];
};
