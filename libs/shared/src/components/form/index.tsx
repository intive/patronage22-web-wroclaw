import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { TFunction } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { FieldTypes } from "../../types";
import { BaseButton, ButtonType } from "../base-button";
import { FormField, renderTextField } from "../form-field";
import * as Styled from "./styled";

interface Props {
  formTitle: TFunction;
  validationSchema: ObjectShape;
  formFields: FormField[];
  onSubmit: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
  submitButtonText: TFunction;
}

export const Form: React.FC<Props> = ({ formTitle, validationSchema, formFields, onSubmit, onError, submitButtonText }) => {
  const schema = yup.object(validationSchema).required();

  const { ...methods } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const renderFields = (input: FormField[]): JSX.Element[] =>
    input.map(formField => {
      const render = {
        [FieldTypes.FormTextField]: renderTextField(formField, methods.formState.errors)
      };

      return (
        <Controller
          key={formField.fieldName}
          name={formField.fieldName}
          control={methods.control}
          defaultValue={formField.defaultValue}
          render={render[formField.fieldType]}
        />
      );
    });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <Styled.Form>
        <Styled.FormTitle>{formTitle}</Styled.FormTitle>
        {renderFields(formFields)}
        <BaseButton type={ButtonType.Basic} onClick={methods.handleSubmit(onSubmit, onError)} variant='contained'>
          {submitButtonText}
        </BaseButton>
      </Styled.Form>
    </FormProvider>
  );
};
