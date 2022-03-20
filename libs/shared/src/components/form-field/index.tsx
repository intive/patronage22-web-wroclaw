import { StandardTextFieldProps, Typography } from "@mui/material";
import { ChangeEvent, MouseEvent, ReactNode } from "react";
import { FieldValues, useController, UseControllerProps, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../types";
import { FormTextFieldVariant, renderField } from "./render-field";
import { renderHelperText } from "./render-helper-text";
import * as Styled from "./styled";

export interface FormFieldProps extends Pick<UseControllerProps, "name" | "defaultValue" | "control"> {
  type: FormFieldType;
  edit?: boolean;
  variant?: FormTextFieldVariant;
  rows?: number;
  label?: string;
  helperText?: string;
  description?: string;
  appendix?: ReactNode;
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
  description,
  appendix,
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
    <>
      {description && <Typography>{description}</Typography>}
      <Styled.Field>
        {renderField({
          type,
          name,
          onChange: onFieldChange,
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
      {appendix}
    </>
  );
};
