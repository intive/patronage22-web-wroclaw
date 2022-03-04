/* eslint-disable react/jsx-props-no-spreading */
import { Edit } from "@mui/icons-material";
import { ChangeEvent } from "react";
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
  onChange
}: FormFieldProps) => {
  const {
    field: { name: fieldName, value, onChange: OnFieldChange },
    formState: { errors }
  } = useController({ name, defaultValue, control });

  const fieldErrors: UseFormStateReturn<FieldValues>["errors"] = errors[name];

  const handleChange = (event: ChangeEvent) => {
    OnFieldChange(event);

    if (onChange) {
      onChange();
    }
  };

  return (
    <Styled.Field>
      {renderField({ type, name: fieldName, value, handleChange, variant, errors: fieldErrors, label, rows })}
      {!hideEditIcon && <Edit />}
      {renderHelperText(fieldErrors, helperText)}
    </Styled.Field>
  );
};
