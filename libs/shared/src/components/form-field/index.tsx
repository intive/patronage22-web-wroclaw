/* eslint-disable react/jsx-props-no-spreading */
import { StandardTextFieldProps } from "@mui/material";
import { ChangeEvent, MouseEvent } from "react";
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
  onChange?: () => void;
  placeholder?: string;
  inputConfig?: StandardTextFieldProps["InputProps"];
  autoFocus?: boolean;
  onClick?: (event: MouseEvent) => void;
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
  onChange,
  onClick,
  placeholder,
  inputConfig,
  autoFocus,
  disabled
}: FormFieldProps) => {
  const {
    field: { onChange: onFormFieldChange },
    formState: { errors }
  } = useController({ name, defaultValue, control });

  const fieldErrors: UseFormStateReturn<FieldValues>["errors"] = errors[name];

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFormFieldChange(event);

    if (onChange) {
      onChange();
    }
  };

  return (
    <Styled.Field>
      {renderField({
        type,
        name,
        onFieldChange,
        onClick,
        variant,
        errors: fieldErrors,
        label,
        rows,
        placeholder,
        inputConfig,
        autoFocus,
        disabled
      })}
      {renderHelperText(fieldErrors, helperText)}
    </Styled.Field>
  );
};
