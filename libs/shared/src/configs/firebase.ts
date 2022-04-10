import { verifyAuth } from "../utils";

const apiKey = verifyAuth() ? process.env.NX_FIREBASE_API_KEY : "sample-api-key";
const authDomain = verifyAuth() ? process.env.NX_FIREBASE_AUTH_DOMAIN : "sample-auth-domain";

export const FIREBASE_CONFIG = {
  apiKey,
  authDomain
};
