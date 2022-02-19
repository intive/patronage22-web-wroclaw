import { yupResolver } from "@hookform/resolvers/yup";
import { Cancel, Check, Edit } from "@mui/icons-material";
import { ButtonGroup } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";
import { Controller, FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { TFunction } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { FieldTypes } from "../../types";
import { BaseButton, ButtonType } from "../base-button";
import { FormField, renderTextField } from "../form-field";
import * as Styled from "./styled";

export interface Props {
  formTitle?: TFunction;
  validationSchema: ObjectShape;
  formFields: FormField[];
  onSubmit: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
  isDisabled: boolean;
  hasSubmitButton: boolean;
  submitButtonText?: TFunction;
  hasEditButton: boolean;
}

export const Form: React.FC<Props> = ({
  formTitle,
  validationSchema,
  formFields,
  onSubmit,
  onError,
  isDisabled,
  hasSubmitButton,
  submitButtonText,
  hasEditButton
}) => {
  const [isFormDisabled, setIsFormDisabled] = useState(isDisabled);
  const [valuesBeforeChange, setValuesBeforeChange] = useState<FieldValues>();

  const schema = yup.object(validationSchema).required();

  const { ...methods } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const handleEdit = (): void => {
    const currentValues = methods.getValues();
    setValuesBeforeChange({ ...currentValues });
    setIsFormDisabled(false);
  };

  const handleCancel = (): void => {
    methods.reset({ ...valuesBeforeChange });
    setIsFormDisabled(true);
  };

  const handleFormSubmit = (): void => {
    methods.handleSubmit(onSubmit, onError);
    setIsFormDisabled(true);
  };

  const renderFields = (input: FormField[]): JSX.Element[] =>
    input.map(formField => {
      const render = {
        [FieldTypes.FormTextField]: renderTextField(formField, methods.formState.errors, isFormDisabled)
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
        {formTitle && <Styled.FormTitle>{formTitle}</Styled.FormTitle>}
        {renderFields(formFields)}
        {hasSubmitButton && (
          <BaseButton type={ButtonType.Basic} onClick={methods.handleSubmit(onSubmit, onError)} variant='contained'>
            {submitButtonText || t("submit")}
          </BaseButton>
        )}

        {hasEditButton && (
          <ButtonGroup>
            {isFormDisabled ? (
              <BaseButton type={ButtonType.Icon} onClick={handleEdit} variant='contained'>
                <Edit />
              </BaseButton>
            ) : (
              <>
                <BaseButton
                  type={ButtonType.Icon}
                  onClick={handleFormSubmit}
                  variant='contained'
                  disabled={Object.keys(methods.formState.errors).length > 0}
                >
                  <Check />
                </BaseButton>

                <BaseButton type={ButtonType.Icon} onClick={handleCancel} variant='contained'>
                  <Cancel />
                </BaseButton>
              </>
            )}
          </ButtonGroup>
        )}
      </Styled.Form>
    </FormProvider>
  );
};
