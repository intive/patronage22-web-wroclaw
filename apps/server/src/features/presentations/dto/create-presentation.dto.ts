import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsEnum, IsOptional, IsString, IsUrl, IsUUID, Min, MinLength } from "class-validator";

import { QuestionDto } from "./question.dto";

enum PresentationType {
  Open,
  Closed
}

export class CreatePresentationDto {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  uuid: string;

  @Min(30)
  @ApiProperty()
  timer: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  title: string;

  @IsString()
  @IsEnum(PresentationType)
  @ApiProperty()
  type: string;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  link: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  questions: QuestionDto[];
}
