import { changeLanguage, SupportedLanguage, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

describe("Login page", () => {
  const { i18n, t } = useTranslation([TranslationNamespace.Feedback, TranslationNamespace.Common]);

  Object.keys(SupportedLanguage).forEach(language => {
    it("opens the login page", () => {
      cy.visit("localhost:4000/login");
    });

    const selectedLanguage = Object.keys(SupportedLanguage)[Object.values(SupportedLanguage).indexOf("en")];

    console.log(SupportedLanguage[selectedLanguage]);

    changeLanguage(i18n, SupportedLanguage[Object.values(SupportedLanguage).typeOf(language)]);
    const error: string = t("emailRequiredMessage");

    it("displays e-mail input field and set some value", () => {
      cy.get("#mui-1").type("Test e-mail").should("have.value", "Test e-mail");
    });

    it("checks if error message is shown", () => {
      cy.get(".Mui-error").should("be.visible").contains(error);
    });
  });
});
