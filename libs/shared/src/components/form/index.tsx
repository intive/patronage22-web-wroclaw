/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { BaseButton, ButtonType } from "../base-button";
import { FormField, FormFieldProps } from "../form-field";
import * as Styled from "./styled";

interface FormButton {
  condition: boolean;
  text: string;
  icon: ReactNode;
}

export interface FormProps {
  title?: string;
  validationSchema: ObjectShape;
  fields?: FormFieldProps[];
  placeholder?: string;
  onSubmit: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
  onCancel?: () => void;
  customButtons?: {
    submit?: FormButton;
    cancel?: FormButton;
  };
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
  customButtons,
  className
}) => {
  const { t } = useTranslation();
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
    {
      condition: customButtons?.submit?.condition,
      text: customButtons?.submit?.text || t("submit"),
      action: handleSubmit,
      icon: customButtons?.submit?.icon
    },
    {
      condition: customButtons?.cancel?.condition,
      text: customButtons?.cancel?.text || t("cancel"),
      action: handleCancel,
      icon: customButtons?.cancel?.icon
    }
  ];

  return (
    <FormProvider {...methods}>
      <Styled.Form className={className}>
        {title && <Typography variant='h3'>{title}</Typography>}
        {renderFields()}
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
