import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { isEqual } from "lodash";
import { BaseSyntheticEvent, ReactNode } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

import { usePrevious } from "../../hooks";
import { BaseButton, ButtonType } from "../base-button";
import { FormField, FormFieldProps } from "./form-field";
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
  const { t, i18n } = useTranslation();
  const schema = yup.object(validationSchema).required();

  const methods = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: initialValues
  });

  const currentValues = methods.getValues();
  const previousValues = usePrevious(currentValues);
  const { control, reset } = methods;

  const { append } = useFieldArray({
    control,
    name: "fieldArray"
  });


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
      <Styled.Form className={className} onChange={handleFormChange} onSubmit={handleSubmit}>
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
