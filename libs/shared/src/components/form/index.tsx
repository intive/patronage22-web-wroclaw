/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { TranslationNamespace } from "../../types";
import { BaseButton, ButtonType } from "../base-button";
import { FormField, FormFieldProps } from "../form-field";
import * as Styled from "./styled";

export interface FormProps {
  title?: string;
  validationSchema: ObjectShape;
  fields?: FormFieldProps[];
  placeholder?: string;
  onSubmit: SubmitHandler<FieldValues>;
  onChange?: (values: FieldValues) => void;
  onError: SubmitErrorHandler<FieldValues>;
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
  const { t } = useTranslation(TranslationNamespace.Common);
  const schema = yup.object(validationSchema).required();

  const methods = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const renderFields = () => {
    if (fields) {
      return fields.map(field => <FormField key={field.name} {...field} />);
    }

    return (
      <Typography id='placeholder' variant='h4'>
        {placeholder || t("NoData")}
      </Typography>
    );
  };

  const handleSubmit = () => {
    methods.handleSubmit(onSubmit, onError)();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  const formButtons = [
    { condition: showSubmitButton, text: submitButtonText || t("submit"), action: handleSubmit },
    { condition: showCancelButton, text: cancelButtonText || t("cancel"), action: handleCancel }
  ];

  const formValues = methods.getValues();

  useEffect(() => {
    console.log("Form values before if", formValues);
    if (onChange) {
      onChange(formValues);
      console.log(formValues, "form - formvalues");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);

  return (
    <FormProvider {...methods}>
      <Styled.Form className={className} onChange={onChange}>
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
