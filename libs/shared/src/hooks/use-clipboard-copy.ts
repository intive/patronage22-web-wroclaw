import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNotification } from "../data/features";
import { AppDispatch } from "../data/types";
import { NotificationType, TranslationNamespace } from "../types";

export const useClipboardCopy = () => {
  const { t } = useTranslation([TranslationNamespace.Common]);
  let message: string;
  let id: string;
  let type: NotificationType;
  const dispatch = useDispatch<AppDispatch>();
  const onSuccess = () => {
    message = t("linkCopied", { ns: TranslationNamespace.Common });
    id = uuidv4();
    type = NotificationType.SuccessSnackbar;
    dispatch(addNotification([{ id, message, type }]));
  };
  const onFail = () => {
    message = t("linkCopyingFailed", { ns: TranslationNamespace.Common });
    id = uuidv4();
    type = NotificationType.ErrorSnackbar;
    dispatch(addNotification([{ id, message, type }]));
  };

  const copyFunction = (text: string) => {
    navigator.clipboard.writeText(text).then(onSuccess, onFail);
  };
  return copyFunction;
};
