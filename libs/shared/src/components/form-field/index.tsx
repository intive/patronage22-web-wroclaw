/* eslint-disable react/jsx-props-no-spreading */
import { Edit } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";
import { FieldValues, useController, UseControllerProps, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../types";
import { FormTextFieldVariant, renderField } from "./render-field";
import { renderHelperText } from "./render-helper-text";
import * as Styled from "./styled";

export interface FormFieldProps extends Pick<UseControllerProps, "name" | "defaultValue" | "control"> {
  type: FormFieldType;
  variant?: FormTextFieldVariant;
  rows?: number;
  label?: string;
  helperText?: string;
  hideEditIcon?: boolean;
  description?: string;
  appendix?: ReactNode;
  onChange?: () => void;
  disabled?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  defaultValue,
  control,
  variant,
  rows,
  label,
  helperText,
  hideEditIcon,
  description,
  appendix,
  onChange,
  disabled
}: FormFieldProps) => {
  const {
    field: { value, onChange: onFieldChange },
    formState: { errors }
  } = useController({ name, defaultValue, control });

  const fieldErrors: UseFormStateReturn<FieldValues>["errors"] = errors[name];

  const handleChange = (event: ChangeEvent) => {
    onFieldChange(event);

    if (onChange) {
      onChange();
    }
  };

  return (
    <>
      {description && <Typography>{description}</Typography>}
      <Styled.Field>
        {renderField({ type, name, value, handleChange, variant, errors: fieldErrors, label, rows, disabled })}
        {!hideEditIcon && <Edit />}
        {renderHelperText(fieldErrors, helperText)}
      </Styled.Field>
      {appendix}
    </>
  );
};
