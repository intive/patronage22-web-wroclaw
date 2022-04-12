import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { firebaseConfig } from "../../configs";

export const firebaseInstance = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseInstance);
