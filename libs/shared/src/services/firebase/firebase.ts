import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { FIREBASE_CONFIG } from "../../configs";

export const firebaseInstance = initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = getAuth(firebaseInstance);
