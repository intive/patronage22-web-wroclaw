import { verifyAuth } from "../utils";

const getApiKey = () => (verifyAuth() ? process.env.NX_FIREBASE_API_KEY : "mocked-api-key");
const getAuthDomain = () => (verifyAuth() ? process.env.NX_FIREBASE_AUTH_DOMAIN : "mocked-auth-domain");

export const firebaseConfig = {
  apiKey: getApiKey(),
  authDomain: getAuthDomain()
};
