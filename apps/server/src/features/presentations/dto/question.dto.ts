import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsNumber, IsOptional, IsString, IsUUID, MinLength } from "class-validator";

import { AnswerDto } from "./answer.dto";

export class QuestionDto {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  uuid: string;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  title: string;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  currentTime: Date;

  @IsNumber()
  @ApiProperty()
  maxAnswerTime: number;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  startTime: Date;

  @ApiProperty()
  type: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  answers: AnswerDto[];
}
