import { loadI18n, TranslationNamespace } from "@patronage-web/shared";

loadI18n({ env: "development", ns: [TranslationNamespace.Ui, TranslationNamespace.Feedback, TranslationNamespace.Common] });
