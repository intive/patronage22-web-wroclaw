import { Module } from "@nestjs/common";

import { PresentationsController } from "../features/presentations/presentations.controller";
import { PresentationsService } from "../features/presentations/presentations.service";
import { PrismaService } from "../features/prisma/prisma.service";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController, PresentationsController],
  providers: [AppService, PrismaService, PresentationsService]
})
export class AppModule {}
