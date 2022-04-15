import { FirebaseAuthProvider } from "../../types";
import { useGoogleSignIn } from "./index";

export const useSignInProvider = () => {
  const googleSignIn = useGoogleSignIn();

  const signInProviders = {
    [FirebaseAuthProvider.Google]: googleSignIn
  };

  const getSignInProvider = (providerName: FirebaseAuthProvider) => signInProviders[providerName];

  return getSignInProvider;
};
