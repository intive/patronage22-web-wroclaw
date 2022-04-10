import { onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { finishAuth, login, logout, startAuth, userData as mockedUserData } from "../../data";
import { useNotification } from "../../hooks";
import { BaseRoute, FirebaseAuthProvider, TranslationNamespace } from "../../types";
import { createPath, verifyAuth } from "../../utils";
import { firebaseAuth, useGoogleSignIn } from "./index";

const SIGN_IN_PROVIDER = "signInProvider";

export const useFirebaseService = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation(TranslationNamespace.Common);
  const navigate = useNavigate();
  const { showError } = useNotification();
  const googleSignIn = useGoogleSignIn();

  const signInProvider = localStorage.getItem(SIGN_IN_PROVIDER) as FirebaseAuthProvider;

  const signInProviders = {
    [FirebaseAuthProvider.Google]: googleSignIn
  };

  const handleLoginSuccess = () => {
    // TODO move to redux thunk when react first router will be ready
    navigate(createPath({ route: BaseRoute.Home, language: i18n.language }));
  };

  const signIn = async (providerName: FirebaseAuthProvider) => {
    try {
      dispatch(startAuth());

      if (!verifyAuth()) {
        dispatch(login(mockedUserData));
        handleLoginSuccess();
        return;
      }

      await signInProviders[providerName]();
      localStorage.setItem(SIGN_IN_PROVIDER, providerName);
      handleLoginSuccess();
    } catch (error) {
      showError(t("login.loginFailed"));
    } finally {
      dispatch(finishAuth());
    }
  };

  const checkAuth = async () => {
    try {
      dispatch(startAuth());

      if (!verifyAuth()) {
        dispatch(login(mockedUserData));
        return;
      }

      if (!signInProvider) return;

      onAuthStateChanged(firebaseAuth, async user => {
        const accessToken = await user?.getIdToken();

        if (!user?.email || !accessToken) return;

        dispatch(login({ accessToken, userLogin: user.email }));
      });
    } finally {
      dispatch(finishAuth());
    }
  };

  const signOut = async () => {
    try {
      if (!verifyAuth()) {
        dispatch(logout());
        return;
      }

      await firebaseAuth.signOut();
      dispatch(logout());
      localStorage.removeItem(SIGN_IN_PROVIDER);
    } catch (error) {
      showError(t("logoutFail"));
    } finally {
      dispatch(finishAuth());
    }
  };

  return { signIn, signOut, checkAuth };
};
