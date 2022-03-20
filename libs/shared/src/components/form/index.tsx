import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { isEqual } from "lodash-es";
import { ReactNode, useEffect } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { usePrevious } from "../../hooks";
import { FormFieldType } from "../../types";
import { BaseButton, BaseButtonProps, ButtonType } from "../base-button";
import { FormField, FormFieldProps } from "../form-field";
import * as Styled from "./styled";

interface FormButton {
  condition: boolean;
  text: string;
  icon?: ReactNode;
  type?: ButtonType;
  variant?: "text" | "contained" | "outlined" | undefined;
  fieldType?: string;
}

export const answerField: FormFieldProps = {
  type: FormFieldType.Text,
  name: "answer",
  variant: "filled",
  inputConfig: {
    disableUnderline: true
  }
};

export interface FormProps {
  title?: string;
  validationSchema: ObjectShape;
  fieldset: FormFieldProps[];
  placeholder?: string;
  onSubmit?: SubmitHandler<FieldValues>;
  onChange?: (value: Record<string, any>) => any;
  onError?: SubmitErrorHandler<FieldValues>;
  onCancel?: () => void;
  basicButtons?: {
    submit?: FormButton;
    cancel?: FormButton;
    addField?: FormButton;
  };
  customButtons?: BaseButtonProps[];
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  title,
  validationSchema,
  fieldset,
  placeholder,
  onSubmit,
  onError,
  onCancel,
  onChange,
  basicButtons,
  customButtons,
  className
}) => {
  const { t, i18n } = useTranslation();
  const schema = yup.object(validationSchema).required();

  const methods = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { fieldArray: fieldset }
  });

  const currentValues = methods.getValues();
  const previousValues = usePrevious(currentValues);
  const { control, reset } = methods;

  const { append, fields } = useFieldArray({
    control,
    name: "fieldArray"
  });

  useEffect(() => {
    reset({
      fieldArray: fieldset
    });
  }, [fieldset, reset]);

  const handleSubmit = () => {
    if (onSubmit) {
      methods.handleSubmit(onSubmit, onError)();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleAddField = () => {
    append(answerField);
    fieldset.push(answerField);
  };

  const handleFormChange = () => {
    i18n.on("languageChanged", () => {
      methods.clearErrors();
    });
    if (onChange && !isEqual(methods.getValues(), previousValues)) {
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
      variant: basicButtons?.submit?.variant
    },
    {
      condition: basicButtons?.cancel?.condition,
      text: basicButtons?.cancel?.text || t("cancel"),
      action: handleCancel,
      icon: basicButtons?.cancel?.icon,
      type: basicButtons?.cancel?.type,
      variant: basicButtons?.cancel?.variant
    },
    {
      condition: basicButtons?.addField?.condition,
      text: basicButtons?.addField?.text || t("addField"),
      action: handleAddField,
      icon: basicButtons?.addField?.icon,
      type: basicButtons?.addField?.type,
      variant: basicButtons?.addField?.variant,
      fieldType: basicButtons?.addField?.fieldType
    }
  ];

  const renderFields = () => {
    if (fieldset) {
      return fields.map((field: any, index) => (
        <FormField key={field.id} {...field} name={`fieldArray.[${index}].${field.name}`} />
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
      <Styled.Form className={className} onChange={handleFormChange}>
        {title && <Typography variant='h3'>{title}</Typography>}
        {renderFields()}
        {formButtons.map(
          ({ condition, text, action, icon, type = ButtonType.Basic, variant = "contained" }) =>
            condition && (
              <BaseButton key={text} type={type} onClick={action} variant={variant} endIcon={icon}>
                {text}
              </BaseButton>
            )
        )}
        {customButtons && (
          <Styled.ButtonSetWrapper>
            {customButtons.map(customButtonProps => (
              <BaseButton {...customButtonProps} />
            ))}
          </Styled.ButtonSetWrapper>
        )}
      </Styled.Form>
    </FormProvider>
  );
};
