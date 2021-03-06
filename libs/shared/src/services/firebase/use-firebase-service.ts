import { onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { finishAuth, login, logout, startAuth, userData as mockedUserData } from "../../data";
import { useNotification } from "../../hooks";
import { BaseRoute, FirebaseAuthProvider, ROUTES, TranslationNamespace } from "../../types";
import { createPath, verifyAuth } from "../../utils";
import { firebaseAuth, useSignInProvider } from "./index";

export const useFirebaseService = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation(TranslationNamespace.Common);
  const navigate = useNavigate();
  const { showError } = useNotification();
  const getSignInProvider = useSignInProvider();

  const isAuthorized = verifyAuth();

  const handleLoginSuccess = () => {
    // TODO move to redux thunk when react first router will be ready
    navigate(createPath({ route: BaseRoute.Home, language: i18n.language }));
  };

  const handleLogoutRedirect = () => {
    // TODO replace logic when login functionality will be ready
    navigate(createPath({ route: BaseRoute.Login, language: i18n.language }));
  };

  const handleRedirectLoggedUser = () => {
    if (location.pathname === ROUTES.login) {
      handleLoginSuccess();
    }
  };

  const signIn = async (providerName: FirebaseAuthProvider) => {
    try {
      dispatch(startAuth());

      if (!isAuthorized) {
        dispatch(login(mockedUserData));
        // TODO replace when react first router will be ready
        handleLoginSuccess();
        return;
      }

      await getSignInProvider(providerName)();
      // TODO replace when react first router will be ready
      handleLoginSuccess();
    } catch {
      showError(t("login.loginFailed"));
    } finally {
      dispatch(finishAuth());
    }
  };

  const checkAuth = async () => {
    try {
      if (!isAuthorized) {
        dispatch(login(mockedUserData));
        handleRedirectLoggedUser();
        return;
      }

      dispatch(startAuth());

      onAuthStateChanged(firebaseAuth, async user => {
        const accessToken = await user?.getIdToken();

        if (!user?.email || !accessToken) return;

        dispatch(login({ accessToken, userLogin: user.email }));
        handleRedirectLoggedUser();
      });
    } catch {
      showError(t("login.authFailed"));
    } finally {
      dispatch(finishAuth());
    }
  };

  const signOut = async () => {
    try {
      if (!isAuthorized) {
        dispatch(logout());
        handleLogoutRedirect();
        return;
      }

      await firebaseAuth.signOut();
      dispatch(logout());
      handleLogoutRedirect();
    } catch {
      showError(t("login.logoutFail"));
    } finally {
      dispatch(finishAuth());
    }
  };

  return { signIn, signOut, checkAuth };
};
