/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { t } from "i18next";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { TFunction } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { BaseButton, ButtonType } from "../base-button";
import { FormField, FormFieldType } from "../form-field";

export interface Props {
  formTitle?: TFunction;
  validationSchema: ObjectShape;
  fields: FormFieldType[];
  onSubmit: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
  hasSubmitButton: boolean;
  submitButtonText?: TFunction;
  className?: string;
}

export const Form: React.FC<Props> = ({
  formTitle,
  validationSchema,
  fields,
  onSubmit,
  onError,
  hasSubmitButton,
  submitButtonText,
  className
}) => {
  const schema = yup.object(validationSchema).required();

  const { ...methods } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  return (
    <FormProvider {...methods}>
      <form className={className}>
        {formTitle && <Typography>{formTitle}</Typography>}
        {fields.map(field => (
          <FormField {...field} />
        ))}
        {hasSubmitButton && (
          <BaseButton type={ButtonType.Basic} onClick={methods.handleSubmit(onSubmit, onError)} variant='contained'>
            {submitButtonText || t("submit")}
          </BaseButton>
        )}
      </form>
    </FormProvider>
  );
};
