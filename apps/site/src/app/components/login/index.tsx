import {
  BaseRoute,
  FormFieldType,
  GoogleLoginButton,
  LinkedText,
  SignInProvider,
  TranslationNamespace
} from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import { useFirebaseService } from "../../hooks";
import * as Styled from "./styled";

const MIN_EMAIL_ADDRESS_LENGTH = 16;

export const Login: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const { signIn } = useFirebaseService();

  return (
    <Styled.LoginContainer>
      <Styled.LoginTitle variant='h5'>{t("login.title")}</Styled.LoginTitle>
      <Styled.LoginSubtitle variant='h6'>{t("login.subtitle")}</Styled.LoginSubtitle>
      <Styled.LoginFormCard>
        <Styled.LoginForm
          initialValues={{ email: "", password: "" }}
          fields={[
            {
              type: FormFieldType.Text,
              name: "email",
              variant: "filled",
              description: "E-mail",
              disabled: true,
              hideEditIcon: true
            },
            {
              type: FormFieldType.Text,
              inputType: "password",
              disabled: true,
              name: "password",
              variant: "filled",
              description: t("password"),
              hideEditIcon: true,
              appendix: <LinkedText variant='subtitle2' route={BaseRoute.Home} text={t("login.forgotPassword")} />
            }
          ]}
          validationSchema={{
            email: string()
              .trim()
              .required(t("login.emailRequiredMessage"))
              .email(t("login.emailInvalidMessage"))
              .min(MIN_EMAIL_ADDRESS_LENGTH, t("login.tooShortMessage")),
            password: string().trim()
          }}
          customButtons={{ submit: { condition: true, text: t("login.login"), disabled: true } }}
        />
        <Styled.LoginButtonBox>
          <GoogleLoginButton
            onClick={() => {
              signIn(SignInProvider.Google);
            }}
          />
        </Styled.LoginButtonBox>
      </Styled.LoginFormCard>
    </Styled.LoginContainer>
  );
};
