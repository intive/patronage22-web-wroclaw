import { ApiProperty } from "@nestjs/swagger";
import { Presentation, Prisma } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsUUID } from "class-validator";

import { QuestionEntity } from "./question.entity";

export class PresentationEntity implements Presentation {
  @Transform(({ value }) => value.toNumber())
  @ApiProperty({ type: Number })
  id: number;

  @IsUUID()
  @ApiProperty()
  uuid: string;

  @Transform(({ value }) => value.toNumber())
  @ApiProperty({ type: Number })
  timer: Prisma.Decimal;

  @ApiProperty()
  title: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false })
  description: string | null;

  @ApiProperty({ required: false })
  link: string | null;

  @ApiProperty()
  questions: QuestionEntity[];

  @ApiProperty({ required: false })
  startTime: Date | null;

  @Transform(({ value }) => Date.now())
  @ApiProperty({ required: false })
  currentTime: Date;

  constructor(partial: Partial<PresentationEntity>) {
    Object.assign(this, partial);
  }
}
