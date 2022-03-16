import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";
import { CreatePresentationDto } from "./dto/create-presentation.dto";
import { UpdatePresentationDto } from "./dto/update-presentation.dto";

@Injectable()
export class PresentationsService {
  constructor(private prisma: PrismaService) {}

  create(createPresentationDto: CreatePresentationDto) {
    return this.prisma.presentation.create({ data: createPresentationDto });
  }

  findAll() {
    return this.prisma.presentation.findMany();
  }

  findOne(id: string) {
    return this.prisma.presentation.findUnique({ where: { uuid: id } });
  }

  update(id: string, updatePresentationDto: UpdatePresentationDto) {
    return this.prisma.presentation.update({
      where: { uuid: id },
      data: updatePresentationDto
    });
  }

  remove(id: string) {
    return this.prisma.presentation.delete({ where: { uuid: id } });
  }
}
