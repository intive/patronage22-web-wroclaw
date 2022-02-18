import { TextField } from "@mui/material";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { TFunction } from "react-i18next";

export enum FieldTypes {
  FormTextField = "textfield"
}

export type FormFieldProps = {
  fieldName: string;
  defaultValue: string | TFunction;
  fieldType: FieldTypes;
  label: string | TFunction;
  helperText: string | TFunction;
};

export const FormField: React.FC<FormFieldProps> = ({ fieldName, defaultValue, fieldType, label, helperText }) => {
  const { control, formState } = useFormContext();

  const renderTextField: ControllerProps["render"] = ({ field: { onChange, value } }) => (
    <TextField onChange={onChange} value={value} error={formState.errors?.fieldName} label={label} helperText={helperText} />
  );

  const types = {
    [FieldTypes.FormTextField]: renderTextField
  };

  return <Controller name={fieldName} control={control} defaultValue={defaultValue} render={types[fieldType]} />;
};
