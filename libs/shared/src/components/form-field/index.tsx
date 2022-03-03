/* eslint-disable react/jsx-props-no-spreading */
import { Edit } from "@mui/icons-material";
import { FieldValues, useController, UseControllerProps, UseFormStateReturn } from "react-hook-form";

import { FormFieldType } from "../../types";
import { FormTextFieldVariant, renderField } from "./render-field";
import { renderHelperText } from "./render-helper-text";
import * as Styled from "./styled";

export interface FormFieldProps extends Pick<UseControllerProps, "name" | "defaultValue" | "control"> {
  fieldType: FormFieldType;
  variant?: FormTextFieldVariant;
  isMultiline?: boolean;
  rows?: number;
  label?: string;
  helperText?: string;
  hideEditIcon?: boolean;
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
  hideEditIcon
}: FormFieldProps) => {
  const {
    field: { name: fieldName, value, onChange },
    formState: { errors }
  } = useController({ name, defaultValue, control });

  const fieldErrors: UseFormStateReturn<FieldValues>["errors"] = errors[name];

  return (
    <Styled.Field>
      {renderField({ type: fieldType, name: fieldName, value, onChange, variant, errors: fieldErrors, label, rows })}
      {hideEditIcon && <Edit />}
      {renderHelperText(fieldErrors, helperText)}
    </Styled.Field>
  );
};
