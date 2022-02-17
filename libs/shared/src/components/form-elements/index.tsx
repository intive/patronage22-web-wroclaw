import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { TFunction } from "react-i18next";

export type FormTextFieldProps = TextFieldProps & {
  fieldName: string;
  defaultValue: string | TFunction;
};

export const FormTextField: React.FC<FormTextFieldProps> = ({ fieldName, defaultValue, ...rest }) => {
  const { control, formState } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TextField onChange={onChange} value={value} error={formState.errors?.fieldName} {...rest} />
      )}
    />
  );
};
