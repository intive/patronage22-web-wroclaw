import { Module } from "@nestjs/common";

import { PresentationsController } from "./presentations.controller";
import { PresentationsService } from "./presentations.service";

@Module({
  controllers: [PresentationsController],
  providers: [PresentationsService]
})
export class PresentationsModule {}
