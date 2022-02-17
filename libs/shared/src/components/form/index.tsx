import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "@mui/material";
import React from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { TFunction } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import * as Styled from "./styled";

interface FormProps {
  formTitle: string | TFunction;
  validationSchema: ObjectShape;
  formFields: JSX.Element[];
  onSubmit: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
  isEditButtonVisible: boolean;
}

export const Form: React.FC<FormProps> = ({ formTitle, validationSchema, formFields, onSubmit, onError, isEditButtonVisible }) => {
  const schema = yup.object(validationSchema).required();

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const handleSubmit = (): void => {
    methods.handleSubmit(onSubmit, onError);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <Styled.Form onSubmit={handleSubmit}>
        <Typography>{formTitle}</Typography>
        {formFields}
        {isEditButtonVisible && <Button />}
      </Styled.Form>
    </FormProvider>
  );
};
