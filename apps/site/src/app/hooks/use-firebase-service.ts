import { BaseRoute, createPath, ROUTES, SignInProvider, TranslationNamespace, useNotification } from "@patronage-web/shared";
import { loginUser, logoutUser, startLoading, stopLoading, userData } from "@patronage-web/shared-data";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { environment } from "../../environments/environment";
import { FIREBASE_CONFIG } from "../configs";

export enum ErrorEnum {
  Login = "login-failed"
}

const SIGN_IN_PROVIDER = "signInProvider";

export const useFirebaseService = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation(TranslationNamespace.Common);
  const navigate = useNavigate();
  const location = useLocation();
  const { showFail } = useNotification();

  const appInit = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(appInit);

  const signInProvider = localStorage.getItem(SIGN_IN_PROVIDER) as SignInProvider;

  const onLoginSuccess = () => {
    // TODO move to redux thunk when react first router will be ready
    if (location.pathname === ROUTES[BaseRoute.Login]) {
      navigate(createPath({ route: BaseRoute.Home, language: i18n.language }));
    }
  };

  const onLoginFail = () => showFail(t("login.loginFailed"));

  const onLogoutFail = () => showFail(t("logoutFail"));

  const beginLoading = () => dispatch(startLoading());

  const finishLoading = () => dispatch(stopLoading());

  const mockedSignIn = () => {
    dispatch(loginUser(userData));
    onLoginSuccess();
  };

  const googleSignIn = async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    const accessToken = await data?.user?.getIdToken();

    if (!accessToken || !data?.user?.email) {
      throw Error(ErrorEnum.Login);
    }

    dispatch(loginUser({ accessToken, user: { login: data.user.email } }));
    onLoginSuccess();
  };

  const checkGoogleAuth = async () => {
    onAuthStateChanged(auth, async user => {
      const accessToken = await user?.getIdToken();

      if (!user?.email || !accessToken) {
        throw Error(ErrorEnum.Login);
      }

      dispatch(loginUser({ accessToken, user: { login: user.email } }));
      onLoginSuccess();
    });
  };

  const googleSignOut = async () => {
    await auth.signOut();
  };

  const signIn = async (providerName: SignInProvider) => {
    beginLoading();
    if (!environment.AUTH_ENABLED) {
      mockedSignIn();
      return;
    }

    const signInProviders = {
      [SignInProvider.Google]: googleSignIn
    };

    try {
      await signInProviders[providerName]();
      localStorage.setItem(SIGN_IN_PROVIDER, providerName);
    } catch (error) {
      onLoginFail();
      finishLoading();
    }
  };

  const checkAuth = async () => {
    beginLoading();
    if (!environment.AUTH_ENABLED) {
      mockedSignIn();
      return;
    }

    if (!signInProvider) {
      finishLoading();
      return;
    }

    const checkAuthProviders = {
      [SignInProvider.Google]: checkGoogleAuth
    };

    try {
      await checkAuthProviders[signInProvider]();
    } catch (error) {
      finishLoading();
    }
  };

  const signOut = async () => {
    const signOutProviders = {
      [SignInProvider.Google]: googleSignOut
    };

    try {
      if (environment.AUTH_ENABLED) {
        await signOutProviders[signInProvider]();
      }

      dispatch(logoutUser());
      localStorage.removeItem(SIGN_IN_PROVIDER);
    } catch (error) {
      onLogoutFail();
      finishLoading();
    }
  };

  return { signIn, signOut, checkAuth };
};
