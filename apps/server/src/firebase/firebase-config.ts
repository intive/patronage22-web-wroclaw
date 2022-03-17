import { env } from "process";

const firebaseConfig = {
  clientEmail: env.FIREBASE_CLIENT_EMAIL,
  projectId: env.FIREBASE_PROJECT_ID,
  privateKey: env.FIREBASE_PRIVATE_KEY
};

export default firebaseConfig;
