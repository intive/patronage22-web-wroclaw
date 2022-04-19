import { Google } from "@mui/icons-material";
import {
  BaseButton,
  BaseRoute,
  ButtonType,
  FirebaseAuthProvider,
  FormFieldType,
  LinkedText,
  TranslationNamespace,
  useFirebaseService
} from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import * as Styled from "./styled";

const EMAIL_ADDRESS_MIN_LENGTH = 16;

export const Login: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const { signIn } = useFirebaseService();

  const handleGoogleSignIn = () => signIn(FirebaseAuthProvider.Google);

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
              inputConfig: {
                disableUnderline: true
              },
              disabled: true,
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
              inputType: "password",
              appendix: <LinkedText variant='subtitle2' route={BaseRoute.Home} text={t("login.forgotPassword")} />
            }
          ]}
          validationSchema={{
            email: string()
              .trim()
              .required(t("login.emailRequiredMessage"))
              .email(t("login.emailInvalidMessage"))
              .min(EMAIL_ADDRESS_MIN_LENGTH, t("login.tooShortMessage")),
            password: string().trim()
          }}
          customButtons={{ submit: { condition: true, text: t("login.login"), disabled: true } }}
        />
        <Styled.LoginButtonBox>
          <BaseButton onClick={handleGoogleSignIn} type={ButtonType.Basic} variant='contained' endIcon={<Google />}>
            {t("login.loginWith")}
          </BaseButton>
        </Styled.LoginButtonBox>
      </Styled.LoginFormCard>
    </Styled.LoginContainer>
  );
};
