import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreatePresentationDto } from "./dto/create-presentation.dto";
import { UpdatePresentationDto } from "./dto/update-presentation.dto";
import { PresentationsService } from "./presentations.service";

@Controller("presentations")
@ApiTags("presentations")
export class PresentationsController {
  constructor(private readonly presentationsService: PresentationsService) {}

  @Post()
  create(@Body() createPresentationDto: CreatePresentationDto) {
    return this.presentationsService.create(createPresentationDto);
  }

  @Get()
  findAll() {
    return this.presentationsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.presentationsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePresentationDto: UpdatePresentationDto) {
    return this.presentationsService.update(id, updatePresentationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.presentationsService.remove(id);
  }
}
