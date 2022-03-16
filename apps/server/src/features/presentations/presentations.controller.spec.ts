import { Test, TestingModule } from "@nestjs/testing";

import { PresentationsController } from "./presentations.controller";
import { PresentationsService } from "./presentations.service";

describe("PresentationsController", () => {
  let controller: PresentationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresentationsController],
      providers: [PresentationsService]
    }).compile();

    controller = module.get<PresentationsController>(PresentationsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
