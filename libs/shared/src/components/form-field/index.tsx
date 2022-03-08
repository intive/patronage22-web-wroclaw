/* eslint-disable react/jsx-props-no-spreading */
import { Edit } from "@mui/icons-material";
import { InputBaseComponentProps } from "@mui/material";
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
  hideEditIcon?: boolean;
  onChange?: () => void;
  placeholder?: string;
  inputProps?: InputBaseComponentProps;
  readOnly?: boolean;
  autoFocus?: boolean;
  handleClick?: (event: MouseEvent) => void;
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
  onChange,
  handleClick,
  placeholder,
  inputProps,
  readOnly,
  autoFocus
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
    <Styled.Field>
      {renderField({
        type,
        name,
        value,
        handleChange,
        handleClick,
        variant,
        errors: fieldErrors,
        label,
        rows,
        placeholder,
        inputProps,
        readOnly,
        autoFocus
      })}
      {!hideEditIcon && <Edit />}
      {renderHelperText(fieldErrors, helperText)}
    </Styled.Field>
  );
};
