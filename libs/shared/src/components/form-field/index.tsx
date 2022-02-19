/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from "@mui/material";
import { ControllerProps, FieldValues, FormState } from "react-hook-form";
import { TFunction } from "react-i18next";

import { FieldTypes } from "../../types";

export interface FormField {
  fieldType: FieldTypes;
  variant?: "standard" | "filled" | "outlined";
  isMultiline: boolean;
  rows?: number;
  fieldName: string;
  defaultValue: string | TFunction;
  label?: TFunction;
}

interface RenderTextFieldProps extends Pick<FormField, "variant" | "isMultiline" | "rows" | "label"> {
  errors: FormState<FieldValues>["errors"];
  isFormDisabled: boolean;
}

export const renderTextField = ({
  variant,
  isMultiline,
  rows,
  label,
  errors,
  isFormDisabled
}: RenderTextFieldProps): ControllerProps["render"] => {
  const renderFormTextField: ControllerProps["render"] = ({ field: { name, onChange, value } }) => (
    <TextField
      variant={variant || "outlined"}
      disabled={isFormDisabled}
      multiline={isMultiline}
      onChange={onChange}
      value={value}
      error={errors[`${name}`]}
      label={label}
      {...(errors[`${name}`] && { helperText: errors[`${name}`].message })}
      {...(isMultiline && { rows: rows || 4 })}
    />
  );

  return renderFormTextField;
};
