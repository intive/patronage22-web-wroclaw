import { ApiProperty } from "@nestjs/swagger";

import { AnswerDto } from "./answer.dto";

export class QuestionDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  currentTime: Date;

  @ApiProperty()
  maxAnswerTime: number;

  @ApiProperty()
  startTime?: Date;

  @ApiProperty()
  type: string;

  @ApiProperty()
  answers: AnswerDto[];
}
