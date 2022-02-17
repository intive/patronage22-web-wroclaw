import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { Cancel, CheckCircle, Edit } from "@mui/icons-material";
import { ButtonGroup, IconButton, Input, TextField } from "@mui/material";
import { TranslationNamespace } from "@patronage-web/shared";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

import * as Styled from "./styled";

interface FormValues {
  title: string;
  description: string;
}

export const TitleAndDescriptionForm: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(true);
  const [valuesBeforeChange, setValuesBeforeChange] = useState<FormValues>({ title: t("newPresentation"), description: "" });

  const schema = yup
    .object({
      title: yup.string().required(`* ${t("missingTitleError")}`),
      description: yup.string()
    })
    .required();

  const { control, formState, handleSubmit, getValues, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const handleEdit = (): void => {
    const currentValues = getValues();
    setValuesBeforeChange({ title: currentValues.title, description: currentValues.description });
    setIsFormDisabled(false);
  };

  const handleCancel = (): void => {
    reset({ title: valuesBeforeChange.title, description: valuesBeforeChange.description });
    setIsFormDisabled(true);
  };

  const handleFormSubmit = (): void => {
    setIsFormDisabled(true);
  };

  return (
    <Styled.Form component='form'>
      <Styled.HelperText>
        <ErrorMessage errors={formState.errors} name='title' />
      </Styled.HelperText>

      <Styled.TitleBox>
        <Controller
          name='title'
          control={control}
          defaultValue={t("newPresentation")}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} disableUnderline disabled={isFormDisabled} error={formState.errors?.title} />
          )}
        />

        {/* TODO: replace with proper icon buttons, when branch JI:759433 P2022-465 will be merged */}
        <ButtonGroup>
          {isFormDisabled ? (
            <IconButton onClick={handleEdit}>
              <Edit />
            </IconButton>
          ) : (
            <>
              <IconButton onClick={handleSubmit(handleFormSubmit)} disabled={Object.keys(formState.errors).length > 0}>
                <CheckCircle />
              </IconButton>

              <IconButton onClick={handleCancel}>
                <Cancel />
              </IconButton>
            </>
          )}
        </ButtonGroup>
      </Styled.TitleBox>

      <Controller
        name='description'
        control={control}
        defaultValue=''
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            onChange={onChange}
            multiline
            rows={4}
            placeholder={t("description")}
            disabled={isFormDisabled}
            error={formState.errors?.description}
          />
        )}
      />
    </Styled.Form>
  );
};
