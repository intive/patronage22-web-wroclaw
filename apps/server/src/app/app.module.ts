import { Module } from "@nestjs/common";

import { PrismaService } from "../features/prisma/prisma.service";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
