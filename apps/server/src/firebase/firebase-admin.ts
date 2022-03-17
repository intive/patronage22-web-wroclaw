import { Injectable } from "@nestjs/common";
import { Request } from "express";
import * as firebase from "firebase-admin";

import firebaseConfig from "./firebase-config";

@Injectable()
export class FirebaseAdmin {
  private firebaseApp: firebase.app.App;

  constructor() {
    this.firebaseApp = firebase.initializeApp({
      credential: firebase.credential.cert({ ...firebaseConfig })
    });
  }

  getAuth = (): firebase.auth.Auth => {
    return this.firebaseApp.auth();
  };

  firestore = (): firebase.firestore.Firestore => {
    return this.firebaseApp.firestore();
  };
}

export interface IGetUserAuthInfoRequest extends Request {
  user: {
    email?: string;
    roles: [];
    type: string;
  };
}
