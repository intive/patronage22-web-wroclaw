import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { isEqual } from "lodash-es";
import { BaseSyntheticEvent } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { usePrevious } from "../../hooks";
import { BaseButton, ButtonType } from "../base-button";
import { FormField, FormFieldProps } from "../form-field";
import * as Styled from "./styled";

export interface FormProps {
  title?: string;
  validationSchema: ObjectShape;
  fields?: FormFieldProps[];
  placeholder?: string;
  onSubmit?: SubmitHandler<FieldValues>;
  onChange?: (value: Record<string, any>) => any;
  onError?: SubmitErrorHandler<FieldValues>;
  onCancel?: () => void;
  showSubmitButton?: boolean;
  showCancelButton?: boolean;
  submitButtonText?: string;
  cancelButtonText?: string;
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  title,
  validationSchema,
  fields,
  placeholder,
  onSubmit,
  onError,
  onCancel,
  onChange,
  showSubmitButton,
  showCancelButton,
  submitButtonText,
  cancelButtonText,
  className
}) => {
  const { t } = useTranslation();
  const schema = yup.object(validationSchema).required();

  const methods = useForm<FieldValues>({
    resolver: yupResolver(schema)
  });

  const currentValues = methods.getValues();
  const previousValues = usePrevious(currentValues);

  const handleSubmit = (event: BaseSyntheticEvent) => {
    if (onSubmit) {
      methods.handleSubmit(onSubmit, onError)(event);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleFormChange = () => {
    if (onChange && !isEqual(methods.getValues(), previousValues)) {
      onChange(methods.getValues());
    }
  };

  const formButtons = [
    { condition: showSubmitButton, text: submitButtonText || t("submit"), action: handleSubmit },
    { condition: showCancelButton, text: cancelButtonText || t("cancel"), action: handleCancel }
  ];

  const renderFields = () => {
    if (fields) {
      return fields.map(field => <FormField key={field.name} {...field} />);
    }

    return (
      <Typography id='no-data-placeholder' variant='h4'>
        {placeholder || t("noItems")}
      </Typography>
    );
  };

  return (
    <FormProvider {...methods}>
      <Styled.Form className={className} onChange={handleFormChange} onSubmit={handleSubmit}>
        {title && <Typography variant='h3'>{title}</Typography>}

        {renderFields()}

        {formButtons.map(
          ({ condition, text, action }) =>
            condition && (
              <BaseButton type={ButtonType.Basic} onClick={action} variant='contained'>
                {text}
              </BaseButton>
            )
        )}
      </Styled.Form>
    </FormProvider>
  );
};
