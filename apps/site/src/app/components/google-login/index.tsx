import { Google } from "@mui/icons-material";
import {
  BaseRoute,
  createPath,
  FormFieldType,
  LinkedText,
  REGEX_GMAIL_VALIDATION,
  TranslationNamespace
} from "@patronage-web/shared";
import { BaseSyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { string } from "yup";

import * as Styled from "./styled";

const MIN_GMAIL_ADDRESS_LENGTH = 16;

export const GoogleLogin: React.FC = () => {
  const { i18n, t } = useTranslation(TranslationNamespace.Common);
  const navigate = useNavigate();

  const handleSubmit = (_data: unknown, _event?: BaseSyntheticEvent) => {
    navigate(createPath({ route: BaseRoute.Home, language: i18n.language }));
  };

  return (
    <Styled.LoginGoogleContainer>
      <Styled.LoginGoogleTitle variant='h5'>{t("login.title")}</Styled.LoginGoogleTitle>
      <Styled.LoginGoogleSubtitle variant='h6'>{t("login.subtitle")}</Styled.LoginGoogleSubtitle>
      <Styled.LoginGoogleFormCard>
        <Styled.LoginGoogleForm
          initialValues={{ email: "", password: "" }}
          fields={[
            {
              type: FormFieldType.Text,
              name: "email",
              variant: "filled",
              description: "E-mail",
              inputConfig: {
                disableUnderline: true
              },
              hideEditIcon: true
            },
            {
              type: FormFieldType.Text,
              name: "password",
              variant: "filled",
              description: t("password"),
              disabled: true,
              hideEditIcon: true,
              inputConfig: {
                disableUnderline: true
              },
              appendix: <LinkedText variant='subtitle2' route={BaseRoute.Home} text={t("login.forgotPassword")} />
            }
          ]}
          validationSchema={{
            email: string()
              .trim()
              .required(t("login.emailRequiredMessage"))
              .email(t("login.emailInvalidMessage"))
              .matches(REGEX_GMAIL_VALIDATION, t("login.notGmailMessage"))
              .min(MIN_GMAIL_ADDRESS_LENGTH, t("login.tooShortMessage")),
            password: string().trim()
          }}
          onSubmit={handleSubmit}
          basicButtons={{ submit: { condition: true, text: t("login.loginWith"), icon: <Google /> } }}
        />
      </Styled.LoginGoogleFormCard>
    </Styled.LoginGoogleContainer>
  );
};
