import { yupResolver } from "@hookform/resolvers/yup";
import { Delete } from "@mui/icons-material";
import { Box, Typography, TypographyProps } from "@mui/material";
import { isEqual } from "lodash";
import { BaseSyntheticEvent, ReactNode, useEffect } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { FormFieldProps, TranslationNamespace } from "../../types";
import { BaseButton, BaseButtonProps, ButtonType } from "../base-button";
import { FormField } from "./form-field";
import * as Styled from "./styled";

interface FormButton {
  condition: boolean;
  text?: string;
  icon?: ReactNode;
  type?: ButtonType;
  variant?: "text" | "contained" | "outlined" | undefined;
  fieldType?: string;
  disabled?: boolean;
}

export interface FormProps {
  title?: { text: string; variant: TypographyProps["variant"] };
  id?: string;
  validationSchema: ObjectShape;
  fields: FormFieldProps[];
  initialValues?: {
    [x: string]: any;
  };
  placeholder?: string;
  onSubmit?: SubmitHandler<FieldValues>;
  onChange?: (value: Record<string, any>) => any;
  onError?: SubmitErrorHandler<FieldValues>;
  onCancel?: () => void;
  basicButtons?: {
    submit?: FormButton;
    cancel?: FormButton;
  };
  customButtons?: BaseButtonProps[];
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  title,
  validationSchema,
  fields,
  initialValues,
  placeholder,
  onSubmit,
  onError,
  onCancel,
  onChange,
  basicButtons,
  customButtons,
  className
}) => {
  const { t, i18n } = useTranslation(TranslationNamespace.Common);
  const schema = yup.object(validationSchema).required();

  const methods = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: initialValues
  });

  const currentValues = methods.watch();
  const { control } = methods;

  const {
    append,
    remove,
    fields: fieldArray
  } = useFieldArray({
    control,
    name: "dynamic"
  });

  useEffect(() => {
    if (fieldArray.length === 0) {
      const dynamicField = fields.find(field => field.dynamics?.name);
      append({ name: dynamicField?.dynamics?.name || "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: BaseSyntheticEvent) => {
    if (onSubmit) {
      methods.handleSubmit(onSubmit, onError)(event);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleClearErrors = () => {
    i18n.on("languageChanged", () => {
      methods.clearErrors();
    });
  };

  const handleFormChange = () => {
    handleClearErrors();

    if (onChange && !isEqual(methods.getValues(), currentValues)) {
      onChange(methods.getValues());
    }
  };

  const formButtons = [
    {
      condition: basicButtons?.submit?.condition,
      text: basicButtons?.submit?.text || t("submit"),
      action: handleSubmit,
      icon: basicButtons?.submit?.icon,
      type: basicButtons?.submit?.type,
      variant: basicButtons?.submit?.variant,
      disabled: basicButtons?.submit?.disabled || false
    },
    {
      condition: basicButtons?.cancel?.condition,
      text: basicButtons?.cancel?.text || t("cancel"),
      action: handleCancel,
      icon: basicButtons?.cancel?.icon,
      type: basicButtons?.cancel?.type,
      variant: basicButtons?.cancel?.variant,
      disabled: basicButtons?.cancel?.disabled || false
    }
  ];

  const renderDynamicFields = (name: string, addText: string, elements: FormFieldProps[], maxAmount: number) => (
    <>
      {fieldArray.map((dynamicField, dynamicFieldIndex) =>
        elements.map(field => (
          <Box sx={{ display: "flex" }} key={dynamicField.id}>
            <FormField key={dynamicField.id} {...field} name={`dynamic[${dynamicFieldIndex}].${field.name}`} type={field.type} />
            <Box>
              <BaseButton key='remove-btn' type={ButtonType.Icon} onClick={() => remove(dynamicFieldIndex)}>
                <Delete />
              </BaseButton>
            </Box>
          </Box>
        ))
      )}
      {addText !== "" && fieldArray.length < maxAmount && (
        <BaseButton key='add-btn' type={ButtonType.Basic} onClick={() => append({ name })}>
          {addText}
        </BaseButton>
      )}
    </>
  );

  const renderFields = () => {
    if (fields) {
      return fields.map(field => (
        <Box key={field.name}>
          <FormField key={field.name} {...field} onFieldChange={field?.onChange} onChange={handleFormChange} />
          {field?.dynamics &&
            renderDynamicFields(
              field?.dynamics?.name,
              field?.dynamics?.addButtonText,
              field?.dynamics?.fields,
              field?.dynamics?.maxAmount
            )}
        </Box>
      ));
    }

    return (
      <Typography id='no-data-placeholder' variant='h4'>
        {placeholder || t("noItems")}
      </Typography>
    );
  };

  return (
    <FormProvider {...methods}>
      <Styled.Form className={className} onChange={handleFormChange} onSubmit={handleSubmit}>
        {title && <Typography variant={title.variant}>{title.text}</Typography>}
        {renderFields()}
        {formButtons.map(
          ({ condition, text, action, icon, disabled }) =>
            condition && (
              <BaseButton
                key={text}
                type={ButtonType.Basic}
                onClick={action}
                variant='contained'
                endIcon={icon}
                disabled={disabled}
              >
                {text}
              </BaseButton>
            )
        )}
        {customButtons && (
          <Styled.ButtonSetWrapper>
            {customButtons.map(customButtonProps => (
              <BaseButton {...customButtonProps} key={`${uuidv4()}`} />
            ))}
          </Styled.ButtonSetWrapper>
        )}
      </Styled.Form>
    </FormProvider>
  );
};
