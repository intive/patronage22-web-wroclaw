import { TextField } from "@mui/material";
import { ControllerProps, FieldValues, FormState } from "react-hook-form";
import { TFunction } from "react-i18next";

import { FieldTypes } from "../../types";

export interface FormField {
  fieldName: string;
  defaultValue: string | TFunction;
  fieldType: FieldTypes;
  label: string | TFunction;
  helperText: string | TFunction;
}

export const renderTextField = (
  { label, helperText }: FormField,
  errors: FormState<FieldValues>["errors"]
): ControllerProps["render"] => {
  const renderFormTextField: ControllerProps["render"] = ({ field: { onChange, value } }) => (
    <TextField onChange={onChange} value={value} error={errors?.fieldName} label={label} helperText={helperText} />
  );

  return renderFormTextField;
};
