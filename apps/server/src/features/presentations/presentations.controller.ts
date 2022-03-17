import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

import { CreatePresentationDto } from "./dto/create-presentation.dto";
import { UpdatePresentationDto } from "./dto/update-presentation.dto";
import { PresentationEntity } from "./entities/presentation.entity";
import { PresentationsService } from "./presentations.service";

@Controller("presentations")
@ApiTags("presentations")
export class PresentationsController {
  constructor(private readonly presentationsService: PresentationsService) {}

  @Post()
  @ApiResponse({ status: 201, type: PresentationEntity })
  async create(@Body() createPresentationDto: CreatePresentationDto) {
    return new PresentationEntity(await this.presentationsService.create(createPresentationDto));
  }

  @Get()
  @ApiOkResponse({ type: [PresentationEntity] })
  async findAll() {
    const presentation = await this.presentationsService.findAll();

    return presentation.map(item => new PresentationEntity(item));
  }

  @Get(":id")
  @ApiOkResponse({ type: PresentationEntity })
  async findOne(@Param("id") id: string) {
    const searched = await this.presentationsService.findOne(id);

    return searched ? new PresentationEntity(searched) : null;
  }

  @Patch(":id")
  @ApiOkResponse({ type: PresentationEntity })
  async update(@Param("id") id: string, @Body() updatePresentationDto: UpdatePresentationDto) {
    return new PresentationEntity(await this.presentationsService.update(id, updatePresentationDto));
  }

  @Delete(":id")
  @ApiOkResponse({ type: PresentationEntity })
  async remove(@Param("id") id: string) {
    return new PresentationEntity(await this.presentationsService.remove(id));
  }
}
