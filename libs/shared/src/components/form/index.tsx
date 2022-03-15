import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { isEqual } from "lodash-es";
import { ReactNode } from "react";
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
    reValidateMode: "onChange"
  });

  const currentValues = methods.getValues();
  const previousValues = usePrevious(currentValues);

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

  const handleFormChange = () => {
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
    if (fields) {
      return fields.map(field => <FormField key={field.name} {...field} />);
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
