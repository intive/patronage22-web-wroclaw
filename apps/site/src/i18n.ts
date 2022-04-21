import { loadI18n, TranslationNamespace } from "@patronage-web/shared";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { environment } from "libs/shared/src/environments/environment";

loadI18n({
  env: environment.NODE_ENV,
  ns: [TranslationNamespace.Feedback, TranslationNamespace.Common]
});
