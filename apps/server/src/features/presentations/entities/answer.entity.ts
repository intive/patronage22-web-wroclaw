import { ApiProperty } from "@nestjs/swagger";
import { Answer } from "@prisma/client";
import { Transform } from "class-transformer";

export class AnswerEntity implements Answer {
  @Transform(({ value }) => value.toNumber())
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  counter: number;

  @ApiProperty()
  questionId: number;

  constructor(partial: Partial<AnswerEntity>) {
    Object.assign(this, partial);
  }
}
