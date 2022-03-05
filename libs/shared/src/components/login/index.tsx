import { Google } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { string } from "yup";

import { REGEX_GMAIL_VALIDATION } from "../../constants";
import { BaseRoute, FormFieldType, TranslationNamespace } from "../../types";
import { LocalizedLink } from "../localized-link";
import * as Styled from "./styled";

export const Login: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const navigate = useNavigate();

  const handleSubmit = (data: unknown) => {
    navigate(BaseRoute.Home, { replace: true });

    return console.log(data);
  };

  return (
    <Styled.Container>
      <Styled.Title variant='h5'>{t("login.title")}</Styled.Title>
      <Styled.Subtitle variant='h6'>{t("login.subtitle")}</Styled.Subtitle>
      <Styled.BasicCard>
        <Styled.Login
          fields={[
            {
              type: FormFieldType.Text,
              name: "email",
              defaultValue: "",
              variant: "filled",
              showDescription: true,
              description: "E-mail"
            },
            {
              type: FormFieldType.Text,
              name: "password",
              defaultValue: "",
              variant: "filled",
              showDescription: true,
              description: t("password"),
              disabled: true,
              hideEditIcon: true
            }
          ]}
          validationSchema={{
            email: string()
              .trim()
              .required(t("login.emailRequired"))
              .email(t("login.emailInvalid"))
              .matches(REGEX_GMAIL_VALIDATION, t("login.notGmail")),
            password: string().trim()
          }}
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
          showSubmitButton
          submitButtonText='Log in with'
          submitButtonIcon={<Google />}
        >
          <LocalizedLink to={BaseRoute.Login}>
            <Typography variant='subtitle2'>{t("login.forgotPassword")}</Typography>
          </LocalizedLink>
        </Styled.Login>
      </Styled.BasicCard>
    </Styled.Container>
  );
};
