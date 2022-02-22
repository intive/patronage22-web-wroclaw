/* eslint-disable react/jsx-props-no-spreading */
import { Edit } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";
import { TFunction } from "react-i18next";

import { FieldTypes } from "../../types";
import * as Styled from "./styled";

export interface FormFieldType extends Pick<UseControllerProps, "name" | "defaultValue" | "control"> {
  fieldType: FieldTypes;
  variant?: "standard" | "filled" | "outlined";
  isMultiline: boolean;
  rows?: number;
  label?: TFunction;
  hasEditIcon: boolean;
}

export const FormField: React.FC<FormFieldType> = ({
  fieldType,
  name,
  defaultValue,
  control,
  variant,
  isMultiline,
  rows,
  label,
  hasEditIcon
}: FormFieldType) => {
  const {
    field,
    formState: { errors }
  } = useController({ name, defaultValue, control });

  const formField: Record<FieldTypes, JSX.Element> = {
    [FieldTypes.FormTextField]: (
      <TextField
        name={field.name}
        value={field.value}
        {...(!field.value && { defaultValue })}
        onChange={field.onChange}
        variant={variant || "outlined"}
        multiline={isMultiline}
        error={errors[`${name}`]}
        label={label}
        {...(errors[`${name}`] && { helperText: errors[`${name}`].message })}
        {...(isMultiline && { rows: rows || 4 })}
      />
    )
  };

  return (
    <Styled.Field>
      {formField[fieldType]}
      {hasEditIcon && <Edit />}
    </Styled.Field>
  );
};
