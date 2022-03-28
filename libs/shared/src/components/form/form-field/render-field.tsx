import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
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
  options,
  value,
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
        fullWidth
      />
    ),
    [FormFieldType.RadioGroup]: (
      <RadioGroup onChange={onChange} value={value}>
        {options?.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <FormControlLabel value={option} control={<Radio />} label={option} key={index} />
        ))}
      </RadioGroup>
    )
  };

  return field[type];
};
