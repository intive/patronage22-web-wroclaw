/* eslint-disable react/jsx-props-no-spreading */
import { FieldValues, useController, UseControllerProps, UseFormStateReturn } from "react-hook-form";

import { FieldTypes } from "../../types";
import { renderEditIcon } from "./render-edit-icon";
import { renderField } from "./render-field";
import { renderHelperText } from "./render-helper-text";
import * as Styled from "./styled";

export interface FormFieldType extends Pick<UseControllerProps, "name" | "defaultValue" | "control"> {
  fieldType: FieldTypes;
  variant?: "standard" | "filled" | "outlined";
  isMultiline?: boolean;
  rows?: number;
  label?: string;
  helperText?: string;
  hideEditIcon?: boolean;
}

export const FormField: React.FC<FormFieldType> = ({
  fieldType,
  name,
  defaultValue,
  control,
  variant,
  rows,
  label,
  helperText,
  hideEditIcon
}: FormFieldType) => {
  const {
    field: { name: fieldName, value, onChange },
    formState: { errors }
  } = useController({ name, defaultValue, control });

  const error: UseFormStateReturn<FieldValues>["errors"] = errors[`${name}`];

  return (
    <Styled.Field>
      {renderField({ fieldType, fieldName, value, onChange, variant, error, label, rows })}
      {renderEditIcon(hideEditIcon)}
      {renderHelperText({ helperText, error })}
    </Styled.Field>
  );
};
