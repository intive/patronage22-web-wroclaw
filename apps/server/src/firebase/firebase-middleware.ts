import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";
import * as firebase from "firebase-admin";

import { FirebaseAdmin, IGetUserAuthInfoRequest } from "./firebase-admin";

@Injectable()
export class PreAuthMiddleware implements NestMiddleware {
  private auth: firebase.auth.Auth;

  constructor(private firebaseApp: FirebaseAdmin) {
    this.auth = firebaseApp.getAuth();
  }

  use(req: IGetUserAuthInfoRequest, res: Response, next: () => void) {
    const token = req.headers.authorization;
    if (token != null && token !== "") {
      this.auth
        .verifyIdToken(token.replace("Bearer ", ""))
        .then(async decodedToken => {
          req.user = {
            email: decodedToken.email,
            roles: decodedToken.roles || [],
            type: decodedToken.type
          };
          next();
        })
        .catch(() => {
          PreAuthMiddleware.accessDenied(req.url, res);
        });
    } else {
      PreAuthMiddleware.accessDenied(req.url, res);
    }
  }

  private static accessDenied(url: string, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: url,
      message: "access denied"
    });
  }
}
