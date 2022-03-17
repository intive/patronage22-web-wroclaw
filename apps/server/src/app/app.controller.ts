import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getData().message;
  }

  // eslint-disable-next-line class-methods-use-this
  @Get("/secure/ping")
  async securePing(): Promise<string> {
    return "pong";
  }

  // eslint-disable-next-line class-methods-use-this
  @Get("/ping")
  async checkPing(): Promise<string> {
    return "pong";
  }
}
