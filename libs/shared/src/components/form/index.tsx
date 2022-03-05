/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { TranslationNamespace } from "../../types";
import { BaseButton, ButtonType } from "../base-button";
import { FormField, FormFieldProps } from "../form-field";
import * as Styled from "./styled";

export interface FormProps {
  children?: ReactNode;
  customField?: ReactNode;
  title?: string;
  validationSchema: ObjectShape;
  fields?: FormFieldProps[];
  placeholder?: string;
  onSubmit: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
  onCancel?: () => void;
  showSubmitButton?: boolean;
  showCancelButton?: boolean;
  submitButtonText?: string;
  cancelButtonText?: string;
  submitButtonIcon?: ReactNode;
  cancelButtonIcon?: ReactNode;
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  children,
  customField,
  title,
  validationSchema,
  fields,
  placeholder,
  onSubmit,
  onError,
  onCancel,
  showSubmitButton,
  showCancelButton,
  submitButtonText,
  cancelButtonText,
  submitButtonIcon,
  cancelButtonIcon,
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
    { condition: showSubmitButton, text: submitButtonText || t("submit"), action: handleSubmit, icon: submitButtonIcon },
    { condition: showCancelButton, text: cancelButtonText || t("cancel"), action: handleCancel, icon: cancelButtonIcon }
  ];

  return (
    <FormProvider {...methods}>
      <Styled.Form className={className}>
        {title && <Typography variant='h3'>{title}</Typography>}

        {customField}

        {renderFields()}

        {children}

        {formButtons.map(
          ({ condition, text, action, icon }) =>
            condition && (
              <BaseButton key={text} type={ButtonType.Basic} onClick={action} variant='contained' endIcon={icon}>
                {text}
              </BaseButton>
            )
        )}
      </Styled.Form>
    </FormProvider>
  );
};
