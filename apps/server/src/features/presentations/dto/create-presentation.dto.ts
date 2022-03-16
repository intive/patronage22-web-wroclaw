import { ApiProperty } from "@nestjs/swagger";

import { QuestionDto } from "./question.dto";

export class CreatePresentationDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  timer: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  questions: QuestionDto[];
}
