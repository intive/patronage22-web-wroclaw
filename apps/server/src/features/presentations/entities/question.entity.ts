import { ApiProperty } from "@nestjs/swagger";
import { Question } from "@prisma/client";
import { Transform } from "class-transformer";

import { AnswerEntity } from "./answer.entity";

export class QuestionEntity implements Question {
  @Transform(({ value }) => value.toNumber())
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  currentTime: Date;

  @ApiProperty()
  maxAnswerTime: number;

  @ApiProperty({ required: false })
  startTime: Date;

  @ApiProperty()
  type: string;

  @ApiProperty()
  answers: AnswerEntity[];

  presentationId: number;

  constructor(partial: Partial<QuestionEntity>) {
    Object.assign(this, partial);
  }
}
