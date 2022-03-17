import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID, MinLength } from "class-validator";

export class AnswerDto {
  @IsUUID()
  @ApiProperty()
  uuid: string;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  title: string;

  @IsNumber()
  @ApiProperty()
  counter: number;

  @IsNumber()
  @ApiProperty()
  questionId: number;
}
