/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { TFunction, useTranslation } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { TranslationNamespace } from "../../types";
import { BaseButton, ButtonType } from "../base-button";
import { FormField, FormFieldType } from "../form-field";

export interface FormProps {
  title?: TFunction;
  validationSchema: ObjectShape;
  fields: FormFieldType[];
  onSubmit: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
  showSubmitButton?: boolean;
  submitButtonText?: TFunction;
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  title,
  validationSchema,
  fields,
  onSubmit,
  onError,
  showSubmitButton,
  submitButtonText,
  className
}) => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const schema = yup.object(validationSchema).required();

  const methods = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const handleSubmit = (): void => {
    methods.handleSubmit(onSubmit, onError)();
  };

  return (
    <FormProvider {...methods}>
      <form className={className}>
        {title && <Typography>{title}</Typography>}
        {fields.map(field => (
          <FormField key={field.name} {...field} />
        ))}
        {showSubmitButton && (
          <BaseButton type={ButtonType.Basic} onClick={handleSubmit} variant='contained'>
            {submitButtonText || t("submit")}
          </BaseButton>
        )}
      </form>
    </FormProvider>
  );
};
