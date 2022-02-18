import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { TFunction } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { BaseButton, ButtonType } from "../base-button";
import * as Styled from "./styled";

interface FormProps {
  formTitle: string | TFunction;
  validationSchema: ObjectShape;
  formFields: JSX.Element[];
  onSubmit: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
  submitButtonText: string | TFunction;
}

export interface FormValues {
  firstName: string;
}

export const Form: React.FC<FormProps> = ({ formTitle, validationSchema, formFields, onSubmit, onError, submitButtonText }) => {
  const schema = yup.object(validationSchema).required();

  const { ...methods } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <Styled.Form>
        <Styled.FormTitle>{formTitle}</Styled.FormTitle>
        {formFields}
        <BaseButton type={ButtonType.Basic} onClick={methods.handleSubmit(onSubmit, onError)} variant='contained'>
          {submitButtonText}
        </BaseButton>
      </Styled.Form>
    </FormProvider>
  );
};
