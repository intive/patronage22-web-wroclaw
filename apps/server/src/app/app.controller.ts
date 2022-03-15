import { Controller, Get } from "@nestjs/common";

import { PrismaService } from "../features/prisma/prisma.service";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private prisma: PrismaService) {}

  @Get()
  getHello(): string {
    return this.appService.getData().message;
  }

  @Get("presentations")
  findPublishedPresentations() {
    return this.prisma.presentation.findMany();
  }
}
