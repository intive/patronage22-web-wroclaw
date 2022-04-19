import { TextField } from "@mui/material";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

import { FormFieldProps, FormFieldType } from "../../../types";
import { RadioGroupField } from "./radio-group-field";
import { SelectField } from "./select-field";

const DEFAULT_ROWS_NUMBER = 4;

export interface RenderFieldProps
  extends Omit<FormFieldProps, "helperText" | "onChange" | "description" | "appendix" | "hideEditIcon"> {
  name: string;
  onChange: (value: unknown) => void;
  errors: UseFormStateReturn<FieldValues>["errors"];
  value?: unknown;
}

export const renderField = ({
  type,
  inputType,
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
  value,
  values
}: RenderFieldProps) => {
  const field: Record<FormFieldType, JSX.Element> = {
    [FormFieldType.Text]: (
      <TextField
        name={name}
        type={inputType}
        onChange={onChange}
        variant={variant}
        error={!!errors}
        label={label}
        onClick={onClick}
        disabled={disabled}
        InputProps={inputConfig}
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
      />
    ),
    [FormFieldType.Textarea]: (
      <TextField
        name={name}
        type={inputType}
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
        value={value}
        fullWidth
      />
    ),
    [FormFieldType.RadioGroup]: <RadioGroupField name={name} options={values} onChange={onChange} />,
    [FormFieldType.Select]: (
      <SelectField name={name} value={value} onChange={onChange} variant={variant} label={label} options={values} />
    )
  };

  return field[type];
};
