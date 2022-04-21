import { useTranslation } from "react-i18next";

import { useNotification } from "../index";
import { TranslationNamespace } from "../types";

export const useClipboardCopy = () => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const { showSuccess, showError } = useNotification();

  const handleSuccess = () => showSuccess(t("linkCopied"));

  const handleFailure = () => showError(t("linkCopyingFailed"));

  return (text: string) => navigator.clipboard.writeText(text).then(handleSuccess, handleFailure);
};
