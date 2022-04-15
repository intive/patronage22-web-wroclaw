import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { login } from "../../data";
import { useNotification } from "../../hooks";
import { HttpRequestErrorName, TranslationNamespace } from "../../types";
import { firebaseAuth } from "./index";

export const useGoogleSignIn = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(TranslationNamespace.Common);
  const { showError } = useNotification();

  return async () => {
    const googleProvider = new GoogleAuthProvider();

    try {
      const data = await signInWithPopup(firebaseAuth, googleProvider);
      const accessToken = await data?.user?.getIdToken();

      if (!accessToken || !data?.user?.email) {
        throw Error(HttpRequestErrorName.Login);
      }

      dispatch(login({ accessToken, userLogin: data.user.email }));
    } catch {
      showError(t("login.loginFailed"));
    }
  };
};
