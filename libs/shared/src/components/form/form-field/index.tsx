import { Edit } from "@mui/icons-material";
import { StandardTextFieldProps, Typography } from "@mui/material";
import { ChangeEvent, MouseEvent, ReactNode } from "react";
import { FieldValues, useController, UseControllerProps, UseFormStateReturn } from "react-hook-form";

import { FormFieldType, SelectItem } from "../../../types";
import { FormTextFieldVariant, renderField } from "./render-field";
import { renderHelperText } from "./render-helper-text";
import * as Styled from "./styled";

export interface FormFieldProps
  extends Pick<UseControllerProps, "name" | "defaultValue" | "control">,
    Partial<Pick<StandardTextFieldProps, "size">> {
  type: FormFieldType;
  variant?: FormTextFieldVariant;
  rows?: number;
  label?: string;
  helperText?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  placeholder?: string;
  inputConfig?: StandardTextFieldProps["InputProps"];
  autoFocus?: boolean;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  selectItems?: SelectItem[];
  appendix?: ReactNode;
  hideEditIcon?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  control,
  variant,
  rows,
  label,
  helperText,
  description,
  onChange,
  onClick,
  placeholder,
  inputConfig,
  autoFocus,
  disabled,
  selectItems,
  size,
  appendix,
  hideEditIcon
}: FormFieldProps) => {
  const {
    field: { onChange: onFormFieldChange, value },
    formState: { errors }
  } = useController({ name, control });

  const fieldErrors: UseFormStateReturn<FieldValues>["errors"] = errors[name];

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFormFieldChange(event);

    if (onChange) {
      onChange(event);
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
          disabled,
          selectItems,
          size,
          value
        })}
        {!hideEditIcon && <Edit id='editIcon' />}
      </Styled.Field>
      {renderHelperText(fieldErrors, helperText)}
      {appendix}
    </>
  );
};
