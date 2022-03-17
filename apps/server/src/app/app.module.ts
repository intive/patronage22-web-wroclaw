import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";

import { PresentationsController } from "../features/presentations/presentations.controller";
import { PresentationsService } from "../features/presentations/presentations.service";
import { PrismaService } from "../features/prisma/prisma.service";
import { FirebaseAdmin } from "../firebase/firebase-admin";
import { PreAuthMiddleware } from "../firebase/firebase-middleware";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController, PresentationsController],
  providers: [AppService, PrismaService, PresentationsService, FirebaseAdmin]
})
export class AppModule implements NestModule {
  // eslint-disable-next-line class-methods-use-this
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(PreAuthMiddleware)
      .exclude({
        path: "/secure/*",
        method: RequestMethod.GET
      })
      .forRoutes(AppController);
  }
}
