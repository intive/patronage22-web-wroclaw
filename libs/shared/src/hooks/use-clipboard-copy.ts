import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNotification } from "../data";
import { NotificationType } from "../types";

export const useClipboardCopy = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onSuccess = () =>
    dispatch(
      addNotification([
        {
          id: uuidv4(),
          type: NotificationType.Success,
          message: t("linkCopied")
        }
      ])
    );

  const onFail = () =>
    dispatch(
      addNotification([
        {
          id: uuidv4(),
          type: NotificationType.Error,
          message: t("linkCopyingFailed")
        }
      ])
    );

  const copyFunction = (text: string) => {
    navigator.clipboard.writeText(text).then(onSuccess, onFail);
  };
  return copyFunction;
};
