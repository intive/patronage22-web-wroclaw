import { Edit } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FieldValues, useController, useFormContext, UseFormStateReturn } from "react-hook-form";

import { FormFieldProps } from "../../../types";
import { renderField } from "./render-field";
import { renderHelperText } from "./render-helper-text";
import * as Styled from "./styled";

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
