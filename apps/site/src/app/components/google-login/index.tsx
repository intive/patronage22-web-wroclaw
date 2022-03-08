import { Google } from "@mui/icons-material";
import { BaseRoute, createPath, FormFieldType, REGEX_GMAIL_VALIDATION } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { string } from "yup";

import { ForgotPasswordLink } from "./forgot-password-link";
import * as Styled from "./styled";

export const GoogleLogin: React.FC = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (_data: unknown) => {
    navigate(createPath({ route: BaseRoute.Home, language: i18n.language }));
  };

  return (
    <Styled.LoginGoogleContainer>
      <Styled.LoginGoogleTitle variant='h5'>{t("login.title")}</Styled.LoginGoogleTitle>
      <Styled.LoginGoogleSubtitle variant='h6'>{t("login.subtitle")}</Styled.LoginGoogleSubtitle>
      <Styled.LoginGoogleFormCard>
        <Styled.LoginGoogleForm
          fields={[
            {
              type: FormFieldType.Text,
              name: "email",
              defaultValue: "",
              variant: "filled",
              description: "E-mail"
            },
            {
              type: FormFieldType.Text,
              name: "password",
              defaultValue: "",
              variant: "filled",
              description: t("password"),
              disabled: true,
              hideEditIcon: true,
              appendix: <ForgotPasswordLink variant='subtitle2' route={BaseRoute.Home} text={t("login.forgotPassword")} />
            }
          ]}
          validationSchema={{
            email: string()
              .trim()
              .required(t("login.emailRequiredMessage"))
              .email(t("login.emailInvalidMessage"))
              .matches(REGEX_GMAIL_VALIDATION, t("login.notGmailMessage")),
            password: string().trim()
          }}
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
          customButtons={{ submit: { condition: true, text: t("login.loginWith"), icon: <Google /> } }}
        />
      </Styled.LoginGoogleFormCard>
    </Styled.LoginGoogleContainer>
  );
};
