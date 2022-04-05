import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { isEqual } from "lodash";
import { BaseSyntheticEvent, ReactNode } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { BaseButton, ButtonType } from "../base-button";
import { FormField, FormFieldProps } from "./form-field";
import * as Styled from "./styled";

interface FormButton {
  condition: boolean;
  text: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface FormProps {
  title?: string;
  validationSchema: ObjectShape;
  fields?: FormFieldProps[];
  initialValues?: {
    [x: string]: any;
  };
  placeholder?: string;
  onSubmit?: SubmitHandler<FieldValues>;
  onChange?: (value: Record<string, any>) => any;
  onError?: SubmitErrorHandler<FieldValues>;
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
  initialValues,
  placeholder,
  onSubmit,
  onError,
  onCancel,
  onChange,
  customButtons,
  className
}) => {
  const { t } = useTranslation();
  const schema = yup.object(validationSchema).required();

  const methods = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: initialValues
  });

  const currentValues = methods.watch();

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

  const handleFormChange = () => {
    if (onChange && !isEqual(methods.getValues(), currentValues)) {
      onChange(methods.getValues());
    }
  };

  const formButtons = [
    {
      condition: customButtons?.submit?.condition,
      text: customButtons?.submit?.text || t("submit"),
      action: handleSubmit,
      icon: customButtons?.submit?.icon,
      disabled: customButtons?.submit?.disabled || false
    },
    {
      condition: customButtons?.cancel?.condition,
      text: customButtons?.cancel?.text || t("cancel"),
      action: handleCancel,
      icon: customButtons?.cancel?.icon,
      disabled: customButtons?.cancel?.disabled || false
    }
  ];

  const renderFields = () => {
    if (fields) {
      return fields.map(field => (
        <FormField key={field.name} {...field} onFieldChange={field?.onChange} onChange={handleFormChange} />
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
        {title && <Typography variant='h3'>{title}</Typography>}
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
      </Styled.Form>
    </FormProvider>
  );
};
