import { Edit } from "@mui/icons-material";
import { BaseTextFieldProps, StandardTextFieldProps, Typography } from "@mui/material";
import { MouseEvent, ReactNode } from "react";
import { FieldValues, useController, UseControllerProps, useFormContext, UseFormStateReturn } from "react-hook-form";

import { FormFieldType, SelectItem } from "../../../types";
import { FormTextFieldVariant, renderField } from "./render-field";
import { renderHelperText } from "./render-helper-text";
import * as Styled from "./styled";

export interface FormFieldProps extends Pick<UseControllerProps, "name" | "defaultValue"> {
  type: FormFieldType;
  inputType?: BaseTextFieldProps["type"];
  variant?: FormTextFieldVariant;
  rows?: number;
  label?: string;
  helperText?: string;
  onChange?: () => void;
  onFieldChange?: () => void;
  description?: string;
  placeholder?: string;
  inputConfig?: StandardTextFieldProps["InputProps"];
  autoFocus?: boolean;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  selectItems?: SelectItem[];
  appendix?: ReactNode;
  hideEditIcon?: boolean;
  values?: Record<string, unknown>[];
}

export const FormField: React.FC<FormFieldProps> = ({
  type,
  inputType,
  name,
  variant,
  rows,
  label,
  helperText,
  description,
  onChange,
  onFieldChange,
  onClick,
  placeholder,
  inputConfig,
  autoFocus,
  disabled,
  appendix,
  hideEditIcon,
  defaultValue,
  values
}: FormFieldProps) => {
  const { control } = useFormContext();
  const {
    field: fieldController,
    formState: { errors }
  } = useController({ name, control, defaultValue });

  const fieldErrors: UseFormStateReturn<FieldValues>["errors"] = errors[name];

  const handleFieldChange = (value: unknown) => {
    fieldController.onChange(value);

    if (onChange) {
      onChange();
    }

    if (onFieldChange) {
      onFieldChange();
    }
  };

  return (
    <>
      {description && <Typography>{description}</Typography>}
      <Styled.Field>
        {renderField({
          type,
          inputType,
          name,
          onChange: handleFieldChange,
          onClick,
          variant,
          errors: fieldErrors,
          label,
          rows,
          placeholder,
          inputConfig,
          autoFocus,
          disabled,
          values,
          value: fieldController.value
        })}
        {!hideEditIcon && <Edit id='editIcon' />}
      </Styled.Field>
      {renderHelperText(fieldErrors, helperText)}
      {appendix}
    </>
  );
};
