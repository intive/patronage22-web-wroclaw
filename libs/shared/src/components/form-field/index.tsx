/* eslint-disable react/jsx-props-no-spreading */
import { Edit } from "@mui/icons-material";
import { ChangeEvent, ChangeEventHandler } from "react";
import { FieldValues, useController, UseControllerProps, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../types";
import { FormTextFieldVariant, renderField } from "./render-field";
import { renderHelperText } from "./render-helper-text";
import * as Styled from "./styled";

export interface FormFieldProps extends Pick<UseControllerProps, "name" | "defaultValue" | "control"> {
  fieldType: FormFieldType;
  variant?: FormTextFieldVariant;
  rows?: number;
  label?: string;
  helperText?: string;
  hideEditIcon?: boolean;
  onChange?: (event: ChangeEvent) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  fieldType,
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
    field: { name: fieldName, value, onChange: controllerOnChange },
    formState: { errors }
  } = useController({ name, defaultValue, control });

  const fieldErrors: UseFormStateReturn<FieldValues>["errors"] = errors[name];

  const handleChange: ChangeEventHandler = event => {
    controllerOnChange(event);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Styled.Field>
      {renderField({ type: fieldType, name: fieldName, value, handleChange, variant, errors: fieldErrors, label, rows })}
      {!hideEditIcon && <Edit />}
      {renderHelperText(fieldErrors, helperText)}
    </Styled.Field>
  );
};
