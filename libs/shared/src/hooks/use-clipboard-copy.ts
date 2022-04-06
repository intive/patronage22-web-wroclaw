import { useTranslation } from "react-i18next";

import { useNotification } from "../index";
import { TranslationNamespace } from "../types";

export const useClipboardCopy = () => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const { showSuccess, showFail } = useNotification();

  const onSuccess = () => showSuccess(t("linkCopied"));

  const onFail = () => showFail(t("linkCopyingFailed"));

  const copyFunction = (text: string) => {
    navigator.clipboard.writeText(text).then(onSuccess, onFail);
  };
  return copyFunction;
};
