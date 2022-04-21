import { loadI18n, TranslationNamespace } from "@patronage-web/shared";
import { environment } from "@patronage-web/shared-environments";

loadI18n({
  env: environment.NODE_ENV,
  ns: [TranslationNamespace.Feedback, TranslationNamespace.Common]
});
