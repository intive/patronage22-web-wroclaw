/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
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

    return placeholder ? (
      <Typography id='placeholder' variant='h4'>
        {placeholder}
      </Typography>
    ) : (
      <Typography id='placeholder' variant='h4'>
        {t("NoData")}
      </Typography>
    );
  };

  const handleSubmit = () => {
    methods.handleSubmit(onSubmit, onError)();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  return (
    <FormProvider {...methods}>
      <Styled.Form className={className}>
        {title && <Typography variant='h3'>{title}</Typography>}

        {renderFields()}

        {showSubmitButton && (
          <BaseButton type={ButtonType.Basic} onClick={handleSubmit} variant='contained'>
            {submitButtonText || t("submit")}
          </BaseButton>
        )}

        {showCancelButton && (
          <BaseButton type={ButtonType.Basic} onClick={handleCancel} variant='contained'>
            {cancelButtonText || t("cancel")}
          </BaseButton>
        )}
      </Styled.Form>
    </FormProvider>
  );
};
